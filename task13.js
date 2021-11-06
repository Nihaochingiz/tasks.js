//*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    if(cc.length < 4 ) {
        return cc
    } else {
        let last4 = ''
        for ( let i = cc.length - 4; i < cc.length; i++) {
            last4 += cc[i]
        }
        let mask = ''
        for(let j = 0; j < cc.length - 4; j++){
            mask += '#'
        }

        return mask + last4
    }
}

console.log(maskify(19876));