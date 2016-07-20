var a = {
  Berlin: 'Germany',
  Paris: 'France',
  'New York': 'USA'
};

var countries = {};

for (var key in cities) {
var country = cities[key];
countries[country] = key;
console.log(countries);
};
