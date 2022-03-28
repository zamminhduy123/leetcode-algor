/**
 * @param {number[]} height
 * @return {number}
 */
 const min = (a,b) => (a<b) ? a : b;
 const max = (a,b) => (a<b) ? b : a;
 
 var maxArea = function(height) {
     let left = 0, right = height.length - 1;
     let maxArea = 0;
     while (left < right){
         let area = min(height[left],height[right])*(right-left);
         maxArea = max(maxArea,area);
         if (height[left] < height[right]){
             left++;
         } else {
             right--;
         }
     }
     return maxArea;
 };