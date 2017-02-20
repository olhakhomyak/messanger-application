if (Meteor.isClient) {
    Template.submittedMessage.helpers({
        checkLocation: function () {
            return Meteor.user().profile.city == this.messageLocation;
        },
        isOwner: function () {
            return this.owner === Meteor.userId();
        },
    });

    Template.submittedMessage.events({
        'click .delete' : function () {
            Meteor.call('deleteMessage', this._id)
        }
    });

    Template.registerHelper('formatDate', function(date) {
        return moment(date).format('HH:mm, DD.MM.YYYY');
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });

    Meteor.publish("messages", function () {
        return Messages.find();
    })
}

Meteor.methods({
    deleteMessage: function (id) {
        Messages.remove(id);
    }
});