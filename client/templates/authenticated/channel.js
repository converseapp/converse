import handleChannelSwitch from '../../modules/handle-channel-switch';
import sortMessages from '../../modules/sort-messages';
import handleMessageInsert from '../../modules/handle-message-insert';

const handleRedirect = ( routes, redirect ) => {
  let currentRoute = FlowRouter.getRouteName();
  if ( routes.indexOf( currentRoute ) > -1 ) {
    FlowRouter.go( redirect );
    return true;
  }
};

Template.channel.onCreated( () => {
  let template = Template.instance();
  handleChannelSwitch( template );
});

Template.channel.helpers({
  isLoading() {
    return Template.instance().loading.get();
  },
  isDirect() {
    return Template.instance().isDirect.get();
  },
  username() {
    return FlowRouter.getParam( 'channel' );
  },
  messages() {
    let messages = Messages.find( {}, { sort: { timestamp: 1 } } );
    if ( messages ) {
      return sortMessages( messages );
    }
  },
  authenticated() {
    return !Meteor.loggingIn() && Meteor.user();
  },
  redirectAuthenticated() {
    return handleRedirect([
      'login',
      'signup',
      'recover-password',
      'reset-password'
    ], '/browse' );
  },
  redirectPublic() {
    return handleRedirect( [ 'channel', 'browse' ], '/login' );
  }
});

Template.channel.events({
  'keyup [name="message"]' ( event, template ) {
    handleMessageInsert( event, template );
  }
});
