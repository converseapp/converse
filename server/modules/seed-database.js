import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  Seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      username: 'businessman',
      email: 'mark@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Mark', last: 'Chen' },
        age: '35',
        location: 'California, USA',
        occupation: 'Product Manager',
        bio: 'San Jose State graduate currently working as a product manager at Lyft. Born and raised on the East Coast, moved to California for college.',

      },
      beliefs: [
        {
          name: "Abortion",
          value: 5,
          response: "test"
        },
        {
          name: "Health Care",
          value: 5,
          response: "test"
        },
        {
          name: "Gun Control",
          value: 5,
          response: "test"
        },
        {
          name: "Freedom of Speech",
          value: 5,
          response: "test"
        },
        {
          name: "Immigration",
          value: 5,
          response: "test"
        }
      ],
      roles: [ 'admin' ]
     },
    {
      username: 'econlover',
      email: 'jane@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Jane', last: 'Johnson' },
        age: '20',
        location: 'Illinois, USA',
        occupation: 'Student',
        bio: 'Economics student at the University of Chicago. Raised in a conservative family in Atlanta, Georgia.',
      },
      beliefs: [
        {
          name: "Abortion",
          value: 5,
          response: "test"
        },
        {
          name: "Health Care",
          value: 5,
          response: "test"
        },
        {
          name: "Gun Control",
          value: 5,
          response: "test"
        },
        {
          name: "Freedom of Speech",
          value: 5,
          response: "test"
        },
        {
          name: "Immigration",
          value: 5,
          response: "test"
        }
      ],
      roles: [ 'admin' ]
    },
    {
      username: 'builder',
      email: 'stanley@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Stanley', last: 'Wandell' },
        age: '28',
        location: 'New York, USA',
        occupation: 'Construction Worker and Student',
        bio: 'Construction worker in New York City. I also take online courses at a local community college.',
      },
      beliefs: [
        {
          name: "Abortion",
          value: 5,
          response: "test"
        },
        {
          name: "Health Care",
          value: 5,
          response: "test"
        },
        {
          name: "Gun Control",
          value: 5,
          response: "test"
        },
        {
          name: "Freedom of Speech",
          value: 5,
          response: "test"
        },
        {
          name: "Immigration",
          value: 5,
          response: "test"
        }
      ],
      roles: [ 'admin' ],
      
    },
    {
      username: 'maria',
      email: 'maria@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Maria', last: 'Gonzalez' },
        age: '70',
        location: 'Colorado, USA',
        occupation: 'Retired',
        bio: 'Recently retired after a long successful career practicing law. Spent the first half of my career in Seattle, the latter half in Denver.',
      },
      beliefs: [
        {
          name: "Abortion",
          value: 5,
          response: "test"
        },
        {
          name: "Health Care",
          value: 5,
          response: "test"
        },
        {
          name: "Gun Control",
          value: 5,
          response: "test"
        },
        {
          name: "Freedom of Speech",
          value: 5,
          response: "test"
        },
        {
          name: "Immigration",
          value: 5,
          response: "test"
        }
      ],
      roles: [ 'admin' ]
    },
    {
      username: 'missionimpossible',
      email: 'tom@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Tom', last: 'Flynn' },
        age: '42',
        location: 'California, USA',
        occupation: 'Special Effects',
        bio: 'Just a regular guy who loves adventure. I have worked on special effects for several high-profile movies including Mission Impossible.',
      },
      beliefs: [
        {
          name: "Abortion",
          value: 5,
          response: "test"
        },
        {
          name: "Health Care",
          value: 5,
          response: "test"
        },
        {
          name: "Gun Control",
          value: 5,
          response: "test"
        },
        {
          name: "Freedom of Speech",
          value: 5,
          response: "test"
        },
        {
          name: "Immigration",
          value: 5,
          response: "test"
        }
      ],
      roles: [ 'admin' ],
    }]
  });
};

let _seedChannels = () => {
  Seed( 'channels', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ { name: 'general' } ]
  });
};

export default function() {
  _seedUsers();
  _seedChannels();
}
