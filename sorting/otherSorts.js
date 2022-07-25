
const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      let change = false;
      for (let j = 0; j < arr.length - (i + 1); j++) {
        if (arr[j] > arr[j + 1]) {
          change = true;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      if (!change) break;
    }
    return arr;
  };

  const quickSort = arr => {
    if (arr.length < 2) return arr;
  
    const pivot = arr[Math.floor(Math.random() * arr.length)];
  
    let left = [];
    let equal = [];
    let right = [];
  
    for (let element of arr) {
      if (element > pivot) right.push(element);
      else if (element < pivot) left.push(element);
      else equal.push(element);
    }
  
    return quickSort(left)
      .concat(equal)
      .concat(quickSort(right));
  };


  const radixSort = arr => {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;
  
    while (divisor < maxNum) {
      let buckets = [...Array(10)].map(() => []);
  
      for (let num of arr) {
        buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
      }
  
      arr = [].concat.apply([], buckets);
      divisor *= 10;
    }
    return arr;
  };


  function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

//Heap Sort
//Average Time: O(n log(n))
function heapSort(arr){
    var sorted = [];
    var heap1 = new MaxHeap();
    
    for(let i=0; i<arr.length; i++){
        heap1.insert(arr[i]);
    }
    
    for(let i=0; i<arr.length; i++){
        sorted.push(heap1.delete());
    }
    return sorted;
}

//counting sort v1
function countingSort(arr){
    return arr.reduce( (acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [] )
              .reduce( (acc, n, i) => acc.concat(Array(n).fill(i)), [] ); 
  }

//counting sort v2
  const countingSort = (arr = []) => {
    const max = findMaximum(arr);
    const counts = new Array(max + 1);
    counts.fill(0);
    arr.forEach(value => counts[value]++);
    const res = [];
    let resultIndex = 0;
    counts.forEach((count, index) => {
       for (let i = 0; i < count; i++) {
          res[resultIndex] = index;
          resultIndex++;
       };
    });
    return res;
 };