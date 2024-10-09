import { DataSource } from 'typeorm';
import { DATABASE_CONFIG } from '../src/config/database.config';

const AppDataSource = new DataSource(DATABASE_CONFIG);

export default AppDataSource;