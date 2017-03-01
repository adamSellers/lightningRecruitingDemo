({
    setReviews : function(component, event, helper) {
        
        helper.setReviews(component, event);
    },
    
    createReview : function(component, event, helper) {

    	var createRecordEvent = $A.get("e.force:createRecord");
    	createRecordEvent.setParams({
        	"entityApiName": "Review__c"
    	});
    	
        createRecordEvent.fire();
        
    },
    
    navigateToReview : function(component, event, helper) {
        
        var reviews = component.get("v.reviews");
        var index = event.target.dataset.index;
        var sObjectEvent = $A.get("e.force:navigateToSObject");
        sObjectEvent .setParams({
            "recordId" : reviews[index].Id ,
            "slideDevName" : "detail"
        });
        
        sObjectEvent.fire();
    
    }, //delimiter for future code 
})