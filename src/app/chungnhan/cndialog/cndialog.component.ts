import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cndialog',
  templateUrl: './cndialog.component.html',
  styleUrls: ['./cndialog.component.scss'],
})
export class CndialogComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<CndialogComponent>
  ) {}

  chungnhanForm!: FormGroup;
  actionBTN: string = 'Save';

  ngOnInit(): void {
    this.chungnhanForm = this.formbuilder.group({
      id: ['', Validators.required],
      ngayCap: ['', Validators.required],
      ngayHetHan: ['', Validators.required],
      hieuLuc: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBTN = 'Update';
      this.chungnhanForm.controls['coSoId'].setValue(this.editData.coSoId);
      this.chungnhanForm.controls['ngayCap'].setValue(this.editData.ngayCap);
      this.chungnhanForm.controls['ngayHetHan'].setValue(
        this.editData.ngayHetHan
      );
      this.chungnhanForm.controls['hieuLuc'].setValue(this.editData.hieuLuc);
    }
  }

  addChungNhan() {
    if (!this.editData) {
      if (this.chungnhanForm.valid) {
        this.api.postThanhTra(this.chungnhanForm.value).subscribe({
          next: (res) => {
            alert('Thêm Chứng Nhận Thành Công');
            this.chungnhanForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Lỗi khi thêm chứng nhận');
          },
        });
      }
    } else {
      this.updateChungNhan();
    }
  }

  updateChungNhan() {
    this.api.putThanhTra(this.chungnhanForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Update chứng nhận thành công');
        this.chungnhanForm.reset();
        this.dialogRef.close('Update');
      },
      error: () => {
        alert('Lỗi khi update chứng nhận');
      },
    });
  }
}
