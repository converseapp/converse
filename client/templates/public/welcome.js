let template = Template.instance();
let index, carousel;

Template.welcome.onRendered( () => {
    // index = 0;
    // carousel = {
    //     browse: template.find( '[name="c-browse"]'),
    //     chat: template.find( '[name="c-chat"]'),
    //     feedback: template.find( '[name="c-feedback"]')
    // };
});

// Template.welcome.events({
//
// });

export default function( options ) {
  template = options.template;
}
