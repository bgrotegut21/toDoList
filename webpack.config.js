const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode:"development",
    entry: {
        index:"./src/scripts/index.js",
        app:"./src/scripts/app.js",
        layout:"./src/scripts/pageLayout.js",
        emit:"./src/scripts/emit.js",
        elementEvent: "./src/scripts/elementEvents.js",

    },
    output: {
        filename:"[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean:true,
        publicPath:"/",
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "To Do List"
        })

    ],
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ]
    }
}