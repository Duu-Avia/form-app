

export const validationCheckTwo =(form, field, message,errors,  )=>{
    const phoneRegex = /[^0-9]/
    const emailRegex = /@yahoo.com|@gmail.com|@outlook.com|@hotmail.com|@icloud.com/
    let isValid = true
    let validErrors = {
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword:""
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