import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements AfterViewInit {
  code: any = ""
  liste: any;
  @ViewChild('code_ref') code_ref: any = ElementRef;
  constructor(private router: Router) {
    this.liste = JSON.parse(localStorage.getItem("liste") + "")
  }
  goto() {
    this.router.navigate(["admin"])
  }

  ngAfterViewInit(): void {
    this.code_ref.focus();
    this.liste = JSON.parse(localStorage.getItem("liste") + "")
    if (this.liste == undefined) { this.liste = [] }

  }
  obj: any = {};
  test(event: any) {

    if (event.key == "Enter") {
      this.obj = {}
      let msgcode = this.code
      this.code = ""
      if (msgcode == "admin") {
        this.router.navigate(["admin"])

      }
      else {

        let oui = false
        for (let i = 0; i < this.liste.length; i++) {
          if (this.liste[i].code_Barre == msgcode) {
            oui = true
            this.obj = this.liste[i]
          }

        }
        if (oui == true) {
          Swal.fire({
            title: Number(this.obj.prix_vente).toFixed(3) + " DT",
            text: 'produit : ' + this.obj.nom,
            imageWidth: 600,
            imageHeight: 400,

          })
        }
        else {
          Swal.fire({
            title: 'Erreur ',
            text: 'Vérifier ',
            icon: 'warning',
            confirmButtonText: 'ok',

          })
        }

      }
    }
  }
}
