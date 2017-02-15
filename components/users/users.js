if (Meteor.isClient) {
    Template.users.onCreated(function () {
        this.autorun(() => {
            this.subscribe('allUsers')
        });
    });

    Template.users.helpers({
        users: function () {
            return Meteor.users.find({});
        }
    });
}


if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}