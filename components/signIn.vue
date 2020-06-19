<template>
  <div>
    <div class="modal">
      <div class="header">
        <h2>Log In</h2>
      </div>
      <form class="inputs">
        <div :class="[{isNotValid : !validName}, 'username']">
          <div class="icon">
            <i class="fas fa-user"></i>
          </div>
          <input type="text" @focus="changeBorder('validName')" />
        </div>
        <span v-if="!validName">Check your username</span>
        <div :class="[{isNotValid : !validPassword}, 'password']">
          <div class="icon">
            <i class="fas fa-unlock-alt"></i>
          </div>
          <input type="password" @focus="changeBorder('validPassword')" />
        </div>
        <span v-if="!validPassword">Check your password</span>
      </form>
      <button @click="logOn">Log in</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      validName: true,
      validPassword: true
    };
  },
  methods: {
    logOn() {
      this.validName = false;
      this.validPassword = false;
      document.forms[0].reset();
    },
    changeBorder(item) {
      this[item] = true;
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #30e354;
.modal {
  border: 3px solid $main-color;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 10px;

  .header {
    color: $main-color;
    font-size: 2em;
    margin: 20px 50px;

    h2 {
      margin: 0;
    }
  }

  .inputs {
    .username,
    .password {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid lightgray;
      margin: 20px;
      margin-bottom: 0;
      .icon {
        border-right: 2px solid lightgray;
        padding: 10px 15px;
        font-size: 1.2em;
      }
      input {
        border: 0 none;
        padding: 7px 5px;
        font-size: 1.3em;
      }
    }

    .isNotValid {
      border: 2px solid red;
    }

    span {
      color: red;
      font-size: 0.8em;
      padding-left: 24px;
    }
  }

  button {
    padding: 10px 70px;
    background: $main-color;
    border: 2px solid $main-color;
    margin: 20px auto;
    color: #fff;
    font-weight: bold;
    font-size: 0.8em;
    cursor: pointer;

    &:hover {
      background: #fff;
      transition: 0.3s;
      color: #000;
    }
  }
}
</style>
