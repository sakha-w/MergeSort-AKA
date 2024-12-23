const { performance } = require('perf_hooks');

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function hitungWaktuEksekusi(arraySize) {
    let arr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 1000));
    
    let startTime = performance.now();
    mergeSort(arr);
    let endTime = performance.now();
    
    return endTime - startTime;
}

let dummy = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
mergeSort(dummy);

let sizes = [57, 27, 43, 3, 9, 82];
let totalWaktuEksekusi = 0;
sizes.forEach(size => {
    let timeTaken = hitungWaktuEksekusi(size);
    totalWaktuEksekusi += timeTaken;
    console.log(`Array size: ${size} - Time taken: ${timeTaken.toFixed(3)} ms`);
});
let formattedTotalExecutionTime = totalWaktuEksekusi.toFixed(3);

// Output the total execution time
console.log(`Total execution time: ${formattedTotalExecutionTime} ms`);
