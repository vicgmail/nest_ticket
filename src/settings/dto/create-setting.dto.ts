import { IsNumber } from "class-validator";

export class CreateSettingDto {
    @IsNumber()
    service_fee_rate: number;

    @IsNumber({maxDecimalPlaces: 2})
    minimum_fee: number;
}
