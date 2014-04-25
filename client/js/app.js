var myApp = angular.module('myApp',[])

myApp.controller('MyCtrl',['$scope', function($scope) {
    $scope.todos = []
    
    $scope.addToDo = function() {
        $scope.todos.push({
            done : "",
            desc : $scope.todoItem
        })
        $scope.todoItem = null
    }
    
    $scope.removeToDo = function(index) {
        $scope.todos.splice(index, 1)
    }
    
    
    
}])
