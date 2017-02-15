if (Meteor.isClient) {
    Template.body.events({
        'click .update-toggle': ()=> {
            Session.set('nav-toggle', 'open');
        },
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