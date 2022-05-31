import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ttdialog',
  templateUrl: './ttdialog.component.html',
  styleUrls: ['./ttdialog.component.scss'],
})
export class TtdialogComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<TtdialogComponent>
  ) {}

  thanhtraForm!: FormGroup;
  actionBTN: string = 'Save';

  ngOnInit(): void {
    this.thanhtraForm = this.formbuilder.group({
      ngayBatDau: ['', Validators.required],
      ngayKetThuc: ['', Validators.required],
      coSoId: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBTN = 'Update';
      this.thanhtraForm.controls['ngayBatDau'].setValue(
        this.editData.ngayBatDau
      );
      this.thanhtraForm.controls['ngayKetThuc'].setValue(
        this.editData.ngayKetThuc
      );
      this.thanhtraForm.controls['coSoId'].setValue(this.editData.coSoId);
    }
  }

  addThanhTra() {
    if (!this.editData) {
      if (this.thanhtraForm.valid) {
        this.api.postThanhTra(this.thanhtraForm.value).subscribe({
          next: (res) => {
            alert('Lên Kế Hoạch Thành Công');
            this.thanhtraForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Lỗi khi lên kế hoạch');
          },
        });
      }
    } else {
      this.updateThanhTra();
    }
  }

  updateThanhTra() {
    this.api.putThanhTra(this.thanhtraForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Update kế hoạch thanh tra thành công');
        this.thanhtraForm.reset();
        this.dialogRef.close('Update');
      },
      error: () => {
        alert('Lỗi khi update kế hoạch thanh tra');
      },
    });
  }
}
