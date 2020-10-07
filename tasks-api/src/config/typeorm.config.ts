import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};