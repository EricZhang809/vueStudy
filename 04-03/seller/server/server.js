const http = require('http');
const url = require('url');
const data = require('./data.json');
const config = require('./config');
const uuid = require('uuid/v4');

http.createServer((req,res) => {
	let {pathname} = url.parse(req.url);
	switch(pathname) {
		case '/api/keys': 
			if(req.method === 'POST') {
				const keys = uuid().replace(/\-/g,'');
				res.write(keys);
			}else {
				res.write(null);
			}
			res.end();
		break;
		case '/api/seller':
			
		break;

		case '/api/goods':

		break;

		case '/api/ratings':

		break;

	}
}).listen(config.HTTP_PORT,() => {
	console.log(`server is running at http://${config.HTTP_HOST}:${config.HTTP_PORT}`);
});