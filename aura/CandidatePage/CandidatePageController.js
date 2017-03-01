({
	contactSelected : function(component) {
        var event = $A.get("e.force:navigateToSObject");
        if (event) {
            event.setParams({"recordId": component.get("v.contact").Id});
            event.fire();
        }
    }, 
    
    contactFired : function(component, event, helper) {
        var event = $A.get("e.c:setApplication");
        if (event) {
            event.setParams({"activeCandidate": component.get("v.contact").Id});
            event.fire();
        }
    }, //delimiter for future code
})