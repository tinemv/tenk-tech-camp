export type Transaction = {
  id: String;
  from: Person;
  to: Person;
  amount: number;
  date: String;
  description: String; 
  risk: number;
};

export type Person = {
  name: String;
  country: String;
  occupation: String;
};
