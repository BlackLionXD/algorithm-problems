




function removeDuplicates(num:number[]){
    if(num.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < num.length; j++) {
        if(num[i]!==num[j]){
            i+=1;
            num[i]= num[j]
        }
    }
    return i+1;

}

let nums = [1, 1, 2, 3, 3];
let k = removeDuplicates(nums);
console.log(k);           // should be 3
console.log(nums.slice(0, k));  // should be [1, 2, 3]