

/** @type {import('next').NextConfig} */
const nextConfig = {
    image:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"s3-gestion-stock.s3.us-east-2.amazonaws.com",
                port:"",
                pathname:"/**",
            }
        ]
    }
};

export default nextConfig;
