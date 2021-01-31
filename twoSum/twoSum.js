var twoSum = function(nums, target) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
      let diff = Math.abs(target - nums[i]);
      console.log(hashTable, diff)
      if (hashTable.hasOwnProperty(diff)) {
          return [hashTable[diff], i]
      } else {
          hashTable[nums[i]] = i;
      }
  }
};


/*
class Solution:
  def twoSum (self, nums, target):
    let d = {}
    for i in range(len(nums)):
      diff = target - nums[i]
      if d[diff] in d:
        return [d[diff], i]
      d[nums[i]] = 1
*/
