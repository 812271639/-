
angular.module('myApp')
    .directive('startPicker', [ function(){
        return {
            restrict: 'AE',
            template: "<input id='BeginTime' type=\"text\" class=\"form-control\" ng-model=\"params.startAt \" placeholder=\"\">",
            controller:function($scope){
                console.log($scope);
                $("#BeginTime").datetimepicker({    //时间插件开始时间
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    weekStart: 1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    minView: 2,
                    forceParse: 0,
                    endDate: new Date()
                }).on('changeDate', function (e) {
                    var startTime = e.date;
                    $('#EndTime').datetimepicker('setStartDate', startTime);
                });
            }
        };
    }])
    .directive('endPicker', [ function(){
        return {
            restrict: 'AE',
            template: "<input id='EndTime' type=\"text\" class=\"form-control\" ng-model=\"params.endAt\" placeholder=\"\">",
            controller:function($scope){
                console.log($scope);
                $("#EndTime").datetimepicker({    //时间插件结束时间
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    weekStart: 1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    minView: 2,
                    forceParse: 0,
                    endDate: new Date()
                }).on('changeDate', function (e) {
                    var endTime = e.date;
                    $('#BeginTime').datetimepicker('setEndDate', endTime);
                });
            }
        };
    }]);
