var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports={
    entry:'./src/index.js',
    output:{
        path:__dirname +'/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:'babel-loader'
            },
            {
                test:/\.png$/,
                use: 'file-loader'
            },
            {   test: /\.(woff2?|svg)$/, 
                loader: 'url-loader?limit=10000' 
            },
            {   test: /\.(ttf|eot)$/, 
                loader: 'file-loader' 
            },
            {   test: /bootstrap-sass\/assets\/javascripts\//, 
                loader: 'imports-loader?jQuery=jquery' 
            }
        ]
    },
    devServer:{
        contentBase:__dirname+'/dist',
        compress:true,
        port:9000,
        stats:'errors-only',
        open:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'castiko project',
            minify:{
                collapseWhitespace:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}