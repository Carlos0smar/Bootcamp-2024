
const elements = [3,'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9]
const frequencyMap = elements.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

const minFrequency = Math.min(...Object.values(frequencyMap));


const leastFrequentItems = Object.entries(frequencyMap)
    .filter(([_, frequency]) => frequency === minFrequency)
    .map(([item, _]) => item);
    

console.log(leastFrequentItems)