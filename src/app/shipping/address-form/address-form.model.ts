import { signal } from '@angular/core';
import { required, pattern, SchemaPathTree } from '@angular/forms/signals';

// Address model data interface
export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

// Model factory for address form
export function createAddressModel() {
  return signal<Address>({
    street: '',
    city: '',
    state: '',
    zip: ''
  });
}

// Form builder for address fields
export function buildAddressSection(a: SchemaPathTree<Address>) {
  required(a.street, { message: 'Street is required' });
  required(a.city, { message: 'City is required' });
  required(a.state, { message: 'State is required' });
  required(a.zip, { message: 'ZIP code is required' });
  pattern(a.zip, /^\d{5}$/, { message: 'ZIP code must be 5 digits' });
}


