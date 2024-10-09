import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { SettingProviders } from './setting.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SettingsController],
  providers: [...SettingProviders, SettingsService],
})
export class SettingsModule {}
