import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { createAnimalDTO } from 'src/animals/models/dto/createAnimals.dto';
import { IAnimalsRepo } from 'src/animals/models/interface/animalsRepo.interface';

@Injectable()
export class CreateAnimalsUseCase {
  @Inject('IAnimalsRepo')
  private readonly animalRepo: IAnimalsRepo;

  async execute(param: createAnimalDTO) {
    try {
      return await this.animalRepo.create(param);
    } catch (e) {
      throw new BadRequestException({ message: 'Erro ao salvar dado.' });
    }
  }
}
