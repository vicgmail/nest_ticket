import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { Setting } from './entities/setting.entity';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  async create(@Body() newSettingDto: CreateSettingDto) {
    const setting = await this.findAll();
    if (setting) {
      return this.settingsService.update(setting.id, newSettingDto);  
    }

    return this.settingsService.create(newSettingDto);
  }

  @Get()
  async findAll(): Promise<Setting> {
    const settings = await this.settingsService.find();
    return settings ? settings[0] : null;
  }
}
