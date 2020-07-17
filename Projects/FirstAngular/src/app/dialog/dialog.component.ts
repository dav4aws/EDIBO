import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{

  constructor(public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(this.DialogDataExampleLog, {
        data: {
          animal: 'panda'
        }
      });


}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleLog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
