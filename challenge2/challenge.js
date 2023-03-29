const getMajorityElement = (arr) => {
    const occurrence = (arr.length)/2;

    // use the object to calculate the occurrence of each element
    const obj = arr.reduce((acc, e) => {
        if(acc[e]) acc[e]++
        else acc[e] = 1

        return acc
    }, {})

    // loop over the object to fine the majority element
    for(let key in obj){
        if (obj[key] > occurrence) return +key;
    }

}

console.log(getMajorityElement([2,2,1,1,1,2,2])); // returns 2
console.log(getMajorityElement([3,2,3])); // returns 3