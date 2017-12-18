import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
    .evenRow {
      background-color:lightblue
    }
    `
  ]
})
export class TableComponent {// tslint:disable-line
  tableData: any;
  removeFood(dataToRemove) {
    const index = this.tableData.indexOf(dataToRemove);
    this.tableData.splice(index, 1);
  }
  loadFoodTable() {
    this.tableData = [
      {name: 'rice', calories: 120},
      {name: 'meat', calories: 300},
      {name: 'candy', calories: 500},
      {name: 'steak', calories: 300},
      {name: 'chicken Breast', calories: 170}
    ];
  }
  trackData(index, Data) {
    return (Data) ? Data.name : undefined;
  }
}
