import { ApiProperty } from '@nestjs/swagger';

import { IsOptional, IsString } from 'class-validator';


export class CreateProjectDto {
  @ApiProperty({
    title: 'This is a name of project',
    example: 'Creating visual materials for social media',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    title: 'This is a description of project',
    example:
      'It is a long established fact that a reader will be distracted by the adable ',
    required: true,
  })
  @IsOptional()
  @IsString()
  description: string;

  

  @ApiProperty({
    title: 'This is a deadline of project',
    example: '22.11.2025',
    required: true,
  })
  @IsOptional()
  @IsString()
  deadline: string;

  
}
