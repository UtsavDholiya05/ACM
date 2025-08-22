const form = document.getElementById('form')
const input=[
    {email:"abc@gmail.com",password:"pass"},
    {email:"xyz@gmail.com",password:"pass"}

]

const show = document.getElementById('checkbox')

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(!email){
        alert('Please enter email');
    }
    else if(!password){
        alert('Please enter password');
    }

    // console.log(email);
    // console.log(password);

    let valid = false;
    for(let i = 0; i < email.length; i++)
        {
        if(input[i].email === email && input[i].password=== password)
            {
            let valid = true;
            alert('welcome');
            break;
        }
        else{
            alert('Please enter a valid detail');
        }
    }

    

})

show.addEventListener('change',()=>{
        const passinput = document.getElementById('password')
        if(show.checked){
            passinput.type='text'
        }
        else{
            passinput.type='password'
        }
    })