import { Transaction } from "../../data/CustomerModel"
import { CategoryEnum } from "../Task5/AccountPage"

export function BubbleSort (input, category): any{
    var list = input
    var listLength = list.length
    var swapped = true

    // 1. Go through the list using a for loop
    do {
        swapped = false
        for (let index = 0; 
            index < listLength-1; 
            index++) 
            {
                var item1 // Assign item1 to the item in the list at the index.
                var item2 // Assign item2 to the next item in the list at index+1.

                // If the first element is greater than the second element, swap them and let swapped be true. 
                // NOTE! remove the 0 inside the if statement and use getValue(item, category) to compare values
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
        case CategoryEnum.AMOUNT:
            return transaction.amount
        case CategoryEnum.DATE:
            return transaction.date
        case CategoryEnum.DESCRIPTION:
            return transaction.description
    }
}