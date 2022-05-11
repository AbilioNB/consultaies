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
      await new Promise(r => setTimeout(r, 2000));
      this.courseOptions = [
        {
          "id_censo_curso": 1540,
          "co_ies": 718,
          "no_cine_rotulo": "Contabilidade",
          "co_cine_rotulo": "0411C01",
          "co_cine_area_geral": "4",
          "no_cine_area_geral": "Negócios, administração e direito",
          "co_cine_area_especifica": "41",
          "no_cine_area_especifica": "Negócios e administração",
          "co_cine_area_detalhada": "411",
          "no_cine_area_detalhada": "Contabilidade e tributação",
          "tp_grau_academico": 1,
          "tp_modalidade_ensino": 2,
          "qt_vaga_total": 0,
          "qt_vaga_total_diurno": 0,
          "qt_vaga_total_noturno": 0,
          "qt_vaga_total_ead": 0,
          "qt_mat": 10,
          "qt_conc": 0
        },
        {
          "id_censo_curso": 4613,
          "co_ies": 1205,
          "no_cine_rotulo": "Serviço social",
          "co_cine_rotulo": "0923S01",
          "co_cine_area_geral": "9",
          "no_cine_area_geral": "Saúde e bem-estar",
          "co_cine_area_especifica": "92",
          "no_cine_area_especifica": "Bem-estar",
          "co_cine_area_detalhada": "923",
          "no_cine_area_detalhada": "Serviço social",
          "tp_grau_academico": 1,
          "tp_modalidade_ensino": 2,
          "qt_vaga_total": 0,
          "qt_vaga_total_diurno": 0,
          "qt_vaga_total_noturno": 0,
          "qt_vaga_total_ead": 0,
          "qt_mat": 2,
          "qt_conc": 0
        },
        {
          "id_censo_curso": 1917,
          "co_ies": 221,
          "no_cine_rotulo": "Pedagogia",
          "co_cine_rotulo": "0113P01",
          "co_cine_area_geral": "1",
          "no_cine_area_geral": "Educação",
          "co_cine_area_especifica": "11",
          "no_cine_area_especifica": "Educação",
          "co_cine_area_detalhada": "113",
          "no_cine_area_detalhada": "Formação de professores sem áreas específicas",
          "tp_grau_academico": 2,
          "tp_modalidade_ensino": 2,
          "qt_vaga_total": 0,
          "qt_vaga_total_diurno": 0,
          "qt_vaga_total_noturno": 0,
          "qt_vaga_total_ead": 0,
          "qt_mat": 3,
          "qt_conc": 0
        },
        {
          "id_censo_curso": 4255,
          "co_ies": 135,
          "no_cine_rotulo": "Educação física formação de professor",
          "co_cine_rotulo": "0114E03",
          "co_cine_area_geral": "1",
          "no_cine_area_geral": "Educação",
          "co_cine_area_especifica": "11",
          "no_cine_area_especifica": "Educação",
          "co_cine_area_detalhada": "114",
          "no_cine_area_detalhada": "Formação de professores em áreas específicas (exceto Letras)",
          "tp_grau_academico": 2,
          "tp_modalidade_ensino": 2,
          "qt_vaga_total": 0,
          "qt_vaga_total_diurno": 0,
          "qt_vaga_total_noturno": 0,
          "qt_vaga_total_ead": 0,
          "qt_mat": 12,
          "qt_conc": 3
        },
        {
          "id_censo_curso": 13792,
          "co_ies": 1472,
          "no_cine_rotulo": "Biomedicina",
          "co_cine_rotulo": "0914B01",
          "co_cine_area_geral": "9",
          "no_cine_area_geral": "Saúde e bem-estar",
          "co_cine_area_especifica": "91",
          "no_cine_area_especifica": "Saúde",
          "co_cine_area_detalhada": "914",
          "no_cine_area_detalhada": "Tecnologia de diagnóstico e tratamento médico",
          "tp_grau_academico": 1,
          "tp_modalidade_ensino": 2,
          "qt_vaga_total": 0,
          "qt_vaga_total_diurno": 0,
          "qt_vaga_total_noturno": 0,
          "qt_vaga_total_ead": 0,
          "qt_mat": 85,
          "qt_conc": 0
        },
        {
          "id_censo_curso": 1699,
          "co_ies": 1472,
          "no_cine_rotulo": "Publicidade e propaganda",
          "co_cine_rotulo": "0414P01",
          "co_cine_area_geral": "4",
          "no_cine_area_geral": "Negócios, administração e direito",
          "co_cine_area_especifica": "41",
          "no_cine_area_especifica": "Negócios e administração",
          "co_cine_area_detalhada": "414",
          "no_cine_area_detalhada": "Marketing e propaganda",
          "tp_grau_academico": 1,
          "tp_modalidade_ensino": 2,
          "qt_vaga_total": 0,
          "qt_vaga_total_diurno": 0,
          "qt_vaga_total_noturno": 0,
          "qt_vaga_total_ead": 0,
          "qt_mat": 1,
          "qt_conc": 0
       },
       {
          "id_censo_curso": 450,
          "co_ies": 163,
          "no_cine_rotulo": "Geografia",
          "co_cine_rotulo": "0312G01",
          "co_cine_area_geral": "3",
          "no_cine_area_geral": "Ciências sociais, comunicação e informação",
          "co_cine_area_especifica": "31",
          "no_cine_area_especifica": "Ciências sociais e comportamentais",
          "co_cine_area_detalhada": "312",
          "no_cine_area_detalhada": "Ciências sociais e políticas",
          "tp_grau_academico": 1,
          "tp_modalidade_ensino": 2,
          "qt_vaga_total": 0,
          "qt_vaga_total_diurno": 0,
          "qt_vaga_total_noturno": 0,
          "qt_vaga_total_ead": 0,
          "qt_mat": 2,
          "qt_conc": 0
        },
        {
          "id_censo_curso": 4411,
          "co_ies": 298,
          "no_cine_rotulo": "Gestão de negócios",
          "co_cine_rotulo": "0413G05",
          "co_cine_area_geral": "4",
          "no_cine_area_geral": "Negócios, administração e direito",
          "co_cine_area_especifica": "41",
          "no_cine_area_especifica": "Negócios e administração",
          "co_cine_area_detalhada": "413",
          "no_cine_area_detalhada": "Gestão e administração",
          "tp_grau_academico": 3,
          "tp_modalidade_ensino": 2,
          "qt_vaga_total": 0,
          "qt_vaga_total_diurno": 0,
          "qt_vaga_total_noturno": 0,
          "qt_vaga_total_ead": 0,
          "qt_mat": 4,
          "qt_conc": 2
        }
      ];
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
