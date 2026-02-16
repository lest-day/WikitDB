export function renderError(errorMessage, wiki, page) {
    return `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>加载失败 - 躺平维基</title>
  </head>
  <body>
      <div class="alert alert-error max-w-md mx-auto mt-8">
          <div class="flex-1">
              <h2 class="text-lg font-bold">无法加载条目</h2>
              <div class="text-xs">${wiki}/${page}</div>
              <div class="text-sm mt-2">${errorMessage}</div>
              <div class="text-sm mt-2">请检查路径或稍后重试。</div>
              <a href="javascript:history.back()" class="btn btn-sm btn-ghost mt-2">← 返回</a>
          </div>
      </div>
  </body>
  </html>`;
  }
  