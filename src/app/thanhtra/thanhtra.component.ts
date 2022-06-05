import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../service/api.service';
import { TtdialogComponent } from './ttdialog/ttdialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-thanhtra',
  templateUrl: './thanhtra.component.html',
  styleUrls: ['./thanhtra.component.scss'],
})
export class ThanhtraComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'ngayBatDau',
    'ngayKetThuc',
    'coSo.ten',
    'coSo.diaChi',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ttdialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.getAllThanhTra();
  }
  openttDialog() {
    this.ttdialog
      .open(TtdialogComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Save') {
          this.getAllThanhTra();
        }
      });
  }

  getAllThanhTra() {
    this.api.getThanhTra().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Lỗi khi lấy danh sách thanh tra');
      },
    });
  }

  editThanhTra(row: any) {
    this.ttdialog
      .open(TtdialogComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Update') {
          this.getAllThanhTra();
        }
      });
  }

  deleteThanhTra(id: number) {
    this.api.deleteThanhTra(id).subscribe({
      next: (res) => {
        alert('deleted kế hoạch tranh tra thành công');
        this.getAllThanhTra();
      },
      error: () => {
        alert('Lỗi Khi xóa kế hoạch thanh tra');
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
