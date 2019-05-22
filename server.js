let express = require("express")
let ejs = require("ejs")
let url = require('url')
let path = require('path')

let app = express()

let options = {
    maxAge: 3600000
};

// 应用级中间件
app.use(function(req, res, next) {
    console.log("Mid1")
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 应用级中间件
app.use(function (req, res, next) {
    console.log("Mid2")
    // 去除查询参数，支持heightMap和Quantized-Mesh
    let filePath = path.join(__dirname, url.parse(req.url).pathname);
    let pathTmep = path.extname(filePath)
    if (pathTmep === '.terrain') {
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Encoding': 'gzip',
        });
        // Content-Disposition: attachment;filename=2948.terrain
        res.set('Content-Disposition', 'attachment;filename='+path.basename(filePath))
    }
    next();
})

app.get("/", function (req, res, next) {
    // res.render("index.ejs")
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

// 静态资源中间件放到最后，确保应用级中间件被使用加上http头部信息
app.use(express.static(__dirname + "/node_modules/cesium/Build", options));
app.use(express.static(__dirname + "/public", options));
 
// 异常处理中间件
app.use(function (req, res, next) {
    res.status(404).send('So sorry, we cannot find that!');
})

app.listen("8092", "localhost")

