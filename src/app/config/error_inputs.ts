const account_validation_messages = {
    'email': [
      { type: 'required', message: 'Votre email est obligatoire' },
      { type: 'pattern', message: 'Entrer un Email valide' }
    ],
    'username': [
      { type: 'required', message: 'Votre nom est obligatoire' },
      { type: 'minlength', message: 'Votre nom doit etre composé d\'un minimum de 5 caractères'}
    ],  
    'message':[
      {type: 'minlength', message: 'Votre messsage doit être composé d\'un minimum de 5 caractères'}
    ]  
  }

export default account_validation_messages;