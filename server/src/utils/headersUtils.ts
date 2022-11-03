export function getHeadersWithAuth(auth: string) {
  return {
    headers: { authorization: auth },
  };
}
