// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // create new array to hold chunks
    let chunked = [];
    
    // iterate thru original array
    for (item of array) {
        // retrieve the last element in chunked
        let lastEl = chunked[chunked.length - 1];

        
        if (!lastEl || lastEl.length === size) {   
            // if the last element doesn't exist, or it its lengthe is equal to
            // chunk size:         
            chunked.push([item]);
            // push a new chunk into chunked with the current element
            
        } else {
            lastEl.push(item);
            // else add the current element into the chunk
        }
    }

    return chunked;
}

module.exports = chunk;
