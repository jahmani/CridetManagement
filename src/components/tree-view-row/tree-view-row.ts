import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode, ExtendedData, TransactionCatigory } from '../../interfaces/data-models';

/**
 * Generated class for the TreeViewRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tree-view-row',
  templateUrl: 'tree-view-row.html'
})
export class TreeViewRowComponent {

  @Input() node:  ExtendedData<TreeNode>
  @Input() depth : number
  @Output() nodeSelected : EventEmitter<ExtendedData<TreeNode>> = new EventEmitter<ExtendedData<TreeNode>>()
  @Output() nodeEditClicked : EventEmitter<ExtendedData<TreeNode>> = new EventEmitter<ExtendedData<TreeNode>>()
  constructor() {
    console.log('Hello TreeViewRowComponent Component');
  }

  hasSons() : boolean{
    return this.node.ext.$sons && this.node.ext.$sons.length>0
  }
  toggleExpand(){
    this.hasSons && (this.node.ext.$isExpanded = !this.node.ext.$isExpanded )
  }
  getIconName() : string{
    let iName
    if(this.hasSons())
    {
      iName =  this.node.ext.$isExpanded ? "arrow-dropdown-circle" : "arrow-dropright-circle"
    }
    else iName =  "radio-button-off"
    return iName
  }
  onNodeClicked(node){
    this.nodeSelected.emit(node);
  }

  onNodeEditClicked(node){
    this.nodeEditClicked.emit(node)
  }

}
