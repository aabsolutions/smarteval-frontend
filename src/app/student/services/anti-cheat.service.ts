import { Injectable, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';

export interface AntiCheatEvent {
  type: string;
  timestamp: string;
  description: string;
}

export interface AntiCheatLog {
  events: AntiCheatEvent[];
  tabSwitches: number;
  fullscreenExits: number;
  copyPasteAttempts: number;
  devtoolsAttempts: number;
}

@Injectable({
  providedIn: 'root'
})
export class AntiCheatService implements OnDestroy {
  private log: AntiCheatLog = {
    events: [],
    tabSwitches: 0,
    fullscreenExits: 0,
    copyPasteAttempts: 0,
    devtoolsAttempts: 0
  };

  private isActive = false;
  private browserWindow: Window | null = null;
  private browserDocument: Document | null = null;

  // Bound handlers
  private visibilityHandler = this.onVisibilityChange.bind(this);
  private fullscreenHandler = this.onFullscreenChange.bind(this);
  private copyPasteHandler = this.onCopyPaste.bind(this);
  private contextMenuHandler = this.onContextMenu.bind(this);
  private resizeHandler = this.onResize.bind(this);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.browserWindow = window;
      this.browserDocument = document;
    }
  }

  start() {
    if (!this.browserDocument || !this.browserWindow || this.isActive) return;
    this.isActive = true;
    
    // Reset logs
    this.log = {
      events: [],
      tabSwitches: 0,
      fullscreenExits: 0,
      copyPasteAttempts: 0,
      devtoolsAttempts: 0
    };

    // Listeners
    this.browserDocument.addEventListener('visibilitychange', this.visibilityHandler);
    this.browserDocument.addEventListener('fullscreenchange', this.fullscreenHandler);
    this.browserDocument.addEventListener('webkitfullscreenchange', this.fullscreenHandler);
    this.browserDocument.addEventListener('mozfullscreenchange', this.fullscreenHandler);
    this.browserDocument.addEventListener('MSFullscreenChange', this.fullscreenHandler);
    
    this.browserDocument.addEventListener('copy', this.copyPasteHandler);
    this.browserDocument.addEventListener('paste', this.copyPasteHandler);
    this.browserDocument.addEventListener('cut', this.copyPasteHandler);
    this.browserDocument.addEventListener('contextmenu', this.contextMenuHandler);
    
    this.browserWindow.addEventListener('resize', this.resizeHandler);
  }

  stop() {
    if (!this.browserDocument || !this.browserWindow || !this.isActive) return;
    this.isActive = false;

    this.browserDocument.removeEventListener('visibilitychange', this.visibilityHandler);
    this.browserDocument.removeEventListener('fullscreenchange', this.fullscreenHandler);
    this.browserDocument.removeEventListener('webkitfullscreenchange', this.fullscreenHandler);
    this.browserDocument.removeEventListener('mozfullscreenchange', this.fullscreenHandler);
    this.browserDocument.removeEventListener('MSFullscreenChange', this.fullscreenHandler);
    
    this.browserDocument.removeEventListener('copy', this.copyPasteHandler);
    this.browserDocument.removeEventListener('paste', this.copyPasteHandler);
    this.browserDocument.removeEventListener('cut', this.copyPasteHandler);
    this.browserDocument.removeEventListener('contextmenu', this.contextMenuHandler);
    
    this.browserWindow.removeEventListener('resize', this.resizeHandler);
  }

  getLog(): AntiCheatLog {
    return { ...this.log };
  }

  requestFullscreen(): Promise<void> {
    if (!this.browserDocument || !this.browserDocument.documentElement.requestFullscreen) {
      return Promise.resolve();
    }
    return this.browserDocument.documentElement.requestFullscreen().catch(err => {
      console.warn(`Error attempting to enable fullscreen mode: ${err.message}`);
    });
  }

  private logEvent(type: string, description: string) {
    if (!this.isActive) return;
    this.log.events.push({
      type,
      timestamp: new Date().toISOString(),
      description
    });
    
    Swal.fire({
      icon: 'warning',
      title: '¡Falta Registrada!',
      text: description,
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#d33',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  private onVisibilityChange() {
    if (this.browserDocument?.visibilityState === 'hidden') {
      this.log.tabSwitches++;
      this.logEvent('tab_switch', 'Salió de la pestaña del examen.');
    }
  }

  private onFullscreenChange() {
    const isFullscreen = !!(
      this.browserDocument?.fullscreenElement || 
      (this.browserDocument as any).webkitFullscreenElement || 
      (this.browserDocument as any).mozFullScreenElement || 
      (this.browserDocument as any).msFullscreenElement
    );

    if (!isFullscreen && this.isActive) {
      this.log.fullscreenExits++;
      this.logEvent('fullscreen_exit', 'Salió del modo pantalla completa.');
    }
  }

  private onCopyPaste(e: Event) {
    e.preventDefault();
    this.log.copyPasteAttempts++;
    this.logEvent('copy_paste', 'Intentó copiar/pegar contenido.');
  }

  private onContextMenu(e: Event) {
    e.preventDefault();
    this.logEvent('right_click', 'Intentó usar el click derecho.');
  }

  private onResize() {
    // Basic devtools detection based on inner vs outer window size diff
    if (!this.browserWindow) return;
    const threshold = 160;
    if (
      this.browserWindow.outerWidth - this.browserWindow.innerWidth > threshold ||
      this.browserWindow.outerHeight - this.browserWindow.innerHeight > threshold
    ) {
      // Evitar spam de devtools
      const lastEvent = this.log.events[this.log.events.length - 1];
      if (!lastEvent || lastEvent.type !== 'devtools' || (new Date().getTime() - new Date(lastEvent.timestamp).getTime() > 10000)) {
        this.log.devtoolsAttempts++;
        this.logEvent('devtools', 'Posible apertura de herramientas de desarrollador o cambio drástico de tamaño de ventana.');
      }
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
