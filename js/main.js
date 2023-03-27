// set data to localstorage

function addData()
{
    let email = document.getElementById('emailLog').value;
    let pass = document.getElementById('passLog').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPass', pass);

    // other way
    // localStorage.userEmail = email;
    // localStorage.userPass = pass;


}

// get data from localstorage
function checkData()
{
    let enterEmail = document.getElementById(`email`).value;
    let enterPass = document.getElementById(`pass`).value;

    let getEmail = localStorage.getItem('userEmail');
    let getPass = localStorage.getItem('userPass');

    if(enterEmail === getEmail)
    {
        if(enterPass === getPass)
        {
            alert("Login Successul");
        }
        else
        {
            alert("Wrong Password");
        }
    }
    else
    {
        alert("Invalid credentials");
    }
}



// validation
const form = document.getElementById('form');
const userName = document.getElementById('emailLog');
const passName = document.getElementById('passLog');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = userName.value.trim();
    const passwordValue = passName.value.trim();

    if(emailValue === '')
    {
        setError(userName, 'Email is required');
    }
    else if(!isValidEmail(emailValue)) {
        setError(userName, 'Provide a valid email address');
    }
    else
    {
        setSuccess(userName);
    }

    if (passwordValue === '')
    {
        setError(passName, 'Password is required');
    }
    else if (passwordValue.length < 8 )
    {
        setError(passName, 'Password must be at least 8 characters');
    }
    else
    {
        setSuccess(passName);
    }
};