Template.sidebar.helpers({
  currentChannel( name ) {
    let current = FlowRouter.getParam( 'channel' );
    if ( current ) {
      return current === name || current === `@${ name }` ? 'active' : false;
    }
  },
  users() {
    let users = Meteor.users.find( { _id: { $ne: Meteor.userId() } } );
    if ( users ) {
      return users;
    }
  }
});