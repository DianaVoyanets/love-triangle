/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
        var count = 0;
    
        preferences.forEach((item, i, arr) => {
            var left = arr[i] - 1, 
                mid = arr[left] - 1,
                right = arr[mid] - 1;
            
            if (right == i && mid != right && left != right) {
                count++;
                
                arr[left] = null;
                arr[mid] = null;
                arr[right] = null;
            }
        });
    
        return count;
    };

