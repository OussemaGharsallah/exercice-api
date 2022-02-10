const sdk = require('api')('@climacell-docs/v4#bzqumkyn13ppf');

sdk.auth('IXYLT8M6PTrHuBPYofbDtpq5C0HQWNIz');
sdk['get-timelines']({
  location: 'Id%3A%206204d2101068280007a79a1c',
  fields: '11',
  units: 'metric',
  timesteps: 'current',
  startTime: '%222019-03-20T14%3A09%3A50Z%22',
  endTime: '%222019-03-20T14%3A09%3A50Z%22',
  timezone: '%20%22Africa%2FTunis%22%3A%20%22%2B01%3A00%22%2C'
})
  .then(res => console.log(res))
  .catch(err => console.error(err));
