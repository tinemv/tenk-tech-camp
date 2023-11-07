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
  id: string,
  date: string,
  description: string,
  amount: number
};
