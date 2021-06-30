
const form= require("../pageobjects/form.Details")


describe('Validating title page', () => {
    it('validate the title', async () => {

        await form.openBrowser();
       expect(await form.homepage_Logo).toBeDisplayed();   
    });
     
     it('navigating to user information page ' , async () => {
            await form.openForm();
  
  });
 
    it('Entering the user details', async () => {
    await form.userDetails('vandna','sharma','test@gmail.com','UK (+44)','9810470884','gzb','cv','up','201001','Algeria',"15/08/2021")

    });
    
});