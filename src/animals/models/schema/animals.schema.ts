import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({})
export class Animal extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
