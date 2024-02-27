export function objectToQueryString(obj: Record<string, any>): string {
  const queryParams: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            queryParams.push(
              `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
            );
          });
        } else {
          queryParams.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          );
        }
      }
    }
  }

  return queryParams.join("&");
}
