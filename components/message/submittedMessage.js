if (Meteor.isClient) {
    Template.submittedMessage.helpers({
        checkLocation: function () {
            return Meteor.user().profile.city == this.messageLocation;
        },
        userData: function () {
           return Meteor.users.findOne({_id: this.owner});
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}