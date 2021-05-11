import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ModalverMas',
  templateUrl: './modalver-mas.component.html',
  styleUrls: ['./modalver-mas.component.css'],
})
export class ModalverMasComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ModalverMasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string; name: string; fechaEntrega: string }
  ) { }

  ngOnInit(): void { }

  close(): void {
    this.dialogRef.close();
  }
}
