

/*
  Generated class for the DataModels provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/


export interface CatTreeNodeExtension {
  $parent?: Extended<TreeNode>
  $sons?: Extended<TreeNode>[]
  $isExpanded?: boolean
  catigory?: Extended<TransactionCatigory>
}

export interface AccountInfoExt {
  $balance?: number
  $computedLastEditedOn?: string
  $balanceObj?: Extended<AccountBalance>
}

export interface StoreUserExt {
  user? : User
}
export interface UserStoreExt{
  store?: StoreDoc  
}
export interface InviteExt{
  store?: StoreDoc  
  user?: User  
}
export type ExtType = CatTreeNodeExtension & AccountInfoExt & StoreUserExt & UserStoreExt & {}
export interface Extended<T> {
  id: string
  data: T
  ext?: ExtType
}

export interface Editable {
  firstCreatedOn: string | any
  lastEditedOn: string |any
  lastEditedByUserId: string
}
export interface Delteable {
  isDelted: boolean
}

export interface AccountInfo extends Editable {
  name: string;
  code: string;
  mobile: string;
  city: string;
  address: string;
}
export interface User extends Editable {
  id: string
  email: string
  displayName: string
  photoURL: string
  name: string;
  code: string;
  mobile: string;
  city: string;
  address: string;
  role: string;
}
export interface StoreUser extends Editable {
  dateTimeAdded: string |any
  isEnabled: true
  role: string;
  canRead: boolean
  canWrite: boolean
  inviteId : string
}

export interface UserStore extends Editable {
  inviteId : string 
}


export enum AccountType {
  GeneralCredit = -1,
  GeneralDebt = 1,
}

export interface Transaction extends Editable, Delteable {
  accountId: string;
  date: string;
  type: TransactionType;
  notice: string;
  ammount: number;
  currency: string;
  catigoryId: string;
}
export interface AccountBalance extends Editable {
  balance: number
  lastTransactionId: string
  isDirty: boolean
  isInvalid: boolean
}

export interface TreeNode {
  parentId: string
  name: string

}
export interface TransactionCatigory extends TreeNode, Editable {
  type: TransactionType
  isCredit: boolean
  isDebit: boolean
}

export enum TransactionType {
  Credit = -1,
  Debt = 1,
}
export type InviteState = "ACCEPTED" |  "REVOKED" | "REJECTED" | "CANCELED" | "PENDING" | "LEAVED"
export interface Invite extends Editable{
  userId: string
  storeId: string
  state : InviteState
}
export interface StoreDoc extends Editable {
  storeInfo: StoreInfo;
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





export interface DataLog<T extends Editable> extends Editable {
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


