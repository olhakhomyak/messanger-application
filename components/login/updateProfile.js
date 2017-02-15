if (Meteor.isClient) {
    Template.body.events({
        'click .close-update': ()=> {
            Session.set('nav-toggle', '');
        }
    });
}

if (Meteor.isServer) {

}