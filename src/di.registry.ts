import { Container } from 'inversify';
import { StartGameUseCase } from './application/startGame';
import { LocalStorage } from './domain/services/localStorage';

export default function registerServices(container: Container) {
  /* Examples
    container.unbindAll();
  
    container
      .bind<RehavivaUserService>(TYPES.UserService)
      .toDynamicValue(() => useRehavivaUserService());
  
    container.bind(LoginUseCase).toSelf();
    container.bind(SignUpUseCase).toSelf();
    container.bind(LoginApi).toSelf();
  
    container.bind(SignUpApi).to(SignUpApiFake);
    container.bind(DistrictsApi).toSelf();
    container.bind(ProvincesApi).toSelf();
  
    container.bind(DistrictRepository).toSelf();
    container.bind(ProvinceRepository).toSelf();
    container.bind(StreetRepository).toSelf();
    */
  container.unbindAll();
  container.bind(StartGameUseCase).toSelf();
  container.bind(LocalStorage).toSelf();
}
