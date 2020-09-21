<template>
  <div>
    <b-navbar class="is-primary">  
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="~assets/devnews.png"
                    alt=""
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <nuxt-link to="/">Home</nuxt-link>
            </b-navbar-item>
            <b-navbar-item v-if="$auth.loggedIn">
                <nuxt-link to="/blog">Blog</nuxt-link>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div" v-if="!$auth.loggedIn">
                <div class="buttons">
                    <nuxt-link class="button is-primary" to="/signup">
                        <strong>Create an account</strong>
                    </nuxt-link>
                    <nuxt-link to="/login" class="button is-light">
                        <strong>Log in</strong>
                    </nuxt-link>
                </div>
            </b-navbar-item>
            <b-navbar-item tag="div" v-if="$auth.loggedIn">
                <span class="pr-15">{{$auth.user.email}}</span>
                <div class="buttons">
                    <a class="button is-primary" @click="logout()">
                        Log Out
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

    <section class="main-content columns">
        
        <nuxt />
      
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:{
          status: false
      }
    }
  },
  methods:{
      logout(){
        //   this.$store.commit('userLoggedIn', this.user)
          this.$auth.logout()
        console.log('d')
        //   this.$router.go({path:'/login'})
      }
  }
}
</script>
<style>
.pr-15{
    padding-right: 15px;
}
</style>
