<script>

export default {
    name: 'AppProjects',
}
</script>

<template>
<div id="container">

    <div id="box">

        <div id="title">
            <h1>Action &
                <span class="title-decor" style="color: #048282;z-index: 1;">Projects</span>  
            </h1>
            <div class="color-block"></div>
        </div>

        <ul id="menu">
            <li>ALL</li>
            <li>ENVIROMENTS</li>
            <li>EVENTS</li>
            <li>INSTITUTIONAL</li>
            <li>SOCIAL</li>
            <li>TECHNOLOGY</li>
            <li>INNOVATION</li>
        </ul>
        
        <div id="row">

            <div class="card">
                <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-5.jpg" alt="" class="img">
                <div class="info">
                    <h3>Portfolio item with intro with sidebar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                    <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i class="fa-regular fa-clock"></i> 3 years</div>
                </div>    
            </div>
            
            <div class="card">
                <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-4.jpg" alt="" class="img">
                <div class="info">
                    <h3>Portfolio item with intro with sidebar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                    <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i class="fa-regular fa-clock"></i> 3 years</div>
                </div>    
            </div>

            <div class="card">
                <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-3.jpg" alt="" class="img">
                <div class="info">
                    <h3>Portfolio item with intro with sidebar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                    <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i class="fa-regular fa-clock"></i> 3 years</div>
                </div>    
            </div>

            <div class="card">
                <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-2.jpg" alt="" class="img">
                <div class="info">
                    <h3>Portfolio item with intro with sidebar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                    <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i class="fa-regular fa-clock"></i> 3 years</div>
                </div>    
            </div>

            <div class="card">
                <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-6.jpg" alt="" class="img">
                <div class="info">
                    <h3>Portfolio item with intro with sidebar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                    <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i class="fa-regular fa-clock"></i> 3 years</div>
                </div>    
            </div>

            <div class="card">
                <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-1.jpg" alt="" class="img">
                <div class="info">
                    <h3>Portfolio item with intro with sidebar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                    <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i class="fa-regular fa-clock"></i> 3 years</div>
                </div>    
            </div>
        </div>      

    </div>

</div>
</template>

<style lang="scss" scoped>

#container{
    width: 100%;
    min-height: 1180px;
    background-color: #e2e2e6; 
    display: flex;
    justify-content: center;
    align-items: center;
}

#box{
    width: 80%;
    max-width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    #title{
        align-self: center;
        margin-bottom: 30px;
        position: relative;
        color: #20323e;
        font-weight: 800;

        .title-decor{
            position: relative;
        }
        .color-block{
            width: 210px;
            height: 25px;
            background-color: #c1dadf;
            position: absolute; 
            left: 250px;
            top: 25px;
        }
    }

    h1{
        font-size: 48px;
        font-weight: 800;
    }
}

#row {
  width: 100%;
  min-height: 370px;
  height: 100%;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

//stili della lista 
#menu{
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: center;
    list-style: none;
    flex-wrap: wrap;
    gap: 20px;

    li{
        background-color: #00A6A626;
        color: #058283;
        padding: 10px;
        padding-left: 25px;
        padding-right:25px ;
        border-radius: 3px;
        cursor: pointer;
    }
}

//stili delle cards
.card {
  width: calc(100% / 3 - 30px);
  max-width: 370px;
  height: 360px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 40px;

    
    h3{
        bottom: 0;
        font-size: 20px;
        font-weight: 600;
        z-index: 1;
        color: white;
        font-size: 25px;
        vertical-align: bottom;
    }
    

  .img{
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    filter: brightness(0.6) contrast(0.6) saturate(1.2) contrast(1.5);
  }
  
}

.card:hover:before {
  opacity: 1;
}
.card:hover .info {
  opacity: 1;
  transform: translateY(0px);
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}
.card .info {
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
  height: 100%;
  width: 100%;
}
.card .info h3 {
  margin: 0px;
}
.card .info p {
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 8px;
}



</style>