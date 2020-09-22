<template>
  <div class="container pt-50">
      <div class="columns">
          <div class="column is-4">
              <b-menu>
                <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Top Headline" @click="reloadPost('top-headlines')"></b-menu-item>
                <b-menu-item icon="information-outline" label="Everything" @click="reloadPost('everything')"></b-menu-item>
                </b-menu-list>
                <b-menu-list label="Actions">
                <b-menu-item label="Logout"></b-menu-item>
                </b-menu-list>
            </b-menu>
          </div>
      <div class="column is-8">
          <div class="level">
          <div class="level-left">
              <b-field>
                <form @submit.prevent="reloadPost(endpoint)">
                    <b-input placeholder="Search..."
                        type="search"
                        icon="magnify"
                        icon-clickable
                        v-model="searchTerm"
                        >
                    </b-input>
                </form>
            </b-field>
          </div>
          <div class="level-right">
              <b-button icon-left="view-headline" class="mr-10" @click="showPostList()"></b-button>
              <b-button icon-left="view-module" @click="showPostCard()"></b-button>
          </div>
      </div>

        <div class="postlist" v-if="postList">
          <PostItem v-for="post in posts"
          :key="post.id" 
            :post="post"
            :category="endpoint"
          >
          </PostItem>          
        </div>
        <div class="cardlist" v-if="cardList">
            <div class="columns is-multiline">
                <div class="column is-half" v-for="post in posts" :key="post.id">
                    <PostCard
                    :post="post"
                    :category="endpoint"
                    >
                        
                    </PostCard>
                </div>
            </div>
        </div>
        <div class="flex-center">

         <scroll-loader :loader-method="getPosts" loader-color="'#714dd2'">
        </scroll-loader>
        </div>
      </div>
     
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import PostItem from '@/components/PostItem'
import PostCard from '@/components/PostCard'


export default {
    components: {PostItem, PostCard},
    data(){
        return{
            postList:true,
            cardList:false,
            posts: [],
            page: 1,
            pageSize: 3,
            endpoint:'everything',
            searchTerm: 'vue'
        }
    },
    async asyncData(){
        return axios.get('everything?q=vue')
        .then((res)=>({
            posts: res.data.articles
        }))
    },
    methods:{
        getPosts(){
            
            axios.get(this.endpoint,{
                params:{
                    page: this.page++,
                    pageSize: this.pageSize,
                    q: this.searchTerm,
                }
            }).then(res => res.data.articles.forEach(item => this.posts.push(item)))
            .catch(err=>{console.log(err.message)})

        },  
        showPostList(){
            this.postList = true
            this.cardList = false
        },
        showPostCard(){
            this.postList = false
            this.cardList = true
        },
        reloadPost(topic){
            this.posts = []
            this.endpoint = topic
            this.page = 1;

            this.getPosts()
        }
    }

}
</script>

<style>
.pt-50{
    padding-top: 50px;
}
.mr-10{
    margin-right: 10px;
}
.loader{
    padding: 10px 10px !important;
}
.flex-center{
    display: flex;
    justify-content: center;
}
</style>