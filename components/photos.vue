<template>
  <div>
    <h1>Welcome to my gallery!</h1>
    <div class="row" v-if="!loading">
      <div class="column">
        <div
          class="single-photo"
          v-for="photo in photos.slice(0,12)"
          :key="photo.data[0].nasa_id"
          @click="showImage(photo.data[0].nasa_id)"
        >
          <img :src="photo.links[0].href" alt="photo" />
          <div class="more">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </div>

      <div class="column">
        <div
          class="single-photo"
          v-for="photo in photos.slice(10,22)"
          :key="photo.data[0].nasa_id"
          @click="showImage(photo.data[0].nasa_id)"
        >
          <img :src="photo.links[0].href" alt="photo" />
          <div class="more">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </div>
      <div class="column">
        <div
          class="single-photo"
          v-for="photo in photos.slice(22,34)"
          :key="photo.data[0].nasa_id"
          @click="showImage(photo.data[0].nasa_id)"
        >
          <img :src="photo.links[0].href" alt="photo" />
          <div class="more">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </div>
      <div class="column">
        <div
          class="single-photo"
          v-for="photo in photos.slice(34,48)"
          :key="photo.data[0].nasa_id"
          @click="showImage(photo.data[0].nasa_id)"
        >
          <img :src="photo.links[0].href" alt="photo" />
          <div class="more">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="loader" v-else>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="bigImage" v-if="bigImage.show">
      <div class="image">
        <img :src="bigImage.src" alt="biggerImage" />
      </div>
      <button @click="closeImage()">
        <i class="fas fa-times"></i>
      </button>

      <div class="left" @click="prevPhoto()">
        <i class="fas fa-chevron-left"></i>
      </div>

      <div class="right" @click="nextPhoto()">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>

    <footer v-if="!loading">
      <p>&copy; Copyright 2020 by Bartosz Zagrodzki</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import gsap from "gsap";
export default {
  data() {
    return {
      photos: [],
      loading: true,
      bigImage: {
        src: "",
        show: false
      }
    };
  },
  methods: {
    showImage(id) {
      this.photos.forEach((item, index) => {
        if (item.data[0].nasa_id == id) {
          this.bigImage.index = index;
          this.bigImage.src = item.links[0].href;
          this.bigImage.show = true;
        }
      });
    },
    closeImage() {
      this.bigImage.show = false;
    },
    nextPhoto() {
      let filteredPhotos = this.photos.filter(
        (item, index) => index == this.bigImage.index + 1
      );
      this.showImage(filteredPhotos[0].data[0].nasa_id);
      gsap.from(".bigImage img", {
        opacity: 0,
        x: 300,
        duration: 0.5,
        ease: "power2"
      });
    },
    prevPhoto() {
      let filteredPhotos = this.photos.filter(
        (item, index) => index == this.bigImage.index - 1
      );
      this.showImage(filteredPhotos[0].data[0].nasa_id);
      gsap.from(".bigImage img", {
        opacity: 0,
        x: -300,
        duration: 0.5,
        ease: "power2"
      });
    }
  },
  created() {
    axios.get("https://images-api.nasa.gov/search?q=Mars").then(response => {
      this.loading = false;
      this.photos = response.data.collection.items
        .filter(item => item.links)
        .slice(0, 60);
      console.log(this.photos);
    });
  },
  beforeMount() {
    gsap.from(".bigImage img", {
      width: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power1"
    });
  }
};
</script>

<style lang="scss" scoped>
$main-color: #30e354;
h1 {
  text-align: center;
  padding: 30px;
  margin-top: 100px;
  width: 100%;
  font-size: 3em;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;

  .column {
    max-width: 25%;
    padding: 0 4px;
    flex: 25%;

    .single-photo {
      position: relative;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        width: 100%;
        vertical-align: middle;
        margin-top: 8px;
      }

      .more {
        position: absolute;
        z-index: 100;
        color: #fff;
        font-size: 5em;
        display: none;
      }

      &:hover {
        img {
          opacity: 0.6;
          transition: 0.3s;
        }

        .more {
          display: block;
        }
      }
    }
  }
}

.bigImage {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 1200;

  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    max-width: 90%;
    max-height: 90%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 20px;
    padding: 20px;
    background: transparent;
    font-size: 3.5em;
    border: 0 none;
    color: $main-color;
    cursor: pointer;
  }

  .left,
  .right {
    position: absolute;
    color: #fff;
    font-size: 3.3em;
    border: 0 none;
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%);
  }

  .left {
    left: 30px;
  }

  .right {
    right: 30px;
  }
}

@media all and (max-width: 800px) {
  .row .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

@media all and (max-width: 600px) {
  .row .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>