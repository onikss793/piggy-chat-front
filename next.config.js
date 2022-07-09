/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		GET_STREAM_API_KEY: process.env.GET_STREAM_API_KEY,
		GET_STREAM_SECRET_KEY: process.env.GET_STREAM_SECRET_KEY
	}
};

module.exports = nextConfig;
