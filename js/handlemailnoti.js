const sendemailoffer = document.querySelector(".sendemailoffer")
var orderbasket = {}

//add event listiner to button
sendemailoffer.addEventListener("click",(e) => {
    window.location.href = "#pickupinfo"
    for (let key in orderbasket) {
        delete orderbasket[key]["itemobj"]["productimage"]
        delete orderbasket[key]["itemobj"]["isinitial"]


    }

    encryptCart(orderbasket).then(o => console.log(o))
    // alert("Sie werden nun zu ihrem email Postfach umgeleitet. Einfach als auf senden drücken und wir können sie einordnen"+vigenereEncrypt(plaintext, "mykey")+"")
    
    // function redirectToEmail() {
    //     // var recipient = "recipient@example.com";
    //     // var subject = "Hello from the Button!";
    //     // var htmlContent = "<p>This is <strong>HTML</strong> content in the email body.</p>";

    //     // var mailtoLink = "mailto:" + recipient +
    //     //                     "?subject=" + encodeURIComponent(subject) +
    //     //                     "&body=" + encodeURIComponent(htmlContent);

    //     // window.location.href = mailtoLink;
    //     var mailtoLink = "mailto:recipient@example.com?subject=Hello&body=This%20is%20the%20body%20of%20the%20email";
    //     window.open(mailtoLink, '_blank');
    // }
    // redirectToEmail()
    async function encryptCart(orderbasket) {
        SHAout = await enSHA256(JSON.stringify(orderbasket))
    
        outgo_hash = encryptMessage("test")
        return outgo_hash
         
    }
})

