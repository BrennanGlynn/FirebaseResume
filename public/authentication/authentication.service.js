(function () {
  'use strict'

  angular
  .module('app')
  .factory('AuthService', AuthService)

  AuthService.$inject = ['$firebaseAuth']

  function AuthService($firebaseAuth) {
    return {
      loggedIn,
      login,
      logout,
      register
    }

    /////////////////////////

    function loggedIn() {
      return $firebaseAuth().$getAuth()
    }

    function login(email, password) {
      return $firebaseAuth().$signInWithEmailAndPassword(email, password)
    }

    function logout() {
      return $firebaseAuth().$signOut()
    }

    function register(email, password) {
      return $firebaseAuth().$createUserWithEmailAndPassword(email, password)
    }
  }
})()