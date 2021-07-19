import {Transaction} from "./transaction";

export interface Account {
  id?: number;
  firstName: string;
  lastName: string;
  email:string;
  accountNumber?: number;
  password?: string;
  pinNumber?: number;
  balance?: number;
  loginAttempts?: number;
  isActive?: boolean;
  transactionList?:Transaction[];
}
