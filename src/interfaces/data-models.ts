/*
  Generated class for the DataModels provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export interface Extension{

}
export interface CatTreeNodeExtension{
  $parent ? : ExtendedData<TreeNode>
  $sons ?: ExtendedData<TreeNode>[]
  $isExpanded?: boolean
  catigory?:ExtendedData<TransactionCatigory>
  
}
export interface ExtendedData<T>
{
  id : string
  data : T
  ext? : CatTreeNodeExtension
}
/*
export interface TreeNodeDataSnapshot extends ExtendedData<TreeNode>
{
  data : TreeNode
  $parent ? : TreeNode
  $sons ?: TreeNode[]
  $isExpanded: boolean
 
}
*/
export class ExtMap<T> {
  map : Map<string,T>
  toArray(){
    return Array.from(this.map.values())
  }
  get(key){
    return this.map.get(key)
  }
  set(key:string,value:T){
    return this.map.set(key,value)
  }
  forEach(callbackfn: (value: T, key: string, map: Map<string, T>) => void, thisArg?: any): void{
  return this.map.forEach(callbackfn)
  }
  constructor(vals?){

    this.map = new Map<string, T>(vals)
  }
}


export interface AccountInfo {
  name: string;
  code: string;
  mobile: string;
  city: string;
  address: string;
  $balance: number;
  $computedLastEditDate: number;
  
}
export interface User {
  id: string
  email:string
  displayName:string
  photoURL : string
  name: string;
  code: string;
  mobile: string;
  city: string;
  address: string;
  role: string;
}
export interface StoreUser {
  id:string
  user:User
  dateTimeAdded: Date
  isEnabled : true
  role: string;
  canRead:boolean
  canWrite:boolean
}

export interface UserStore {
  storeId:string
  store:StoreInfo
}


export enum AccountType {
  GeneralCredit = -1,
  GeneralDebt = 1,
}

export interface Transaction  {
  accountId: string;
  date: Date;
  type: TransactionType;
  notice: string;
  ammount: number;
  currency: string;
  catigoryId: string;
  $ext?:{catigory?:ExtendedData<TransactionCatigory>}
}export interface AccountBalance {
  balance: number;
}
export interface TreeNode {
  parentId : string
  name :string
  
}
export interface TransactionCatigory extends TreeNode  {
  type: TransactionType
  isCredit : boolean
  isDebt :boolean
}

export enum TransactionType {
  Credit = -1,
  Debt = 1,
}

export interface StoreInfo {
  name: string;
  code: string;
  }

export enum ItemChangeState {
  INITIALISED,
  ADDED,
  CHANGED,
  REMOVED
}
export enum ItemEditState {
  ADD,
  CHANGE,
  REMOVE
}



export interface KeyedObject {
  $key: string;
}

export interface EditableObject extends KeyedObject {
  lastEditedDate: number;
  lastEditorUserId: string;
  lastLogId : string;
  deleted?: boolean;
}
export interface DataLog<T extends EditableObject> extends EditableObject {
  path: string;
  key: string;
  data: T;
  oldData?: T;
  type: string;
  dateTime: string;
  //tableName: string;
  message: string;
  $dateBreak: string;
  user: string;
}


