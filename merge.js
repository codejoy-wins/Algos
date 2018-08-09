function mergey(arr1,arr2){
    if (arr2 === undefined){
        // console.log("UNDEF R2");
        arr2 = [1000,1001];
        // return;
    }
    // console.log("arr1 is:", arr1);
    // console.log("arr2 is:", arr2);

    var l = 0;
    var r = 0;
    var ans = [];
    for (var i = 0; i < arr1.length+arr2.length; i++){
        // console.log(i, "i");
        // console.log(r,"r");
        // console.log(l,'l');
        if (arr1[l] < arr2[r] || arr2[r] === undefined){
            ans.push(arr1[l]);
            l++;
        }
        else{
            // console.log(arr2[r]);
            ans.push(arr2[r]);
            r++;
        }
    }
    // console.log(ans);
    return ans;
}
// sorted1 = [2,4,6,12,13];
// sorted2 = [3,14,16,22,33];
// mergey(sorted1, sorted2);
// split into 10 sorted lists with one element
// repeatedly merge pairs of lists

// merge only works on sorted lists, so we first break down the unsorted list into many sorted lists, and merge them all

// function listSort(arr1,arr2,arr3,arr4){
//     alpha = mergey(arr1,arr2);
//     beta = mergey(arr3,arr4);
//     theta = mergey(alpha, beta);
// }

// listSort([11],[7],[16],[10]);
// listSort([7],[11],[16],[10]);

//  now I just need a function to take an unsorted list and break it down into sorted lists of size 1

function breakdown(arr){
    var answer = {};
    var final_answer = [];
    for (var i =0; i < arr.length; i++){
        answer[i] = [arr[i]];
    }
    for (var key in answer){
        final_answer.push(answer[key]);
    }
    // console.log(final_answer);
    return final_answer;
}
// listt = [4,23,5,1,44,21,6,2,420,24];
// breakdown(listt);


// put em all together


function superSort(arr){
    var supersorted = false;
    console.log(arr, "original array");
    var broke = breakdown(arr);
    // console.log(broke, "broke array");
    while (supersorted == false){
        // console.log("in while loop");
        hyperanswer = {};
        for (var i = 0; i < broke.length; i+=2){
            // mergey(broke[i],broke[i+1]);
            hyperanswer[i] = mergey(broke[i],broke[i+1]);
        }
        // console.log(hyperanswer, 'hyperanswer');
        var superanswer = [];
        for (var key in hyperanswer){
            superanswer.push(hyperanswer[key]);
        }
        console.log(superanswer, "superanswer");
        // breaks here
        // console.log(broke,"old broke");
        // console.log(broke.length);
        broke = superanswer;
        // console.log(broke,"new broke");
        // console.log(broke.length);


        if (broke.length <= 1){
            supersorted = true;
        }
    }
    // console.log("finale");
    // console.log(broke, 'final broke');

    var final = broke[0];
    // console.log('final: ', final);
    var grand_finale = [];
    for (var i =0; i<final.length; i++){
        if (final[i]<1000){
            grand_finale.push(final[i]);
        }
    }
    console.log('grand finale:', grand_finale);
}
// TEST CASES

// array = [4,23,5,1,44,21,6,2,420,24];
// superSort(array);

// array2 = [23,12,43,13,3,55,101,999,9];
// superSort(array2);

// array3 = [44,22,33,66,88,11,114,32,88,18,99];
// superSort(array3);

function generateRandomArray(){
    var rando = [];
    for (var i = 0; i<10000; i++){
        rando.push(Math.floor(Math.random()*1000));
    }
    // console.log(rando);
    return rando;
}
generateRandomArray();
var rando = generateRandomArray();

// supersort
// superSort(rando);


//compare to other merge methods

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
            console.log(arr);
            return arr;
        }
        else{
            s=0;
        }
        // console.log(arr);
        count++;
    }
    // console.log(arr);
    return arr;
}
// sort(rando);
// superSort(rando);
superSort([6,2,3,5,15,21,4,14]);