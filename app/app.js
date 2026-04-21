import express from 'express'

function createApp(){
   const app = express()
    
   app.use(express.json())

   app.get('/ping', (req, res) => {
      res.send('pong')
   })

   return app
}

export default createApp;