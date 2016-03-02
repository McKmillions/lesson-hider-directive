angular.module('directivePractice')
.directive('lessonHider', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/templates/lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function( scope, element, attributes ) {
      scope.getSchedule.then(function(response){
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay){
          if (scheduleDay.lesson === scope.lesson) {
            scope.lessonDay = scheduleDay.weekday;
            // element.css('text-decoration', 'line-through');
            return;
          }
        });
        scope.checkLesson = function() {
          if (scope.checked) {
            element.toggleClass('checked');
          } else {
            element.toggleClass('checked');
          }
        };
      });
    }
  };
});
