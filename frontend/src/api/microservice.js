export class BaseMicroservice {
    async responseToJson(response) {
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      throw data;
    }
  }
  