import {App} from './app'

const port: any = process.env.OPENSHIFT_NODEJS_PORT || 8000;
const server_ip_address: string = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const app: App = new App(server_ip_address, port);
app.startServer();