export type CompanyTransaction = {
    id: string,
    from: Person, 
    to: Person, 
    amount: number
}

export type Person = {
    name: string, 
    company: string,
    location: string
}