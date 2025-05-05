import logger from './logger';

logger.info('Приложение запущено');
logger.warn('Это предупреждение');
logger.error({ err: new Error('Что-то пошло не так') }, 'Ошибка произошла');