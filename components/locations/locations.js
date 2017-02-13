Locations = new Mongo.Collection('locations');

if (Meteor.isClient) {
    Template.body.helpers({
        locations: function () {
            return Locations.find();
        }
    });
}
if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}