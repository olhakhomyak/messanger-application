Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
    Template.body.helpers({
        messages: function () {
            return Messages.find();
        }
    });

    Template.body.events({
        'submit .newMessage' : function (event) {
            var messageContent = event.target.messageContent.value;

            Messages.insert({
                messageContent: messageContent,
                createdAt: new Date()
            });

            event.target.messageContent.value = "";

            return false;
        }
    });

    Template.submittedMessage.events({
        'click .delete' : function () {
            Messages.remove(this._id);
        }
    });

    Template.body.helpers({
        locations: "{{> location}}"
    });

    Template.registerHelper('formatDate', function(date) {
        return moment(date).format('HH:mm DD.MM.YYYY');
    });
}
if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}