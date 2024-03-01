export const extractFirstWord = (text: string): string => {
  const match = text.match(/\b\w+\b/);
  if (match) {
    return match[0];
  } else {
    return text;
  }
};

export const removeFirstWord = (text: string): string => {
  const first = extractFirstWord(text);
  if (!first || text.trim() === first) {
    return '';
  }
  const index = text.indexOf(first);
  return text.slice(index + first.length).trimLeft();
};
