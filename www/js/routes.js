angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tirolibre', {
    url: '/',
    templateUrl:'index.html'
    abstract:true
  })

  
  
  .state('tirolibre.canchas', {
    url: '/canchas',
    views{
      'canchas': {
        templateUrl:'templates/canchas.html'
        }
    }
  })
  
  /*.state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })*/
  
  /*.state('tirolibre.noticias',{
      url:'/noticias',
      templateUrl:'templates/prueba.html'
  })

  .state('tirolibre.eventos',{
      url:'/eventos',
      templateUrl:'templates/prueba.html'
  })
  
  .state('tirolibre.reservas',{
      url:'/reservas',
      templateUrl:'templates/prueba.html'
  })
  
  .state('tirolibre.misgrupos',{
      url:'/misgrupos',
      templateUrl:'templates/prueba.html'
  })
  
  .state('tirolibre.misequipos',{
      url:'/misequipos',
      templateUrl:'templates/prueba.html'
  })
  
  .state('tirolibre.contacto',{
      url:'/contacto',
      templateUrl:'templates/prueba.html'
  })
  */

  $urlRouterProvider.otherwise('/tirolibre');

});