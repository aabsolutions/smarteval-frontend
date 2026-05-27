import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // Mixin para Toast en la esquina superior derecha
  private Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  constructor() { }

  /**
   * Muestra un Toast de éxito en la esquina superior derecha.
   * Útil para guardado de datos, alta de usuarios, etc.
   */
  successToast(title: string) {
    this.Toast.fire({
      icon: 'success',
      title: title
    });
  }

  /**
   * Muestra un Toast de error en la esquina superior derecha.
   */
  errorToast(title: string) {
    this.Toast.fire({
      icon: 'error',
      title: title
    });
  }

  /**
   * Muestra un Modal de Error centrado.
   * Útil para mostrar detalles del error devuelto por la API.
   */
  errorAlert(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#d33'
    });
  }

  /**
   * Muestra un Modal de Confirmación antes de eliminar.
   * Retorna una Promesa booleana (true si el usuario confirma).
   */
  confirmDelete(itemName: string): Promise<boolean> {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: `Se eliminará: ${itemName}. Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      return result.isConfirmed;
    });
  }

  /**
   * Muestra un Modal de Confirmación para acciones generales.
   * Retorna una Promesa booleana (true si el usuario confirma).
   */
  confirmAction(title: string, text: string, confirmButtonText: string = 'Sí, continuar'): Promise<boolean> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      return result.isConfirmed;
    });
  }
}
