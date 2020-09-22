import LocalScheme from '@nuxtjs/auth/lib/schemes/local'
import axios from 'axios'
export default class blankScheme extends LocalScheme {
  // Override `fetchUser` method of `local` scheme
  async fetchUser (endpoint) {
  
    const data = {
      idToken: `${this.$auth.getToken(this.name).replace("Bearer ", "")}`
    }
    
    axios.post(`${this.options.endpoints.user.url}`, data)
    .then((res)=> this.$auth.setUser(res.data.users[0]))

  }
  
}