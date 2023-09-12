const validateForm = () => {

    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const entreprise = document.getElementById('entreprise');    
    const phone = document.getElementById('phone'); 
    const website = document.getElementById('website');   
    const forfait = document.getElementById('forfait');      
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const entrepriseValue = entreprise.value.trim();
    const phoneValue = phone.value.trim();
    const websiteValue = website.value.trim();
    const forfaitValue = forfait.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let noError = true;

    //Validation du prenom
    if(prenomValue === '') {
        setError(prenom, 'Le prénom ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(prenom);
    }

    //Validation du nom
     if(nomValue === '') {
         setError(nom, 'Le nom ne peut pas être vide');
         noError = false;
    } else {
         setSuccess(nom);
    }

    //Validation de l'entreprise
    if(entrepriseValue === '') {
        setError(entreprise, 'L\'entreprise ne peut pas être vide');
        noError = false;
    } else {
            setSuccess(entreprise);
    }

    //Validation de téléphone
    if(phoneValue === '') {
        setError(phone, 'Le téléphone ne peut pas être vide');
        noError = false;
    } else {
            setSuccess(phone);
    }

    //Validation de website
    if(websiteValue === '') {
        setError(website, 'Le website ne peut pas être vide');
        noError = false;
    } else {
            setSuccess(website);
    }

    //Validation de forfait
    if(forfaitValue === '') {
        setError(forfait, 'Le forfait ne peut pas être vide');
        noError = false;
    } else {
             setSuccess(forfait);
    }

    //Validation du email
    if(emailValue === ''){
        setError(email,'Email ne peut être vide');
        noError = false;
    }
    else if(!validateEmail(emailValue)){
        setError(email,'Entrez une adresse courriel valide');
        noError = false;
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password,'Mot de passe ne peut être vide');
        noError = false;
    }
    else if(passwordValue.length < 8){
        setError(password,'Mot de passe ne peut être plus petit que 8 caractères'); 
        noError = false;
    }
    else{
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Confirmez votre mot de passe');
        noError = false;
    } 
    else if (password2Value !== passwordValue) {
        setError(password2, "Les mots de passe ne sont pas conformes");
        noError = false;
    } 
    else {
        setSuccess(password2);
    }

    console.log(noError);
    return noError;
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase());
}

const setError = (element,message) => { 
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

