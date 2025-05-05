// src/logger.ts
import pino from 'pino';
import { destination } from 'pino';

const stream = destination({ fd: 1, sync: true }); // stdout, синхронно

const logger = pino(
  {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'yyyy-mm-dd HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  },
  stream
);

export default logger;
