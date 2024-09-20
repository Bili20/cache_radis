import { Controller, Get, Inject, Param } from '@nestjs/common';
import { FindOneAnimalUseCase } from './findOneAnimal.use-case';

@Controller()
export class FindOneAnimalController {
  @Inject(FindOneAnimalUseCase)
  private readonly findOneAnimalUseCase: FindOneAnimalUseCase;

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.findOneAnimalUseCase.execute(id);
  }
}
