/**
 * Lightweight, safe markdown-to-HTML parser for FAQ answers and guide snippets.
 */
export function renderMarkdown(content: string): string {
  if (!content) return '';

  let html = content;

  // 1. Code blocks (```lang ... ```)
  html = html.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (_match, _lang, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<div class="my-4 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-inner">
      <div class="px-4 py-1.5 bg-slate-900 text-[11px] font-mono text-slate-400 border-b border-slate-800 flex items-center justify-between">
        <span>${_lang || 'Code'}</span>
        <span class="text-[10px] text-slate-500">点击选中复制</span>
      </div>
      <pre class="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed"><code>${escaped}</code></pre>
    </div>`;
  });

  // 2. Horizontal Rules
  html = html.replace(/^---$/gm, '<hr class="my-6 border-slate-200 dark:border-slate-700" />');

  // 3. Headings
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2.5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-8 mb-3.5 border-b border-slate-200 dark:border-slate-800 pb-2">$1</h2>');

  // 4. Blockquotes
  html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-3 bg-blue-50/60 dark:bg-blue-950/30 text-slate-700 dark:text-slate-300 rounded-r-xl text-sm">$1</blockquote>');

  // 5. Inline Code (`code`)
  html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700/80 text-rose-600 dark:text-rose-400 font-mono text-xs border border-slate-200/60 dark:border-slate-600/60">$1</code>');

  // 6. Bold (**text**)
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');

  // 7. Ordered lists (1. Item) & Unordered lists (- Item or • Item)
  // Split into paragraphs / blocks
  const blocks = html.split(/\n{2,}/);
  const parsedBlocks = blocks.map(block => {
    const trimmed = block.trim();
    if (trimmed.startsWith('<div class="my-4') || trimmed.startsWith('<h') || trimmed.startsWith('<hr') || trimmed.startsWith('<blockquote')) {
      return block;
    }

    // Numbered list block
    if (/^\d+\.\s+/m.test(trimmed)) {
      const items = trimmed.split(/\n(?=\d+\.\s+)/);
      const listItems = items.map(it => {
        const itemContent = it.replace(/^\d+\.\s+/, '').trim();
        return `<li class="leading-relaxed">${itemContent}</li>`;
      }).join('');
      return `<ol class="list-decimal pl-5 space-y-2 my-3 text-sm text-slate-700 dark:text-slate-300">${listItems}</ol>`;
    }

    // Bullet list block
    if (/^[-•*]\s+/m.test(trimmed)) {
      const items = trimmed.split(/\n(?=[-•*]\s+)/);
      const listItems = items.map(it => {
        const itemContent = it.replace(/^[-•*]\s+/, '').trim();
        return `<li class="leading-relaxed">${itemContent}</li>`;
      }).join('');
      return `<ul class="list-disc pl-5 space-y-2 my-3 text-sm text-slate-700 dark:text-slate-300">${listItems}</ul>`;
    }

    // Regular paragraph
    return `<p class="leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300 my-3">${trimmed.replace(/\n/g, '<br />')}</p>`;
  });

  return parsedBlocks.join('\n');
}
