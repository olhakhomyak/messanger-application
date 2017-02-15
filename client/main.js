if (Meteor.isClient) {
    Template.body.events({
        'click .login-toggle': ()=> {
            Session.set('nav-toggle', 'open');
        },
        'click .logout': ()=> {
            AccountsTemplates.logout();
        }
    });
}

if (Meteor.isServer) {

}