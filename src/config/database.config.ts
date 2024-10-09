import { config } from 'dotenv';
import { Setting } from '../settings/entities/setting.entity';
import { TicketTier } from 'src/ticket-tier/entities/ticket-tier.entity';

config();

export const DATABASE_CONFIG = {
    type: 'postgres' as const,
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME as string,
    synchronize: !!process.env.DATABASE_SYNCHRONIZE, // SWITCH OFF for dev, staging and production envs
    dropSchema: false,
    keepConnectionAlive: true,
    autoLoadEntities: true,
    logging: !!process.env.DATABASE_LOG,
    migrationsTableName: 'migration_table',
    retryAttempts: 1,

    entities: [Setting, TicketTier],
  
    extra: {
        max: process.env.DATABASE_MAX_CONNECTIONS,
        // ssl: process.env.DATABASE_SSL_ENABLED
        // ? {
        //     rejectUnauthorized: process.env.DATABASE_REJECT_UNAUTHORIZED,
        //     ca:
        //         process.env.DATABASE_CA ??
        //         undefined,
        //     key:
        //         process.env.DATABASE_KEY ??
        //         undefined,
        //     cert:
        //         process.env.DATABASE_CERT ??
        //         undefined,
        //     }
        // : undefined,
    },
  };
