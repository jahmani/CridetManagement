//import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';\

import {Observable} from 'rxjs'
import { ExtendedData } from '../interfaces/data-models';

/*
  Generated class for the IRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
//@Injectable()
export abstract class IRepository<T> {

    List(filter?: any): Observable<ExtendedData<T>[]> {
        throw new Error('Method not implemented.');
    }
    get(key?: any): Observable<ExtendedData<T>> {
        throw new Error('Method not implemented.');
    }
    parseBeforeSave(obj:ExtendedData<T>) {
        throw new Error('Method not implemented.');
    }
    saveNew(newItem: ExtendedData<T>) {
        throw new Error('Method not implemented.');
    }
    saveOld(oldItem: ExtendedData<T>) {
        throw new Error('Method not implemented.');
    }
    remove(item: ExtendedData<T>) {
        throw new Error('Method not implemented.');
    }
    FormatedList: Observable<T[]>;
}
