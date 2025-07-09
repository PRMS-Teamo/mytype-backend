export interface IRedisService {
  set(key: string, value: any, ttlSeconds?: number): Promise<void>;
  get<T = any>(key: string): Promise<T | null>;
  del(key: string): Promise<void>;
  exists(key: string): Promise<boolean>;
  expire(key: string, seconds: number): Promise<boolean>;
  ttl(key: string): Promise<number>;
  publish(channel: string, message: string): Promise<number>;
  subscribe(
    channel: string,
    callback: (message: string) => void,
  ): Promise<void>;
  unsubscribe(channel: string): Promise<void>;
}
