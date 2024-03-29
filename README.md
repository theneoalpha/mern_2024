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


        Step 5 : "auth-routes.js" - cleaning server.js / server.js file ki complexity ko kamm 
                karenge "auth-routes.js" file create karke

                METHOD 1
                        Step 5.1 : Previous routing method step 3.3 loading me time
                                 lagta hai and code bhi complex ho jayega isliye ise new 
                                 file bana dete hai aur express.routes function ka use karenge

                        Step 5.2 : Server.js se routes ko comment karenge

                        Step 5.3 : "server.js" me import karenge auth-router.js ke code ko

                METHOD 2

                        Step 5.4 : Optional Method / More advance routing method

        Step 6 : Controller use karenge auth-routes.js file ki complexity 
                kamm karne ke liye  , req and res ko manage karenge acche 
                tarike se  by using async function try and catch

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

                        Step 7.1 : Install POSTMAN API from browser / VS Code Extension 
                                  "Thunderbolt" , Open POSTMAN

                        Step 7.2 : New COllection create karenge "+" icon pe tap karke and naming
                                 karenge uss collection ka and then "Add a Request" tab open karenge

                        //Just for checking Process

                        Step 7.3 : GET Method me hi apne register page ka link
                                "http://localhost:5000/api/auth/register" enter kareke response dekhenge.

                        Step 7.4 : Register wale route me POST method karenge "auth-router.js" file me
                                and uska response dekhne ke liye "auth-controller.js" me change karenge.
                                           
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



        Step 8 : Connecting Backend with MongoDB(database)

                        Step 8.1 : "Mongoose" package install karenge npm package se "npm i mongoose"

                        Step 8.2 : Server folder me "utils" folder banayenge utils>db.js

                                Step 8.2.1 : db.js me code karenge


                                Step 8.2.2 : Online Database connect karenge

                                        "Connect to your application" > "Drivers" > "3. Add your 
                                        connection string into your application code"

                                Step 8.2.3 : Server.js file me Database module ko import karenge 


        Step 9 : Securing the private text with the help of "dotenv"

                        Step 9.1 : "npm i dotenv" karenge terminal me

                        Step 9.2 : Sensitive data ko hide karenge like database 
                                   URI using dot env 


                                        create ".env" file in "server" folder    

                                

                        Step 9.3 : ".env" file me URI ko put karenge and "db.js" me thoda
                                   correction karenge  

                        Step 9.4 : import karenge DOTENV File   
                                   "server.js"me with the help of "config()" middleware


        Step 10 : UserSchema and models ("database ka structure" (blueprint) jis format me data store hoga DATABASE me)

                        Step 10.1 : Server > models(FOLDER) > user-models.js

                        Step 10.2 : isme Schema design karenge apne app ke according

                        Step 10.3 : Defining the model or the collection name for users

                        Step 10.4 : "user-models" ko export karayenge and "server.js" 
                                   me import


        Step 11 : POSTMAN to Online Database data add karenge   

                        Step 11.1 : Get karenge "user-models" ko "auth-controller.js" me
                        Step 11.2 : "auth-controller.js" me define karenge Schema ko   

                               Step 11.2.1 :  Get Registration data
                               Step 11.2.2 : Checking Existence of the email


        Step 12 : Securing password with bcrypt

                METHOD 01:

                        Step 12.1 : "npm i bcryptjs"

                        Step 12.2 : bcrypt ko import karenge and use karenge "auth-controller.js" me 

                        Step 12.3 : Hashing the password

                        Step 12.4 : password ko replace karenge hash_password se

                METHOD 02:

                        Step 12.5 : Pre Method to secure the password using bcrypt "user-models.js" 
                                  Database me save hone se pahle (pre-method) ye function run hoga   


        Step 13 : Json Web Token (JWT) token - user ki authentication and authorization ke                      
                 liye use karte hai , jwt client side create hota hai harr user ke liye jo ki unique hota hai
                 aur specific time ke liye hota hai (session) eg IRCTC 3 Min session for logined user

                        
                        Step 13.0 : JWT ko install karenge npm se "npm i jsonwebtoken"

                        Step 13.1 : "user-models.js" me jwt require karnege and  jsonwebtoken function
                                        create karenge
                                                

                        Step 13.2 : "auth-controller.js" me JWT Function use karenge use

                        Step 13.3 : JWT Signature create karenge ".env" me

                        Step 13.4 : POSTMAN se register karke dekhenge TOKEN Generate ho jayega response me dikhega

                        Step 13.5 : Since token generate ho gaya jise hum database me nahi bhejenge 
                                    vaha sirf "Registration Succesfully" bhejenge so "auth-controller.js" me 
                                    message denge "Registration Succesfully".

        Step 14 : Login Functionality

                        Step 14.1 : Login Route banayenge "auth-router.js" me

                        Step 14.2 : "auth-controller.js" pe login function banayenge   

                        Step 14.3 : Email validity check - check karenge entered email
                                    database me hai ya nahi     

                        Step 14.4 : Comparing Password - agar userExist to password ko compare 
                                    karenge database se

                        Step 14.5 :  login wale method ke token and userid response me "userCreated" ke place me 
                                        "userExist" use karenge 

                                        token: await userExist.generateToken(),
                                        userId: userExist._id.toString(), 


                        Step 14.6 : ab POSTMAN me "login" route pe POST
                                    karke dekhenge              

                        Step 14.7 : comparing password method ko ek "instace variable/function" banayenge 
                        taaki "auth-controller.js" ki complexity kamm ho  

                        Step 14.8 : "user-models.js" me "comparePassword" instance
                                     function banayenge 


        Step 15 : Validation of register field with "ZOD" npm package eg. passwod must be 8 character minimum 
                and phone number must be 10 character

                        Step 15.1 : server > validators(folder) > auth-validator.js

                        Step 15.2 : npm i zod & "auth-validator.js" me import karenge

                        Step 15.3 :  object schema create karenge

                        Step 15.4 : validator(middleware) jo validate karega user register detail fulfill kar raha hai ya nai
                                   zod ke schema ke according 

                                        server > middlewares(folder) > validate-middleware.js

                        Step 15.5 Zod me ek method(function) hai parseAsync() jo ye check karta hai     

                        Step 15.6 : "auth-router.js" me validator ko register me as a middleware use karenge






                                                                    











