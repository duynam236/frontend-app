import { User } from './../../models/users/user';
import { HuyenQuan } from './../../models/huyenQuan/huyen-quan';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  public formUser!: FormGroup;
  public actionBtn: string = 'Thêm Người Dùng';
  public listHuyenQuan!: HuyenQuan[];
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ManageUserComponent>
  ) {}

  private getListHuyenQuan() {
    this.api.getHuyenQuan().subscribe({
      next: (res) => {
        this.listHuyenQuan = res.data;
      },
      error: (err) => { },
    });
  }

  ngOnInit(): void {
    this.getListHuyenQuan();
    this.formUser = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      tenDiaBan: [''],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.formUser.controls['username'].setValue(this.editData.username);
      this.formUser.controls['password'].setValue(this.editData.password);
      this.formUser.controls['tenDiaBan'].setValue(this.editData.diaBan.ten);
    }
  }

  private getIdDiaBan(tenDiaBan: string): string {
    // const indexOfIdDiaBan = this.listHuyenQuan.indexOf()
    const diaBan = this.listHuyenQuan.find(function(ele) {
      return ele.ten === tenDiaBan;
    })
    if (diaBan?.id != undefined) {
      return diaBan?.id;
    } else return '';
  }

  public addUser() {
    if (!this.editData) {
      if (this.formUser.valid) {
        const newUser = {
          username: this.formUser.controls['username'].value,
          password: this.formUser.controls['password'].value,
          diaBan: {
            id: this.getIdDiaBan(this.formUser.controls['tenDiaBan'].value),
            ten: this.formUser.controls['tenDiaBan'].value,
          }
        }
        this.api.postUser(newUser).subscribe({
          next: (res) => {
            alert('Thêm người dùng thành công!');
            this.formUser.reset();
            this.dialogRef.close('Thêm người dùng');
            },
          error: () => {
            alert('ERROR');
          },
        });

      }
    } else {
      this.updateUser();
    }
    
  }

  private updateUser() {
    const updateUser = {
      username: this.formUser.controls['username'].value,
      password: this.formUser.controls['password'].value,
      diaBan: {
        id: this.getIdDiaBan(this.formUser.controls['tenDiaBan'].value),
        ten: this.formUser.controls['tenDiaBan'].value,
      }
    }
    this.user = updateUser;
    console.log(updateUser)
    this.api.putUser(updateUser, this.formUser.controls['username'].value).subscribe({
      next: (res) => {
        console.log(this.user)
        console.log(updateUser)
        console.log(this.formUser.controls['username'].value)
        alert('Update Successfully');
        this.formUser.reset();
        this.dialogRef.close('Update');
      },
      error: () => {
        alert('Erorr while updating');
      },
    });
    this.api.getUser().subscribe({
      next: (res) => {
        console.log(res.data)
      },
      error: (err) => { },
    });
  }
  private user!: User;
  public show() {
    console.log(this.formUser.controls['username'])
    console.log(this.formUser.controls['username'].value)
    console.log(this.formUser.controls['tenDiaBan'])
    console.log(this.formUser.controls['tenDiaBan'].value)
    console.log(this.getIdDiaBan(this.formUser.controls['tenDiaBan'].value))
    console.log(this.user)

  }

}
