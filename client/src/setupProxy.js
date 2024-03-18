const {createProxyMiddleware} =require("http-proxy-middleware")
// const apiMocker =require("connect-api-mocker")
module.exports=function(app){
    // app.use("/api",apiMocker({
    //     target:'mocks/api',
    //     nextOnNotFound:true
    // }))
    app.use('/api',createProxyMiddleware({
        target:"http://localhost:8080",
        changeOrigin:true
    }))
}