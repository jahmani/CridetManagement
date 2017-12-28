//import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable'
import { Extended } from '../interfaces/data-models';

/*
  Generated class for the IRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
//@Injectable()
export abstract class IRepository<T> {

    List(filter?: any): Observable<Extended<T>[]> {
        throw new Error('Method not implemented.');
    }
    get(key?: any): Observable<Extended<T>> {
        throw new Error('Method not implemented.');
    }
    parseBeforeSave(obj:Extended<T>) {
        throw new Error('Method not implemented.');
    }
    saveNew(newItem: Extended<T>) {
        throw new Error('Method not implemented.');
    }
    saveOld(oldItem: Extended<T>) {
        throw new Error('Method not implemented.');
    }
    remove(item: Extended<T>) {
        throw new Error('Method not implemented.');
    }
    FormatedList: Observable<T[]>;
}
