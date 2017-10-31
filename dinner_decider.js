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


        sel--;
    } else {
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

        sel++;
    }




    //el.classList.contains("selected") ? sel -- : sel ++;

    el.classList.toggle("selected");



    if (sel === 0) {
        document.getElementById("next1").classList.remove("btnActive");


    } else {
        document.getElementById("next1").classList.add("btnActive");


    }



}

var showResult = function () {
    var x;

    for (x in dinnerList) {
        if (dinnerList[x] === true) {
            arr.push(x);
            console.log(x);

        }



    }
    document.getElementById('selection').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    arr.sort(function (a, b) {
        return 0.5 - Math.random()
    });

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

var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

var search = function() {
    var request = {
        location: pyrmont,
        radius: '500',
        query: 'restaurant'
      };
    

    service.textSearch(request, callback);

};