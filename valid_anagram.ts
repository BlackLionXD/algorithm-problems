
function is_anagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
}

let s = "listen";
let t = "istnle";

console.log(is_anagram(s, t));  // true
