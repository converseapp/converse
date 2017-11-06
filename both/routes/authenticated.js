const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route( '/messages/:channel', {
  name: 'channel',
  action() {
    BlazeLayout.render( 'channel', { yield: 'channel' } );
  }
});

authenticatedRoutes.route( '/browse', {
  name: 'browse',
  action() {
    BlazeLayout.render( 'inapp', { yield: 'browse' } );
  }
});
