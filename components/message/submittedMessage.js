if (Meteor.isClient) {
    Template.submittedMessage.helpers({
        userData: function () {
           return Meteor.users.findOne({'_id': this.owner});
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}