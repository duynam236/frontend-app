import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../service/api.service';
import { CndialogComponent } from './cndialog/cndialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-chungnhan',
  templateUrl: './chungnhan.component.html',
  styleUrls: ['./chungnhan.component.scss'],
})
export class ChungnhanComponent implements OnInit {
  constructor(private cndialog: MatDialog, private api: ApiService) {}

  displayedColumns: string[] = [
    'id',
    'ngayCap',
    'ngayHetHan',
    'coSo.loaiHinh',
    'coSo.sdt',
    'hieuLuc',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllChungNhan();
  }

  opencnDialog() {
    this.cndialog
      .open(CndialogComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Save') {
          this.getAllChungNhan();
        }
      });
  }

  getAllChungNhan() {
    this.api.getChungNhan().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Lỗi khi lấy danh sách chứng nhận');
      },
    });
  }

  editChungNhan(row: any) {
    this.cndialog
      .open(CndialogComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Update') {
          this.getAllChungNhan();
        }
      });
  }

  deleteChungNhan(id: number) {
    this.api.deleteChungNhan(id).subscribe({
      next: (res) => {
        alert('deleted chung Nhan thành công');
        this.getAllChungNhan();
      },
      error: () => {
        alert('Lỗi Khi xóa chứng nhạn thanh tra');
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
