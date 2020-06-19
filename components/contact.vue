<template>
  <div>
    <div class="contact">
      <div class="main">
        <div>
          <span>
            <i class="fas fa-street-view"></i>
          </span>
          <span>Address</span>
        </div>

        <div class="desc">
          Design center 7th floor, 379 Hudson St,
          <br />New York, NY 10018 US
        </div>

        <div>
          <span>
            <i class="fas fa-phone-alt"></i>
          </span>
          <span>Lets talk</span>
        </div>

        <div class="desc">+1 800 123456</div>

        <div>
          <span>
            <i class="far fa-paper-plane"></i>
          </span>
          <span>General support</span>
        </div>

        <div class="desc">contact@example.com</div>
      </div>

      <div class="contact-form">
        <h2>Send Us a Message</h2>

        <div>
          <label for="name">tell us your name *</label>
          <br />
          <input id="name" type="text" placeholder="First name" class="half" />
          <input id="name" type="text" placeholder="Last name" class="half" />
        </div>

        <div>
          <label for="email">enter your email *</label>
          <br />
          <input id="email" type="email" placeholder="Eg. example@example.com" />
        </div>

        <div>
          <label for="phone">enter your phone number</label>
          <br />
          <input id="phone" type="number" placeholder="Eg. +1 800 000000" />
        </div>

        <div>
          <label for="message">Message *</label>
          <br />
          <textarea id="message"></textarea>
        </div>

        <button>Send message</button>
      </div>
    </div>

    <footer class="footer">
      <p>&copy; Copyright 2020 by Bartosz Zagrodzki</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$main-color: #30e354;
.footer {
  margin: 0;
}

.contact {
  width: 100%;
  display: flex;
  flex: 50%;
  .main,
  .contact-form {
    height: 100vh;
    width: 50%;
  }
  .main {
    background: $main-color;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: #fff;
    div {
      width: 100%;
      padding: 20px;
      span {
        font-size: 1.5em;
        font-weight: bold;
      }
      span:first-child {
        padding: 50px;
      }
    }
    .desc {
      padding-left: 150px;
      color: #ded1d1;
    }
  }
  .contact-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    height: 100vh;
    padding: 20px;
    h2 {
      width: 100%;
      font-size: 1.7em;
      text-align: center;
      margin-top: 70px;
    }
    div {
      width: 90%;
      border: 1px solid grey;
      margin: 10px;
      label {
        text-transform: uppercase;
        display: inline-block;
        padding: 10px;
        font-weight: bold;
        font-size: 0.8em;
      }
      input {
        width: 100%;
        border: 0 none;
        border-top: 1px solid grey;
        padding: 10px;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      /* Firefox */
      input[type="number"] {
        -moz-appearance: textfield;
      }
      .half {
        width: 50%;
        border-right: 1px solid grey;
      }
      textarea {
        width: 100%;
        height: 70px;
        padding: 10px;
      }
    }
    button {
      background: #0ee35f;
      border: 3px solid #0ee35f;
      border-radius: 3px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      margin-top: 15px;
      padding: 7px 15px;

      &:hover {
        background: #fff;
        color: #0ee35f;
        transition: 0.3s;
      }
    }
  }
}

@media all and (max-width: 1024px) {
  .contact {
    flex: 100%;
    flex-wrap: wrap;

    .main,
    .contact-form {
      width: 100vw;
    }

    .main div span:first-child {
      padding: 30px;
    }

    .main .desc {
      padding-left: 100px;
    }

    .contact-form {
      h2 {
        margin-top: 20px;
        margin-bottom: 50px;
      }
    }
  }
}
</style>