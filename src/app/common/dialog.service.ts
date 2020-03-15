import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog : MatDialog) { }

  openConfirmDialog(msg){
    return this.dialog.open(ConfirmDialogComponent, {
      width : '400px',
      position: {top: '230px'},
      disableClose: false,
      data : {
        message : msg
      }
    });
  }
}
