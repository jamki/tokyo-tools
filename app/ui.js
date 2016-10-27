(function(angular) {
  'use strict';
angular.module('ui1', [])
  .controller('UiController', function UiController() {
    this.from = 'W1T 4TP';
    this.fromLat = [51.522322, -0.136554];
    this.to = 'W4 5YB';
    this.toLat = [51.493979, -0.275372];
    this.commuteTime = 30;
    this.commuteTimes = [5, 10, 15, 20, 25, 30];

    this.pay = function pay() {
      // Get everything.

      // response object
      function postRequest() {

       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4 && xhttp.status == 200) {
           console.warn(xhttp.responseText);
         }
       };

       var myRequest = {
         "sources":{},
         "destinations":{
           "destination1":{
             "arrival_time":"2016-10-24T08:00:00.000Z",
           "travel_time":1800,
           "mode":"public_transport",
           "properties":["time"]}
         },
         "app_id":"9a0d9681",
         "app_key":"807e14761f777adee1c1f6321e8fecff",
         "points":{
           "0":[51.522322, -0.136554],
           "1":[51.493979, -0.275372]
         },
         "targets": {
           "target1": {
             "start_time": "2016-10-24T08:00:00.000Z"
           }
         }
       };

       var theirRequest = {
         "sources":{},
         "destinations":{
           "destination1":{
             "arrival_time":"2016-10-24T08:00:00.000Z",
           "travel_time":1800,
           "coords":[51.505431, -0.023533],
           "mode":"public_transport",
           "properties":["time"]}
         },
         "app_id":"9a0d9681",
         "app_key":"807e14761f777adee1c1f6321e8fecff",
         "points":{
           "0":[51.522322, -0.136554],
           "1":[51.493979, -0.275372]
         },
         "targets": {
           "target1": {
             "start_time": "2016-10-24T08:00:00.000Z"
           }
         }
       };


       console.log(myRequest);

       xhttp.open("POST", "http://api.traveltimeapp.com/v3/time_filter", true);
       xhttp.send(JSON.stringify(myRequest));

       function reqListener () {
  console.log(this.responseText);
}

       xhttp.onload = function () {
  // Request finished. Do processing here.
  console.log(this.response);
};
     }


     postRequest();

    };

    this.getLat = function getLat() {
      console.warn(this.fromLat);
    };

  });
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
