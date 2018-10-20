// validation script here
const aInputs = document.querySelectorAll('input');

const regexPatterns =
{
    telephone: /^\d{11}$/,
    username: /^\w{5,12}$/,
    password: /^[@-\w]{8,20}$/,
    slug: /^[a-z0-9-]{8,20}$/,
    email:/^([\w-\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
}

function validate(input_field, regex)
{
    if(regex.test(input_field.value)) input_field.className = 'valid'
    else input_field.className = 'invalid';
}

aInputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        const input_field_name = e.target.attributes.name.value;
        validate(e.target, regexPatterns[input_field_name] )
    })
})