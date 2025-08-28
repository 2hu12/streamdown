import { Lexer } from 'marked';

export const parseMarkdownIntoBlocks = (markdown: string): string[] => {
  const tokens = Lexer.lex(markdown);
  return tokens.map((token) => token.raw);
};
