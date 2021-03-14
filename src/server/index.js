const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')

const app = express()
const fetch = require('node-fetch')

//solve body being undefined https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
//////////////////////////////////////////////////////////////////////////////////////////////////////


app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', async function (req, res) {
    const url = req.body.url
    let responseObj = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`, { method: "POST" })

    let data = await responseObj.json()
    if (data && data.status.code == 0)
        res.send(data)
    else res.status(500).send({ message: "Server Error" })
})
