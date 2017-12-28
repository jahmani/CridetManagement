import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Extended, TransactionCatigory } from '../../interfaces/data-models';

/**
 * Generated class for the TreeViewListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tree-view-list',
  templateUrl: 'tree-view-list.html'
})
export class TreeViewListComponent {

  @Input() nodes:  Extended<TransactionCatigory>[]
  @Input() depth : number
  @Output() nodeSelected : EventEmitter< Extended<TransactionCatigory>> = new EventEmitter< Extended<TransactionCatigory>>()
  @Output() nodeEditClicked : EventEmitter< Extended<TransactionCatigory>> = new EventEmitter< Extended<TransactionCatigory>>()

  constructor() {
    console.log('Hello TreeViewListComponent Component');
    console.log(this.nodes)
  }
  onNodeClicked(node){
    this.nodeSelected.emit(node);
  }

  onNodeEditClicked(node){
    this.nodeEditClicked.emit(node)
  }
}
