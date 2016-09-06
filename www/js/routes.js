angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tirolibre', {
    url: '/tirolibre',
    templateUrl: 'templates/default.html',
    abstract:true
  })

  .state('tirolibre.noticias', {
    url: '/noticias',
    views:{
        'canchas':{
            templateUrl:'templates/perfil.html'
        }
    }
  })
  
  .state('tirolibre.eventos', {
    url: '/eventos',
    views:{
        'canchas':{
            templateUrl:'templates/eventos.html'
        }
    }
  })
  
  .state('tirolibre.canchas', {
    url: '/canchas',
    views:{
        'canchas':{
            templateUrl:'templates/canchas.html'
        }
    }
  })
  
  .state('tirolibre.torneos', {
    url: '/torneos',
    views:{
        'canchas':{
            templateUrl:'templates/torneos.html'
        }
    }
  })
  
  .state('tirolibre.misgrupos', {
    url: '/misgrupos',
    views:{
        'canchas':{
            templateUrl:'templates/misgrupos.html'
        }
    }
  })
  
  .state('tirolibre.misequipos', {
    url: '/misequipos',
    views:{
        'canchas':{
            templateUrl:'templates/misequipos.html'
        }
    }
  })

  .state('tirolibre.contacto', {
    url: '/contacto',
    views:{
        'canchas':{
            templateUrl:'templates/contacto.html'
        }
    }
  })
  
  $urlRouterProvider.otherwise('/tirolibre/canchas');

});