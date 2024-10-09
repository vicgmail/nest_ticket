import { DataSource } from 'typeorm';
import {DATABASE_CONFIG} from '../config/database.config';

export const DatabaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(DATABASE_CONFIG);
      return dataSource.initialize();
    },
  },
];