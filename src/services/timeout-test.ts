export default async (cb: () => void, timeout: number) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      try {
        cb();
        resolve(true);
      } catch {
        resolve(false);
      }
    }, timeout);
  });
};
