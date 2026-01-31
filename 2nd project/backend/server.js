import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

// app.get('/',(req, res)=>{
//     res.send("hello!!!")
// })
app.get('/jokes', (req, res) => {
    const jokes=[
        {
            id:1,
            name:"ayman",
        },
        {
            id:2,
            name:"insha",
        },
        {
            id:3,
            name:"arsalan"
        }
    ];

    res.send(jokes);
})

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})