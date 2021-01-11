import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  const mockRepository = jest.fn(() => ({
    metadata: {
      columns: [],
      relations: [],
    },
  }));
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useClass: Repository },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('test get hello', () => {
    jest.spyOn(userService, 'findAll').mockResolvedValue([]);

    controller.getHello().then((data) => {
      expect(data).toStrictEqual([]);
    });
  });
});
