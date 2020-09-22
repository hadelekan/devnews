<template>
  <div class="login-wrapper">
      <div class="form padded">
           <div class="flex-center">
                <img src="~assets/devnews-invert.png" alt="" srcset="" width="80%">
            </div>
            <b-field label="Email">
                <b-input type="email" v-model="login.email">
                </b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password" v-model="login.password"
                    password-reveal>
                </b-input>
            </b-field>
            <div class="buttons">
                <b-button type="is-primary" outlined expanded @click="onLogIn()">Log In</b-button>
                <b-button type="is-primary" expanded @click="$auth.loginWith('google')">Sign in with Google</b-button>
                <nuxt-link to="/signup">Dont have an account</nuxt-link>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import googleErrors from '~/plugins/googleErrors'
export default {
    layout:'blank',
    data(){
        return {
            login:{
                email:'',
                password: ''
            }
        }
    },
    methods:{
        onLogIn(){
            this.$auth.loginWith('blankScheme', { data: this.login })
            .catch(err=>{
                console.log(err.response.data.error.message)
                googleErrors(err.response.data.error.message)
            })
        }
    }
}
</script>

<style>
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