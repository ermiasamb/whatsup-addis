import { IsUUID } from "class-validator";
import { CreateEventDto } from "./create-events.dto";
export class UpdateEventDto extends CreateEventDto {
    @IsUUID() id: string;
  }
  