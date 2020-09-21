<template>
  <div class="container pt-50">
      <h1 class="title">{{post.title}}</h1>

      <h2 class="subtitle mt-50"> by {{ post.author}}</h2>
      <hr>
      <p>
          {{post.content}}
      </p>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return {

        }
    },
    asyncData({store}){
        console.log('sd', store.state.selectedPost)
        return{
            post: store.state.selectedPost
        }
    }
}
</script>

<style>
.pt-50{
    padding-top: 50px;
}
.mt-50{
    margin-top:50px
}
</style>