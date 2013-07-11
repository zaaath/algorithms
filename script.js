var arrayToSort = [3, 1, 2, 6];

var mergeSort = function(array) {
    if (array.length == 1)
        return array;
        
    var half1 = mergeSort(array.slice(0, array.length / 2));
    var half2 = mergeSort(array.slice(array.length / 2));
    
    var c1 = 0,
        c2 = 0;
    
    for (var l = 0; l < array.length; l++)
    {
        if ((c1 < half1.length && half1[c1] > half2[c2]) ||
            c2 >= half2.length)
        {
            array[l] = half1[c1];
            c1 += 1;
        }
        else
        {
            array[l] = half2[c2];
            c2 += 1;
        }
    }
    
    return array;
}

var arraySorted = mergeSort(arrayToSort.slice(0)); // slice(0) is for cloning arrayToSort

console.log("Origin is:\n" + arrayToSort);
console.log("Result is:\n" + arraySorted);
