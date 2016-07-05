/**
 * Created by ranweijie on 16-7-5.
 */
angular.module('myForm',['ngRoute','myForm.controllers'])
    // .run(["$rootScope",function ($rootScope) {
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

        $rootScope.addItem = function (itemType) {
            // console.log("itemType==>",itemType);
            if(!itemType){
                alert("Sorry,您还没有选择要添加的类型！！");
                return
            }
            var addItemId = parseInt((new Date()).getTime()),
                addItemText = itemType == "text" ? "我是文本"+addItemId :"我是日期"+addItemId;
                addItem = {"type":itemType,"id":addItemId,"text":addItemText};

            // console.log(addItem);
            $rootScope.items.push(addItem);
        };
        $rootScope.removeItem = function (id) {
            for(var i in $rootScope.items){
                if($rootScope.items[i]["id"] == id){
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
