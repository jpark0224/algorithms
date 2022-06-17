function ArrayChunking(array, size) {
    const result = []
  
    if (size >= array.length) {
      return [array]
    } else {
      for (x = 0; x < array.length / size; x++) {
        result.push(array.slice(x * size, (x + 1) * size))
      }
      return result
    }
  }


console.log(ArrayChunking([1, 2, 3, 4], 2))
console.log(ArrayChunking([1, 2, 3, 4, 5], 2))
console.log(ArrayChunking([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(ArrayChunking([1, 2, 3, 4, 5], 4))
console.log(ArrayChunking([1, 2, 3, 4, 5], 10))