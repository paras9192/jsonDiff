import * as jsondiffpatch from 'jsondiffpatch';

const country = {
    name: 'Argentina',
    cities: [
      {
        name: 'Buenos Aires',
        population: 13028000,
      },
      {
        name: 'Cordoba',
        population: 1430023,
      },
      {
        population: 1136286,
        name: 'Rosario',
      },
    
      {
        name: 'San Miguel de Tucuman',
        population: 800000,
      },
      {
        name: 'Mendoza',
        population: 901126,
      },
    ],
  };
  
  console.log(country);
  // clone country

  const country2 = JSON.parse(JSON.stringify(country));
//   country2.cities.splice(1, 1);
  country2.cities[0].population += 100000;
  console.log(country2.cities[0]={
    lastname:"paras",
    name: 'Buenos Aires',
    population: 14028000,

  });

  
  const diffpatcher = jsondiffpatch.create({
    objectHash: function (obj) {
      return obj.name;
    },
  });
  
  const delta = diffpatcher.diff(country, country2);

  console.log(JSON.stringify(delta))