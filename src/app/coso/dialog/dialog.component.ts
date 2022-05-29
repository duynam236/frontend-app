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

  ngOnInit(): void {
    this.formcoso = this.formbuilder.group({
      tencoso: ['', Validators.required],
      diachi: ['', Validators.required],
      sdt: ['', Validators.required],
      loaihinh: ['', Validators.required],
      quanhuyen: ['', Validators.required],
      xaphuong: ['', Validators.required],
      chungnhan: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.formcoso.controls['tencoso'].setValue(this.editData.tencoso);
      this.formcoso.controls['diachi'].setValue(this.editData.diachi);
      this.formcoso.controls['sdt'].setValue(this.editData.sdt);
      this.formcoso.controls['loaihinh'].setValue(this.editData.loaihinh);
      this.formcoso.controls['quanhuyen'].setValue(this.editData.quanhuyen);
      this.formcoso.controls['xaphuong'].setValue(this.editData.xaphuong);
      this.formcoso.controls['chungnhan'].setValue(this.editData.chungnhan);
    }
  }
  addCoSo() {
    if (!this.editData) {
      if (this.formcoso.valid) {
        this.api.postCoso(this.formcoso.value).subscribe({
          next: (res) => {
            alert('Thêm Cơ sở thành công');
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
