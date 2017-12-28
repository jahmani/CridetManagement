/*
  Generated class for the DataModels provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/*
export interface TreeNodeDataSnapshot extends ExtendedData<TreeNode>
{
  data : TreeNode
  $parent ? : TreeNode
  $sons ?: TreeNode[]
  $isExpanded: boolean
 
}
*/
var ExtMap = /** @class */ (function () {
    function ExtMap(vals) {
        this.map = new Map(vals);
    }
    ExtMap.prototype.toArray = function () {
        return Array.from(this.map.values());
    };
    ExtMap.prototype.get = function (key) {
        return this.map.get(key);
    };
    ExtMap.prototype.set = function (key, value) {
        return this.map.set(key, value);
    };
    ExtMap.prototype.forEach = function (callbackfn, thisArg) {
        return this.map.forEach(callbackfn);
    };
    return ExtMap;
}());
export { ExtMap };
export var AccountType;
(function (AccountType) {
    AccountType[AccountType["GeneralCredit"] = -1] = "GeneralCredit";
    AccountType[AccountType["GeneralDebt"] = 1] = "GeneralDebt";
})(AccountType || (AccountType = {}));
export var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Credit"] = -1] = "Credit";
    TransactionType[TransactionType["Debt"] = 1] = "Debt";
})(TransactionType || (TransactionType = {}));
export var ItemChangeState;
(function (ItemChangeState) {
    ItemChangeState[ItemChangeState["INITIALISED"] = 0] = "INITIALISED";
    ItemChangeState[ItemChangeState["ADDED"] = 1] = "ADDED";
    ItemChangeState[ItemChangeState["CHANGED"] = 2] = "CHANGED";
    ItemChangeState[ItemChangeState["REMOVED"] = 3] = "REMOVED";
})(ItemChangeState || (ItemChangeState = {}));
export var ItemEditState;
(function (ItemEditState) {
    ItemEditState[ItemEditState["ADD"] = 0] = "ADD";
    ItemEditState[ItemEditState["CHANGE"] = 1] = "CHANGE";
    ItemEditState[ItemEditState["REMOVE"] = 2] = "REMOVE";
})(ItemEditState || (ItemEditState = {}));
//# sourceMappingURL=data-models.js.map