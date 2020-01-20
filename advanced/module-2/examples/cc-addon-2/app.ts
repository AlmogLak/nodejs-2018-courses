const addon2 = require('./build/Release/addon');

addon2((msg: string) => {
  console.log(`Almog Laktivi: ${msg}`);
});
