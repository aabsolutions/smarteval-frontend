import { MatToolbarModule } from '@angular/material/toolbar';
import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, DOCUMENT, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConfigService } from '@config';
import {
  AuthService,
  InConfiguration,
  LanguageService,
  RightSidebarService,
  Role,
} from '@core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { LocalStorageService } from '@shared/services';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotificationListComponent } from '../components/notification-list/notification-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageListComponent } from '../components/language-list/language-list.component';
import { UserProfileMenuComponent } from '../components/user-profile-menu/user-profile-menu.component';
import { NotificationsService } from '../../core/service/notifications.service';

interface Notifications {
  id?: string;
  message: string;
  time: string;
  userImg?: string;
  actionLabel?: string;
  actionType?: string;
  icon?: string;
  color: string;
  status: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterLink,
    NgClass,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NotificationListComponent,
    MatMenuModule,
    LanguageListComponent,
    UserProfileMenuComponent,
  ],
})
export class HeaderComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);
  elementRef = inject(ElementRef);
  private rightSidebarService = inject(RightSidebarService);
  private configService = inject(ConfigService);
  private authService = inject(AuthService);
  private router = inject(Router);
  languageService = inject(LanguageService);
  private localStorageService = inject(LocalStorageService);
  private notificationsService = inject(NotificationsService);

  public config!: InConfiguration;
  userImg?: string;
  userName?: string;
  homePage?: string;
  institutionLogo: string = 'assets/images/logo.png';
  isNavbarCollapsed = true;
  flagvalue: string | string[] | undefined;
  countryName: string | string[] = [];
  langStoreValue?: string;
  defaultFlag?: string;
  isOpenSidebar?: boolean;
  docElement?: HTMLElement;
  isFullScreen = false;

  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.svg', lang: 'es' },
    { text: 'German', flag: 'assets/images/flags/germany.svg', lang: 'de' },
  ];
  notifications: Notifications[] = [];

  ngOnInit() {
    this.config = this.configService.configData;
    
    // Subscribe to user changes to dynamically update header
    this.subs.sink = this.authService.user$.subscribe(user => {
      if (user && Object.keys(user).length > 0) {
        this.userImg = user.avatar?.startsWith('http') 
          ? user.avatar 
          : './assets/images/user/' + (user.avatar || 'user.jpg');
        const u: any = user;
        this.userName = u['name'] || (u['firstName'] ? u['firstName'] + ' ' + u['lastName'] : 'User');
        
        if (u.institutionLogo) {
          this.institutionLogo = u.institutionLogo.startsWith('http') 
            ? u.institutionLogo 
            : `/uploads/${u.institutionLogo}`;
        } else {
          this.institutionLogo = 'assets/images/logo.png';
        }

        const userRole = user.roles?.[0]?.name;
        if (userRole === Role.Admin) {
          this.homePage = 'admin/dashboard/main';
        } else if (userRole === Role.Teacher) {
          this.homePage = 'teacher/dashboard';
        } else if (userRole === Role.Student) {
          this.homePage = 'student/dashboard';
        } else {
          this.homePage = 'admin/dashboard/main';
        }
      }
    });

    // Trigger initial emission if needed
    if (Object.keys(this.authService.currentUserValue).length > 0) {
      this.authService.user$.next(this.authService.currentUserValue);
    }

    this.docElement = document.documentElement;

    this.langStoreValue = this.localStorageService.get('lang') as string;
    const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.defaultFlag = 'assets/images/flags/us.svg';
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }

    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationsService.getNotifications().subscribe(data => {
      this.notifications = data.map(n => ({
        id: n._id,
        message: n.message,
        time: new Date(n.createdAt).toLocaleDateString(),
        icon: n.type === 'INFO' ? 'info' : (n.type === 'SUCCESS' ? 'check_circle' : 'warning'),
        color: n.type === 'INFO' ? 'notification-blue' : (n.type === 'SUCCESS' ? 'notification-green' : 'notification-red'),
        status: n.read ? 'msg-read' : 'msg-unread'
      }));
    });
  }

  onMarkAllNotificationsRead() {
    this.notificationsService.markAllAsRead().subscribe(() => {
      this.loadNotifications();
    });
  }

  onMarkNotificationRead(notification: Notifications) {
    if (notification.id) {
      this.notificationsService.markAsRead(notification.id).subscribe();
    }
  }

  onReadAllNotifications() {
    alert('Navigating to notifications page to read all'); // Replace with router if needed
  }

  onRemoveNotification(notification: Notifications) {
    this.notifications = this.notifications.filter((n) => n !== notification);
  }

  onNotificationActionClick(event: {
    notification: Notifications;
    actionType: string;
  }) {
    const { notification, actionType } = event;

    // Handle different action types
    switch (actionType) {
      case 'view':
        console.log('Viewing notification:', notification);
        // Implement view logic
        break;
      case 'profile':
        console.log('Opening profile from notification:', notification);
        // Implement profile navigation
        break;
      case 'reply':
        console.log('Replying to notification:', notification);
        // Implement reply logic
        break;
      case 'download':
        console.log('Downloading from notification:', notification);
        // Implement download logic
        break;
      case 'mark-important':
        console.log('Marking notification as important:', notification);
        // Implement importance marking
        break;
      default:
        console.log('Default action for notification:', notification);
    }
  }

  callFullscreen() {
    if (!this.isFullScreen) {
      if (this.docElement?.requestFullscreen != null) {
        this.docElement?.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
  }
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
    this.languageService.setLanguage(lang);
  }
  mobileMenuSidebarOpen(event: Event, className: string) {
    const hasClass = (event.target as HTMLInputElement).classList.contains(
      className
    );
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains('side-closed');
    if (hasClass) {
      this.renderer.removeClass(this.document.body, 'side-closed');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
      this.localStorageService.set('collapsed_menu', 'false');
    } else {
      this.renderer.addClass(this.document.body, 'side-closed');
      this.renderer.addClass(this.document.body, 'submenu-closed');
      this.localStorageService.set('collapsed_menu', 'true');
    }
  }
  logout() {
    this.subs.sink = this.authService.logout().subscribe((res) => {
      if (!res.success) {
        this.router.navigate(['/authentication/signin']);
      }
    });
  }

  onLanguageChange(item: { text: string; flag: string; lang: string }) {
    this.countryName = item.text;
    this.flagvalue = item.flag;
    this.langStoreValue = item.lang;
    this.languageService.setLanguage(item.lang);
    this.localStorageService.set('lang', item.lang);
  }

  onAccountClicked() {
    const userRole = this.authService.currentUserValue.roles?.[0]?.name;
    if (userRole === Role.Teacher) {
      this.router.navigate(['/teacher/profile']);
    } else if (userRole === Role.Student) {
      this.router.navigate(['/student/profile']);
    } else {
      this.router.navigate(['/admin/profile']);
    }
  }

  onInboxClicked() {
    this.router.navigate(['/email/inbox']);
  }

  onSettingsClicked() {
    this.router.navigate(['/extra-pages/faqs']);
  }
}
