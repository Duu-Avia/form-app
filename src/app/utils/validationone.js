

export const validationCheck =(form, field, message,errors  )=>{
    const NameRegex = /[1234567890><?@+'`~^%&\*\[\]\{\}.!#|\\\"$';,:;=/\(\),\-\\+]/
    let isValid = true
    let validErrors = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword:""
    }

   
if(form.firstName === ""){
    isValid=false;
    validErrors.firstName = "first name cannot be empty"
} else if(NameRegex.test(form.firstName)){
    isValid=false
    validErrors.firstName = "First name cannot contain special characters or numbers."
}

if(form.lastName === ""){
    isValid=false;
    validErrors.lastName = "first name cannot be empty"
} else if(NameRegex.test(form.lastName)){
    isValid=false
    validErrors.lastName = "Lastname cannot contain special characters or numbers."
}

if(form.userName === ""){
    isValid=false;
    validErrors.userName = "user name cannot be empty"
} 

return {validErrors, isValid}
}



export const validationCheckTwo =(form, field, message,errors,  )=>{
    const phoneRegex = /[^0-9]/
    const emailRegex = /@yahoo.com|@gmail.com|@outlook.com|@hotmail.com|@icloud.com/
    let isValid = true
    let validErrors = {
    
    }

    
if(form.email === ""){
    isValid=false
    validErrors.email = "email cannot be empty"
} else if(!emailRegex.test(form.email)){
    isValid=false
    validErrors.email = "please provide a valid email address"
}

if(form.phoneNumber === ""){
    isValid=false
    validErrors.phoneNumber = "phone number cannot be empty"
} else if (phoneRegex.test(form.phoneNumber)){
    isValid=false
    validErrors.phoneNumber = "please enter a valid phonen number"
} 

if(form.password === ""){
    isValid=false
    validErrors.password =  "password cannot be empty"
} 

if (form.password !== form.confirmPassword){
    isValid=false
    validErrors.confirmPassword = "password do not match. Please try again"
} 

return {validErrors, isValid}
}

export const validationCheckThree =(form, field, message,errors,  )=>{
   
    let isValid = true
    let validErrors = {
    
    }

    
if(form.email === ""){
    isValid=false
    validErrors.email = "email cannot be empty"
} else if(!emailRegex.test(form.email)){
    isValid=false
    validErrors.email = "please provide a valid email address"
}

if(form.phoneNumber === ""){
    isValid=false
    validErrors.phoneNumber = "phone number cannot be empty"
} else if (phoneRegex.test(form.phoneNumber)){
    isValid=false
    validErrors.phoneNumber = "please enter a valid phonen number"
} 

if(form.password === ""){
    isValid=false
    validErrors.password =  "password cannot be empty"
} 

if (form.password !== form.confirmPassword){
    isValid=false
    validErrors.confirmPassword = "password do not match. Please try again"
} 

return {validErrors, isValid}
}