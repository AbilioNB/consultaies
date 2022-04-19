import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { environment  } from '../environments/environment';
import { University } from '../interfaces/university';

export interface Universidade {
  nome: string;
}

const IES_API = environment.IES_API;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = false;
  title = 'consultaies';
  myControl = new FormControl();
  options: University[] = [];
  filteredOptions!: Observable<University[]>;

  constructor(private http: HttpClient){}

  ngOnInit() {

    let urlForRequest = IES_API + 'api/ies';
    const headers = { 'Access-Control-Allow-Origin': '*, http://127.0.0.1:8000',
                      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                      'Access-Control-Allow-Headers': 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range',
                      'Access-Control-Expose-Headers': 'Content-Length,Content-Range'
                    };
    this.http.get<University[]>(urlForRequest,{ headers }).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.no_ies)),
      map(no_ies => (no_ies ? this._filter(no_ies) : this.options.slice())),
    );
  }

  displayFn(universidade: University): string {
    return universidade && universidade.no_ies ? universidade.no_ies : '';
  }

  private _filter(no_ies: string): University[] {
    const filterValue = no_ies.toLowerCase();

    return this.options.filter(option => option.no_ies.toLowerCase().includes(filterValue));
  }

  public search(){
    if (this.isLoading === false) {
      this.isLoading = true;
    }else{
      this.isLoading = false;
    }
  }
  
}
