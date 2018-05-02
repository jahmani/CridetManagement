import { Component, Input, ViewChild, TemplateRef, Output, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import { Extended, PLLine } from '../../interfaces/data-models';
import { TableColumn, DatatableComponent } from '@swimlane/ngx-datatable';

/**
 * Generated class for the PlListTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pl-list-table',
  templateUrl: 'pl-list-table.1.html'
})
export class PlListTableComponent implements AfterContentInit{
  activeRow: any;
  totals: any;
  selected =[];
  expanded: any = {};
  extPlines
  @Input() set lines (extPlines :Extended<PLLine>[]){
    if(extPlines == this.extPlines)
      return
    this.extPlines = extPlines
    this.flatPLLines = extPlines.map(extPlLine=> {
      return {...(extPlLine.data),id:extPlLine.id,...extPlLine.ext,productName:extPlLine.ext.Product.data.name}})
    this.computeTotal()
    if(this.table)
    {
      console.log(" @Input() set lines")
      setTimeout(()=> this.table.rowDetail.expandAllRows())
      this.table.recalculate()

    }


  }
  @Output() plLineWantEdit : EventEmitter<string> = new EventEmitter()
  flatPLLines 
  @ViewChild('myTable') table: DatatableComponent;
  @ViewChild('rowDropDownTemplate') rowDropDownTemplate: TemplateRef<any>;

  columns:TableColumn[] = [
    { name: 'ctns' ,width:50},
    { name: 'packing' ,width:50},
    { name: "qty",width:50},
    { name: "price",width:50},
    { name: 'ammount' ,width:75},
  ];

  columns2:TableColumn[] = [
    { prop: "shippingMark", name:"Mark",width:75},
    { prop: "productName", name:"Product",width:100},
    { name: 'ctns' ,width:50},
    { name: 'packing' ,width:50},
    { name: "qty",width:50},
    { name: "price",width:50},
    { name: 'ammount' ,width:75},

  ];
  constructor(
  ) {
  }
  computeTotal(){
    let ctns = 0;
    let qty = 0;
    let ammount = 0;
    const totalsLine = this.flatPLLines.reduce((prev,curr,i,arr)=>{
      prev.ctns +=Number(curr.ctns)||0;
      prev.qty +=Number(curr.qty)||0;
      prev.ammount +=Number(curr.ammount)||0;
      return prev
    },{ctns:0,qty:0,ammount:0,productName:"Totals"})
    this.totals=totalsLine

  }
  onWantEdit(plLineId: string){
    this.plLineWantEdit.emit(plLineId)
  }
  expnadAll(){
    this.table.rowDetail.expandAllRows();

  }
  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
   // this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
  onDetailClicked(row){
    this.selected = [row]
    this.activeRow = row

  }
  onActivate(data){
    console.log('Activate Event data', data );
    this.activeRow = data.row;
    // this.table.rowDetail.toggleExpandRow(data.selected[0])
  
  }
  onSelect( data) {
    console.log('Select Event data', data , this.selected);
   // this.table.rowDetail.toggleExpandRow(data.selected[0])
    
  }
ngAfterContentInit() {
  console.log("Called after ngOnInit when the component's or directive's content has been initialized")
  //Add 'implements AfterContentInit' to the class.
  //setTimeout(()=> this.table.rowDetail.expandAllRows())
  //setTimeout(()=> this.table.rowDetail.expandAllRows())
}
_ngAfterViewChecked(){
  console.log("ngAfterViewChecked")
  setTimeout(()=> this.table.rowDetail.expandAllRows())

}
ngAfterViewInit() {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  setTimeout(()=> this.table.rowDetail.expandAllRows())
 
 

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log("ionViewDidLoad PlListTableComponent");

  /*
  this.columns.push(    {
    width: 50,
    resizeable: false,
    sortable: false,
    draggable: false,
    canAutoResize: false,
    cellTemplate: this.rowDropDownTemplate,
  })
  */
}
  ionViewDidLoad() {
    console.log("ionViewDidLoad PlListTableComponent");

  }
}
