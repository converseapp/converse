import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  Seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      username: 'facebookfounder',
      email: 'admin@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Mark', last: 'Zuckerburg' },
        age: '35',
        location: 'California, USA',
        occupation: 'CEO',
        bio: 'Co-founder and CEO of Facebook. Working to bring the world closer together.',
        beliefs: [
          'LGBTQ Rights',
          'Pro-life',
          'DACA',
          'Scientology'
        ]
      },
      roles: [ 'admin' ]
     },
    {
      username: 'president',
      email: 'obama@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Barack', last: 'Obama' },
        age: '48',
        location: 'Illinois, USA',
        occupation: 'President',
        bio: '44th President of the United States.',
        beliefs: [
          'Affordable Health Care',
          'Climate Change',
          'DACA'
        ]
      },
      roles: [ 'admin' ]
    },
    {
      username: 'cs',
      email: 'john@admin.com',
      password: 'password',
      profile: {
        name: { first: 'John', last: 'DeNero' },
        age: '33',
        location: 'Illinois, USA',
        occupation: 'Lecturer',
        bio: 'Professor in the EECS department at UC Berkeley.',
        beliefs: [
          'Tax Reform',
          'Immigration Reform',
          'Trees'
        ]
      },
      roles: [ 'admin' ],
      
    },
    {
      username: 'chancellor',
      email: 'carol@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Carol', last: 'Christ' },
        age: '55',
        location: 'California, USA',
        occupation: 'Chancellor',
        bio: 'Chancellor of the number one public university - UC Berkeley!',
        beliefs: [
          'DACA',
          'Job growth',
          'Pro-choice'
        ]
      },
      roles: [ 'admin' ]
    },
    {
      username: 'missionimpossible',
      email: 'tom@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Tom', last: 'Cruise' },
        age: '42',
        location: 'Mission Impossible, USA',
        occupation: 'Special Agent',
        bio: 'Just a regular guy who loves adventure',
        beliefs: [
          'Strong military',
          'Veteran care',
          'Affordable Health Care'
        ]
      },
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
