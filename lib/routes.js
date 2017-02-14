Router.configure({
    layoutTemplate: 'submittedMessage',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('messages'); }
});

Router.map(function() {
    this.route('messages', {path: '/'});
});

Router.onBeforeAction('loading');