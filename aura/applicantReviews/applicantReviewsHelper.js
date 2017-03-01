({
    setReviews : function(component, event) {
        
        //the code for setting the reviews
        var candidateId = event.getParam("activeCandidate");
        console.log("the candidate id is: " + candidateId);
        
        var action = component.get("c.getReviews");
        
        action.setParams({
            "iden" : candidateId           
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            // console.log("the state param is: " + state);
            if (component.isValid() && state == 'SUCCESS') {
                var reviews = response.getReturnValue();
                component.set("v.reviews", reviews);
                component.set("v.reviewsExist", reviews.length > 0);
               // console.log("do the reviews exist - " + component.get("v.reviewsExist"));
            }
        });
        $A.enqueueAction(action);
    }, //delimiter for future code
})