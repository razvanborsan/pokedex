import capitalize, { capitalizeAllWords } from './capitalize';

const normalizeString = (string) => capitalizeAllWords(string.split('-').join(' '));
const normalizeStringUnderscore = (string) => capitalize(string.split('_').join(' '));
const normalizeGameName = (string) => string.split('-').map((val) => capitalize(val)).join('/');

export { normalizeStringUnderscore, normalizeGameName };
export default normalizeString;
