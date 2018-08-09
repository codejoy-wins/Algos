function generateRandomArray(){
    var rando = [];
    for (var i = 0; i<100; i++){
        rando.push(Math.floor(Math.random()*10));
    }
    // console.log(rando);
    return rando;
}
generateRandomArray();