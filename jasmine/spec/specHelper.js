/*Check if an array contains duplicate elements*/
function hasDuplicates(array) {
        var values = Object.create(null);
        for (var i = 0; i < array.length; ++i) {
            var value = array[i];
            if (value in values) {
                return true;
            }
            values[value] = true;
        }
        return false;
    }
