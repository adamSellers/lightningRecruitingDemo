public with sharing class CandidateController {

    @AuraEnabled
    public static ContactPagedController findAll(Decimal pageNumber) {
        Integer pageSize = 10;
        Integer offset = ((Integer)pageNumber - 1) * pageSize;
        
        ContactPagedController r =  new ContactPagedController();
        r.pageSize = pageSize;
        r.page = (Integer) pageNumber;
        r.total = [SELECT count() FROM contact 
                      WHERE Headshot_Url__c != null];
        r.contacts = [SELECT Id, FirstName, LastName, MobilePhone, MailingCity, MailingState, Headshot_Url__c FROM contact 
                      WHERE Headshot_Url__c != null];
		System.debug('r.contacts returns == ' +r);
        return r;
    }

}