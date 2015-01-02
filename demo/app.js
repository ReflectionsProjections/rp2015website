


(function (angular) {
  'use strict';

  angular
    .module('myApp', [ 'vAccordion' ])

    // You can override the default class names
    .config(function (accordionConfig) {

      accordionConfig.classes = {
        accordion: 'Accordion Accordion--dafault',
        pane: 'Accordion-pane',
        paneHeader: 'Accordion-paneHeader',
        paneContent: 'Accordion-paneContent',

        expandedState: 'is-expanded'
      };

    })

    .controller('MainController', function ($scope) {

      $scope.firstAccordionControl = {
        onExpand: function (expandedPaneIndex) {
          console.log('expanded:', expandedPaneIndex);
        },
        onCollapse: function (collapsedPaneIndex) {
          console.log('collapsed:', collapsedPaneIndex);
        }
      };

      $scope.panes = [
        {
          header: 'Speaker 1',
          content: 'Sup I am a hotshot speaker! Check me out bruh.'
        },
        {
          header: 'Speaker 2',
          content: 'Sup I am also a hotshot speaker! Check me out bruh.'
        },
        {
          header: 'Speaker 3',
          content: 'Sup I am the best speaker by a long shot! Do not even waste your time with Speaker 1 or Speaker 3, because I am the best. Check me out bruh!',

          subpanes: [
            {
              header: "Speaker 3's first cool link",
              content: 'swag swag swag swag put something here later swag swag'
            },
            {
              header: "Speaker 3's second cool link",
              content: 'swag swag swag put something here later as well swag swag'
            }
          ]
        }
      ];
      
    });

})(angular);