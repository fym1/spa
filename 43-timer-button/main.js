requirejs.config({paths:{jquery:"//apps.bdimg.com/libs/jquery/2.1.4/jquery.min"}}),require(["jquery"],function(i){i(function(){i("#add").click(function(){require(["timer-button"],function(i){(new i).show({num:6,title:"同意",onClick:function(){alert("就知道你会同意的")}})})})})});