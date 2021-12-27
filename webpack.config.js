const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode:"development",
    entry: {
        index:"./src/scripts/index.js",
        nav:"./src/scripts/nav.js",
        layout:"./src/scripts/pageLayout.js",
        elementEvent: "./src/scripts/elementEvents.js",
        content: "./src/scripts/content.js",
        send: "./src/scripts/send.js",
        template: "./src/scripts/template.js",
        assign:"./src/scripts/assign.js",
        utilities: "./src/scripts/utilities.js",
        uiEffects: "./src/scripts/uiEffects.js",
        times: "./src/scripts/times.js",
        mobile: "./src/scripts/mobile.js",
        contentEffects: "./src/scripts/contentEffects.js",
        storage: "./src/scripts/storage.js",
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