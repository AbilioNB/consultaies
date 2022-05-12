import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import {empty, Observable, Subject} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { environment  } from '../environments/environment';
import { University } from '../interfaces/university';
import { Course } from '../interfaces/course';

const IES_API = environment.IES_API;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = false;
  noDataFound = false;
  iesSeleted = false;
  title = 'consultaies';
  myControl = new FormControl();
  universitySeleted: University = {
    "id_censo_ies": 1,
    "no_regiao_ies": "Norte",
    "co_regiao_ies": 1,
    "no_uf_ies": "Rondônia",
    "sg_uf_ies": "RO",
    "co_uf_ies": 11,
    "no_municipio_ies": "Ariquemes",
    "co_municipio_ies": 1100023,
    "tp_organizacao_academica": 3,
    "tp_categoria_administrativa": 5,
    "co_ies": 1540,
    "no_ies": "INSTITUTO DE ENSINO SUPERIOR DE RONDÔNIA",
    "sg_ies": "IESUR",
    "qt_docente_total": 54,
    "qt_docente_exe": 54,
    "doc_ex_femi": 29,
    "doc_ex_masc": 25,
    "doc_ex_sem_grad": 0,
    "doc_ex_grad": 0,
    "doc_ex_esp": 23,
    "doc_ex_mest": 26,
    "doc_ex_dout": 5,
    "in_acesso_portal_capes": 0,
    "in_acesso_outras_bases": 0,
    "in_assina_outra_base": 0,
    "in_repositorio_institucional": 0,
    "in_busca_integrada": 1,
    "in_servico_internet": 1,
    "in_participa_rede_social": 1,
    "in_catalogo_online": 1
  };
  options: University[] = [];
  courseOptions: Course[] = [];
  filteredOptions!: Observable<University[]>;

  constructor(private http: HttpClient, public dialog: MatDialog){}

  async ngOnInit() {
    await this.getIes();
    await this.filterOptions();
  }

  displayFn(university: University): string {
    return university && university.no_ies ? university.no_ies : '';
  }

  private _filter(no_ies: string): University[] {
    const filterValue = no_ies.toLowerCase();

    return this.options.filter(option => option.no_ies.toLowerCase().includes(filterValue));
  }

  public async search(){

    try {
      this.iesSeleted = true;
      this.isLoading = true;
      //await new Promise(r => setTimeout(r, 2000));
      await this.getCourseFromIes(this.universitySeleted.co_ies);
      this.isLoading = false;
    } catch (error) {
      
    }

    // if (this.noDataFound === false) {
    //   this.noDataFound = true;
    // }else{
    //   this.noDataFound = false;
    // }
  }

  private getIes(){
    let urlForRequest = IES_API + 'api/ies';

    this.http.get<University[]>(urlForRequest).subscribe(
      data => {
        this.options = data;
        //console.log(this.options);
      }
    );
  }

  private async getCourseFromIes(co_ies: Number){
    let urlForRequest = IES_API + 'api/curso/?search=' + co_ies;

     await this.http.get<Course[]>(urlForRequest).subscribe(
      data => {
        this.courseOptions = data;
      }
    );
  }

  private async filterOptions(){
    this.filteredOptions = await this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.no_ies)),
      map(no_ies => (no_ies ? this._filter(no_ies) : this.options.slice()))
    );
  }
  
  openDialogInfo(){
    const dialogRef = this.dialog.open(AppDialogInfoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeCardIesSeleted(){
    this.iesSeleted = false;
  }

  changeIes(value: University){
    this.universitySeleted = value;
    console.log(value);
  }

  getTpOrgAcad(value: Number){
    let tpOrgAcad: string = "";
    try {
      switch (value) {
        case 1:
          tpOrgAcad = "Universidade";
          break;
        case 2:
          tpOrgAcad = "Centro Universitário";
          break;
        case 3:
          tpOrgAcad = "Faculdade";
          break;
        case 4:
          tpOrgAcad = "Instituto Federal de Educação, Ciência e Tecnologia";
          break;
        case 5:
          tpOrgAcad = "Centro Federal de Educação Tecnológica";
          break;
      }
    } catch (error) {
      console.error(error);
    }
    return tpOrgAcad;
  }

  getTpCatAdm(value: Number){
    let tpCatAdm: string = "";
    try {
      switch (value) {
        case 1:
          tpCatAdm = "Pública Federal";
          break;
        case 2:
          tpCatAdm = "Pública Estadual";
          break;
        case 3:
          tpCatAdm = "Pública Municipal";
          break;
        case 4:
          tpCatAdm = "Privada com fins lucrativos";
          break;
        case 5:
          tpCatAdm = "Privada sem fins lucrativos";
          break;
        case 6:
          tpCatAdm = "Privada - Particular em sentido estrito";
          break;
        case 7:
          tpCatAdm = "Especial2";
          break;
        case 8:
          tpCatAdm = "Privada comunitária";
          break;
        case 9:
          tpCatAdm = "Privada confessional";
          break;
      
      }
    } catch (error) {
      console.error(error);
    }
    return tpCatAdm;
  }

}

@Component({
  selector: 'app-dialog-info',
  templateUrl: './app-dialog-info.component.html',
})
export class AppDialogInfoComponent {}
