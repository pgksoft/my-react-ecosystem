import { TDataChart } from '../../../../context/computes-frequency-each-letter-in-text-context';
import DefaultMap from './default-map';

const ComputesFrequencyEachLetterInText = (
  text: string
): TDataChart[] | null => {
  if (!text) return null;
  const dataCharts: TDataChart[] = [];
  const letterCounts = new DefaultMap(0);
  let totalLetters = 0;
  // Remove whitespace from the text, and convert to upper case
  const normalizedText = text.replace(/\s/g, '').toUpperCase();
  // Now loop through the characters of the text
  for (const character of normalizedText) {
    letterCounts.set(character, letterCounts.get(character) + 1);
    totalLetters += 1;
  }
  // Convert the counts to percentages
  // - convert the Map to an array of [key,value] arrays
  // - sort the array by count, then alphabetically
  // - convert the counts to percentages and preparing data of chart
  const entries = Array.from(letterCounts);
  entries.sort((a, b) => {
    if (a[1] === b[1]) return a[0] < b[0] ? -1 : 1;
    return b[1] - a[1];
  });
  for (const entry of entries) {
    dataCharts.push({
      name: entry[0],
      percent: Number(((entry[1] / totalLetters) * 100).toFixed(2)),
      count: entry[1]
    });
  }

  return dataCharts;
};

export default ComputesFrequencyEachLetterInText;
