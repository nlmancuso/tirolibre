angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  /*.state('tirolibre', {
    url: '/tirolibre',
    templateUrl: 'templates/default.html',
    abstract:true
  })
*/
  .state('canchas', {
    url: '/canchas',
    templateUrl: 'templates/canchas.html'
  })
  
  .state('noticias',{
      url:'/noticias',
      templateUrl:'templates/prueba.html'
  })

  .state('eventos',{
      url:'/eventos',
      templateUrl:'templates/prueba.html'
  })
  
  .state('reservas',{
      url:'/reservas',
      templateUrl:'templates/prueba.html'
  })
  
  .state('misgrupos',{
      url:'/misgrupos',
      templateUrl:'templates/prueba.html'
  })
  
  .state('misequipos',{
      url:'/misequipos',
      templateUrl:'templates/prueba.html'
  })
  
  .state('contacto',{
      url:'/contacto',
      templateUrl:'templates/prueba.html'
  })
  

  $urlRouterProvider.otherwise('/canchas');

});