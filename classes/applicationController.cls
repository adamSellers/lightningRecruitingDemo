public with sharing class applicationController {
    
    @AuraEnabled
    public static Job_Application__c[] getApplications() {
        return [SELECT  Id, name, position__r.name, Candidate_Contact__r.firstName, Number_of_Reviews__c,
                        Candidate_Contact__r.lastName, picklist__c, Candidate_Contact__r.Headshot_URL__c
                FROM 	job_application__c
                WHERE   Candidate_Contact__r.Headshot_URL__c != NULL 
                ];
    }
    
    @AuraEnabled
    public static Job_Application__c[] getCandidateApplications(Id iden) {
        System.debug('ENTERED THE ONE WITH PARAMETERS');
        System.debug('Parameter was');
        System.debug(iden);
        return [SELECT  Id, name, position__r.name, Candidate_Contact__r.firstName, Number_of_Reviews__c,
                        Candidate_Contact__r.lastName, picklist__c, Candidate_Contact__r.Headshot_URL__c
                FROM 	job_application__c
                WHERE   Candidate_Contact__r.Id = :iden
                ];
        
    }
}