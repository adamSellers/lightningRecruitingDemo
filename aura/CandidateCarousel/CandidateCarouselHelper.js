({
	setCurrentContact : function(component) {
        console.log('entering set current contact');
        var contacts = component.get("v.contacts");
        var currentSlide = $('.carousel').slick('slickCurrentSlide');
        
        console.log('about to try and set the event and ' + contacts[currentSlide].Id);
        
        
       var event = $A.get("e.c:setApplication");
        if (event) {
            console.log('did we get the event');
            event.setParams({"activeCandidate": contacts[currentSlide].Id});
            console.log(contacts[currentSlide].Id);
            event.fire();
        }
	}
})