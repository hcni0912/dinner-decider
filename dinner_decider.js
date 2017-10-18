var sel, dinnerList;
var arr = [];
sel = 0;
dinnerList = {
    Japanese: false,
    Chinese: false,
    Korean: false

};
function select(el, type) {
    // var element = document.getElementById("jpn");
    
    if (el.classList.contains("selected")) {
        switch (type) {
            case 'Jpn':
                dinnerList.Japanese = false;
                break;
            case 'Chi':
                dinnerList.Chinese = false;
                break;
            case 'Kor':
                dinnerList.Korean = false;
                break;
            
    
        }


        sel --;
    }

    else     {
        switch (type) {
            case 'Jpn':
                dinnerList.Japanese = true;
                break;
            case 'Chi':
                dinnerList.Chinese = true;
                break;
            case 'Kor':
                dinnerList.Korean = true;
                break;
            
    
        }

        sel ++;
    }
    


 
    //el.classList.contains("selected") ? sel -- : sel ++;

    el.classList.toggle("selected");

   

    if (sel === 0) {
        document.getElementById("next1").classList.remove("btnActive");

      
    }
    else {
        document.getElementById("next1").classList.add("btnActive");


    }
    
    
    
}

var showResult = function() {
    var x;

    for (x in dinnerList) {
        if (dinnerList[x] === true) {
            arr.push(x);
            console.log(x);
            
        }
        
        

    }
    document.getElementById('selection').style.display = 'none';    
    document.getElementById('result').style.display = 'block';
    arr.sort(function(a, b){return 0.5 - Math.random()});

    document.getElementById('whatToEat').innerHTML = 'How about having ' + arr[0] + ' food for dinner?';

}

var z = 0;

function clickN() {
    var x = 1;
    return function () {
        
        document.getElementById('whatToEat').innerHTML = 'How about having ' + arr[x] + ' food for dinner?';
        x++;
        if (x >= arr.length) {
            x = 0;
        }

    }
}

var clickNo = clickN();

