<script>
export default {
  name: "AppServicesHome",
  data() {
    return {
      serviceList: [
        {
          icon: "fa-solid fa-network-wired",
          name: "Audit & Assurance",
        },
        {
          icon: "fa-solid fa-briefcase",
          name: "Financial Advisory",
        },
        {
          icon: "fa-solid fa-chart-simple",
          name: "Analytics and M&A",
        },
        {
          icon: "fa-solid fa-plane",
          name: "Middle Marketing",
        },
        {
          icon: "fa-solid fa-globe",
          name: "Legal Consulting",
        },
        {
          icon: "fa-solid fa-folder-open",
          name: "Audit & Assurance",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- sezione con la lista dei servizi -->
  <div id="container-services">
    <div id="box-services">
      <div id="title" class="d-flex w-100">
        <h1>Excellence in</h1>
        <div class="position-relative">
          <span class="title-decor"> Services </span>
          <div class="color-block"></div>
        </div>
      </div>

      <div id="p-and-button">
        <p>
          We are leaders in providing consultancy services with a set of
          cutting-edge technologies and a team of experienced and renowned
          professionals. These are some options that you can hire.
        </p>
        <a href="" id="btn">SEE ALL</a>
      </div>

      <!-- sezione con le cards services -->
      <div class="d-flex align-items-center row" id="row-services">
        <div
          class="card col-12 col-md-5 col-lg-3"
          v-for="element in serviceList"
        >
          <div class="icon-and-btn">
            <i :class="element.icon" style="font-size: 50px"></i>
            <a
              href=""
              style="font-size: 30px"
              class="wrapper text-decoration-none"
            >
              <div class="pulse"><i class="fa-solid fa-arrow-right"></i></div>
            </a>
          </div>

          <h3>{{ element.name }}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#container-services {
  width: 100%;
  min-height: 910px;
  background-color: #e3e3e6;
  display: flex;
  justify-content: center;
  align-items: center;

  #box-services {
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;

    #title {
      align-self: flex-start;
      margin: 15px 0;
      position: relative;
      display: flex;
      justify-content: center;

      h1 {
        font-size: 3em;
        font-weight: 600;
        display: flex;
        align-items: center;
        margin: 0 5px 0 0;

        @media screen and (max-width: 590px) {
          font-size: 1.3em;
        }
      }

      .position-relative {
        display: inline-block;

        .title-decor {
          position: relative;
          color: #048282;
          z-index: 1;
          font-size: 3em;
          font-weight: 700;

          @media screen and (max-width: 590px) {
            font-size: 1.5em;
          }
        }

        .color-block {
          width: 190px;
          height: 25px;
          background-color: #c1dadf;
          position: absolute;
          right: 4px;
          top: 25px;

          @media screen and (max-width: 590px) {
            width: 96px;
            height: 18px;
            background-color: #c1dadf;
            position: absolute;
            right: 1px;
            top: 11px;
          }
        }
      }
    }

    #p-and-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;

      #btn {
        text-decoration: none;
        background-color: #048282;
        color: white;
        border-radius: 5px;
        font-size: 0.8em;
        width: 100px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
      }

      p {
        max-width: 600px;
        font-size: 0.9em;
        margin: 0;
        color: #888c9e;
      }
    }

    @media screen and (max-width: 995px) {
      #p-and-button {
        flex-direction: column;
        align-items: center;

        p {
          text-align: center;
          margin-bottom: 15px;
        }
      }
    }

    #row-services {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 30px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 20px;

      .card {
        background-color: #ebedee;
        height: 100%;
        border: none;
        border-radius: 3px;
        padding: 35px;
        transition: all 0.5s;
        cursor: pointer;

        h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        p {
          font-size: 0.8em;
        }

        .icon-and-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;

          .fa-solid {
            color: #048282;
            position: relative;
          }
        }
      }
    }
  }
}

//effetti cards on hover
.card:hover {
  transform: translateY(-20px);

  .pulse {
    position: relative;
    animation: animate 3s linear infinite;
    border-radius: 50%;
    display: flex;
    border-color: none;

    .pulse i {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  @keyframes animate {
    0% {
      box-shadow: 0 0 0 0 #048282b7, 0 0 0 0;
    }

    50% {
      box-shadow: 0 0 0 20px rgb(255, 109, 74, 0), 0 0 0 0 #048282b7;
    }

    100% {
      box-shadow: 0 0 0 0 rgb(255, 109, 74, 0), 0 0 0 20px rgb(255, 109, 74, 0);
    }
  }
}
</style>
