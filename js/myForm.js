/**
 * Created by ranweijie on 16-7-5.
 */
angular.module('myForm',['ngRoute','myForm.controllers'])
    .run(["$rootScope",function ($rootScope) {
        $rootScope.items = []
    }])
    .config(['$routeProvider',"$locationProvider" ,function($routeProvider,$locationProvider){
        $routeProvider
        .when('/edit',{
            templateUrl:"tpl/edit.html",
            controller:"editPageController"
        }).when('/preview',{
            templateUrl:"tpl/preview.html",
            controller:"previewPageController"
        }).otherwise({
            redirectTo:'/edit'
        });
        // $locationProvider.html5Mode(true);
    }]);



angular.module('myForm.controllers',[])
    .controller("editPageController",['$rootScope','$location',"$scope",function($location,$scope,$rootScope){
        // $scope.statusButtonTitle = "预览";
        // $scope.hasPopUpBox = false;

        $rootScope.statusButtonTitle = "预览";
        $rootScope.hasPopUpBox = false;

        $rootScope.openPopUpBox = function () {
            $rootScope.hasPopUpBox = true;
        };

        $rootScope.closePopUpBox = function () {
            $rootScope.hasPopUpBox = false;
        };

        $rootScope.addItem = function () {
            var addItemType = $('input[name="input-type"]:checked').val();
            var addItemId = parseInt((new Date()).getTime());
            var addItemText = addItemType == "text" ? "我是文本"+addItemId :"我是日期"+addItemId;
            var addItem = {"type":addItemType,"id":addItemId,"text":addItemText};
            // console.log(addItem);
            $rootScope.items.push(addItem);
        };
        $rootScope.removeItem = function (index) {
            for(var i in $rootScope.items){
                if($rootScope.items[i]["id"] == index){
                    $rootScope.items.splice(i,1);
                    break;
                }
            }
        }

    }])
    .controller("previewPageController",['$location',"$rootScope","$scope",function($location,$rootScope,$scope){
        $scope.statusButtonTitle = "编辑" ;

        $scope.submitForm = function () {
            // alert($rootScope.items);
            window.alert("Sorry 提交功能不完善，暂不可提交！")
        };
    }]);
