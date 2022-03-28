import { Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Universidade {
  nome: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'consultaies';
  myControl = new FormControl();
  options: Universidade[] = [
    {nome: 'Universidade Católica de Pernambuco'},
    {nome: 'Universidade Federal de Pernambuco'},
    {nome: 'Universidade Federal Rural de Pernambuco'}
  ];
  filteredOptions!: Observable<Universidade[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.nome)),
      map(nome => (nome ? this._filter(nome) : this.options.slice())),
    );
  }

  displayFn(universidade: Universidade): string {
    return universidade && universidade.nome ? universidade.nome : '';
  }

  private _filter(nome: string): Universidade[] {
    const filterValue = nome.toLowerCase();

    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  
}
