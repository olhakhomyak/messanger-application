if (Meteor.isClient) {

    Template.body.events({
        'submit .newMessage' : function (event) {
            var messageContent = event.target.messageContent.value;
            Meteor.call('addMessage', messageContent);
            event.target.messageContent.value = "";

            return false;
        }
    });
}
if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}

Meteor.methods({
   addMessage: function (messageContent) {
       Messages.insert({
           messageContent: messageContent,
           createdAt: new Date(),
           owner: Meteor.userId(),
           messageLocation: Meteor.user().profile.city,
           ownerFirstName: Meteor.user().profile.firstName,
           ownerLastName: Meteor.user().profile.lastName,
       });
   }
});