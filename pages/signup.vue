<template>
  <div class="login-wrapper">
      <div class="form padded">
            <div class="flex-center">
                <img src="~assets/devnews-invert.png" alt="" srcset="" width="80%">
            </div>
            
            <b-field label="Email">
                <b-input type="email" v-model="form.email" placeholder="me@example.com">
                </b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password" v-model="form.password"
                    password-reveal>
                </b-input>
            </b-field>
            <div class="buttons">
                <b-button type="is-primary" expanded @click="onSignUp()">Sign Up</b-button>
                <button class="button is-fullwidth" to="/login" @click="$router.push('/login')">Log In</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import googleErrors from '~/plugins/googleErrors'
export default {
    layout:'blank',
    auth:false,
    data(){
        return {
            form:{
                email:'',
                password: ''
            }
        }
    },
    methods:{
        onSignUp(){
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqnXg92o3i46GexPEVN8tjIiqow6RxYG0', this.form)
            .then(res=> 
            {
                this.$buefy.toast.open('Yeep! you are welcome on board')
                this.form = {
                    email:'',
                    password: ''
                }
            })
            .catch(err =>{
                googleErrors(err.response.data.error.message)
               
                
            } )

        }
    }
}
</script>

<style scoped>
    .login-wrapper{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .padded{
        padding:30px 30px
    }
    .form{
        max-width: 350px;
    }
    .flex-center{
        display: flex;
        justify-content: center;
        margin-bottom:20px;
    }
</style>