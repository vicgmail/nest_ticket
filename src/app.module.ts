import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { SettingsModule } from './settings/settings.module';
import { TicketTierModule } from './ticket-tier/ticket-tier.module';

@Module({
  imports: [
    DatabaseModule,
    SettingsModule,
    TicketTierModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}