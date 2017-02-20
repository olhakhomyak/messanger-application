if (Meteor.isClient) {
    Template.updateProfile.events({
        'submit .updateProfile': function(event) {
            event.preventDefault();

            var updatedCity = $(event.target).find('option:selected').val();
            var firstName = event.target.firstName.value;
            var lastName = event.target.lastName.value;
            Meteor.call('updateProfile', updatedCity, firstName, lastName);
            $('#updateProfile').modal('hide');

            return false;
        }
    });
    Template.updateProfile.helpers({
        currentLocation: function(key){
            return key == Meteor.user().profile.city ? 'selected' : '';
        }
    })
}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}

Meteor.methods({
   updateProfile: function (updatedCity, firstName, lastName) {
       Meteor.users.update(Meteor.userId(), {$set: {"profile": {"city": updatedCity, "firstName": firstName, "lastName": lastName}}});
   }
});