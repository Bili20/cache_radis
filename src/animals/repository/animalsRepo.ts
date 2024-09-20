import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createAnimalDTO } from '../models/dto/createAnimals.dto';
import { IAnimalsRepo } from '../models/interface/animalsRepo.interface';
import { Animal } from '../models/schema/animals.schema';

@Injectable()
export class AnimalRepo implements IAnimalsRepo {
  constructor(
    @InjectModel(Animal.name) private readonly animalsSchema: Model<Animal>,
  ) {}

  async create(param: createAnimalDTO): Promise<Animal> {
    const animal = await this.animalsSchema.create(param);
    animal.save();
    return animal;
  }

  async findOne(id: string): Promise<Animal> {
    return await this.animalsSchema.findOne({ _id: id }).exec();
  }
}
