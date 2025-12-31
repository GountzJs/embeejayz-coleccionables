export class AccountNotFoundException extends Error {
  constructor() {
    super('No se ha podido encontrar ninguna cuenta');
  }
}
