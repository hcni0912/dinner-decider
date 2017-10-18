console.log('hello!')

function retirementfn(retirement) {
    var a = 'what am I?';
    return function () {
        console.log(retirement +a);
    }
}

// console.log(a);

var ret = retirementfn();

ret(123);