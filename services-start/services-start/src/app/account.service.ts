import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  onAccountAdded(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
