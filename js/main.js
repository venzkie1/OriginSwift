// set data to localstorage

function addData()
{
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPass', pass);

    // other way
    // localStorage.userEmail = email;
    // localStorage.userPass = pass;


}

// get data from localstorage
function checkData()
{
    let enterEmail = document.getElementById(`emailLog`).value;
    let enterPass = document.getElementById(`passLog`).value;

    let getEmail = localStorage.getItem('userEmail');
    let getPass = localStorage.getItem('userPass');

    if(enterEmail = getEmail)
    {
        if(enterPass = getPass)
        {
            alert("Login Successul");
        }
        else
        {
            alert("Wrong Email Password");
        }
    }
    else
    {
        alert("Invalid Email");
    }
}