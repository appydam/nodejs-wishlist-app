module.exports = {
    // url server pe hardcode nhi krenge , ham server pe fetch karenge
    mongourl : process.env.MONGOURL
    // MONGOURL --> yeh hum naam de rhe environment  variable ka , yeh variable heraku pe set karunga , toh yeh url heroku se fetch hoga 
}


// it will be used in production , as when we deploy website 