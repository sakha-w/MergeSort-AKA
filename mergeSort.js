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

  let subarrays = arr.map((el) => [el]);

  while (subarrays.length > 1) {
    let temp = [];

    for (let i = 0; i < subarrays.length; i += 2) {
      if (i + 1 < subarrays.length) {
        temp.push(merge(subarrays[i], subarrays[i + 1]));
      } else {
        temp.push(subarrays[i]);
      }
    }

    subarrays = temp;
  }

  return subarrays[0];
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

console.log(`Total execution time: ${formattedTotalExecutionTime} ms`);
