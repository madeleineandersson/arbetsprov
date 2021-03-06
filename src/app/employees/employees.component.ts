import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements AfterViewInit {
  displayedColumns = ['firstName', 'title', 'office', 'email'];
  dataSource = new MatTableDataSource(EMPLOYEE_DATA);
  offices = ['Berlin', 'Copenhagen', 'Eskilstuna', 'Gävle', 'Helsinki', 'Kalmar', 'Madrid', 'Malmö', 'St Petersburg', 'Stockholm', 'Umeå', 'Uppsala'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.replace(' ','');
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  applyOfficeFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

}

export interface Employee {
  firstName: string;
  lastName: string;
  title: string;
  office: string;
  email: string;
}

const EMPLOYEE_DATA: Employee[] = [
    {"email": "Nina.Simpson@company.com", "office": "St Petersburg", "title": "Engineer", "firstName": "Nina", "lastName": "Simpson"},
    {"email": "Frederick.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Frederick",	"lastName": "Martinez"},
    {"email": "Willie.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Willie",	"lastName": "Fields"},
    {"email": "Peter.Simpson@company.com", "office": "Eskilstuna", "title": "Designer", "firstName": "Peter",	"lastName": "Clark"},
    {"email": "Sheryl.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Sheryl",	"lastName": "Peters"},
    {"email": "Anita.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Anita",	"lastName": "Farmer"},
    {"email": "Orville.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Orville",	"lastName": "Spencer"},
    {"email": "Sandra.Simpson@company.com", "office": "St Petersburg", "title": "Developer", "firstName": "Sandra",	"lastName": "Larson"},
    {"email": "Guadalupe.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Guadalupe",	"lastName": "Boone"},
    {"email": "Lee.Simpson@company.com", "office": "Stockholm", "title": "Devops", "firstName": "Lee",	"lastName": "Bailey"},
    {"email": "Renee.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Renee",	"lastName": "Vega"},
    {"email": "Joy.Simpson@company.com", "office": "Uppsala", "title": "Designer", "firstName": "Joy",	"lastName": "Becker"},
    {"email": "Betty.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Betty",	"lastName": "Bowen"},
    {"email": "Ann.Simpson@company.com", "office": "Stockholm", "title": "Full stack developer", "firstName": "Ann",	"lastName": "Goodman"},
    {"email": "Alton.Simpson@company.com", "office": "Madrid", "title": "Engineer", "firstName": "Alton",	"lastName": "Osborne"},
    {"email": "Shelly.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Shelly",	"lastName": "Collier"},
    {"email": "Thelma.Simpson@company.com", "office": "Gävle", "title": "Engineer", "firstName": "Thelma",	"lastName": "Newman"},
    {"email": "Cindy.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Cindy",	"lastName": "Vaughn"},
    {"email": "Darlene.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Darlene",	"lastName": "Garza"},
    {"email": "Nettie.Simpson@company.com", "office": "Helsinki", "title": "Designer", "firstName": "Nettie",	"lastName": "Ross"},
    {"email": "Maureen.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Maureen",	"lastName": "Neal"},
    {"email": "Stephanie.Simpson@company.com", "office": "St Petersburg", "title": "Designer", "firstName": "Stephanie",	"lastName": "Fox"},
    {"email": "Devin.Simpson@company.com", "office": "Umeå", "title": "Developer", "firstName": "Devin",	"lastName": "Freeman"},
    {"email": "Wesley.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Wesley",	"lastName": "Jackson"},
    {"email": "Sherman.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Sherman",	"lastName": "French"},
    {"email": "Kathleen.Simpson@company.com", "office": "Madrid", "title": "CEO", "firstName": "Kathleen",	"lastName": "Morris"},
    {"email": "Lillian.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Lillian",	"lastName": "Swanson"},
    {"email": "Mabel.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Mabel",	"lastName": "Norton"},
    {"email": "Marilyn.Simpson@company.com", "office": "St Petersburg", "title": "Devops", "firstName": "Marilyn",	"lastName": "Huff"},
    {"email": "Everett.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Everett",	"lastName": "Richardson"},
    {"email": "Owen.Simpson@company.com", "office": "Malmö", "title": "Engineer", "firstName": "Owen",	"lastName": "Lucas"},
    {"email": "Mattie.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Mattie",	"lastName": "West"},
    {"email": "Malcolm.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Malcolm",	"lastName": "Goodwin"},
    {"email": "Daryl.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Daryl",	"lastName": "Stanley"},
    {"email": "Jackie.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Jackie",	"lastName": "Estrada"},
    {"email": "Don.Simpson@company.com", "office": "St Petersburg", "title": "Designer", "firstName": "Don",	"lastName": "Patrick"},
    {"email": "Cheryl.Simpson@company.com", "office": "Madrid", "title": "CTO", "firstName": "Cheryl",	"lastName": "Hampton"},
    {"email": "Lora.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Lora",	"lastName": "Mccarthy"},
    {"email": "Noel.Simpson@company.com", "office": "Copenhagen", "title": "Engineer", "firstName": "Noel",	"lastName": "Reese"},
    {"email": "Gustavo.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Gustavo",	"lastName": "Potter"},
    {"email": "Eleanor.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Eleanor",	"lastName": "Sandoval"},
    {"email": "Yvette.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Yvette",	"lastName": "Diaz"},
    {"email": "Tracy.Simpson@company.com", "office": "St Petersburg", "title": "Developer", "firstName": "Tracy",	"lastName": "Moody"},
    {"email": "Christie.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Christie",	"lastName": "Daniel"},
    {"email": "Wm.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Wm",	"lastName": "Weaver"},
    {"email": "Whitney.Simpson@company.com", "office": "Stockholm", "title": "Art Director", "firstName": "Whitney",	"lastName": "Lindsey"},
    {"email": "Nora.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Nora",	"lastName": "Walton"},
    {"email": "Maurice.Simpson@company.com", "office": "Madrid", "title": "Devops", "firstName": "Maurice",	"lastName": "Welch"},
    {"email": "Violet.Simpson@company.com", "office": "Berlin", "title": "Engineer", "firstName": "Violet",	"lastName": "Morton"},
    {"email": "Delores.Simpson@company.com", "office": "St Petersburg", "title": "Designer", "firstName": "Delores",	"lastName": "Valdez"},
    {"email": "Cody.Simpson@company.com", "office": "Helsinki", "title": "Engineer", "firstName": "Cody",	"lastName": "Sparks"},
    {"email": "Freda.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Freda",	"lastName": "Dawson"},
    {"email": "Allison.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Allison",	"lastName": "Townsend"},
    {"email": "Rick.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Rick",	"lastName": "Martin"},
    {"email": "Melinda.Simpson@company.com", "office": "Stockholm", "title": "Manager", "firstName": "Melinda",	"lastName": "Austin"},
    {"email": "Leigh.Simpson@company.com", "office": "Kalmar", "title": "Designer", "firstName": "Leigh",	"lastName": "Ward"},
    {"email": "Grady.Simpson@company.com", "office": "St Petersburg", "title": "Engineer", "firstName": "Grady",	"lastName": "Ruiz"},
    {"email": "Jon.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Jon",	"lastName": "Webb"},
    {"email": "Jonathan.Simpson@company.com", "office": "Madrid", "title": "Engineer", "firstName": "Jonathan",	"lastName": "Parsons"},
    {"email": "Bennie.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Bennie",	"lastName": "Cruz"},
    {"email": "Pedro.Simpson@company.com", "office": "Stockholm", "title": "Manager", "firstName": "Pedro",	"lastName": "Manning"},
    {"email": "Ricardo.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Ricardo",	"lastName": "Brooks"},
    {"email": "Sonia.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Sonia",	"lastName": "Thompson"},
    {"email": "Samuel.Simpson@company.com", "office": "St Petersburg", "title": "Designer", "firstName": "Samuel",	"lastName": "Thomas"},
    {"email": "Shari.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Shari",	"lastName": "Clayton"},
    {"email": "Michael.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Michael",	"lastName": "Jordan"},
    {"email": "Ray.Simpson@company.com", "office": "Stockholm", "title": "Devops", "firstName": "Ray",	"lastName": "Schultz"},
    {"email": "Eugene.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Eugene",	"lastName": "Gardner"},
    {"email": "Lonnie.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Lonnie",	"lastName": "Ellis"},
    {"email": "Jamie.Simpson@company.com", "office": "Madrid", "title": "Designer", "firstName": "Jamie",	"lastName": "Harris"},
    {"email": "Lila.Simpson@company.com", "office": "St Petersburg", "title": "Manager", "firstName": "Lila",	"lastName": "Peterson"},
    {"email": "Theresa.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Theresa",	"lastName": "Poole"},
    {"email": "Lyle.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Lyle",	"lastName": "Strickland"},
    {"email": "Candice.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Candice",	"lastName": "Bishop"},
    {"email": "Erik.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Erik",	"lastName": "Reyes"},
    {"email": "Leroy.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Leroy",	"lastName": "Brady"},
    {"email": "Jerome.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Jerome",	"lastName": "Cain"},
    {"email": "Lisa.Simpson@company.com", "office": "St Petersburg", "title": "Developer", "firstName": "Lisa",	"lastName": "Zimmerman"},
    {"email": "Leo.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Leo",	"lastName": "Padilla"},
    {"email": "Earnest.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Earnest",	"lastName": "Mckenzie"},
    {"email": "Beverly.Simpson@company.com", "office": "Madrid", "title": "Q/A", "firstName": "Beverly",	"lastName": "Romero"},
    {"email": "Teri.Simpson@company.com", "office": "Helsinki", "title": "Designer", "firstName": "Teri",	"lastName": "Nichols"},
    {"email": "Cathy.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Cathy",	"lastName": "Bennett"},
    {"email": "Conrad.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Conrad",	"lastName": "Singleton"},
    {"email": "Max.Simpson@company.com", "office": "St Petersburg", "title": "Engineer", "firstName": "Max",	"lastName": "Elliott"},
    {"email": "Willard.Simpson@company.com", "office": "Stockholm", "title": "Tester", "firstName": "Willard",	"lastName": "Floyd"},
    {"email": "Andres.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Andres",	"lastName": "Lewis"},
    {"email": "Lindsey.Simpson@company.com", "office": "Stockholm", "title": "Developer", "firstName": "Lindsey",	"lastName": "Marshall"},
    {"email": "Douglas.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Douglas",	"lastName": "Graham"},
    {"email": "Jose.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Jose",	"lastName": "Bradley"},
    {"email": "Candace.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Candace",	"lastName": "Gibbs"},
    {"email": "Christopher.Simpson@company.com", "office": "Madrid", "title": "Designer", "firstName": "Christopher",	"lastName": "Jefferson"},
    {"email": "Kevin.Simpson@company.com", "office": "Stockholm", "title": "Intern", "firstName": "Kevin",	"lastName": "Owen"},
    {"email": "Marie.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Marie",	"lastName": "Anderson"},
    {"email": "Patty.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Patty",	"lastName": "Sherman"},
    {"email": "Geoffrey.Simpson@company.com", "office": "Stockholm", "title": "Designer", "firstName": "Geoffrey",	"lastName": "Perkins"},
    {"email": "Cassandra.Simpson@company.com", "office": "Stockholm", "title": "Engineer", "firstName": "Cassandra",	"lastName": "Flores"},
    {"email": "Alison.Simpson@company.com", "office": "Stockholm", "title": "Tester", "firstName": "Alison",	"lastName": "Dennis"},
    {"email": "Kathy.Simpson@company.com", "office": "St Petersburg", "title": "Engineer", "firstName": "Kathy",	"lastName": "Page"},
    {"email": "Joanne.Simpson@company.com", "office": "Stockholm", "title": "Strategist", "firstName": "Joanne",	"lastName": "Carr"}
  ]
;
