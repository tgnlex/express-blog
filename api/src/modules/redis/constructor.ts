import type { RedisClientType as Client } from 'redis';
import tags from '@/library/templates/tags.ts';
import redis from 'redis';
import Logger from '@/modules/logger/constructor.ts';
type CB = (err?: Error) => void;
class RedisCache {
    public client: Client;
    public log = new Logger({level: 'level', tag: tags.redis});
    public on = (e, cb: CB) => this.client.on(e, (err) => cb(err));
    protected onInit = () => this.log.info('Starting Redis client...');
    protected error = (err) => {
      const status = `Status: ${err.statusCode}`;
      this.log.error(err.message);
      this.log.error(status);
    };
    constructor() {
      this.onInit();
      this.client = redis.createClient();
    };
    public handleErrors() {
      this.on('error', (err) => this.error(err));
    }
};

export default RedisCache;