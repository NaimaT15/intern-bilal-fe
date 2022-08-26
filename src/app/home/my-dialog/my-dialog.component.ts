import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss'],
})
export class MyDialogComponent {
  public photos: any[] = [];
  private allData: any;
  selected: any;
  index: number = 0;
  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.allData = data;
    // console.log("allData : ",this.allData)
    this.photos = data.data;
    this.selected = data.selected;
    this.index = this.photos.findIndex((object) => {
      return object.id === this.selected.id;
    });
    // console.log("index : ",this.index);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getLink(link: any) {
    return link.photo_url;
  }
  nextClicked() {
    const length = this.photos.length;
    if (this.index > length - 1) {
      this.index = this.index + 1;
    } else {
      this.index = 0;
    }
    console.log("index ; ",this.index);
  }
  prevClicked() {
    const length = this.photos.length;
    if (this.index == 0) {
      this.index = length - 1;
    } else {
      this.index = this.index - 1;
    }
    console.log("index : ",this.index);
  }
}
