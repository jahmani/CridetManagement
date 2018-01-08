
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ActiveStoreService {
    private subject : BehaviorSubject<string>
    private _activeStoreKey // = 'HW1TAwI2hz0pLNINa51Q';
    constructor(){
        this.subject = new BehaviorSubject(null)
    }
    get activeStoreKey(){
        return this._activeStoreKey
    }
    get activeStoreKey$(){
        return this.subject.asObservable()
    }
    setActiveStoreKey(newKey){
        if(newKey != this._activeStoreKey)
        {
            this._activeStoreKey = newKey
            this.subject.next(newKey)
        }
    }
    clearActiveStoreKey(){
        return this.setActiveStoreKey(null)
    }
}