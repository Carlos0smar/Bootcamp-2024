// Write a JS program to concat arrays.
// Sample: let data = [
//   ["The", "little", "horse"],
//   ["Plane", "over", "the", "ocean"],
//   ["Chocolate", "ice", "cream", "is", "awesome"], 
//   ["this", "is", "a", "long", "sentence"]
// ]
// Output: ['The little horse', 'Plane over the ocean', ‘Chocolate ice cream is awesome', 'this is a long sentence']


let data = [
    ["The", "little", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"]
]

const concatArrays = (data) => {
    return data.map(arr => arr.join(' '));
}

const sentece = concatArrays(data);

console.log(sentece);