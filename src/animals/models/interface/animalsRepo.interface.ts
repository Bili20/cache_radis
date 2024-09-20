import { Animal } from '../schema/animals.schema';
import { createAnimalDTO } from '../dto/createAnimals.dto';
import { ObjectId } from 'mongoose';

export interface IAnimalsRepo {
  create(param: createAnimalDTO): Promise<Animal>;
  findOne(id: string): Promise<Animal>;
}
