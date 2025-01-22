import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { Field } from 'src/util/enum';

export type VacancyDocument = HydratedDocument<Vacancy>;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Vacancy {
  @ApiProperty({
    title: 'This is a name of job applicant',
    example: 'Roberto Ponyu',
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    title: 'This is a name of vacancy',
    example: 'Web design',
  })
  @Prop({ required: true })
  nameVacancy: string;

  @ApiProperty({
    title: 'This is a Field',
    example: 'Design',
  })
  @Prop({ required: true, enum: Field, default: Field.ALL })
  field: Field;

  @ApiProperty({
    title: 'This is a country',
    example: 'Canada',
  })
  @Prop({ required: true })
  country: string;

  @ApiProperty({
    title: 'This is a experience',
    example: 'More 2 years',
  })
  @Prop({ required: true })
  experience: string;

  @ApiProperty({
    title: 'This is a description',
    example:
      'It is a long established fact that a reader will be distracted by the adable content of a page when looking at its layout.',
  })
  @Prop({ required: true })
  description: string;

  @ApiProperty({
    description: 'Creation date (automatically generated)',
    example: '2023-04-01T00:00:00.000Z',
    readOnly: true,
  })
  @Prop()
  createdAt: Date;

  @ApiProperty({
    description: 'Last update date (automatically generated)',
    example: '2023-04-01T00:00:00.000Z',
    readOnly: true,
  })
  @Prop()
  updatedAt: Date;
}
export const VacancySchema = SchemaFactory.createForClass(Vacancy);
