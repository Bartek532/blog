<template>
  <div>
    <nav>
      <div :class="[{active: isActive}, 'toggle']" @click="isActive = !isActive; open = !open">
        <span></span>

        <span></span>

        <span></span>

        <span></span>
      </div>

      <div class="big-menu">
        <ul>
          <router-link to="/" exact>
            <li>Blogs</li>
          </router-link>

          <router-link to="/photos">
            <li>Gallery</li>
          </router-link>

          <router-link to="/about">
            <li>About</li>
          </router-link>
          <router-link to="/contact">
            <li>Contact</li>
          </router-link>

          <router-link to="/signin">
            <li>Sign in</li>
          </router-link>
        </ul>
      </div>

      <transition name="slide">
        <div v-if="open" class="menu-list">
          <ul @click="closeMenu()">
            <router-link to="/" exact>
              <li>Blogs</li>
            </router-link>

            <router-link to="/photos">
              <li>Gallery</li>
            </router-link>

            <router-link to="/about">
              <li>About</li>
            </router-link>
            <router-link to="/contact">
              <li>Contact</li>
            </router-link>

            <router-link to="/signin">
              <li>Sign in</li>
            </router-link>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      isActive: false
    };
  },
  methods: {
    closeMenu() {
      this.open = false;
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #30e354;
nav {
  width: 100%;
  height: 70px;
  background: $main-color;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  //hamburger//
  .toggle {
    position: absolute;
    width: 85px;
    height: 50px;
    top: 10px;
    right: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 0 0 0 30px;

    span {
      display: block;
      width: 40px;
      height: 6px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      transition: 0.3s;
      &:nth-child(1) {
        transform: translate(-50%, -50%) translateY(-13px);
        transition: 0.3s;
      }
      &:nth-child(4) {
        transform: translate(-50%, -50%) translateY(13px);
        transition: 0.3s;
      }
    }
    &.active span {
      &:nth-child(1) {
        transform: translate(-50%, -50%) translateY(-33px);
        opacity: 0;
      }
      &:nth-child(4) {
        transform: translate(-50%, -50%) translateY(33px);
        opacity: 0;
      }
      &:nth-child(2) {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:nth-child(3) {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
.menu-list {
  width: 100%;
  position: absolute;
  top: 70px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
      color: #848991;
      border: 0 none;

      li {
        width: 100vw;
        height: 60px;
        font-size: 1.4em;
        padding: 20px;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 2px solid #848991;
        background: #fff;
        cursor: pointer;
      }
    }

    .router-link-active li {
      color: #c2b2b0;
    }
  }
}

.slide-enter,
.slide-leave-to {
  top: -300px;
}

.slide-enter-active,
.slide-leave-active {
  transition: top 0.5s;
}
@media all and (max-width: 1024px) {
  .big-menu {
    display: none;
  }
}

@media all and (min-width: 1024px) {
  nav {
    display: flex;
    justify-content: center;
    align-content: center;

    .toggle {
      display: none;
    }
    .menu-list {
      display: none;
    }

    .big-menu {
      display: flex;
      width: 100%;

      ul {
        width: 100%;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
          text-decoration: none;
          color: #fff;

          li {
            font-size: 1.4em;
            padding: 20px;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
          }
        }

        .router-link-active {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>