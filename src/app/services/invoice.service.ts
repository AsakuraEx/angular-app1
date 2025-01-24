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
    return this.invoice;
  }
}
