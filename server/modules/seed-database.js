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
        image: 'male3.png',
        beliefs: [
          {
            name: "Abortion",
            value: 1,
            response: "test"
          },
          {
            name: "Health Care",
            value: 8,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 10,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 2,
            response: "test"
          },
          {
            name: "Immigration",
            value: 6,
            response: "test"
          }
        ],
        reputation: "9"
      },
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
        image: 'female2.png',
        beliefs: [
          {
            name: "Abortion",
            value: 3,
            response: "test"
          },
          {
            name: "Health Care",
            value: 9,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 1,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 2,
            response: "test"
          },
          {
            name: "Immigration",
            value: 3,
            response: "test"
          }
        ],
        reputation: "8.2"
      },
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
        image: 'male5.png',
        beliefs: [
          {
            name: "Abortion",
            value: 1,
            response: "test"
          },
          {
            name: "Health Care",
            value: 5,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 8,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 1,
            response: "test"
          },
          {
            name: "Immigration",
            value: 2,
            response: "test"
          }
        ],
        reputation: "3.7"
      },
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
        image: 'female1.png',
        beliefs: [
          {
            name: "Abortion",
            value: 3,
            response: "test"
          },
          {
            name: "Health Care",
            value: 9,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 2,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 5,
            response: "test"
          },
          {
            name: "Immigration",
            value: 8,
            response: "test"
          }
        ],
        reputation: "4.9"
      },
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
        image: 'male2.png',
        beliefs: [
          {
            name: "Abortion",
            value: 7,
            response: "test"
          },
          {
            name: "Health Care",
            value: 7,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 3,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 6,
            response: "test"
          },
          {
            name: "Immigration",
            value: 10,
            response: "test"
          }
        ],
        reputation: "6.1"
      },
      roles: [ 'admin' ],
    },
    {
      username: 'allstar',
      email: 'james@admin.com',
      password: 'password',
      profile: {
        name: { first: 'James', last: 'Harper' },
        age: '29',
        location: 'Florida, USA',
        occupation: 'Personal Fitness Coach',
        bio: 'Personal fitness coach with over 8 years of experience helping athletes reach their fitness goals. In college, I did a minor in political science.',
        image: 'male4.png',
        beliefs: [
          {
            name: "Abortion",
            value: 12,
            response: "test"
          },
          {
            name: "Health Care",
            value: 14,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 15,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 4,
            response: "test"
          },
          {
            name: "Immigration",
            value: 7,
            response: "test"
          }
        ],
        reputation: "7.3"
      },
      roles: [ 'admin' ]
     },
     {
      username: 'iraqvet',
      email: 'susan@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Susan', last: 'Lee' },
        age: '45',
        location: 'Texas, USA',
        occupation: 'Veteran',
        bio: 'I served overseas in Iraq for five years. I come from a military family, and one of our core values is serving our country.',
        image: 'female3.png',
        beliefs: [
          {
            name: "Abortion",
            value: 5,
            response: "test"
          },
          {
            name: "Health Care",
            value: 1,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 14,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 14,
            response: "test"
          },
          {
            name: "Immigration",
            value: 14,
            response: "test"
          }
        ],
        reputation: "9.2"
      },
      roles: [ 'admin' ]
     },
     {
      username: 'amazingchef',
      email: 'rahul@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Rahul', last: 'Sharma' },
        age: '55',
        location: 'Washington, USA',
        occupation: 'Restaurant Owner',
        bio: 'Immigrated from India over 20 years ago. I own one of the most successful and famous Indian restaurants in Seattle.',
        image: 'male1.png',
        beliefs: [
          {
            name: "Abortion",
            value: 3,
            response: "test"
          },
          {
            name: "Health Care",
            value: 2,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 10,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 12,
            response: "test"
          },
          {
            name: "Immigration",
            value: 1,
            response: "test"
          }
        ],
        reputation: "5.6"
      },
      roles: [ 'admin' ]
     },
     {
      username: 'pro-programmer',
      email: 'jasmine@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Jasmine', last: 'Duncan' },
        age: '37',
        location: 'South Carolina, USA',
        occupation: 'Software Engineer',
        bio: 'Work as a software engineer at a start-up in Charleston. Graduate of Clemson University. Go Tigers!',
        image: 'female4.png',
        beliefs: [
          {
            name: "Abortion",
            value: 1,
            response: "test"
          },
          {
            name: "Health Care",
            value: 13,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 2,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 3,
            response: "test"
          },
          {
            name: "Immigration",
            value: 2,
            response: "test"
          }
        ],
        reputation: "8.5"
      },
      roles: [ 'admin' ]
     },
     {
      username: 'doc',
      email: 'roxanne@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Roxanne', last: 'Warner' },
        age: '60',
        location: 'Nebraska, USA',
        occupation: 'Surgeon',
        bio: 'I have over 30 years of experience working as a surgeon in Omaha. I did not pay much attention to politics when I was younger, but as I near retirement, I find myself following the news a lot more.',
        image: 'female5.png',
        beliefs: [
          {
            name: "Abortion",
            value: 15,
            response: "test"
          },
          {
            name: "Health Care",
            value: 13,
            response: "test"
          },
          {
            name: "Gun Control",
            value: 4,
            response: "test"
          },
          {
            name: "Freedom of Speech",
            value: 6,
            response: "test"
          },
          {
            name: "Immigration",
            value: 7,
            response: "test"
          }
        ],
        reputation: "9.4"
      },
      roles: [ 'admin' ]
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
