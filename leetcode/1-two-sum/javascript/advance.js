/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 使用散列表保存已遍历的可能值，当往后遍历存在时，即可跳出循环
 * 这里使用数组作为哈希表，也可以使用对象作为哈希表
 */
const twoSum = function(nums, target){
    var a = [];
    for(var i = 0, len = nums.length;i<len;i++){
        // 差值
        var temp = target - nums[i];
        // 如果已存在对应的差值，则
        if (a[temp] !== undefined) return [a[temp], i];
        a[nums[i]] = i;
    }
}