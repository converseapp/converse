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
        location: 'California, USA',
        bio: 'Co-founder and CEO of Facebook. Working to bring the world closer together.',
        beliefs: [
          'LGBTQ Rights',
          'Pro-life',
          'DACA',
          'Scientology'
        ],
        links: [
          'https://www.youtube.com/watch?v=4VwElW7SbLA',
          'https://www.youtube.com/watch?v=wsUhyiO31DY'
        ],
        recent: [
          'https://www.nytimes.com/2017/11/02/us/politics/tax-plan-republicans.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=a-lede-package-region&region=top-news&WT.nav=top-news',
          'https://www.nytimes.com/2017/11/02/your-money/tax-plan-changes-predict.html?action=click&contentCollection=Politics&module=RelatedCoverage&region=Marginalia&pgtype=article'
        ],
        badges: [
          'chat-pro',
          'top-reviewed'
        ],
        testimonials: [
          'Open-minded and willing to listen to others. Highly recommended! - Steve'
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
        location: 'Illinois, USA',
        bio: '44th President of the United States.',
        beliefs: [
          'Affordable Health Care',
          'Climate Change',
          'DACA'
        ],
        links: [
          'https://www.youtube.com/watch?v=LUvDfvZVRck',
          'https://www.youtube.com/watch?v=udrKnXueTW0'
        ],
        recent: [
          'http://www.cnn.com/2017/11/03/politics/trump-swamp-tax-reform/index.html',
          'http://www.cnn.com/2017/11/02/politics/elizabeth-warren-democratic-party/index.html'
        ],
        badges: [
          'respected-voice',
          'five-month-active-user'
        ],
        testimonials: [
          'Well-respected and a great person to talk to! - Joe'
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
        location: 'Illinois, USA',
        roles: [ 'admin' ],
        bio: 'Professor in the EECS department at UC Berkeley.',
        beliefs: [
          'Tax Reform',
          'Immigration Reform',
          'Trees'
        ],
        links: [
          'https://www.youtube.com/watch?v=xnW9uEWZyPc',
          'https://www.youtube.com/watch?v=zmhkZ-pdQTg'
        ],
        recent: [
          'https://www.washingtonpost.com/business/economy/the-gops-bill-is-a-sensible-framework--but-still-a-deficit-exploding-tax-cut-for-the-rich-and-corporations/2017/11/02/28b3688c-bffe-11e7-959c-fe2b598d8c00_story.html?hpid=hp_hp-top-table-main_taxanalysis-920pm%3Ahomepage%2Fstory&utm_term=.029b59aab84e',
          'https://www.washingtonpost.com/business/economy/republican-tax-plan-to-lower-cap-on-mortgage-interest-deduction-to-500000-loans/2017/11/02/c0f594d6-bfd5-11e7-8444-a0d4f04b89eb_story.html?hpid=hp_hp-top-table-main_taxreform-1010am%3Ahomepage%2Fstory&utm_term=.27c1c4d0b378'
        ],
        badges: [
          'great-reputation',
          'chat-pro'
        ],
        testimonials: [
          'Makes a strong effort to build empathy with the people he talks to. Enjoyable conversation! - Paul'
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
        location: 'California, USA',
        roles: [ 'admin' ],
        bio: 'Chancellor of the number one public university - UC Berkeley!',
        beliefs: [
          'DACA',
          'Job growth',
          'Pro-choice'
        ],
        links: [
          'https://www.youtube.com/watch?v=XHDbYQst9t0'
        ],
        recent: [
          'http://www.latimes.com/politics/la-pol-ca-tax-cuts-reaction-20171103-story.html',
          'http://www.dailycal.org/2017/11/02/uc-berkeley-cut-deficit-half-fiscal-years-2016-17-chancellor-announces/'
        ],
        badges: [
          'free-speech-promoter'
        ],
        testimonials: [
          'Needs to do more in terms of learning how to listen to the person they are talking to - Anonymous'
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
        location: 'Mission Impossible, USA',
        roles: [ 'admin' ],
        bio: 'Just a regular guy who loves adventure',
        beliefs: [
          'Strong military',
          'Veteran care',
          'Affordable Health Care'
        ],
        links: [
          'https://www.youtube.com/watch?v=GX8EU9MeyJw'
        ],
        recent: [
          'https://www.wsj.com/articles/mr-under-the-radar-jerome-powell-trumps-federal-reserve-pick-signals-continuity-1509643306',
          'https://www.wsj.com/articles/prosecutors-consider-bringing-charges-in-dnc-hacking-case-1509618203',
         ],
        badges: [
          'top-reviewed'
        ],
        testimonials: [
          'Once you give him a mission, he will see it through. Very dependable! - Anonymous'
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
