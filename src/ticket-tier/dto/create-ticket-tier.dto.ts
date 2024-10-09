import { IsNumber, Max, Min, ValidateIf } from "class-validator";

export class CreateTicketTierDto {
    @ValidateIf(dto => typeof dto.promoter_receives_price === 'undefined')
    @IsNumber({maxDecimalPlaces: 2})
    buyer_price: number;

    @ValidateIf(dto => typeof dto.buyer_price === 'undefined')
    @IsNumber({maxDecimalPlaces: 2})
    promoter_receives_price: number;

    @IsNumber()
    @Min(0)
    @Max(100)
    service_fee: number;
}
