<template>
  <div class="article" @click="selectPost(post)">
      <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="post.urlToImage">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{post.author}}</strong>  <small>{{post.author | handle}}</small>
            <br>
            {{post.description}}
          </p>
        </div>
        <nav class="level is-mobile">
          <!-- <div class="level-left">
            <a class="level-item">
                <b-icon icon="reply"></b-icon>
            </a>
          </div> -->
        </nav>
      </div>
      <div class="media-right">
        <b-icon icon="bookmark"></b-icon>
      </div>
    </article>
    <div class="level-right">
        <div class="level-item">
          <b-tag rounded>
           {{categor}}
          </b-tag>
          <b-tag rounded>
          {{$moment(post.publishedAt).format('DD-MM-YYYY [at] LT')}}
          </b-tag>
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

<style>
.article{
  padding: 10px 5px !important;
  border-top: solid 1px #e8e8e8;
  cursor: pointer;

}
article.media {
    padding: 20px 10px;
}
.article:hover {
    background-color: rgb(242, 242, 242);
}
</style>