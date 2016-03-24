'use strict';

angular.module('calendar').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Calendar',
      state: 'slug.company.navbar.calendar.event.list',
      class: '',
      roles: ['admin'],
      position: 4
    });
  }
]);
