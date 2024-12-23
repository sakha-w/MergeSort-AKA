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

function hitungWaktuEksekusiRekursif(sizes, index = 0, totalWaktuEksekusi = 0) {
    if (index >= sizes.length){
        console.log(`Total execution time: ${totalWaktuEksekusi.toFixed(3)} ms`);
     return;
    }
    let arraySize = sizes[index];
    let arr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 1000));

    let startTime = performance.now();
    mergeSort(arr);
    let endTime = performance.now();
    let timeTaken = endTime - startTime;

    console.log(`Array size: ${arraySize} - Time taken: ${timeTaken.toFixed(3)} ms`);

    totalWaktuEksekusi += timeTaken;
    hitungWaktuEksekusiRekursif(sizes, index + 1, totalWaktuEksekusi);
}

let dummy = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
mergeSort(dummy);

let sizes = [57, 27, 43, 3, 9, 82];
hitungWaktuEksekusiRekursif(sizes);
