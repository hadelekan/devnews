<template>
  <div class="card">
      <div class="card-image">
          <figure class="image is-4by3">
              <img :src="image">
          </figure>
      </div>
      <div class="card-content">
          <div class="media">
              <div class="media-left">
                  <figure class="image is-48x48">
                      <img :src="image" alt="Image">
                  </figure>
              </div>
              <div class="media-content">
                  <p class="title is-4">{{author}}</p>
                  <p class="subtitle is-6">@{{author}}</p>
              </div>
          </div>

          <div class="content">
              {{desc}}<a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['author','image', 'date', 'content', 'desc']
}
</script>
