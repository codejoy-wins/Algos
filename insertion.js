function sort(arr){
    var temp;
    var count = 0;
    var s = 0;
    while (count < arr.length){
        for (var i =0; i < arr.length-count; i++){
            if (arr[i] > arr[i+1]){
                temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
            else{
                s++;
            }
        }
        if (s == arr.length-count){
            return arr;
        }
        else{
            s=0;
        }
        console.log(arr);
        count++;
    }
    console.log(arr);
    return arr;
}
sort([5,3,8,72,1,11,2]);