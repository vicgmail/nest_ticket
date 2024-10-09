import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';

import { CreateTicketTierDto } from './dto/create-ticket-tier.dto';
import { UpdateTicketTierDto } from './dto/update-ticket-tier.dto';
import { TicketTier } from './entities/ticket-tier.entity';

@Injectable()
export class TicketTierService {
  constructor(
    @Inject('TICKETTIER_REPOSITORY')
    private readonly repository: Repository<TicketTier>,
  ) {}

  async create(createTicketTierDto: CreateTicketTierDto) {
    const repository = this.repository.create(createTicketTierDto);
    await this.repository.save(repository);
    return repository;    
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: {id}});
  }

  update(id: number, updateTicketTierDto: UpdateTicketTierDto) {
    const { service_fee, buyer_price, promoter_receives_price } = updateTicketTierDto;
    return this.repository.update(id, {service_fee, buyer_price, promoter_receives_price});
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
