<script>
export default {
  name: "AppCompany",
};
</script>

<template>
  <div id="container-company">
    <div id="box-company-text">
      <div id="box-margin-company-text">
        <div id="title-company">
          <h1 style="font-size: 48px; font-weight: 700">
            The
            <span class="title-decor">Company</span>
          </h1>
          <div class="color-block"></div>
        </div>
        <p>
          For 12 years we have been providing audit and warranty, financial
          advice, risk advice, taxes and related services to select clients.
        </p>

        <div id="company-row">
          <div class="card-company">
            <h3><i class="fa-solid fa-hourglass-half"></i> Tradition</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>

          <div class="card-company">
            <h3><i class="fa-solid fa-lock"></i> Securety</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>

          <div class="card-company">
            <h3><i class="fa-solid fa-apple-whole"></i> Certificate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>

          <div class="card-company">
            <h3><i class="fa-solid fa-user"></i> Expertise</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>

    <div id="box-company-image"></div>
  </div>
</template>

<style lang="scss" scoped>
#container-company {
  width: 100%;
  height: 635px;
  background-color: #0c1a2a;
  background-image: linear-gradient(50deg, #0c1a2a, #0c1a2a, #1a4865, #1a4865);
  display: flex;

  #box-company-text {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #box-margin-company-text {
      width: 70%;
      margin: auto;

      #title-company {
        align-self: flex-start;
        position: relative;
        color: white;

        .title-decor {
          position: relative;
          z-index: 1;
        }
        .color-block {
          width: 220px;
          height: 25px;
          background-color: #0b4653;
          border-radius: 3px;
          position: absolute;
          left: 100px;
          top: 25px;
        }
      }
    }

    p {
      color: #888c9e;
      margin-bottom: 30px;
    }
  }

  #box-company-image {
    width: 50%;
    background-image: url("../../../img/home/about-4.jpg");
    background-attachment: fixed;
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 50% auto;
  }
}

#company-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    color: white;
    cursor: pointer;
  }

  .fa-solid {
    color: #048282;
  }

  .card-company {
    width: calc(100% / 2);
  }
}
</style>
