function loop(start, end, cb) {
    if(start <= end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ['Javascript', 'PHP', 'Ruby'];
loop(0, array.length-1, function(index){
    console.log('index: ', index);
});

