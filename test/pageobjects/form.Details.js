
const Page = require('./page');

class formInfo extends Page {
    
    get homepage_Logo() {
        return $("//img[@alt='letcode']")
    };
    get form_Btn() {return $("//button[@name='forms']")};
    get firstname(){return $("//input[@id='firstname']")};
    get lasttname(){return $("//input[@id='lasttname']")};
    get Email()    {return $("//input[@id='email']")};
    get country_dropdown(){return $("//label[text( )='Country code']/..//select")};
    get phoneNumber() {return $("//input[@placeholder='Phone Number']")};
    get addressLine1(){return $("//input[@placeholder='Address Line-1']")};
    get addressLine2(){return $("//input[@placeholder='Address Line-2']")};
    get state(){return $("//input[@placeholder='State']")};
    get postalCode( ){return $("//input[@placeholder='Postal-Code']")};
    get country () {return $("//label[text( )='Country']/..//select")};
    get dob(){return $("//input[@type='date']")};
    get gender(){return $("//input[@id='female']")};
    get checkbox(){ return $("//input[@type='checkbox']")};
    get submit(){return $("//input[@type='submit']")};


    
    async openBrowser () {
        return super.open('test');
    }
    

  async openForm(){
    (await (await this.homepage_Logo).waitForClickable({ timeout:1000}));
     (await this.form_Btn).click();

  }

async userDetails(firstname,lasttname,Email,country,phoneNumber,addressLine1,addressLine2,state,postalCode,country_1,dob){  
    await(await this.firstname).setValue(firstname);
    await(await this.lasttname).setValue(lasttname);
    await(await this.Email).setValue(Email);
    await (await this.country_dropdown).selectByVisibleText(country)
    await(await this.phoneNumber).setValue(phoneNumber);
    await(await this.addressLine1).setValue(addressLine1);
    await(await this.addressLine2).setValue(addressLine2);
    await(await this.state).setValue(state);
    await(await this.postalCode).setValue(postalCode);
    await(await this.country).selectByVisibleText(country_1);
    await(await this.dob).setValue(dob);
     await(await this.gender).click();
     await (await this.checkbox).click();
     await(await this.submit).click();
}

}

module.exports = new formInfo();
