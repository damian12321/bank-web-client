import {Transaction} from "./transaction";

export interface Account {
  id?: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  password: string;
  pinNumber: string;
  balance: string;
  loginAttempts: string;
  isActive: string;
  transactionList:Transaction[];
}
