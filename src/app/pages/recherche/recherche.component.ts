import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }
  list() {
    this.router.navigate(['create']);
  }
  cat() {
    this.router.navigate(['Cat']);
  }
  recherche() {
    this.router.navigate(['recherche']);
  }
  vente() {
    this.router.navigate(['vente']);
  }
  retour() {
    this.router.navigate(['article']);
  }

}
