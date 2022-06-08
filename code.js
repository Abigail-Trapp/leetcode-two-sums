var twoSum = function(nums, target) {
 let map = new Map ()
for(let i=0;i<nums.length;i++){
  let firstNum = nums[i]
  let secondNum = target - firstNum
  if(map.has(secondNum)){
    return [i, map.get(secondNum)]
  }
    map.set(firstNum, i)
}
} 
console.log(twoSum([2,7,11,15], 9))

let body = document.querySelector("body")
let p = document.createElement("p")
p.innerHTML = `[2,7,11,15] => ${twoSum([2,7,11,15], 9)}`
body.append(p)