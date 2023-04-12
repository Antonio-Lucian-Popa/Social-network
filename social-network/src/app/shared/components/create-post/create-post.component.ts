import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatePostModalComponent,
      {
        data: {},
        panelClass: "customDialog",
        width: '450px',
      }
      );
    dialogRef.afterClosed().subscribe();
  }

}
