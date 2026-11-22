export default function canIterate(obj) {
  return obj !== null && obj !== undefined && typeof obj[Symbol.iterator] === 'function';
}