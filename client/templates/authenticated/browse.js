Template.browse.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'browse' );
});

Template.browse.helpers({
  currentChannel( name ) {
    let current = FlowRouter.getParam( 'channel' );
    if ( current ) {
      return current === name || current === `@${ name }` ? 'active' : false;
    }
  },
  fullName( name ) {
    if ( name ) {
      return `${ name.first } ${ name.last }`;
    }
  },
  displayInfo( info ) {
    if ( info ) {
      return `${ info }`;
    } else {
      return 'N/A';
    }
  },
  displayListInfo( info ) {
    if ( info ) {
      return info.join(', ');
    } else {
      return 'N/A';
    }
  },
  getList( list ) {
    if ( list ) {
      return list;
    }
  },
  getImage ( image ) {
    if ( image ) {
      return image;
    } else {
      return 'no_image_available.png';
    }
  },
  getMatches() {    
    var users = Meteor.users.find( { _id: { $ne: Meteor.userId() } } );
    var currUser = Meteor.user();
    var matches = [];
    users.forEach(function(user) {
      var currUserBeliefs = currUser.profile.beliefs;
      var userBeliefs = user.profile.beliefs;
      var numBeliefs = currUserBeliefs.length;
      var diffSum = 0;
      for (var i = 0; i < numBeliefs; i++) {
        var diff = Math.abs(userBeliefs[i].value - currUserBeliefs[i].value);
        diffSum += diff;
      }
      if (diffSum / numBeliefs > 3) {
          matches.push(user);        
      }
    });
    return matches;
  }
});