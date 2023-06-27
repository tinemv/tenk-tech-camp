export type Customer = {
  name: string;
  accounts: Account[];
};

export type Account = {
  id: number;
  name: string;
  accountNumber: string;
  balance: number;
};
