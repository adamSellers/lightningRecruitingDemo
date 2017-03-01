({
	doInit : function(component, event, helper) {
		console.log('it started the init');
        var action = component.get("c.findAll");
		action.setParams({
            "pageNumber": 1
    	});
        action.setCallback(this, function(a) {
            var result = a.getReturnValue();
            console.log('results are: ' + result);
            component.set("v.contacts", result.contacts);
            console.log(result.contacts);
            window.setTimeout( 
                $A.getCallback(function() {
                    if(component.isValid()) {
                        $('.carousel').slick();
                        helper.setCurrentContact(component);
                        $('.carousel').on('swipe', function(event, slick, direction){
                            
                            helper.setCurrentContact(component);
                        });
                    }
                })
            );
            // prevent default "pull-to-refresh" behavior when running in S1
            $('.carousel').on("touchmove", function() {
                return false;
            });
        });
        $A.enqueueAction(action);
	}
})