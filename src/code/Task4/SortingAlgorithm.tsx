import { Transaction } from "../../data/CustomerModel"
import { CategoryEnum } from "../Task4/AccountPage"

export function BubbleSort (input, category): any{
    var list = input
    var listLength = list.length
    var swapped = true

    // 1. Go through the list using a for loop
    do {
        console.log("HIIIIII")
        swapped = false
        for (let index = 0; 
            index < listLength-1; 
            index++) 
            {
                var item1 = list[index]// Assign item1 to the item in the list at the index.
                var item2 = list[index+1]// Assign item2 to the next item in the list at index+1.

                // If the first element is greater than the second element, swap them and let swapped be true. NOTE remove the 0 inside the if statement
                if (getValue(item1, category)>getValue(item2, category)) {
                    //Swap item1 and item2 in the list
                    list[index]=item2
                    list[index+1]= item1
                    //Let swapped be true
                    console.log("Hello")
                    swapped = true
                    
            }    
        }
        
    } while (swapped)
    // return the now sorted list
   return list
}

function getValue(transaction: Transaction, category: string): any {
    switch (category){
        case CategoryEnum.AMOUNT:
            console.log("amount")
            return transaction.amount
        case CategoryEnum.DATE:
            console.log("date")

            return transaction.date
        case CategoryEnum.DESCRIPTION:
            console.log("dessc")

            return transaction.description
    }
}