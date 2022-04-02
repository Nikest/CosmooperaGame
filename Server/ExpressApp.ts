import * as Express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';

export class ExpressApp {
  public express: Express.Express;

  constructor() {
    this.express = Express();
    this.mount();
  }

  private mount() {
    this.express.use(logger('dev'));
    this.express.use(Express.json());
    this.express.use(Express.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(Express.static(path.join(__dirname, 'GameClient')));
  }

  public set(prop: string, value: number) {
    this.express.set(prop, value);
  }
}
