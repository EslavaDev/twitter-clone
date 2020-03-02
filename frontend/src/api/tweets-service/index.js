import fetch from 'isomorphic-unfetch'
import { BaseMicroservice } from '../microservice';
import { buildHeaders } from '../request-options';

export class TweetsService extends BaseMicroservice {
  baseUrl;
  constructor(baseUrl) {
    super();
    this.baseUrl = `${baseUrl}/twittear`;
  }

    async sendTweet(options) {
    const url = `${this.baseUrl}`;

    const fetchOptions = await buildHeaders(options);
    return fetch(url, { ...fetchOptions, method: 'POST' }).then(
      super.responseToJson
    );
  }
}
