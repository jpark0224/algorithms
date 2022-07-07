function merge(nums1, m, nums2, n) {
    if (nums2.length !== n) {
        return;
    }
    // first make nums1 array to only contain first m elements
    nums1.splice(m)
    // push nums2 to nums1 array
    nums1.push(...nums2)
    // sort in non-decreasing order
    nums1.sort((a, b) => a - b)
};

// console.log(merge([1, 2, 3, 4, 5, 6], 3, [2, 5, 6], 3))
console.log(merge([0], 0, [1], 1))