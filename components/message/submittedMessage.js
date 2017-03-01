if (Meteor.isClient) {
    Meteor.subscribe("messages");

    Template.body.helpers({
        messages: function () {
            return Messages.find({'messageLocation': Meteor.user().profile.city});
        }
    });

    Template.submittedMessage.helpers({
        checkLocation: function () {
            return Meteor.user().profile.city == this.messageLocation;
        },
        isOwner: function () {
            return this.owner === Meteor.userId();
        }
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
        // console.log(Meteor.users.find().fetch());
        return Messages.find();
    })
}

Meteor.methods({
    deleteMessage: function (id) {
        Messages.remove(id);
    }
});