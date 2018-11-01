var CopyWebpackPlugin = require('copy-webpack-plugin');
// var path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        // path: path.join(__dirname, "dist"),
        filename: "dist/bundle.js"
        // publicPath: "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    mode: "development",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
             },
             {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },

    plugins: [
        // new HtmlWebpackPlugin({
        //     hash: true,
        //     template: './src/index.html',
        //     filename: './dist/index.html' //relative to root of the application
        // }),
        new CopyWebpackPlugin([
            {from:'src/images',to:'images'}
        ])
    ],

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }

};
