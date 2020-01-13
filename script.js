// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(){
    var pwdLengthPrompt = prompt("Choose the length of the password from 8 to 128 characters");
    var pwdLength = parseInt(pwdLengthPrompt);
    var pwdChars = "";

    if(pwdLength < 8 || pwdLength > 128){
        alert("Incorrect. Please select a range of characters between 8 and 128");
    }
    else{
        var lowerCase = confirm("Would you like to use lowercase letters?");
        var upperCase = confirm("Would you like to use uppercase letters?");
        var useNumbers = confirm("Would you like to use numbers?");
        var specChars = confirm("Would you like to use special characters?");

        if(lowerCase){
            pwdChars += "abcdefghijklmnopqrstuvwxyz";
        }
        if(upperCase){
            pwdChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(useNumbers){
            pwdChars += "0123456789";
        }
        if(specChars){
            pwdChars += " !" + '"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }
        if(!specChars && !lowerCase && !upperCase && !useNumbers){
            alert("You have not made any selection. Please try again.")
        }

        console.log(pwdChars);
    }
    console.log(pwdLength);
    var ranPwd = "";

for (var i = 0, n = pwdChars.length; i < pwdLength; ++i) {
    ranPwd += pwdChars.charAt(Math.floor(Math.random() * n));
}
return ranPwd;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);