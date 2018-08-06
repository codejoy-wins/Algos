function select(arr){
    var k = 0;
    var x;
    var min;
    while (k<arr.length){
        min = arr[0+k];
        console.log("min starts as:", min);
        for(var i =0+k; i<arr.length;i++){
            console.log(i,"is i");
            console.log(arr[i], "is arr[i]");
            if(arr[i]==min){
                x=i;
            }
            if(arr[i]< min){
                min = arr[i];
                x = i;
                console.log("minimum changed to", min);
                console.log("index of min is", i);
            }
        }
        console.log(min, "is min");
        console.log(x, "is x");
        console.log(arr, "is old arr");
        var temp;
        temp = arr[0+k];
        arr[0+k] = min;
        arr[x] = temp;
        console.log(arr, "is new arr");
        k++;
    }
    
}
select([23,12,43,13,3,55,101,1000]);
select([44,22,33,66,88,11,114,32,88,18]);