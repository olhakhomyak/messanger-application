if (Meteor.isClient) {
    Template.body.events({
        'click .close-login': ()=> {
            Session.set('nav-toggle', '');
        }
    });
}

if (Meteor.isServer) {

}