
const form= require("../pageobjects/form.Details")
const data= require("../resource/testData.json")

describe('Validating title page', () => {
    it('validate the title', async () => {

        await form.openBrowser();
       expect(await form.homepage_Logo).toBeDisplayed();   
    });
     
     it('navigating to user information page ' , async () => {
            await form.openForm();
  
  });
 
    it('Entering the user details', async () => {
    await form.userDetails(data.formData.firstname,data.formData.lasttname,data.formData.email,data.formData.country_dropdown,data.formData.phoneNumber,data.formData.addressLine1,data.formData.addressLine2,data.formData.state,data.formData.postalCode,data.formData.country_1,data.formData.dob)

    });
    
});