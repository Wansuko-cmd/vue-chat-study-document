module.exports = {
    devServer: {
        proxy: {
            "/chat": {
                target: "http://localhost:8000",
            }
        }
    }
};
