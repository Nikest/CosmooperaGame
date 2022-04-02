const habitableStarTypesFrequency = [
  {
    type: 'K',
    frequency: 45,
  },
  {
    type: 'G',
    frequency: 25,
  },
  {
    type: 'F',
    frequency: 20,
  },
  {
    type: 'A',
    frequency: 10,
  },
];

export function getHabitableStarType(mainSequenceRange: number) {
  let type;
  let range = 0;

  for (let i = 0; i < habitableStarTypesFrequency.length; i++) {
    if (mainSequenceRange <= habitableStarTypesFrequency[i].frequency + range) {
      type = habitableStarTypesFrequency[i].type;
      break;
    }
    range += habitableStarTypesFrequency[i].frequency;
  }

  return type;
}

const starTypesFrequency = [
  {
    type: 'M',
    frequency: 55,
  },
  {
    type: 'K',
    frequency: 19,
  },
  {
    type: 'G',
    frequency: 11,
  },
  {
    type: 'F',
    frequency: 7,
  },
  {
    type: 'A',
    frequency: 4,
  },
  {
    type: 'B',
    frequency: 2,
  },
  {
    type: 'O',
    frequency: 2,
  },
];

export function getStarType(mainSequenceRange: number) {
  let type;
  let range = 0;

  for (let i = 0; i < starTypesFrequency.length; i++) {
    if (mainSequenceRange <= starTypesFrequency[i].frequency + range) {
      type = starTypesFrequency[i].type;
      break;
    }
    range += starTypesFrequency[i].frequency;
  }

  return type;
}

export const starTypeProperties = [
  {
    type: 'M',
    mass: [8, 45],
    radius: [8, 65],
    luminosity: [0.015, 7.5],
    effTemperature: [3700, 2300],
    color: {
      R: [255, 255],
      G: [187, 195],
      B: [119, 130]
    },
  }, {
    type: 'K',
    mass: [45, 85],
    radius: [65, 90],
    luminosity: [7.5, 60],
    effTemperature: [5200, 3700],
    color: {
      R: [255, 255],
      G: [195, 235],
      B: [130, 210],
    },
  },{
    type: 'G',
    mass: [91, 136],
    radius: [95, 120],
    luminosity: [60, 150],
    effTemperature: [6000, 5200],
    color: {
      R: [255, 255],
      G: [235, 247],
      B: [210, 240]
    },
  },{
    type: 'F',
    mass: [125, 140],
    radius: [115, 140],
    luminosity: [150, 500],
    effTemperature: [7500, 6000],
    color: {
      R: [255, 228],
      G: [247, 232],
      B: [240, 255]
    },
  },{
    type: 'A',
    mass: [140, 210],
    radius: [140, 180],
    luminosity: [500, 2500],
    effTemperature: [10000, 7500],
    color: {
      R: [228, 180],
      G: [232, 200],
      B: [255, 255]
    },
  },{
    type: 'B',
    mass: [210, 1600],
    radius: [180, 660],
    luminosity: [2500, 3000000],
    effTemperature: [30000, 10000],
    color: {
      R: [180, 160],
      G: [200, 183],
      B: [255, 255]
    },
  },{
    type: 'O',
    mass: [1600, 9000],
    radius: [660, 1200],
    luminosity: [3000000, 950000000],
    effTemperature: [60000, 30000],
    color: {
      R: [160, 140],
      G: [183, 160],
      B: [255, 255]
    },
  },
];
