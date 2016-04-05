/*
  Event Module Configuration Function
  --------------------------

  This is where you pass in config time options to Providers.
  For example, this is where you can configure $stateProvider
  to set up your routing.

  STEP 1: Use $stateProvider.state to add a single route called
          events that points to /events/:id

          It should use the EventsController and call it eventCtrl.

          It should use the ./event.html template. Don't forget,
          we use require() to include templates!
*/
function config($stateProvider) {
  $stateProvider
    .state('events', {
      url: '/events/:id',
      controller: 'EventsController as eventCtrl',
      template: require('./event.html')
  });
}

export default config;
