export class AccountNotRegisterException extends Error {
  constructor() {
    super('El usuario no está registrado en la plataforma');
  }
}
