import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  role: string = 'test1';
  url = 'http://localhost:3000/';
  getVendorItem = this.url + 'items/getitems/';
  getVendor = this.url + 'vendor';
  getCart = this.url + 'items/cart';
}