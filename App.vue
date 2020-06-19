<template>
  <div>
    <Menu />
    <transition name="fade-router">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";

export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
$main-color: #30e354;
body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
}
body::-webkit-scrollbar {
  width: 12px;
}
body::-webkit-scrollbar-track {
  background: #b8adad;
}
body::-webkit-scrollbar-thumb {
  background-color: $main-color;
  border: 3px solid $main-color;
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*:focus {
  outline: 0 none;
}

footer {
  height: 70px;
  background: $main-color;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  color: #fff;
}

.fade-router-enter,
.fade-router-leave-to {
  opacity: 0;
}
.fade-router-enter-active,
.fade-router-leave-active {
  transition: opacity 0.3s;
}

input:focus,
button:focus {
  outline: 0 none;
}

//loader

.loader {
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid $main-color;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $main-color transparent transparent transparent;
}
.loader div:nth-child(1) {
  animation-delay: -0.45s;
}
.loader div:nth-child(2) {
  animation-delay: -0.3s;
}
.loader div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>