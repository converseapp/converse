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
  users() {
    let users = Meteor.users.find( { _id: { $ne: Meteor.userId() } } );
    if ( users ) {
      console.log(users);
      return users;
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
  getBeliefs( beliefs ) {
    console.log(beliefs);
    if ( beliefs ) {
      console.log("test");
      // beliefs.forEach(function(belief) {
      //   console.log(belief);
      //   // console.log(belief.value);
      //   // console.log(belief.response);
      // });
    }
  }
});