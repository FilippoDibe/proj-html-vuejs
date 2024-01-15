<script>
export default{
    name: 'AppFooter',
}
</script>

<template>

    <footer>

        <div id="container">

            <div id="row">

                <div class="card" id="contacts-card">
                    <img src="../img/home/logo.PNG" alt="" class="img">
                    <p class="list-item">Built to the smallest detail with a focus on feature availability.</p>
                    <div class="list-item"><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</div>
                    <div class="list-item"><i class="fa-solid fa-envelope"></i> hello@example.com</div>
                    <div class="list-item"><i class="fa-solid fa-location-dot"></i> Main Avenue, 987</div>
                    <a href="https://themeforest.net/item/nexgen-multipurpose-allinone-wordpress-theme/31222361" id="btn">BUY NEXGEN</a>
                </div>

                <div class="card">
                    <ul class="card-list">
                        <h3 class="list-title">Company</h3>
                        <li class="list-item">Institutional</li>
                        <li class="list-item">Social & Events</li>
                        <li class="list-item">Innovation</li>
                        <li class="list-item">Enviroment</li>
                        <li class="list-item">Technology</li>
                    </ul>
                </div>

                <div class="card">
                    <ul class="card-list">
                        <h3 class="list-title">Services</h3>
                        <li class="list-item">Audit & Assurance</li>
                        <li class="list-item">Financial Advisory</li>
                        <li class="list-item">Analytics and M&A</li>
                        <li class="list-item">Middle Marketing</li>
                        <li class="list-item">Legal Consulting</li>
                    </ul>
                </div>

                <div class="card ">
                    <ul class="card-list">
                        <h3 class="list-title">Consultants</h3>
                        <li class="list-item">David Cooper</li>
                        <li class="list-item">Oliver Jones</li>
                        <li class="list-item">Emma Lopez</li>
                        <li class="list-item">T. Johnson</li>
                        <li class="list-item">Jacob Hill Jr</li>
                    </ul>
                </div>

            </div>

        </div>

    </footer>

</template>

<style lang="scss" scoped>
#container{
    width: 100%;
    height: 572px;
    background-color: #0c1a2a;
    background-image: linear-gradient(50deg, #0c1a2a, #0c1a2a, #1a4865,#1a4865);
    display: flex;
    justify-content: center;
    align-items: center;

    #row{
        width: 80%;
        height: 55%;
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        

        .card{
            background-color: rgba(255, 255, 255, 0.02);
            width: calc(100% / 4);
            max-width: 270px;
            height: 100%;
            border: none;
            border-radius: 10px;
            padding: 35px;

                .list-title{
                    margin-bottom: 20px;
                }

                .list-item{
                    color: #888c9e;
                    height:100%;
                    font-size: 18px;
                    cursor: pointer;
                }

                .list-item:hover{
                        color: rgb(9, 153, 105);
                }
            }

            .card-list{
                color: white;
                list-style: none;
                display: flex;
                flex-direction: column;
                width: 100%;
                padding: 0;
                height: 100%;
                margin: auto;
        }

        #contacts-card{
            padding: 0;
            background-color: rgba(255, 255, 255, 0);

            .img{
                width: 60%;
                margin-bottom: 20px;
                height: 50px;
            }

            #btn{
                text-decoration: none;
                color: white;
                border: 2px solid  rgb(67, 129, 95);
                text-align: center;
                padding: 10px;
                width: 140px;
                border-radius: 30px;
            }

            #btn:hover{
                    border-color: white;
            }
        }
    }
}

</style>