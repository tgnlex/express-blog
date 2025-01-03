import RedisCache from './constructor';

const redis = new RedisCache();
const client = redis.client;

// Error Handling;
redis.handleErrors();

export default redis;