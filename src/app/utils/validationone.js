

export const validationCheck =(form, field, message,errors  )=>{
    const NameRegex = /[1234567890><?@+'`~^%&\*\[\]\{\}.!#|\\\"$';,:;=/\(\),\-\\+]/
    let isValid = true
    let validErrors = {
        firstName: "",
        lastName: "",
     
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
} else if(NameRegex.test(form.firstName)){
    isValid=false
    validErrors.lastName = "First name cannot contain special characters or numbers."
}

if(form.userName === ""){
    isValid=false;
    validErrors.userName = "user name cannot be empty"
} 

return {validErrors, isValid}
}