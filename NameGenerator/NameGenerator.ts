import { randomRangeFromSeed } from '../utils/';
import { dictionary, lightDictionary, cityEndings, endings } from './utils';

let rand = randomRangeFromSeed(1989);

function wordReplacer(text: string): string {
  let word = text;

  if (word.includes('яю') || word.includes('юя')) {
    word = word['replaceAll']('яю', 'аю');
    word = word['replaceAll']('юя', 'ая');
  }

  if (word.indexOf('я') < Math.round(word.length / 2)) {
    const charArr = word.split('');
    charArr[word.indexOf('я')] = 'a';
    word = charArr.join('');
  }

  if (word.indexOf('ю') < Math.round(word.length / 2)) {
    const charArr = word.split('');
    charArr[word.indexOf('ю')] = 'у';
    word = charArr.join('');
  }

  if (word[word.length - 1] === 'и') {
    if (rand.minMaxRound(0, 3) <= 1) {
      word += 'я';
    }
  }

  if (word.includes('дт')) {
    word = word['replaceAll']('дт', 'д');
  }

  if (word.includes('йа')) {
    word = word['replaceAll']('йа', 'я');
  }

  if (word.includes('вф')) {
    word = word['replaceAll']('вф', 'в');
  }

  word = word['replaceAll']('э', 'е');
  word = word['replaceAll']('e', 'є');
  word = word['replaceAll']('э', 'е');
  word = word['replaceAll']('и', 'і');
  word = word['replaceAll']('и', 'і');
  word = word['replaceAll']('ы', 'и');
  word = word['replaceAll']('бп', 'б');
  word = word['replaceAll']('бф', 'дф');
  word = word['replaceAll']('пб', 'п');
  word = word['replaceAll']('іе', 'є');
  word = word['replaceAll']('тд', 'д');
  word = word['replaceAll']('ае', 'ає');
  word = word['replaceAll']('уе', 'ує');
  word = word['replaceAll']('шя', 'ша');
  word = word['replaceAll']('сч', 'ск');
  word = word['replaceAll']('пу', 'по');
  word = word['replaceAll']('ґк', rand.minMaxRound(1, 10) > 5 ? 'ґ' : 'к');
  word = word['replaceAll']('кґ', rand.minMaxRound(1, 10) > 5 ? 'к' : 'ґ');
  word = word['replaceAll']('тп', rand.minMaxRound(1, 10) > 5 ? 'т' : 'п');

  if (word[0] === word[1]) {
    const charArr = word.split('');
    charArr[1] = lightDictionary[1][rand.minMaxRound(0, lightDictionary[1].length - 1)];
    word = charArr.join('');
  }

  word = word.charAt(0).toUpperCase() + word.slice(1);

  return word;
}

export function nameGeneratorFromSeed(seed) {
  rand = randomRangeFromSeed(seed);
  return {
    generateGeneralName,
    generateCityName,
  };
}

function generateGeneralName() {
  let wordSchema = '';

  for(let i = 0; i < rand.minMaxRound(2, 6); i++) {
    wordSchema += rand.minMaxRound(0, 2);
  }

  wordSchema = wordSchema['replaceAll']('2', '1');

  while (wordSchema.includes('000') || wordSchema.includes('111')) {
    wordSchema = wordSchema['replaceAll']('000', rand.minMaxRound(0, 1) ? '001' : '010');
    wordSchema = wordSchema['replaceAll']('111', rand.minMaxRound(0, 1) ? '110' : '101');
  }

  let word = '';
  for (let i = 0; i < wordSchema.length; i++) {
    if (wordSchema[i] === '0') {
      word += dictionary[0][rand.minMaxRound(0, dictionary[0].length - 1)];
    } else {
      word += dictionary[1][rand.minMaxRound(0, dictionary[1].length - 1)];
    }
  }

  if (wordSchema[wordSchema.length - 1] === '1') {
    word += endings[1][rand.minMaxRound(0, endings[1].length - 1)];
  } else {
    word += endings[0][rand.minMaxRound(0, endings[0].length - 1)];
  }

  return wordReplacer(word);
}

function generateCityName() {
  let wordSchema = '';

  for(let i = 0; i < rand.minMaxRound(2, 4); i++) {
    wordSchema += rand.minMaxRound(0, 2);
  }

  wordSchema = wordSchema['replaceAll']('2', '1');

  while (wordSchema.includes('000') || wordSchema.includes('111')) {
    wordSchema = wordSchema['replaceAll']('000', rand.minMaxRound(0, 1) ? '001' : '010');
    wordSchema = wordSchema['replaceAll']('111', rand.minMaxRound(0, 1) ? '110' : '101');
  }

  let word = '';
  for (let i = 0; i < wordSchema.length; i++) {
    if (wordSchema[i] === '0') {
      word += dictionary[0][rand.minMaxRound(0, dictionary[0].length - 1)];
    } else {
      word += dictionary[1][rand.minMaxRound(0, dictionary[1].length - 1)];
    }
  }

  if (wordSchema[wordSchema.length - 1] === '1' && wordSchema[wordSchema.length - 1] === '1') {
    word += dictionary[0][rand.minMaxRound(0, dictionary[0].length - 1)];
  }

  word = word + cityEndings[0][rand.minMaxRound(0, cityEndings[0].length - 1)];

  return wordReplacer(word);
}
