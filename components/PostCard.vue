<template>
  <div class="card" @click="selectPost(post)">
      <div class="card-image">
          <figure class="image is-4by3">
              <img :src="post.urlToImage">
          </figure>
      </div>
      <div class="card-content">
          <div class="media">
              <div class="media-left">
                  <figure class="image is-48x48">
                      <img :src="post.urlToImage" alt="Image">
                  </figure>
              </div>
              <div class="media-content">
                  <p class="title is-4">{{post.author | biname}}</p>
                  <p class="subtitle is-6">{{ post.author | handle}}</p>
              </div>
          </div>

          <div class="content">
              {{post.description.substring(0, 100)}}<a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['post'],
  methods:{
      selectPost(post){
          this.$store.commit('setSelectedPost', post)
          this.$router.push({path: '/blog/'+post.title})
      }
  }
}
</script>
<style scoped>
.card .content{
    min-height: 130px;
}
.card{
    cursor: pointer;
}

</style>