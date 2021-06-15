import { UserDetailsComponent } from './../user-details/user-details.component';
import { GrootService } from './../../service/groot.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns = ['Action', 'sno', 'name', 'age', 'dob'];
  users = [];
  noData: boolean;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private service: GrootService,
    public dialog: MatDialog,
    private localst: LocalStorageService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.noData = true;
    if (this.localst.retrieve('log-on') == true) {
      this.list();
    }
    else {
      this.toastr.error("Please Login to continue");
      this.router.navigate(['/login']);
    }
  }
  list() {
    this.service.users().subscribe((data: any) => {
      if (data) {
        if (data.length > 0) {
          this.noData = false;
          this.users = data;
          this.dataSource.data = this.users;
        }
      }

    });

  }
  viewRecord(id) {
    this.dialog.open(UserDetailsComponent, {
      data: {
        id: id,
        users: this.users
      },
      panelClass: "dialog-responsive"
    }
    );
  }
  logout() {
    this.localst.clear();
    this.toastr.success("Logout Successfully");
    this.router.navigate(["/login"]);
  }

}





