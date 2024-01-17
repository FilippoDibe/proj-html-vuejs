<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="d-flex flex-column align-items-center">

    <div class="container d-flex align-items-center justify-content-center ">

      <div class="row footer-content justify-content-center align-items-center p-0 h-100 w-100">

        <div class="col-12 col-md-6 col-lg-3">
          <div class="footer-card " style="background-color: transparent;">
            <div class="w-100">
              <img src="../img/home/logo.PNG" alt="" class="img" style="width: 80px;" />
            </div>
            <p class="list-items no-hover">
              Built to the smallest detail with a focus on feature availability.
            </p>
            <div class="list-items">
              <i class="fa-solid fa-phone"></i>
              <span> +1 (305) 1234-5678</span>
            </div>
            <div class="list-items">
              <i class="fa-solid fa-envelope"></i>
              <span> hello@example.com</span>
            </div>
            <div class="list-items">
              <i class="fa-solid fa-location-dot"></i>
              <span> Main Avenue, 987</span>
            </div>
            <a href="https://themeforest.net/item/nexgen-multipurpose-allinone-wordpress-theme/31222361" id="btn">
              <span> BUY NEXGEN</span>
            </a>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 ">
          <div class="footer-card">
            <h3 class="list-title">Company</h3>
            <p class="list-item">David Cooper</p>
            <p class="list-item">Oliver Jones</p>
            <p class="list-item">Emma Lopez</p>
            <p class="list-item">T. Johnson</p>
            <p class="list-item">Jacob Hill Jr</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="footer-card">
            <h3 class="list-title">Services</h3>
            <p class="list-item">David Cooper</p>
            <p class="list-item">Oliver Jones</p>
            <p class="list-item">Emma Lopez</p>
            <p class="list-item">T. Johnson</p>
            <p class="list-item">Jacob Hill Jr</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="footer-card">
            <h3 class="list-title">Consultants</h3>
            <p class="list-item">David Cooper</p>
            <p class="list-item">Oliver Jones</p>
            <p class="list-item">Emma Lopez</p>
            <p class="list-item">T. Johnson</p>
            <p class="list-item">Jacob Hill Jr</p>
          </div>
        </div>
      </div>

    </div>

    <div class="last-title d-flex w-100 justify-content-between align-items-center">
      <span>© 2023 - All rights reserved. Nexgen is maintained by Codings Group.</span>
      <div class="logo-block d-flex justify-content-around" style="width: 100px;">
        <i class="fa-brands fa-facebook-f btn-footer"></i>
        <i class="fa-brands fa-twitter btn-footer"></i>
        <i class="fa-brands fa-linkedin-in btn-footer"></i>
      </div>
    </div>

  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-image: linear-gradient(50deg, #0c1a2a, #0c1a2a, #1a4865, #1a4865);

  * {
    color: white;
  }

  .container {
    padding: 60px 0;

    .footer-content {
      max-width: 1200px;
      //margin: 0 auto;

      .footer-card {
        background-color: rgba(255, 255, 255, 0.02);
        height: 100%;
        border: none;
        border-radius: 10px;
        padding: 20px;
        transition: all 0.5s;
        margin: 10px 0;

        p,
        span {
          font-size: 0.8em;
          color: rgb(143, 147, 165);
        }

        h3 {
          font-size: 1.3em;
          font-weight: bold;
          margin: 20px 0;
        }

        .list-items {
          margin: 10px 0;
        }
      }
    }
  }

  .last-title {
    height: 60px;

    span,
    i {
      font-size: 0.8em;
      color: rgb(143, 147, 165);
    }

    span {
      margin-left: 10px;
    }

    .logo-block {
      margin-right: 10px;
    }
  }

}
</style>