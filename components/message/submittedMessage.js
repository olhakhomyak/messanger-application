if (Meteor.isClient) {
    Template.submittedMessage.helpers({
        userData: function (owner) {
            var user = Meteor.users.findOne({'_id': this.owner});

            return user;
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}