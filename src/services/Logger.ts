import { Logger } from 'ts-log-debug'

const logger = new Logger('App')

logger.appenders
    .set('log', {
      type: 'stdout'
    })

export default logger
