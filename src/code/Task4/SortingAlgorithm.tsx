import { Transaction } from "../../data/CustomerModel"
import { Category } from "../Task4/AccountPage"

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
                var item2 // Assign item2 to the next item in the list at index+1.

                // If the first element is greater than the second element, swap them and let swapped be true. NOTE remove the 0 inside the if statement
                if (0) {
                    //Swap item1 and item2 in the list
                    //Let swapped be true

                    
            }    
        }
        
    } while (swapped)
    // return the now sorted list
   
}

function getValue(transaction: Transaction, category: string): any {
    switch (category){
        case Category.AMOUNT:
            return transaction.amount
        case Category.DATE:
            return transaction.date
        case Category.DESCRIPTION:
            return transaction.description
    }
}