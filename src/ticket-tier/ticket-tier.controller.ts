import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { TicketTierService } from './ticket-tier.service';
import { CreateTicketTierDto } from './dto/create-ticket-tier.dto';
import { UpdateTicketTierDto } from './dto/update-ticket-tier.dto';
import { SettingsService } from 'src/settings/settings.service';

@Controller('ticket-tier')
export class TicketTierController {
  constructor(
    private readonly ticketTierService: TicketTierService, 
    private readonly settingsService: SettingsService
  ) {}

  @Post()
  async create(@Body() createTicketTierDto: CreateTicketTierDto) {
    const data = await this.calculateTierData(createTicketTierDto);
    return this.ticketTierService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTicketTierDto: UpdateTicketTierDto) {
    const data = await this.calculateTierData(updateTicketTierDto);
    return this.ticketTierService.update(+id, data);
  }

  async calculateTierData(data: CreateTicketTierDto): Promise<CreateTicketTierDto> {
    const settings = await this.settingsService.find();
    if (!settings) {
      throw new BadRequestException(`Please, define global Minimum Fee setting`);
    }

    const { minimum_fee } = settings[0];

    if (data.buyer_price) {
      data.promoter_receives_price = data.buyer_price * (1 + data.service_fee / 100);
    }
    else if (data.promoter_receives_price) {
      data.buyer_price = data.promoter_receives_price / (1 + data.service_fee / 100);
    }

    if (data.buyer_price * data.service_fee / 100 < minimum_fee) {
      throw new BadRequestException(`Please, set Service Fee more then ${minimum_fee}`);
    }

    return data;
  }

  @Get()
  findAll() {
    return this.ticketTierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTierService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTierService.remove(+id);
  }
}
