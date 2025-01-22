import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVacancyDto } from './create-vacancy.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Field } from 'src/util/enum';

export class UpdateVacancyDto extends PartialType(CreateVacancyDto) {
  @ApiProperty({
    title: 'This is a name of job applicant',
    example: 'Roberto Ponyu',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    title: 'This is a name of vacancy',
    example: 'Web design',
    required: true,
  })
  @IsString()
  nameVacancy: string;

  @ApiProperty({
    title: 'This is a Field',
    example: 'Design',
    required: true,
  })
  @IsOptional()
  @IsEnum(Field)
  field: Field;

  @ApiProperty({
    title: 'This is a country',
    example: 'Canada',
    required: true,
  })
  @IsString()
  country: string;

  @ApiProperty({
    title: 'This is a experience',
    example: 'More 2 years',
    required: true,
  })
  @IsString()
  experience: string;

  @ApiProperty({
    title: 'This is a description',
    example:
      'It is a long established fact that a reader will be distracted by the adable content of a page when looking at its layout.',
    required: true,
  })
  @IsString()
  description: string;
}
