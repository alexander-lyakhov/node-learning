const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function search(arr, val) {

  let start = 0;
  let end = arr.length - 1;
  let middle = (start + end) >> 1;

  while(start <= end) {

    if (val === arr[middle]) {
      return middle;
    }

    val < arr[middle]
      ? end = middle - 1
      : start = middle + 1

    middle = (start + end) >> 1;
  }

  return -1;
}

arr.forEach(val => {
  console.log('position index: ', search(arr, val))
})
