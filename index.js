const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT||5000;
const app = express();
const mainRouter=require('./src/router/mainRouter');
app.options('*', cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1',mainRouter.publicRouter)


//app.get('/api/v1',)
app.listen(PORT, () => {
	console.log("Server up and running on port: %d", PORT);
});