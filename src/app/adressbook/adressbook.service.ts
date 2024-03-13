import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { PlaceHolderContacts } from '../PlaceHolderContacts';
@Injectable({
  providedIn: 'root'
})
export class AdressbookService {

  constructor() { }
  public contacts:Contact[] = PlaceHolderContacts

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
    console.log(c);
    console.log(this.contacts);
    
  }
  public EditContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);

    if (index !== -1) {
      this.contacts[index] = updatedContact;
    } else {
      console.error(`Contact with ID ${updatedContact.id} not found.`);
    }
  }
}