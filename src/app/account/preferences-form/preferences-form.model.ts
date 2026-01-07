import { signal } from '@angular/core';
import { SchemaPathTree } from '@angular/forms/signals';

// Preferences model data interface
export interface Preferences {
  marketingOptIn: boolean;
}

// Model factory for preferences form
export function createPreferencesModel() {
  return signal<Preferences>({
    marketingOptIn: false
  });
}

// Form builder for preferences fields
export function buildPreferencesSection(p: SchemaPathTree<Preferences>) {
  // No local validation for preferences
}


