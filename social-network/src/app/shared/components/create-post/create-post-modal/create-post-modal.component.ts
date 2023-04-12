import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { createInjectableType } from '@angular/compiler';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs';


@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss']
})
export class CreatePostModalComponent implements OnInit {

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  private selectedFile!: File;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CreatePostModalComponent>, private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onFileInput(event: any) {
    if(event.target.files) {
      // TODO: add alert if the uploaded file isn't a valid image
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
  }

  createPost(): void {
    // TODO: add service to send a post request with post entity from user
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
