import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users: any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.get(this.data.id)
  }
  getIndex(id) {
    var index = -1;
    for (var i = 0; i < this.data.users.length; i++) {
      if (this.data.users[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  }
  get(id) {
    var index = this.getIndex(id)
    this.users = this.data.users[index];
  }


  next(id) {
    this.users = [];
    var index = this.getIndex(id) + 1;
    if (index == (this.data.users.length)) {
      this.toastr.info("You Reached Last Record")
      this.users = this.data.users[index - 1];
    } else {
      this.users = this.data.users[index++];
    }
  }
  previous(id) {
    this.users = [];
    var index = this.getIndex(id) + 1;
    if (index == 1) {
      this.toastr.info("You Reached First Record")
      this.users = this.data.users[index - 1];
    } else {
      this.users = this.data.users[index - 2];
    }
  }

}
