import { Module } from '@nestjs/common';
import { TicketTierService } from './ticket-tier.service';
import { TicketTierController } from './ticket-tier.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TicketTierProviders } from './ticket-tier.provider';
import { SettingsService } from 'src/settings/settings.service';
import { SettingProviders } from 'src/settings/setting.provider';

@Module({

  imports: [DatabaseModule],
  controllers: [TicketTierController],
  providers: [
    ...TicketTierProviders, 
    TicketTierService, 
    ...SettingProviders, 
    SettingsService],
})
export class TicketTierModule {}
