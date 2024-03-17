GETTING STARTED WITH BACKEND

        STEP 1 : "npm init"
                    server package.json file created

        Step 2 : "npm i express"
                        express dependencies add ho jayega package.json file me

        Step 3 : "server.js" file create karenge


                         // Step 3.1 : Express.js ko get karenge

                         // Step 3.2 : Defining different routes

                         // Step 3.3 : Server ko start karenge and for accessing all the routes


        Step 4 : 'npm i nodemon'
                        Taaki baar baar refresh na karna pade


        Step 5 : "auth-routes.js" - cleaning server.js / server.js file ki complexity ko kamm karenge "auth-routes.js" file create karke

                        METHOD 1
                                Step 5.1 :     Previous routing method step 3.3 loading me time lagta hai and code bhi complex ho jayega isliye ise new file bana dete hai aur express.routes function ka use karenge

                                Step 5.2 : Server.js se routes ko comment karenge

                                Step 5.3 : "server.js" me import karenge auth-router.js ke code ko

                        METHOD 2

                                Step 5.4 : Optional Method / More advance routing method

        Step 6 : Controller use karenge auth-routes.js file ki complexity kamm karne ke liye  , req and res ko manage karenge acche tarike se  by using async function try and catch

                                Step 6.1 : server folder > controllers folder > auth-controller.js

                                Step 6.2 : DISPATCH  (request) karne pe ACTION (process hona)


                                                DISPATCH                ACTION
                                           eg. router.route("/")  . get((req,res)=>{
                                                                        res
                                                                        .status(200).
                                                                        send("Welcome to home page)
                                                                })

                                           isi complexity ko kamm karenge



                                Step 6.3 : async function use karenge taaki try and catch use kar
                                 sake


        Step 7 : POSTMAN Se Registration Form response dekhenge

                                Step 7.1 : Install POSTMAN API from browser / VS Code Extension "Thunderbolt" , Open POSTMAN

                                Step 7.2 : New COllection create karenge "+" icon pe tap karke and naming karenge uss
                                 collection ka and then "Add a Request" tab open karenge

                                //Just for checking Process

                                        Step 7.3 : GET Method me hi apne register page ka link
                                        "http://localhost:5000/api/auth/register" enter kareke response dekhenge.

                                Step 7.4 : Register wale route me POST method karenge "auth-router.js" file me
                                           and uska response dekhne ke liye "auth-controller.js" me change              karenge.
                                           Step 7.4.1 : COnsole me POST method ke output ko json format me dekhenge

                                           Step 7.4.2 : Json format me message ko POSTMAN me dekhenge

                                Step 7.5 : POSTMAN App me HEADER pe
                                                        KEY               Value
                                                       Content-Type      application/json

                                           and BODY me > ROW then JSON select ho

                                                               {
                                                                "username" : "Vikash",
                                                                "email":"vikashkaushik@gmail.com"
                                                                }

                                           then simply SEND [GOT ERROR: JSon message dikh hi nai raha hai ]
                                Step 7.6 : Middleware use karenge "Server.js" me json text visible karane ke liye   aur 
                                 router se pahle use karenge SERVER.JS file me  [Successfully data POST ho gaya]




