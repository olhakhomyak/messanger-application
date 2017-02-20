if (Meteor.isClient) {
    Template['override-atPwdFormBtn'].replaces('atPwdFormBtn');
}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}