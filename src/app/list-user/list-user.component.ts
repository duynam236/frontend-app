import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ApiService } from '../service/api.service';

import { ManageUserComponent } from './manage-user/manage-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  displayedColumns1: string[] = [
    'username',
    'password',
    'idDiaBan',
    'tenDiaBan',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}

  public openDialog() {
    this.dialog
      .open(ManageUserComponent, {
        width: '100%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Thêm người dùng') {
          this.getAllUser();
        }
      });
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  private getAllUser() {
    this.api.getUser().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Error');
      },
    });
  }

  public editUser(row: any) {
    this.dialog
      .open(ManageUserComponent, {
        width: '100%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Update') {
          this.getAllUser();
        }
      });
  }

  public deleteUser(username: string) {
    this.api.deleteUser(username).subscribe({
      next: (res) => {
        alert('Deleted succesfully');
        this.getAllUser();
      },
      error: (res) => {
        alert('Erorr while deleting');
      },
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
