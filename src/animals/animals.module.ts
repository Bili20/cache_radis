import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from './models/schema/animals.schema';
import { CreateAnimalsUseCase } from './useCase/create/createAnimals.use-case';
import { AnimalRepo } from './repository/animalsRepo';
import { CreateAnimalsController } from './useCase/create/createAnimals.controller';
import { FindOneAnimalUseCase } from './useCase/findOne/findOneAnimal.use-case';
import { FindOneAnimalController } from './useCase/findOne/findOneAnimal.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }]),
  ],
  providers: [
    CreateAnimalsUseCase,
    FindOneAnimalUseCase,
    AnimalRepo,
    { provide: 'IAnimalsRepo', useExisting: AnimalRepo },
  ],
  controllers: [CreateAnimalsController, FindOneAnimalController],
})
export class AnimalsModule {}
