import { signal } from '@angular/core';
import { required, SchemaPathTree } from '@angular/forms/signals';

// Account model data interface
export interface Account {
  firstName: string;
  lastName: string;
}

// Model factory for account form
export function createAccountModel() {
  return signal<Account>({
    firstName: '',
    lastName: ''
  });
}

// Form builder for account fields
export function buildAccountSection(a: SchemaPathTree<Account>) {
  required(a.firstName, { message: 'First name is required' });
  required(a.lastName, { message: 'Last name is required' });
}


