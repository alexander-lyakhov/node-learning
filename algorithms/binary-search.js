const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function search(arr, val) {
  let start = 0;
  let end = arr.length;
  let middle = (start + end) >> 1;

  while(middle >= 0 && middle <= end) {

    if (arr[middle] === val) {
      return middle;
    }

    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = (start + end) >> 1;
  }

  return -1;
}

console.log('position index: ', search(arr, 5));