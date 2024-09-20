import { Inject, Injectable } from '@nestjs/common';
import { IAnimalsRepo } from 'src/animals/models/interface/animalsRepo.interface';

@Injectable()
export class FindOneAnimalUseCase {
  @Inject('IAnimalsRepo')
  private readonly animalRepo: IAnimalsRepo;

  async execute(id: string) {
    const animal = await this.animalRepo.findOne(id);
    return animal;
  }
}
