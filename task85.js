

class Validator{
    constructor(email,domain,date,phone) {
     this.email = email;
     this.domain = domain;
     this.date = date;
     this.phone = phone;
    }
    isEmail (){
        var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


        if (regEmail.test(this.email) == false) {
            return false
        }
        else return true
    }
    
    isDomain() {
        var regDomain = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;


        if (regDomain.test(this.domain) == false) {
            return false
        }
        else return true
    }

    isDate(){
        var regDate= /^\d{1,2}\.\d{1,2}\.\d{4}$/;


        if (regDate.test(this.date) == false) {
            return false
        }
        else return  true
    }

    isPhone(){
        var regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;


        if (regPhone.test(this.phone) == false) {
            return false
        }
        else return true
    }
}



const newData = new Validator('phphtml@mail.ru','phphtml.net','12.05.2020','8-981-287-87-87')


console.log(newData.isEmail())
console.log(newData.isDomain())
console.log(newData.isDate())
console.log(newData.isPhone())