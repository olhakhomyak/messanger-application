if (Meteor.isClient) {
    Template.body.events({
        'click .logout': ()=> {
            AccountsTemplates.logout();
        },
        'click .openProfileModal': ()=> {
            Session.set('showLocationModal', true);
        }
    });
}

if (Meteor.isServer) {

}