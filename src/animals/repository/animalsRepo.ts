import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createAnimalDTO } from '../models/dto/createAnimals.dto';
import { IAnimalsRepo } from '../models/interface/animalsRepo.interface';
import { Animal } from '../models/schema/animals.schema';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AnimalRepo implements IAnimalsRepo {
  constructor(
    @InjectModel(Animal.name) private readonly animalsSchema: Model<Animal>,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  async create(param: createAnimalDTO): Promise<Animal> {
    const animal = await this.animalsSchema.create(param);
    animal.save();
    return animal;
  }

  async findOne(id: string): Promise<Animal> {
    const cachedData = await this.cacheService.get<Animal>(id);
    if (cachedData) {
      return cachedData;
    }
    const animal = await this.animalsSchema.findOne({ _id: id }).exec();
    await this.cacheService.set(id, animal);

    return animal;
  }
}
