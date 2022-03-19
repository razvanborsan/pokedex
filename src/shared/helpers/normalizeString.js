import { capitalizeAllWords } from './capitalize';

const normalizeString = (string) => capitalizeAllWords(string.split('-').join(' '));

export default normalizeString;
