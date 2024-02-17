// Binary Search

// make a function and take two parameteres. 
// one is array, second is target element.

function BinarySearch(array,targetElement){
    // set low as 0 , low means  Starting index of array
    let low = 0;

    // set high as last element of array .
    let high = array.length-1;

    // now run a while loop until the elements found!
    while(low<=high){ 
        // find out the mid value so that we can easily make a two portion of array and jump over the numbers.
        let mid = Math.floor((low+high)/2) // to get the whole number use Math.floor.

        let guess = array[mid] // check the target elments is either match or not.
        if(guess == targetElement){
            return mid
        }
        
        if(guess >targetElement){ // guess number is too high from the target elements.
            high = mid-1 // high position is set to before the mid position
            
        }
        else{
            low = mid+1  // low position is set to right the mid positipn
        }

        return "not found"



    }

}


let checkBinarySearch = BinarySearch([1,2,3,4,5,6,7],9)
console.log(checkBinarySearch);