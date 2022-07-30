function validation() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const accept = document.getElementsByName('checkbox').checked;

    if (firstname == "") {
        document.getElementById("fname").innerHTML =
            "*Please fill the First Name field";
        return false;
    }

    if (lastname == "") {
        document.getElementById("lname").innerHTML =
            "*Please fill the Last Name field";
        return false;
    }

    if (email == "") {
        document.getElementById("mail").innerHTML =
            "*Please fill the Email field";
        return false;
    }

    if (mobile == "") {
        document.getElementById("mobileno").innerHTML =
            "*Please fill the Mobile Number field";
        return false;
    }

    if (document.getElementById('accept').checked)
     { 
        return true;
     } 
     else {
        document.getElementById("condition").innerHTML =
        "*Checkbox not checked";
          return false; 
        }
}