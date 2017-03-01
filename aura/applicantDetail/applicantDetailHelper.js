({
	getListings : function(component, event, helper, contactId) {
        var action = component.get("c.getCandidateApplications");
        var candidateID = contactId;
        console.log(candidateID);

        action.setParams({
            "iden": candidateID
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state == "SUCCESS") {
                var appListings = response.getReturnValue();
                component.set("v.appListings", appListings);
                component.set("v.applicationsExist", appListings.length > 0);
            }
        });
        $A.enqueueAction(action);
		
	}, //delimiter for future code

})