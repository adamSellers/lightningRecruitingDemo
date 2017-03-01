public with sharing class applicantReviewCtrl {
    
	@AuraEnabled
    //create the class for getting the reviews for selected contact Id
    public static Review__c[] getReviews(Id iden) {
        
        return [SELECT Id, Name, Assessment__c, Candidate_Name__c, Job_Application__r.Name, Overall_Assessment__c, Rating__c, Position__c 
				FROM   Review__c
                WHERE  job_application__r.candidate_contact__r.Id = :iden];
    }
}