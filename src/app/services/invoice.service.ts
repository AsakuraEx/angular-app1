import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoiceData';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculateTotal()
    return {... this.invoice, total};
  }

  // calculateTotal(){
  //   let total = 0;

  //   this.invoice.items.forEach(item => {
  //     total = total + item.total();
  //   })

  //   return total
  // }

  calculateTotal() {
    return this.invoice.items.reduce((total, item) => total + (item.total), 0)
  }
}
