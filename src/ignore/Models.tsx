export type Customer = {
  name: string;
  accounts: Account[];
};

export type Account = {
  id: number;
  name: string;
  number: string;
  transactions: Transaction[];
};

export type Transaction = {
  id: String;
  from: Person;
  to: Person;
  amount: number;
};

export type Person = {
  name: String;
  country: String;
};
