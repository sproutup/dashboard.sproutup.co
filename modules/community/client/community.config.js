'use strict';

angular.module('community').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Community',
      state: 'community.requests',
      class: 'menu-item community',
      roles: ['*'],
      position: 3
    });
  }
]);