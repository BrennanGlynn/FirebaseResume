(function () {
  'use strict'

  const config = {
    apiKey: "AIzaSyDGlmhkR7OaNW1o6mxahgRhnDrk1ho3DvY",
    authDomain: "resume-builder-fde18.firebaseapp.com",
    databaseURL: "https://resume-builder-fde18.firebaseio.com",
    projectId: "resume-builder-fde18",
    storageBucket: "resume-builder-fde18.appspot.com",
    messagingSenderId: "696806050457"
  };
  firebase.initializeApp(config);

  angular.module('app', ['ui.router', 'firebase'])
})()