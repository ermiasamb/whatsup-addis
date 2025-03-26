import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialShareDto } from './create-socialshare.dto';

export class UpdateSocialShareDto extends PartialType(CreateSocialShareDto) {}