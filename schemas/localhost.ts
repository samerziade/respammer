import { DataSchema } from './schema';

const schema: DataSchema = {
  connect: {
    hostname: 'localhost',
    port: 8080,
    path: '/index.php'
  },

  http: {
    method: 'POST',

    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en',
      'Cache-Control': 'no-cache',
      Connection: 'close',
      DNT: '1',
      Pragma: 'no-cache'
    }
  },

  schema: [
    {
      name: 'user',
      type: 'string',
      min: 8,
      max: 32,
      set: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    {
      name: 'password',
      type: 'string',
      min: 8,
      max: 64,
      set:
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_+[{]}|;:",<.>?'
    }
  ]
};

export default schema;