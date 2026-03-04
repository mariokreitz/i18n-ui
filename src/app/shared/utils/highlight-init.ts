import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';

let initialized = false;

export function initHighlightJs(): void {
  if (initialized) return;
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('bash', bash);
  // 'zsh' is an alias for bash in highlight.js
  hljs.registerLanguage('zsh', bash);
  initialized = true;
}
