if (Meteor.isClient) {
    Template.body.events({
        'click .logout': ()=> {
            AccountsTemplates.logout();
        }
    });
}

if (Meteor.isServer) {

}