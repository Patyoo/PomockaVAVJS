someAsyncFunction = (boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (boolean) {
        resolve(true);
      } else {
        reject(false);
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
