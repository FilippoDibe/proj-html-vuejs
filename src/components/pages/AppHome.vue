<script>
import AppFooter from '../AppFooter.vue';
import AppHeader from '../AppHeader.vue';


export default{
    name: 'AppHome',
    components: {  
        AppHeader,
        AppFooter,
    }
};
</script>

<template>
    <AppHeader/>

    <!-- sezione con il carosello -->
    <div id="jumbotron"></div>

    <!-- sezione con la lista dei servizi -->
    <div id="container-services">

        <div id="box-services">

            <div id="title">
                <h1>Excellence in 
                    <span class="title-decor" style="color: #048282;z-index: 1;">Services <span class="color-block"></span></span>
                </h1>
            </div>

            <div id="p-and-button">
                <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire.</p>
                <a href="" id="btn">SEE ALL</a>
            </div>
            
            <!-- sezione con le cards services -->
            <div id="row-services">

                <div class="card">

                    <div class="icon-and-btn">
                        <i class="fa-solid fa-network-wired" style="font-size: 50px;"></i>
                        <a href="" style="font-size: 30px;"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <h3>Audit  & Assurance</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                </div>

                <div class="card">

                    <div class="icon-and-btn">
                        <i class="fa-solid fa-briefcase" style="font-size: 50px;"></i>
                        <a href="" style="font-size: 30px;"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <h3>Financial Advisory</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                </div>

                <div class="card">

                    <div class="icon-and-btn">
                        <i class="fa-solid fa-chart-simple" style="font-size: 50px;"></i>
                        <a href="" style="font-size: 30px;"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <h3>Analytics and M&A</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                </div>
                
                <div class="card">

                    <div class="icon-and-btn">
                        <i class="fa-solid fa-plane" style="font-size: 50px;"></i>
                        <a href="" style="font-size: 30px;"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <h3>Middle Marketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                </div>

                <div class="card">

                    <div class="icon-and-btn">
                        <i class="fa-solid fa-globe" style="font-size: 50px;"></i>
                        <a href="" style="font-size: 30px;"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <h3>Legal Consulting</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                </div>

                <div class="card">

                    <div class="icon-and-btn">
                        <i class="fa-solid fa-folder-open" style="font-size: 50px;"></i>
                        <a href="" style="font-size: 30px;"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <h3>Audit  & Assurance</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                </div>

                
            </div>      

        </div>

    </div>

    <footer><AppFooter/></footer>
</template>

<style lang="scss" scoped>
// stili del carosello
#jumbotron{
    background-color: grey;
    width: 100%;
    height: 100vh;
}

// stili sezione servizi
#container-services{
    width: 100%;
    min-height: 910px;
    background-color: #e3e3e6; 
    display: flex;
    justify-content: center;
    align-items: center;
}

#box-services{
    width: 75%;
    max-width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;

    #title{
        align-self: flex-start;
        margin-bottom: 30px;
        z-index: 1;

        .title-decor{
            position: relative;
        }
        .color-block{
            width: 200px;
            height: 25px;
            background-color: #c1dadf4f;
            position: absolute;
            top: 25px;
            left: 0;
            border-radius: 5px;
            z-index: 0;
        }

    }

    

    h1{
        font-size: 48px;
        font-weight: 600;
    }

    P{
        width: 80%;
        color:  #888c9e;
    }

    #p-and-button{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        #btn{
            text-decoration: none;
            background-color: #048282;
            color: white;
            padding: 10px 25px;
            border-radius: 5px;
        }
        
    }
}

#row-services {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card {
  background-color: #ebedee;
  width: calc(100% / 3 - 20px);
  max-width: 370px;
  height: 100%;
  border: none;
  border-radius: 3px;
  padding: 35px;
  transition: all 0.5s;

  h3{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .icon-and-btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .fa-solid{
        color: #048282;
    }
  }
}

.card:hover{
    transform: translateY(-20px)
}

</style>