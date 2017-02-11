var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/static/" // Same as `output.publicPath` in most cases.
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(require("webpack-hot-middleware")(compiler));

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});