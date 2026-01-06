import { Component } from '@angular/core';
import { form, submit } from '@angular/forms/signals';
import { signal } from '@angular/core';
import { createAccountModel, buildAccountSection, Account } from '../../account/account-form/account-form.model';
import { createAddressModel, buildAddressSection, Address } from '../../shipping/address-form/address-form.model';
import { createPreferencesModel, buildPreferencesSection, Preferences } from '../../account/preferences-form/preferences-form.model';
import { AccountFormComponent } from '../../account/account-form/account-form.component';
import { AddressFormComponent } from '../../shipping/address-form/address-form.component';
import { PreferencesFormComponent } from '../../account/preferences-form/preferences-form.component';
import { DebugPanelComponent } from '../../shared/debug-panel/debug-panel.component';

// Profile form model interface
export interface Profile {
  account: Account;
  shippingAddress: Address;
  preferences: Preferences;
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  imports: [
    AccountFormComponent,
    AddressFormComponent,
    PreferencesFormComponent,
    DebugPanelComponent
  ],
})
export class ProfileFormComponent {
  // Create the parent model
  readonly model = signal<Profile>({
    account: createAccountModel()(),
    shippingAddress: createAddressModel()(),
    preferences: createPreferencesModel()()
  });

  // Compose the form using section builders
  readonly form = form(this.model, s => {
    // Build each section using their respective builders
    buildAccountSection(s.account);
    buildAddressSection(s.shippingAddress);
    buildPreferencesSection(s.preferences);
  });


  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    submit(this.form, async data => {
      console.log('Form submitted:', data().value());
      // Return undefined if submission is successful
      // Return validation errors if there are server-side errors
      return undefined;
    });
  }
}


