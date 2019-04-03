const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../")
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                use: {
                    loader: "file-loader"
                }
            }
        ]
    }
};
