
const headers = {
  'Access-Control-Allow-Origin': '*',
};

module.exports.handler = async (event) => {
	return new Promise((resolve, reject) => {
		resolve({
			statusCode: 200,
			headers,
			body: '{"hello": "world!"}',
		})
	
	})
}
