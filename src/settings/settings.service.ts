import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    @Inject('SETTING_REPOSITORY')
    private readonly repository: Repository<Setting>,
  ) {}

  async create(createSettingDto: CreateSettingDto) {
    const newTenant = this.repository.create(createSettingDto);
    await this.repository.save(newTenant);
    return newTenant;    
  }

  find() {
    return this.repository.find();
  }

  update(id: number, updateSettingDto: UpdateSettingDto) {
    const {service_fee_rate, minimum_fee} = updateSettingDto;
    return this.repository.update(id, {service_fee_rate, minimum_fee});
  }
}
