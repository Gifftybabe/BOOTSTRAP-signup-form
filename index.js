const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const middleName = document.getElementById('middleName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const address = document.getElementById('address');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const middleNameValue = middleName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const addressValue = address.value.trim();

    if(firstNameValue === '') {
        setErrorFor(firstName, 'Name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }

    if(middleNameValue === '') {
        setErrorFor(middleName, 'Name cannot be blank');
    } else {
        setSuccessFor(middleName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Name cannot be blank');
    } else {
        setSuccessFor(lastName);
    } 
 
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

       if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

       if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if(passwordValue !== password2Value)  {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }

        if(addressValue === '') {
        setErrorFor(address, 'Field cannot be blank');
    } else {
        setSuccessFor(address);
    }
        
    }


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
}