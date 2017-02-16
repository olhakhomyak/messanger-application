if (Meteor.isClient) {
    Meteor.subscribe("messages");

    Template.body.helpers({
        messages: function () {
            return Messages.find();
        }
    });

    Template.submittedMessage.helpers({
        isOwner: function () {
            return this.owner === Meteor.userId();
        }
    });

    Template.body.events({
        'submit .newMessage' : function (event) {
            var messageContent = event.target.messageContent.value;
            Meteor.call('addMessage', messageContent);

            event.target.messageContent.value = "";

            return false;
        }
    });

    Template.submittedMessage.events({
        'click .delete' : function () {
           Meteor.call('deleteMessage', this._id)
        }
    });

    Template.registerHelper('formatDate', function(date) {
        return moment(date).format('HH:mm DD.MM.YYYY');
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
   addMessage: function (messageContent) {
       Messages.insert({
           messageContent: messageContent,
           createdAt: new Date(),
           owner: Meteor.userId(),
           messageLocation: Meteor.user().profile.city
       });
   },
    deleteMessage: function (id) {
        Messages.remove(id);
    }
});