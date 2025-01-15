const express  = require('express');

const app = express();

const port = 30000;

app.use(express.json());

const blogslist = [];
app.get('/blogs', (req, res) => {
    return res.status(200).json({
        blogs: blogslist,
        success: true
    });
});

app.post('/blogs', (req, res) => {
    blogslist.push({title: req.body.title, content: req.body.content});
    return res.status(201).json({
        message: 'Blog created successfully',
        success: true
    });
});

// app.post('/blogs', (req, res) => {
//    console.log(req.bodys);
// });

app.listen(port, () => {
    console.log('Server is running on port', port);
});