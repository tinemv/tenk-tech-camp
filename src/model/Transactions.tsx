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
