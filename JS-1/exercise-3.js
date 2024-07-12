// Write a JS program to remove duplicates in an array.
// Sample: let arr2 = [7, 9, 1, 'a', 'a', 'f', 9 , 4, 2, 'd', 'd']
// Output: [7, 1, ‘f’, 4, 2]

const items = [7, 9, 1, 'a', 'a', 'f', 9 , 4, 2, 'd', 'd']

const filteredItems = items.filter((item, index) => {
    let count = 0;
    const duplicateItems = [];
    items.forEach(element => {
        if(element === item) {
            count++;
            if(count > 1) {
                duplicateItems.push(item)
                count = 0;
            }
        }
    });
    return !duplicateItems.includes(item);
})

