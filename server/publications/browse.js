Meteor.publish( 'browse', function() {
  return [
    Channels.find(),
    Meteor.users.find( { _id: { $ne: this.userId } },
    	{ fields: { username: 1, 'profile': 1 } } )
  ];
});
