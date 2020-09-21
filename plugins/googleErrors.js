import { ToastProgrammatic as Toast } from 'buefy'

const googleErrors = async(err) =>{
    switch (err) {
        case 'INVALID_EMAIL':
                Toast.open({
                    message:'Wrong email format',
                    position: 'is-bottom',
                    type: 'is-danger'
                    })
            break;
        case 'MISSING_PASSWORD':
                Toast.open({
                    message:'Miss password',
                position: 'is-bottom',
                type: 'is-danger'
                })
            break;
        case 'WEAK_PASSWORD : Password should be at least 6 characters':
                Toast.open({
                    message:'WEAK_PASSWORD : Password should be at least 6 characters',
                position: 'is-bottom',
                    type: 'is-danger'
                })
            break;
        case 'EMAIL_EXISTS : Password should be at least 6 characters':
                Toast.open({
                    message:'This account is already in use, Try another otherwise Login',
                    position: 'is-bottom',
                    type: 'is-danger'
                    })
            break;
    
        default:
            console.log(err)
            break;
    }
}

export default googleErrors