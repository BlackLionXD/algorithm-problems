

function findNum(num, k){
   let xor1=0;
   for(let i=0;i<=k;i++){
    xor1= xor1^i;
}
    let xor2 =0;
    for(let i=0;i<num.length;i++){
        xor2 = xor2^num[i];
    }
    
    return xor1^xor2;

}

nums = [3,0,2];
k = 3;

console.log(findNum(nums,k));