//Discourse.User.current()
//import User from 'discourse/controllers/user';
export default {
  name: 'padpors',
  initialize() {
    //const user = container.lookup('current-user:main');
    Discourse.User.reopen({
      hasAvatar: function() {
        if (this.avatar_template.indexOf("letter_avatar_proxy") == -1) {
          return true;
        } else {
          return false;
        }
      }.property('avatar_template'),
      hasBio: function() {
        if (this.bio_cooked== undefined || this.bio_cooked!="" ) {
          return true;
        } else {
          return false;
        }
      }.property('bio_cooked')
    });
  }
}
