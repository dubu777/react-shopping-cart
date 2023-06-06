import Client from './Client';

class NetworkClient extends Client {
  override async get(path: string) {
    return super.get(`.${path}`);
  }

  override async post(path: string, body: unknown) {
    return super.post(`.${path}`, body);
  }

  override async patch(path: string, itemId: number, body: unknown) {
    return super.patch(`.${path}/${itemId}`, itemId, body);
  }

  override async delete(path: string, itemId: number) {
    return super.delete(`.${path}/${itemId}`, itemId);
  }
}

export default NetworkClient;