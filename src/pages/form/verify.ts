const validateName = (rule: [], value: string, callback: Function) => {
  if (value && value.length > 4) {
    callback();
  } else {
    callback(new Error('At least four characters for account'));
  }
};

const validateAge = (rule: [], value: string, callback: Function) => {
  if (value && value.length > 4) {
    callback();
  } else {
    callback(new Error('At least four characters for account'));
  }
};
