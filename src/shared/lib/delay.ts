export const delay = (callback: Function) =>
  new Promise((resolve) => setTimeout(() => resolve(callback()), 5000));
