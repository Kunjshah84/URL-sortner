import express, { urlencoded } from 'express';
import path from 'path'
const app = express();
const port = 8001;

import urlrouter from "./routes/url.js";
import  connect  from "./connection.js";
import url from "./models/user.js"
import staticrouter from "./routes/staticrouter.js"
import signuprouter from './routes/userauth.js'

//In order to parse anwd use cookies in our code:
import cookiesparser from 'cookie-parser'
import {redirecttologgieduseronly , checkauth} from './middlewares/auth.js'

app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))

connect("mongodb://127.0.0.1:27017/short-url")
    .then(() => { 
        console.log("Yes, the Db has been connected");
    })
    .catch(() => console.log("Bhai locha padiya che"));

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookiesparser())

// app.get('/test' ,async (req , res) => {
//     const allurls=await url.find({})
//     // return res.end('<h1>Hello from the server</h1>')
//     // return res.end(`
//     //     <html>
//     //         <head></head>
//     //         <body>
//     //             <ol>
//     //                 ${allurls.map(url => `<li> ${url.sortid} - ${url.redirectul} - ${url.visithistory.length}</li>`).join('')}
//     //             </ol>
//     //         </body>
//     //     </html>    
//     // `)
//     return res.render('home' , {
//         urls:allurls
//     })
// })


app.use("/url", redirecttologgieduseronly ,urlrouter); // Corrected the route registration

app.use("/", checkauth ,staticrouter)
app.use("/user" , signuprouter)

app.listen(port, () => {
    console.log(`The server has been started on port ${port}`);
});
