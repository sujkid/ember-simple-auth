import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:        service('session'),
  sessionAccount: service('session-account'),

  actions: {
    login() {
      // Closure actions are not yet available in Ember 1.12
      // eslint-disable-next-line ember/closure-actions
      this.sendAction('onLogin');
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});
