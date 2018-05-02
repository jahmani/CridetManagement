import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Extended, PLLine } from '../../interfaces/data-models';

/**
 * Generated class for the PackingListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'packing-list',
  templateUrl: 'packing-list.html'
})
export class PackingListComponent {
  
  lines: Extended<PLLine>[];
  totals: { ctns: number; qty: number; ammount: number; productName: string; };
  lastClicked: number;
  @Input("lines") set _lines (val :Extended<PLLine>[]){
    this.lines = val;
    this.computeTotal()
  }
  @Output() plLineWantEdit : EventEmitter<string> = new EventEmitter()

  plHeaders=[
    {title:"ctns", width:"16%"},
    {title:"packing", width:"16%"},
    {title:"qty", width:"26%"},
    {title:"price", width:"16%"},
    {title:"ammount", width:"26%"}
  ]

  constructor() {
    console.log('Hello PackingListComponent Component');
  }
  onPlLineClicked(index:number){
    this.lastClicked = index
  }
  onPlLineEditClicked(plLine:Extended<PLLine>){
    this.plLineWantEdit.emit(plLine.id);
  }
  computeTotal(){
    let ctns = 0;
    let qty = 0;
    let ammount = 0;
    const totalsLine = this.lines.reduce((prev,curr,i,arr)=>{
      prev.ctns +=Number(curr.data.ctns)||0;
      prev.qty +=Number(curr.data.qty)||0;
      prev.ammount +=Number(curr.data.ammount)||0;
      return prev
    },{ctns:0,qty:0,ammount:0,productName:"Totals"})
    this.totals=totalsLine

  }
}
