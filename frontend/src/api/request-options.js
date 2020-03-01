export async function buildHeaders(
  options
) {
  const headers = new Headers();
  let body;
  const currentOptions = options || {};
  if (currentOptions) {
    body = JSON.stringify(currentOptions.data);
  }

  headers.append('Content-Type', 'application/json');
  const newOptions = {
    ...currentOptions,
    headers,
    body,
  };
  return newOptions;
}
