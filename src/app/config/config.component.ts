import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserColumns, User } from '../model/user';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent  {

  displayedColumns: string[] = UserColumns.map((col) => col.key);
  columnsSchema: any = UserColumns;
  dataSource = new MatTableDataSource<User>();
  valid: any = {};
liste:any;
  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.liste = JSON.parse(localStorage.getItem("liste") + "")
    if(this.liste==undefined){this.liste=[]}
  }

  refrech(){
     this.userService.getproduits().subscribe((data:any)=>{console.log(data)
      localStorage.setItem('liste', JSON.stringify(data));
      Swal.fire({
        icon: 'success',
        confirmButtonColor: 'green',         
        timer: 2000         
      }).then((result) => { })
    
    })
  }

}
