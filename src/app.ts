import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN, CREDENTIALS } from '@config';
import { dbConnection } from '@databases';
import errorMiddleware from '@middlewares/error.middleware';
import { logger, stream } from '@utils/logger';
import { connect, set } from 'mongoose';
import { Routes } from './interfaces/routes.interface';

class App {
    public express: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.express = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

        this.connectToDatabase()
        this.initializeRoutes(routes);
        this.initializeMiddlewares();
        this.initializeErrorHandling();
    }
    initializeErrorHandling() {
        this.express.use(errorMiddleware);
    }
    public listen() {
        this.express.listen(this.port, () => {
            logger.info(`=================================`);
            logger.info(`======= ENV: ${this.env} =======`);
            logger.info(`🚀 App listening on the port ${this.port}`);
            logger.info(`=================================`);
        });
    }

    private connectToDatabase() {
        if (this.env !== 'production') {
            set('debug', true);
        }

        connect(dbConnection.url, dbConnection.options as any, () => {
            logger.info('🚀 MongoDB connected ' + dbConnection.url);
            logger.info(`=================================`);
        });
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => this.express.use('/', route.router));
    }

    private initializeMiddlewares() {
        this.express.use((req, res, next) => {
            console.log(`Incomming -> method [${req.method}] - url: [${req.url} - ip: [${req.socket.remoteAddress}]`)
            next();
        })
        this.express.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
        this.express.use(express.json());
    }
}

export default App;
