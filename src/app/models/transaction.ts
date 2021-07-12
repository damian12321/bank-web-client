export interface Transaction {
  id?: string;
  transactionType:string;
  amount:number;
  date:Date;
  description:string;
}
