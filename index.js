function merge(array1, array2) {
    let result = [];
    let i = 0;
    let j = 0;
// While there is data in both array1 and array2
       while (i < array1.length && j < array2.length) {
        
        if (array2[j] > array1[i]) {
            // if [1] > [6]
            result.push(array1[i]);
            i++
        } else {
            result.push(array2[j])
            j++;
        }
    }
    // Another loop because lets let say if array1 
    // has [1,2,3,4,5] elements 5 
    // and array2 has [6,7,8] 3 elements  
   
    while (i < array1.length) {
        result.push(array1[i])
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j])
        j++;
    }
    return result
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length/2)
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    
    return merge(left,right)
}