import app from './libs/create-server'

const port = 3002

app.listen(port, () => {
    console.log(`Something is running at ${port}`)
})
