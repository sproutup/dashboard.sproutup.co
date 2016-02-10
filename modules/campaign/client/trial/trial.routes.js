'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      // Create, edit, and configure trial states
      // (They're using different headers/state prefixs than the regular trial views for now.)
      .state('company.navbar.campaign.create-trial', {
        url: '/trial/create',
        templateUrl: 'modules/campaign/client/trial/create.view.html'
      })
      .state('company.navbar.campaign.edit-trial', {
        url: '/trial/:campaignId/edit',
        templateUrl: 'modules/campaign/client/trial/edit.view.html'
      })
      .state('company.navbar.campaign.configure-trial', {
        url: '/trial/:campaignId/configure',
        templateUrl: 'modules/campaign/client/trial/edit.view.html'
      })
      // States for requested, approved, and completed trials
      .state('company.navbar.campaign.trial', {
        url: '/trial/:campaignId',
        abstract: true,
        controller: 'CampaignController',
        controllerAs: 'vm',
        templateUrl: '<div ui-view></div>'
      })
      .state('company.navbar.campaign.trial.view', {
        url: '',
        templateUrl: 'modules/campaign/client/trial/trial.view.html'
      })
      .state('company.navbar.campaign.trial.view.contributor', {
        url: '/:userId',
        templateUrl: 'modules/campaign/client/contributor-details.view.html',
        controller: 'ContributorController',
        controllerAs: 'contributor'
      });
  }
]);
