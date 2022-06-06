import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  formcoso!: FormGroup;
  actionBtn: string = 'Thêm Cơ Sở';
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  quanHuyen: any = this.api.getQuanHuyen();

  ngOnInit(): void {
    this.formcoso = this.formbuilder.group({
      ten: ['', Validators.required],
      diaChi: ['', Validators.required],
      sdt: ['', Validators.required],
      loaiHinh: ['', Validators.required],
      huyenQuanId: ['', Validators.required],
      xaPhuongId: ['', Validators.required],
      chungNhanId: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.formcoso.controls['ten'].setValue(this.editData.ten);
      this.formcoso.controls['diaChi'].setValue(this.editData.diaChi);
      this.formcoso.controls['sdt'].setValue(this.editData.sdt);
      this.formcoso.controls['loaiHinh'].setValue(this.editData.loaiHinh);
      this.formcoso.controls['huyenQuanId'].setValue(this.editData.huyenQuanId);
      this.formcoso.controls['xaPhuongId'].setValue(this.editData.xaPhuongId);
      this.formcoso.controls['chungNhanId'].setValue(this.editData.chungNhanId);
    }
  }
  addCoSo() {
    if (!this.editData) {
      if (this.formcoso.valid) {
        this.api.postCoso(this.formcoso.value).subscribe({
          next: (res) => {
            alert('Thêm Cơ sở thành công');
            console.log(this.quanHuyen);
            this.formcoso.reset();
            this.dialogRef.close('Thêm Cơ Sở');
          },
          error: () => {
            alert('ERROR');
          },
        });
      }
    } else {
      this.updateCoso();
    }
  }

  updateCoso() {
    this.api.putCoso(this.formcoso.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Update Successfully');
        this.formcoso.reset();
        this.dialogRef.close('Update');
      },
      error: () => {
        alert('Erorr while updating');
      },
    });
  }
}
