import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';


export type ProjectDocument = HydratedDocument<Project>;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Project {
  @ApiProperty({
    title: 'This is a name of project',
    example: 'Creating visual materials for social media',
    
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    title: 'This is a description of project',
    example:
      'It is a long established fact that a reader will be distracted by the adable ',
  })
  @Prop({ required: true })
  description: string;

  
  @ApiProperty({
    title: 'This is a deadline of project',
    example: '22.11.2025',
  })
  @Prop({ required: true })
  deadline: string;

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
export const ProjectSchema = SchemaFactory.createForClass(Project);
