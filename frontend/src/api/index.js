import {TweetsService} from './tweets-service'

export class MicroserviceApi {
  tweetsService;

  constructor(baseUrl) {
    this.tweetsService = new TweetsService(baseUrl);
  }
}
