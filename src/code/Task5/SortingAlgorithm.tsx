import { Transaction } from "../../data/CustomerModel";
import { Parameter } from "./AccountPage";

export function BubbleSort(input, category): any {
  var list = input;
  var listLength = list.length;
  // 1. Go through the list using a for loop
  do {
    var swapped = false;
    for (let index = 0; index < listLength; index++) {
      var item1; // Assign item1 to the item in the list at the index.
      var item2; // Assign item2 to the next item in the list at index+1.

      // If the first element is greater than the second element, swap them and let swapped be true. NOTE remove the 0 inside the if statement
      if (0) {
      }
    }
  } while (swapped);
  // return the now sorted list
}

function getValue(transaction: Transaction, category: string): any {
  switch (category) {
    case Parameter.AMOUNT:
      return transaction.amount;
    case Parameter.DATE:
      return transaction.date;
    case Parameter.DESCRIPTION:
      return transaction.description;
  }
}
