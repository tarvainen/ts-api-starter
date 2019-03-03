import { ServerLoader, ServerSettings } from '@tsed/common';
import Path = require('path');
import bodyParser = require('body-parser');
import '@tsed/ajv';
import GlobalErrorHandlerMiddleware from './middlewares/GlobalErrorHandlerMiddleware';
 
@ServerSettings({
  rootDir: Path.resolve(__dirname),
  acceptMimes: ['application/json'],
  ajv: {
    errorFormat: (error: any) => `${error.modelName}${error.dataPath} ${error.message}`,
    options: { verbose: true }
  }
})
export class Server extends ServerLoader {
  public $onMountingMiddlewares(): void|Promise<any> { 
    this.use(bodyParser.json());

    return null;
  }

  public $onReady() {
    console.log('Server started...');
  }

  public $afterRoutesInit() {
    this.use(GlobalErrorHandlerMiddleware);
  }
  
  public $onServerInitError(err: string) {
    console.error(err);
  }
}
 
new Server().start();
