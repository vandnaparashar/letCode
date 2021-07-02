
const form= require("../pageobjects/form.Details")
const test= require("../resource/testData.json")

describe('Validating title page', () => {
    it('validate the title', async () => {

        await form.openBrowser();
       expect(await form.homepage_Logo).toBeDisplayed();   
    });
     
     it('navigating to user information page ' , async () => {
            await form.openForm();
  
  });
 
    it('Entering the user details', async () => {
    await form.userDetails(test.formData.firstname, test.formData.lasttname,test.formData.email,test.formData.country_dropdown,test.formData.phoneNumber,test.formData.addressLine1,test.formData.addressLine2,test.formData.state,test.formData.postalCode,test.formData.country_1,test.formData.dob)

    });
    
});