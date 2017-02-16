if (Meteor.isClient) {
    Template.updateCity.events({
        'submit .updateCity': function(event) {
            var updatedCity = $(event.target).find('option:selected').val();
            Meteor.call('updateCity', updatedCity);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}

Meteor.methods({
   updateCity: function (updatedCity) {
       Meteor.users.update(Meteor.userId(), {$set: {"profile.city": updatedCity}});
       console.log(Meteor.user().profile);
   }
});