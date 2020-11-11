
import AppSercice from './modules/app.service'
import { config } from './modules/config'
import './modules/header.component'

const service = new AppSercice('webpack service');
service.log();
console.log(config.key);

console.log("Hello Webpack");