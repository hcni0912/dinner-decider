var sel, dinnerList;
var arr = [];
var want,
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
    want = arr[0];
    document.getElementById('whatToEat').innerHTML = 'How about having ' + arr[0] + ' food for dinner?';

}

var z = 0;

function clickN() {
    var x = 1;
    return function () {

        document.getElementById('whatToEat').innerHTML = 'How about having ' + arr[x] + ' food for dinner?';
        want = arr[x];
        x++;
        if (x >= arr.length) {
            x = 0;
        }

    }
}

var clickNo = clickN();




function setResult(result) {
    
    
          request.location = result.geometry.location;
      
          request.radius = '500';
          request.type = 'restaurant';
          map.setCenter(request.location);

          service = new google.maps.places.PlacesService(map);
          service.textSearch(request, callback);
          console.log(result.geometry.location);
          
    }

function getLatitudeLongitude(callback2, address) {
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    address = address || 'Ferrol, Galicia, Spain';
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                callback2(results[0]);
                console.log('2');
            }
        });
    }
}



var map;
var service;
var infowindow;
var pyrmont;
var request = {};

function initialize() {
    pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
  
    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
      });
      infowindow = new google.maps.InfoWindow();
  

  }
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
      console.log(results);
    }
    console.log('4');
}

function createMarker(place) {
    console.log(place);
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

  var button = document.getElementById('go');
  
  button.addEventListener("click", function () {
      var address = document.getElementById('address').value;
      getLatitudeLongitude(setResult, address)
      console.log('3');
  });