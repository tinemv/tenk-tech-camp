import { Transaction } from "../../data/Models"
import { Parameter } from "../Task3/Transactions"

export function BubbleSort (input, category): any{
    var list = input
    var listLength = list.length
    // 1. Go through the list using a for loop
    do {
        var swapped = false
        for (let index = 0; 
            index < listLength; 
            index++) 
            {
                var item1 // Assign item1 to the item in the list at the index.
                var item2// Assign item2 to the next item in the list at index+1.

                // If the first element is greater than the second element, swap them and let swapped be true. NOTE remove the 0 inside the if statement
                if (0) {

                    
            }    
        }
        
    } while (swapped)
    // return the now sorted list
   
}

function getValue(transaction: Transaction, category: string): any {
    switch (category){
        case Parameter.AMOUNT:
            return transaction.amount
        case Parameter.FROM_NAME:
            return transaction.from.name
        case Parameter.FROM_COUNTRY:
            return transaction.from.country
        case Parameter.TO_NAME:
            console.log(transaction.to.name)
            return transaction.to.name
    }
}