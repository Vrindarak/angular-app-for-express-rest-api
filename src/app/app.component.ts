import { Component, OnInit } from '@angular/core';
import { ExpenseEntryService } from './expense-entry.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   expenseEntries : any;
   constructor(private restService : ExpenseEntryService ) { }

   ngOnInit() {
      this.getExpenseItems();
   }

   getExpenseItems() {
      this.restService.getExpenseEntries()
      .subscribe( data => this.expenseEntries = data );
   }
}
