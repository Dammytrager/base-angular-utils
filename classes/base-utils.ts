/**
 * @package BaseUtils
 */
export class BaseUtils {
    /**
     * @description This method replaces an item in an array using a key, if the item does not exist in the array
                     it will be appended to the array. If the newItem is an array, the contents are added to the arr
     * @param arr | The array to be updated
     * @param newItem | item to update with or append
     * @param property | the property used to check if the item exists in the array
     * @author Malomo Damilare <damilaremalomo@gmail.com>
     */
    static updateArray (arr: any[], newItem: any, property = '_id') {
        const oldItem = arr.filter((a) => {
            return a[property] === newItem[property];
        })[0];
        if (newItem.constructor === Array) {
            return arr.concat(newItem);
        } else if (oldItem) {
            const index = arr.indexOf(oldItem);
            arr[index] = newItem;
            return arr;
        } else {
            arr.push(newItem);
            return arr;
        }
    }

    /**
     * @description This function removes an item in an array that is matched based o the property specified
     * @param arr | The array to be updated
     * @param item | item to be removed
     * @param property | the property used to check if the item exists in the array
     */
    static removeItem (arr: any[], item: any, property = '_id') {
        const removedItem = arr.filter((a) => {
            return a[property] === item[property];
        })[0];
        const index = arr.indexOf(removedItem);
        arr.splice(index, 1);
        return arr;
    }
}
