import { Body, Controller, Inject, Post } from '@nestjs/common';
import { createAnimalDTO } from '../../models/dto/createAnimals.dto';
import { CreateAnimalsUseCase } from './createAnimals.use-case';

@Controller()
export class CreateAnimalsController {
  @Inject(CreateAnimalsUseCase)
  private readonly createAnimalsUseCase: CreateAnimalsUseCase;

  @Post()
  async create(@Body() param: createAnimalDTO) {
    return await this.createAnimalsUseCase.execute(param);
  }
}
