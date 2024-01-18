<script >

export default {
  components: {
    name: 'AppContacts'
  }


}
</script>

<template>

    <div id="container">

        <div id="box-margin">
            <div id="box-left">

                <div style="color:#2aa9a7 ;">SEND A MESSAGE</div>
                <div id="title">
                    <h1>Get in <span class="title-decor" style="color: #048282;z-index: 1;">Touch </span></h1>
                    <div class="color-block"></div>
                </div>
                <p>We will respond to your message as soon as possible.</p>

                <div id="info-box">
                    <input type="type" placeholder="Name">
                    <input type="type" placeholder="Email">
                    <input type="number" placeholder="Phone">
                    <select name="" id="">
                        <option value="1" selected>--Please choose an option--</option>
                        <option value="2">Sales an Purchasing</option>
                        <option value="3">Financial and Account</option>
                        <option value="4">Human Resources</option>
                        <option value="5">Another subject</option>
                    </select>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <a href="">SEND</a>
                </div>
            
            </div>
        </div>

        <div id="box-right">
            <h5>Example Inc.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</div>
            <div><i class="fa-solid fa-envelope"></i> mail@example.com</div>
            <div><i class="fa-solid fa-location-dot"></i> Main Avenue, 123</div>
            <div><i class="fa-solid fa-location-dot"></i> Main Avenue, 987</div>
            <a href="">VIEW MAP</a>
        </div>

    </div>

</template>

<style lang="scss" scoped>
#container{
    width: 100%;
    min-height: 760px;
    height: 100%;
    background-image:url("https://nexgen.codings.dev/wp-content/uploads/2021/03/nexgen-background.png");
    background-size:cover ;
    background-attachment: fixed;
    background-position: bottom;
    display: flex;

    #box-margin{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
        
        #box-left{
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;

            #title{
                align-self: flex-start;
                position: relative;
                display: flex;
                

                h1{
                    font-size: 50px;
                    font-weight: 800;
                }

                .title-decor{
                    position: relative;
                }
                .color-block{
                    width: 150px;
                    height: 25px;
                    background-color: #c1dadf;
                    position: absolute; 
                    left: 195px;
                    top: 28px;
                }
            }  
            
            #info-box{
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 20px;

                
                

                input{
                    height: 50px;
                    background-color: #eceded;
                    border: none;
                    border-radius: 5px;
                    padding: 5px;
                    width: calc(100% / 2 - 10px);
                    color: #a2a1a2;
                }

                select{
                    height: 50px;
                    background-color: #eceded;
                    border: none;
                    border-radius: 5px;
                    padding: 5px;
                    width: calc(100% / 2 - 10px);
                    color: #a2a1a2;
                }

                textarea{
                    background-color: #eceded;
                    border: none;
                    border-radius: 5px;
                    padding: 5px;
                    width: 100%;
                    color: #a2a1a2;
                }

                a{
                    text-decoration: none;
                    color: white ;
                    background-color: #058283;
                    padding: 10px 25px 10px 25px;
                    border-radius: 50px;
                    font-weight: 600;
                    transition: all 1s;

                    a:hover{
                        cursor: pointer;
                        
                    }
                }
                
            }
        }   
    }

    #box-right{
        width: 40%;
        height: 100%;
        display: flex;
        justify-content:flex-start;
        padding: 50px;
        align-items: flex-start;
        flex-direction: column;
        gap: 40px;

        h5{
            font-size:25px ;
            font-weight: 600;
        }
        p{
            color: #a2a1a2;
            width: 300px;
        }
        i{
            color: #048282;
            background-color:#d9f3f3 ;
            padding: 10px;
            border-radius: 50%;
            font-size: 20px;
            transition: all 1s;
        }

        div{
            color: #048282;
        }
        
        a{
            text-decoration: none;
            color: #048282 ;
            background-color: #d9f3f3;
            padding: 10px 25px 10px 25px;
            border-radius: 50px;
            font-weight: 600;
            transition: all 1s;
        }

        i:hover {
            background-color: #048282;
            color: white;
            cursor: pointer;
        }
        
        a:hover{
            background-color: #048282;
            color: white;
        }

    }

}

//media query

@media all and (max-width: 900px) {

    #container{
        display: block;

        #box-margin{
            width: 100%;
            margin: auto;
            justify-content: center;
            align-items: center;
        }

        #box-left{
            width: 100%;
        }

        #box-right{
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    }
}

@media all and (max-width: 700px) {

    #container #box-margin #box-left #info-box{
        flex-direction: column;

        input{
            width: 100%;
        }

        select{
            width: 100%;
        }

        a{
           width: 120px; 
           text-align: center;
        }
    }

}



</style>
