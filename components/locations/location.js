if (Meteor.isClient) {
    Meteor.subscribe("locations");

    Template.body.helpers({
        locations: function () {
            return Locations.find();
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });

    Meteor.publish("locations", function () {
        return Locations.find();
    })
}