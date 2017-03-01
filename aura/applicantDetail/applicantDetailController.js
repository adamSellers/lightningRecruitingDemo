({
	doInit : function(component, event, helper) {
        //use the helper functions to do the initialization
        var candidateID= component.get("v.eventId");
        console.log(candidateID);
        helper.getListings(component,event, helper, component.get("v.eventId"));
		//helper.getListing(component);
 
	}, 
    
    setAppContact : function(component, event, helper) {
        //some code to just set this attribute in the component for now
        var eId = event.getParam("activeCandidate");
        component.set("v.eventId", eId);
        console.log(eId);
        helper.getListings(component,event, helper, eId);
    }, 
    
    createApplication : function(component, event, helper) {

    	var createRecordEvent = $A.get("e.force:createRecord");
    	createRecordEvent.setParams({
        	"entityApiName": "Job_Application__c"
    	});
    	
        createRecordEvent.fire();
        
    },
    
    navigateToApplication : function(component, event, helper) {
        
        var appListings = component.get("v.appListings");
        var index = event.target.dataset.index;
        var sObjectEvent = $A.get("e.force:navigateToSObject");
        sObjectEvent .setParams({
            "recordId" : appListings[index].Id,
            "slideDevName" : "related"
        });
        
        sObjectEvent.fire();
    
    }, //delimiter for future code 
})