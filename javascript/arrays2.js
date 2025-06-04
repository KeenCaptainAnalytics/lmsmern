// let arr = [1,2,3,4,5]

// let result = arr.splice(0)

// console.log(result)
// console.log(arr)


let arr= [1,2,5,3,7,9,4]
arr.sort(function(a, b){
    if(a%2==0 && b%2!=0){
        return -1
    }
    else if(b%2==0 && a%2!=0){
        return 1
    }
    else if( a%2==0 && b%2==0){
        if(a<b){
            return -1;
        }
        else if(a==b){
            return 0
        }
        else{
            return 1
        }
    }
    else{
        if(a<b){
            return -1;
        }
        else if(a==b){
            return 0
        }
        else{
            return 1
        }
    }
})
console.log(arr)


// postive negative indexing
// let arr2= arr.slice(-3)
// console.log(arr)
// console.log(arr2)

// reduce 

// let arr=[9,2,3,4]

// let ans = arr.reduce(function(prevValue, currValue){
//     if(currValue%2==0){
//         let sum = prevValue+ currValue
//         return sum 
//     }
//     else{
//         return prevValue
//     }
// }, 0)

// console.log(ans)
// ele = 1 , prev= 0 curr= 1 => 0
// ele = 2 , prev =0 curr= 2 => 2
// ele = 3 , prev =2 curr = 3 = >  2
// ele  =4 , prev= 2 curr = 4 => 6


// ele= 1 =< curr = 1  prev= 0 => sum = 1
// ele= 9 => curr = 9 prev =1 =>sum = 10
// ele = 4 => curr = 4 prev= 10 => sum = 14
// ele= 2 = > curr= 2 prev= 14 => sum = 16
// ele = 7 => curr = 7 prev = 16 => sum =23
//ele= 6 => curr= 6 prev = 23 => sum = 29
// ele = 5 => curr= 5 prev= 29 => sum = 34




// console.log(ans)


// function callback(ele){
//    if(ele%2==0){
//     return false;
//    }
//    else{
//     return true
//    }
// }

// let arr=[3,1,6,7,2,8,9,4,5]

// let resultarr=arr.filter(callback)
// console.log(resultarr)

// function callback(ele){
//     if(ele==1){
//         return "one"
//     }
//     else if(ele==2){
//         return "two"
//     }
//     else if(ele==3){
//         return "three"
//     }
//     else if(ele == 4){
//         return "four"
//     }
//     else{
//         return "other"
//     }
// }



// let arr=[1,1,1,2,2,3]

// resultarr= arr.map(callback)

// console.log(resultarr)