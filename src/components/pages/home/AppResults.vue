<script>
export default {
  name: "AppResults",
};
</script>

<template>
  <!-- sezione counter -->
  <div id="container">
    <div id="layout"></div>

    <div id="box">
      <div id="title">
        <h1>
          Results in
          <span class="title-decor" style="z-index: 1">Numbers</span>
        </h1>
        <div class="color-block"></div>
      </div>
      <p>
        Our goal is to exceed expectations by delivering the best job possible.
      </p>
      <div id="row">
        <div class="card">
          <div class="counter1"></div>
          <h5>Certifications</h5>
        </div>
        <div class="card">
          <div class="counter2"></div>
          <h5>Employees</h5>
        </div>
        <div class="card">
          <div class="counter3"></div>
          <h5>Customers</h5>
        </div>
        <div class="card">
          <div class="counter4"></div>
          <h5>Countries Served</h5>
        </div>
      </div>
    </div>
  </div>

  <!-- sezione sponsor -->
  <div id="container-sponsor">
    <div id="divider"></div>

    <div id="box-sponsor">
      <img src="../../../img/loghi/logo-1.png" alt="" class="sponsor" />
      <img src="../../../img/loghi/logo-2.png" alt="" class="sponsor" />
      <img src="../../../img/loghi/logo-3.png" alt="" class="sponsor" />
      <img src="../../../img/loghi/logo-4.png" alt="" class="sponsor" />
      <img src="../../../img/loghi/logo-5.png" alt="" class="sponsor" />
      <img src="../../../img/loghi/logo-1.png" alt="" class="sponsor" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 480px;
  background-image: url(../../../img/home/bg-7.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;

  #layout {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: transparent;
    background-image: linear-gradient(90deg, #0d1b2a 0%, #1b4965 100%);
    opacity: 0.4;
  }
}

#divider {
  background-image: url(../../../img/home/bullets.png);
  background-position: left;
  background-size: cover;
  width: 150px;
  height: 65px;
  position: absolute;
  top: 0;
  margin: -33px;
}

//sezione sponsor
#container-sponsor {
  width: 100%;
  height: 226px;
  background-image: linear-gradient(50deg, #0c1a2a, #0c1a2a, #1a4865, #1a4865);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #box-sponsor {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;

    .sponsor {
      filter: invert(1);
      width: 120px;
      height: 25px;
    }
  }
}

#box {
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: #bec1ce;
    margin-bottom: 30px;
  }

  #title {
    align-self: center;
    margin-bottom: 30px;
    position: relative;
    color: white;
    font-weight: 800;

    .title-decor {
      position: relative;
    }
    .color-block {
      width: 240px;
      height: 25px;
      background-color: #0f37419c;
      position: absolute;
      left: 275px;
      top: 30px;
    }
  }

  #row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      width: calc(100% / 4);
      background: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

h1 {
  font-size: 48px;
  font-weight: 800;
}

h5 {
  color: #bec1ce;
  font-size: 18px;
}

//stili del counter
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.counter1 {
  color: #00a7a7;
  animation: counter 5s infinite alternate ease-in-out;
  counter-reset: num var(--num);
  font: 800 40px system-ui;
}
.counter1::after {
  content: counter(num);
}

@keyframes counter {
  from {
    --num: 0;
  }
  to {
    --num: 128;
  }
}

</style>
