import dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'dev';

if (environment === 'dev') {
    dotenv.config({ path: '.env.dev' });
} else {
    dotenv.config({ path: '.env' });
}

export const { MONGODB_URI, JWT_SECRET } = process.env;