


/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:"encrypted-tbn0.gstatic.com",
            },
            {
                protocol:'https',
                hostname:"m.media-amazon.com",
            },
            {
                protocol:'https',
                hostname:"**",
            },
        ],
    },
};



export default nextConfig;
