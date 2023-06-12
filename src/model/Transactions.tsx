export type Transaction = {
    from: Person, 
    to: Person, 
    amount: number, 
    date: String
}

export type Person = {
    name: String, 
    country: String, 
    occupation: String
}