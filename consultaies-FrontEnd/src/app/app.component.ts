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
  checked = true;
  disabled = true;
  isLoading = false;
  noDataFound = false;
  iesSeleted = false;
  courseSeleted = false;
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
  couseSeletec: Course = {
    "id_censo_curso": 373,
    "co_ies": 1540,
    "no_cine_rotulo": "Psicologia",
    "co_cine_rotulo": "0313P01",
    "co_cine_area_geral": "3",
    "no_cine_area_geral": "Ciências sociais, comunicação e informação",
    "co_cine_area_especifica": "31",
    "no_cine_area_especifica": "Ciências sociais e comportamentais",
    "co_cine_area_detalhada": "313",
    "no_cine_area_detalhada": "Psicologia",
    "tp_grau_academico": 1,
    "tp_modalidade_ensino": 1,
    "qt_vaga_total": 100,
    "qt_vaga_total_diurno": 0,
    "qt_vaga_total_noturno": 100,
    "qt_vaga_total_ead": 0,
    "qt_mat": 57,
    "qt_conc": 7
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

  public async search(IES: University){

    try {
      this.iesSeleted = true;
      this.isLoading = true;
      //await new Promise(r => setTimeout(r, 2000));
      await this.changeIes(IES);
      await this.getCourseFromIes(IES.co_ies);
      this.isLoading = false;
    } catch (error) {
      
    }
  }
  closeIes(){
    this.iesSeleted = false;
    this.courseSeleted = false;
  }
  closeCourse(){
    this.courseSeleted = false;
  }
  isChecked(value: Number){
    if (value == 0) {
      return false;
    }else{
      return true;
    }
  }
  getModalidade(value: Number){
    if (value == 1) {
      return "Presencial";
    } else {
      return "Curso a distância";
    }
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

  async getCourseFromIes(co_ies: Number){
    let urlForRequest = IES_API + 'api/curso/?search=' + co_ies;

     await this.http.get<Course[]>(urlForRequest).subscribe(
      data => {
        this.courseOptions = data;
        console.log(this.courseOptions);
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
  changeCourse(value: Course){
    this.couseSeletec = value;
    this.courseSeleted = true;
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

  capitalizeFirstChar(string: String) {
    string = string.toLocaleLowerCase();
    let arrayStrings = string.split(" ");
    let stringMid;
    let stringEnd = "";
    try {
      for (let i = 0; i < arrayStrings.length; i++) {
        stringMid = arrayStrings[i];
        stringMid = stringMid[0].toUpperCase() + stringMid.slice(1) + " ";
        stringEnd = stringEnd + stringMid;
        
      }
    } catch (error) {
      //console.error(error);
    }
    return stringEnd;
  }

  getGrauAcademico(value: Number){
    let grauAcad: string = "";
    try {
      switch (value) {
        case 1:
          grauAcad = "Bacharelado";
          break;
        case 2:
          grauAcad = "Licenciatura";
          break;
        case 3:
          grauAcad = "Tecnológico";
          break;
        case 4:
          grauAcad = "Bacharelado e Licenciatura";
          break;
      }
    } catch (error) {
      console.error(error);
    }
    return grauAcad;
  }

}

@Component({
  selector: 'app-dialog-info',
  templateUrl: './app-dialog-info.component.html',
  styleUrls: ['./app-dialog.component.scss']
})
export class AppDialogInfoComponent {}
