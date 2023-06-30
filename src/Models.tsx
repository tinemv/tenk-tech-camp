export type Customer = {
  name: string;
  accounts: Account[];
};

export type Account = {
  id: number;
  name: string;
  accountNumber: string;
  balance: number;
  transactions: Transaction[];
};

export type Transaction = {
  id: String;
  from: Person;
  to: Person;
  amount: number;
  date: String;
};

export type Person = {
  name: String;
  country: String;
  occupation: String;
};
