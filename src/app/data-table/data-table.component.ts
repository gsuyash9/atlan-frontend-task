
import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  selectedValue2!: string;
  selectedValue1!: string;
  queryString!: string;

  constructor() {
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: any = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  Select1(listItem: number) {
    if (listItem == 1) {
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    }
    else if (listItem == 2) {
      this.dataSource = new MatTableDataSource<People>(PEOPLE_DATA);
      this.displayedColumns = ['position', 'name', 'age', 'initials'];
    }
    else if (listItem == 3) {
      this.dataSource = new MatTableDataSource<Employee>(EMPLOYEE_DATA);
      this.displayedColumns = ['Id', 'FirstName', 'LastName', 'Email', 'Gender', 'JobTitle'];
    }
  }


}
export interface Employee {
  Id: number,
  FirstName: string,
  LastName: string,
  Email: string,
  Gender: string,
  JobTitle: string
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface People {
  position: number;
  name: string;
  age: number;
  initials: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const PEOPLE_DATA: People[] = [
  { position: 1, name: 'Ben', age: 46, initials: 'BG' },
  { position: 2, name: 'Hugo', age: 9, initials: 'HG' },
  { position: 3, name: 'Theo', age: 6, initials: 'TG' },
  { position: 4, name: 'Emy', age: 42, initials: 'EC' },
  { position: 5, name: 'Wamwam', age: 24, initials: 'BB' },
  { position: 6, name: 'Defre', age: 12, initials: 'FK' },
  { position: 7, name: 'Zakk', age: 56, initials: 'ZW' },
  { position: 8, name: 'Ned', age: 61, initials: 'NF' },
  { position: 9, name: 'Tryphon', age: 91, initials: 'TT' },
  { position: 10, name: 'Misrilou', age: 19, initials: 'MF' },
];

const EMPLOYEE_DATA: Employee[] = [{
  Id: 1, FirstName: "Johannah", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F",
  JobTitle: "Administrative Assistant I"
}, {
  Id: 2, FirstName: "Eldin", LastName: "Astbery", Email: "eastbery1@geocities.jp", Gender: "M",
  JobTitle: "Senior Editor"
}, {
  Id: 3, FirstName: "Nahum", LastName: "Mounce", Email: "nmounce2@vk.com", Gender: "M",
  JobTitle: "Programmer II"
}, {
  Id: 4,
  FirstName: "Gallard",
  LastName: "Standell",
  Email: "gstandell3@europa.eu",
  Gender: "M",
  JobTitle: "Account Representative II"
}, {
  Id: 5,
  FirstName: "Koenraad",
  LastName: "Domleo",
  Email: "kdomleo4@cornell.edu",
  Gender: "M",
  JobTitle: "Quality Control Specialist"
}, {
  Id: 6,
  FirstName: "Uriah",
  LastName: "Turbat",
  Email: "uturbat5@aol.com",
  Gender: "M",
  JobTitle: "Accounting Assistant II"
}, {
  Id: 7,
  FirstName: "Waldemar",
  LastName: "Fowley",
  Email: "wfowley6@sun.com",
  Gender: "M",
  JobTitle: "Account Coordinator"
}, {
  Id: 8,
  FirstName: "Rodolfo",
  LastName: "Trenchard",
  Email: "rtrenchard7@yandex.ru",
  Gender: "M",
  JobTitle: "Data Coordiator"
}, {
  Id: 9,
  FirstName: "Konstance",
  LastName: "Dudek",
  Email: "kdudek8@techcrunch.com",
  Gender: "F",
  JobTitle: "Administrative Assistant I"
}, {
  Id: 10,
  FirstName: "Monti",
  LastName: "Perton",
  Email: "mperton9@youtube.com",
  Gender: "M",
  JobTitle: "Operator"
}];

