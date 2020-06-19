<template>
  <div>
    <div class="about">
      <div class="team">
        <h1>My team</h1>
        <div class="pictures">
          <div>
            <img src="../assets/team.jpg" />
          </div>
          <div>
            <img src="../assets/team.jpg" />
          </div>
          <div>
            <img src="../assets/team.jpg" />
          </div>
          <div>
            <img src="../assets/team.jpg" />
          </div>
        </div>
      </div>
      <div class="description">
        <h2>About us...</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, natus sequi. Illo odit dolore hic modi laudantium. Cumque asperiores quaerat molestias maiores totam. Voluptas autem saepe quia ipsam architecto consectetur assumenda accusantium eveniet, error reiciendis nam aspernatur, laudantium modi dignissimos! Quisquam quo deleniti magnam asperiores iusto voluptatem, voluptatum cumque eum quae, suscipit eligendi facere exercitationem fugit rem veniam praesentium excepturi iste neque incidunt tempora aliquam ea laboriosam? Est, quos consequuntur. Animi quaerat quae totam at ab veritatis odio qui nemo explicabo tenetur autem, doloremque quasi ad pariatur, nam repellendus debitis reiciendis maxime nisi! Alias mollitia, voluptatum quasi cumque recusandae quis!</p>
      </div>
    </div>
    <footer>
      <p>&copy; Copyright 2020 by Bartosz Zagrodzki</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$main-color: #30e354;
.about {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 50%;

  .team,
  .description {
    position: relative;
    width: 600px;
    height: 580px;
    margin-top: 120px;
    border-radius: 20px;
  }
  .team {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    background: $main-color;
    box-shadow: 10px 13px 15px -2px rgb(138, 140, 148);
    h1 {
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 3em;
      margin-top: 0;
    }

    .pictures {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px 0px;
      width: 80%;
      margin-top: 10px;

      div {
        max-width: 70%;

        border-radius: 50%;
        background: #d8dae3;
        padding: 20px;
        justify-self: center;

        img {
          width: 100%;
        }
      }
    }
  }

  .description {
    h2 {
      font-size: 2.5em;
      padding-left: 40px;
      border-left: 3px solid #452bd6;
    }

    p {
      font-size: 1.2em;
      padding-left: 40px;
      border-left: 3px solid #3262db;
    }
  }
}

@media all and (max-width: 1200px) {
  .about {
    flex: 100%;
    flex-wrap: wrap;

    .team {
      max-width: 85%;
      height: 500px;
      padding: 0px 20px;
    }

    .description {
      max-width: 90%;
      margin-top: 50px;
      height: 100%;
    }
  }
}
</style>