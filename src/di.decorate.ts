import { decorate, injectable, inject } from 'inversify';
import { StartGameUseCase } from './application/startGame';
import { LocalStorage } from './domain/services/localStorage';

//Example
//decorate(injectable(), LoginUseCase);
//decorate(injectable(), LoginApi);
//decorate(inject(TYPES.UserService), LoginUseCase, 0);
//decorate(inject(LoginApi), LoginUseCase, 1);

// decorator for injectable class
