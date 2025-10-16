function merge_intervals(array = []) {
    let newArray = []

    for (let index = 0; index < array.length; index++) {

        if (array[index] == null) {
            continue
        }

        const element = array[index];
        const nextElement = array[index + 1]

        if (nextElement && element[0] <= nextElement[0] && nextElement[0] <= element[1]) {
            newArray.push([element[0], nextElement[1]])
            array[index] = null
            array[index + 1] = null
        } else {
            newArray.push(element)
        }
    }
    return newArray;
}


const firstTest = [[1,3], [2,6], [8,10], [15,18]]
const secondTest = [[1,4], [4,5]]

console.log(merge_intervals(firstTest))
console.log(merge_intervals(secondTest))