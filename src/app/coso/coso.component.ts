import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../service/api.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-coso',
  templateUrl: './coso.component.html',
  styleUrls: ['./coso.component.scss'],
})
export class CosoComponent {
  displayedColumns: string[] = [
    'id',
    'ten',
    'diaChi',
    'sdt',
    'loaiHinh',
    'huyenQuan.ten',
    'xaPhuong.ten',
    'chungNhan.hieuLuc',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}

  openDialog() {
    this.dialog
      .open(DialogComponent, {
        width: '40%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Thêm cơ sở') {
          this.getAllCoso();
        }
      });
  }

  ngOnInit(): void {
    this.getAllCoso();
  }

  getAllCoso() {
    this.api.getCoso().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.data);
        console.log(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Error');
      },
    });
    console.log(this.dataSource)
  }

  editCoso(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '40%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Update') {
          this.getAllCoso();
        }
      });
  }

  deleteCoso(id: number) {
    this.api.deleteCoso(id).subscribe({
      next: (res) => {
        alert('Deleted succesfully');
        this.getAllCoso();
      },
      error: (res) => {
        alert('Erorr while deleting');
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
