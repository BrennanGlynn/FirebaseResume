'use strict';

(function () {
  'use strict';

  angular.module('app').factory('AuthService', AuthService);

  AuthService.$inject = ['$firebaseAuth'];

  function AuthService($firebaseAuth) {
    return {
      loggedIn: loggedIn,
      login: login,
      logout: logout,
      register: register
    };

    /////////////////////////

    function loggedIn() {
      return $firebaseAuth().$getAuth();
    }

    function login(email, password) {
      return $firebaseAuth().$signInWithEmailAndPassword(email, password);
    }

    function logout() {
      return $firebaseAuth().$signOut();
    }

    function register(email, password) {
      return $firebaseAuth().$createUserWithEmailAndPassword(email, password);
    }
  }
})();
//# sourceMappingURL=authentication.service.js.map