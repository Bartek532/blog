<template>
  <div>
    <div class="search-input">
      <input type="text" placeholder="Search blogs" v-model="search" />
    </div>
    <div class="blogs" v-if="!loading && filteredBlogs.length">
      <div v-for="blog in filteredBlogs" :key="blog.data[0].nasa_id" class="single-blog">
        <div class="back" :style="{ backgroundImage: `url(${blog.links[0].href})` }"></div>
        <div class="description">
          <h1>{{ blog.data[0].title }}</h1>
          <p>{{ blog.data[0].description | tooLong }}</p>
          <button @click="showModal(blog.data[0].nasa_id)">Read more</button>
        </div>
      </div>
    </div>

    <div class="loader" v-else-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div
      v-else-if="!filteredBlogs.length"
      class="noFilter"
    >Unfortunately, we don't have what you are looking for :(</div>
    <transition name="fade">
      <div class="modal" v-if="modal">
        <div class="information">
          <div class="title">
            <h2>{{ modalInfo.title }}</h2>
          </div>
          <div class="main">
            <div class="img">
              <img :src="modalInfo.img_src" alt="blog_image" />
            </div>
            <p>{{ modalInfo.description }}</p>
          </div>

          <button @click="closeModal()" class="close">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </transition>

    <footer v-if="!loading">
      <p>&copy; Copyright 2020 by Bartosz Zagrodzki</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: [],
      search: "",
      loading: false,
      modal: false,
      modalInfo: {}
    };
  },
  methods: {
    showModal(id) {
      let filteredBlogs = this.blogs.filter(item => item.data[0].nasa_id == id);
      this.modalInfo.title = filteredBlogs[0].data[0].title;
      this.modalInfo.description = filteredBlogs[0].data[0].description;
      this.modalInfo.img_src = filteredBlogs[0].links[0].href;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    }
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(item =>
        item.data[0].title.toLowerCase().includes(this.search)
      );
    }
  },
  created() {
    this.loading = true;
    axios.get("https://images-api.nasa.gov/search?q=Mars").then(response => {
      this.loading = false;
      this.blogs = response.data.collection.items.slice(0, 12);
    });
  }
};
</script>

<style lang="scss" scoped>
$main-color: #30e354;
.search-input {
  width: 100%;
  margin-top: 75px;
  text-align: center;
  padding: 40px;

  input {
    width: 90%;
    font-size: 2em;
    padding: 10px;
    border: 0 none;
    border-bottom: 2px solid $main-color;
    transition: box-shadow 0.5s;

    &:focus {
      box-shadow: 0 6px 5px -5px $main-color;
    }
  }
}

.blogs {
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-row-gap: 70px;
  margin-top: 70px;

  .single-blog {
    width: 85vw;
    height: 100vw;
    overflow: hidden;
    justify-self: center;
    position: relative;
    border: 1px solid $main-color;
    -webkit-box-shadow: 0px -3px 56px -10px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: 0px -3px 56px -10px rgba(0, 0, 0, 0.71);
    box-shadow: 0px -3px 56px -10px rgba(0, 0, 0, 0.71);
    .back {
      width: 100%;
      height: 100%;
      opacity: 0.8;
      background-position: center center;
      background-size: cover;
    }

    .description {
      position: absolute;
      color: #fff;
      top: 0;
      right: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;

      h1 {
        width: 100%;
        text-align: center;
        margin: 0;
      }
      p {
        text-align: center;
        padding: 30px;
        font-weight: bold;
      }

      button {
        padding: 10px 20px;
        margin: 15px;
        background: $main-color;
        border: 3px solid $main-color;
        color: #fff;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          background: #fff;
          color: $main-color;
          transition: 0.3s;
        }
      }
    }

    &:hover .back {
      transform: scale(1.5);
      transition: 0.3s;
      opacity: 0.5;
    }

    &:hover .description {
      p {
        color: #000;
      }

      transition: 0.3s;
    }
  }
}

.noFilter {
  padding: 200px 20px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 3em;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 1200;

  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .information {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: #fff;
    font-size: 1em;

    .main {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex: 100%;
      flex-wrap: wrap;
    }
    h2 {
      width: 100%;
      text-align: center;
      font-size: 2.7em;
      padding: 20px 40px;

      border-left: 10px solid #1fd158;
    }

    p {
      width: 100%;
      font-size: 1.4em;
      text-align: center;
      margin: 10px;
      padding: 30px;
      border-left: 5px solid #1fd158;
      border-right: 5px solid #1fd158;
    }

    .close {
      position: absolute;
      top: -20px;
      right: 0;
      padding: 20px;
      background: transparent;
      font-size: 3.5em;
      border: 0 none;
      color: $main-color;
      cursor: pointer;
    }
    .img {
      width: 90vw;
      margin: 30px;

      img {
        width: 100%;

        overflow: hidden;
      }
    }
  }
}

@media all and (min-width: 850px) {
  .blogs {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 100px;
    .single-blog {
      width: 42vw;
      height: 42vw;
    }
  }
}

@media all and (min-width: 1230px) {
  .blogs {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 100px;
    .single-blog {
      width: 28vw;
      height: 28vw;
    }
  }

  .information {
    .title {
      h2 {
        font-size: 4em;
      }
    }

    .close {
      margin-right: 10px;
    }

    .main {
      flex: 50%;
      flex-wrap: nowrap;

      p {
        width: 45vw;
        padding: 20px;
      }

      .img {
        width: 45vw;
        max-width: 50vw;
        margin: 10px;
        img {
          max-width: 50vw;
        }
      }
    }
  }
}
</style>
