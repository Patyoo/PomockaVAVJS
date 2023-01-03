someAsyncFunction = (boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(true);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

someAsyncFunction(true)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
