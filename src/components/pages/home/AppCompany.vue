<script>
export default {
  name: "AppCompany",
};
</script>

<template>
  <div id="container-company">
    <div id="box-company-text">
      <div id="box-margin-company-text">
        <div id="title-company" class="d-flex">
          <h1>
            The
          </h1>
          <div class="position-relative">
            <span class="title-decor"> Company</span>
            <div class="color-block"></div>
          </div>
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
  background-color: #0c1a2a;
  background-image: linear-gradient(50deg, #0c1a2a, #0c1a2a, #1a4865, #1a4865);
  display: flex;

  #box-company-text {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 15px;

    @media screen and (max-width:767px) {
      width: 100%;
    }

    #box-margin-company-text {
      padding: 50px 0;

      #title-company {
        align-self: flex-start;
        position: relative;
        color: white;

        @media screen and (max-width:767px) {
          display: flex;
          justify-content: center;
        }

        h1 {
          font-size: 3em;
          font-weight: 700;
          margin: 0;
          display: flex;
          align-items: center;
          margin-right: 5px;

          @media screen and (max-width:400px) {
            font-size: 1.6em;
          }
        }

        .position-relative {
          .title-decor {
            position: relative;
            z-index: 1;
            font-size: 3em;
            font-weight: bold;

            @media screen and (max-width: 400px) {
              font-size: 1.6em;
            }
          }

          .color-block {
            width: 220px;
            height: 25px;
            background-color: #0e6f85;
            border-radius: 3px;
            position: absolute;
            left: 0;
            top: 30px;

            @media screen and (max-width:400px) {
              width: 116px;
              top: 8px;
            }
          }

        }



      }

      #company-row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;

        @media screen and (max-width:767px) {
          margin-top: 60px;

          @media screen and (max-width:450px) {
            flex-direction: column;
            align-items: center;
          }
        }

        h3 {
          color: white;
          cursor: pointer;
        }

        .fa-solid {
          color: #048282;
        }

        .card-company {
          width: calc(100% / 2);
          display: flex;
          flex-direction: column;
          align-items: center;

          p {
            max-width: 250px;
            text-align: center;
          }
        }
      }
    }

    p {
      color: #888c9e;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 767px) {

      p,
      h3 {
        text-align: center;
      }
    }
  }

  #box-company-image {
    width: 50%;
    background-image: url("../../../img/home/about-4.jpg");
    background-attachment: fixed;
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 50% auto;

    @media screen and (max-width:767px) {
      display: none;
    }
  }
}
</style>
