function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var gender = document.Form.gender.value;
    var password = document.Form.password.value;
    var events = document.Form.events.value;
    var batch = document.Form.batch.value;
    var zipcode = document.Form.zipcode.value;
    var dob = document.Form.dob.value;


    var nameErr = emailErr = mobileErr = eventsErr = genderErr = passwordErr = batchErr = zipcodeErr = dobErr=true;


    if (name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }



    if (name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }



    if (batch == "Select") {
        printError("batchErr", "Please select Batch");
        var elem = document.getElementById("batch");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("batchErr", "");
        batchErr = false;
        var elem = document.getElementById("batch");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    
      
    if (dob == "") {
        printError("dobErr", "Please select DOB");
        var elem = document.getElementById("dob");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("dobErr", "");
        dobErr = false;
        var elem = document.getElementById("dob");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }







    if (email == "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {

        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(vitstudent.ac.in|)$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("emailErr", "");
            emailErr = true;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }

    if (password == "") {
        printError("passwordErr", "Please enter Password");
        var elem = document.getElementById("password");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^([a-z0-9]*[a-z]){3}[a-z0-9]*$/i
        if (regex.test(password) === true) {

            printError("passwordErr", "Please enter a Strong Password [must include 5 or more unique characters like (~ ! @ # $ % ^ * - _ = + [ { ] } / ; : , . ? )]");
            var elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
            var elem = document.getElementById("password");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if (mobile == "") {
        printError("mobileErr", "Please enter Mobile Number");
        var elem = document.getElementById("mobile");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^\d{10}$/;
        if (regex.test(mobile) === false) {

            printError("mobileErr", "Please enter Mobile Number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if (zipcode == "") {
        printError("zipcodeErr", "Please enter your Zip Code");
        var elem = document.getElementById("zipcode");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^\d{5}$/;
        if (regex.test(zipcode) === false) {
            printError("zipcodeErr", "Please enter a valid 5 Digit Zip Code");
            var elem = document.getElementById("zipcode");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("zipcodeErr", "");
            zipcodeErr === false;
            var elem = document.getElementById("zipcode");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }





    if (events == "Select") {
        printError("eventsErr", "Please select Events");
        var elem = document.getElementById("events");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("eventsErr", "");
        eventsErr = false;
        var elem = document.getElementById("events");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if (gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
    }
};