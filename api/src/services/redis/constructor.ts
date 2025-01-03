import type { RedisClientType as Client } from 'redis';
import log from '@/modules/logger';
import tags from 'library/templates/tags';
import redis from 'redis';

type CB = (err?: Error) => void;
class RedisCache {
    public client: Client;
    public tag = tags.redis;
    public on = (e, cb: CB) => this.client.on(e, (err) => cb(err));
    protected initLog = () => log.info(this.tag('Starting Redis client...'))
    protected error = (err) => {
      const status = `Status: ${err.statusCode}`;
      log.error(this.tag(err.message));
      log.error(this.tag(status));
    };
    constructor() {
      this.initLog();
      this.client = redis.createClient();
    };
    public handleErrors() {
      this.on('error', (err) => this.error(err));
    }
};

export default RedisCache;