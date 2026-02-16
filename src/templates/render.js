import { formatDate } from '../utils/helpers.js';

export function renderSuccess(article, wiki, page) {
  const title = article?.title || '无标题';
  const rating = article?.rating ?? 'N/A';
  const comments = article?.comments ?? 'N/A';
  const author = article?.author || '未知';
  const tags = article?.tags || [];
  const created_at = article?.created_at || '未知';
  const lastmod = article?.lastmod || '未知';

  const createdDisplay = formatDate(created_at);
  const lastmodDisplay = formatDate(lastmod);
  const tagsHtml = tags.map(tag => `<span class="badge badge-primary">${tag}</span>`).join('');

  return `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - WikitDB</title>
    <link href="https://cdn.jsdelivr.net/npm/rippleui@1.12.1/dist/css/rippleui.min.css" rel="stylesheet">
</head>
<body>
    <div class="card">
        <div class="card-body">
            <div class="navbar">
                <div class="navbar-start">
                    <a class="navbar-item">${title}</a>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="grid grid-cols-2 gap-4">
                <div class="stat">
                    <div class="stat-title">评分</div>
                    <div class="stat-value">${rating}</div>
                </div>
                <div class="stat">
                    <div class="stat-title">评论数</div>
                    <div class="stat-value">${comments}</div>
                </div>
            </div>

            <div class="avatar-group mt-4">
                <div class="avatar">
                    <div class="w-12 rounded-full bg-primary text-primary-content">
                        ${author.charAt(0)}
                    </div>
                </div>
                <div>
                    <div class="font-bold">${author}</div>
                    <div class="text-sm opacity-50">编辑者</div>
                </div>
            </div>

            <div class="mt-4">
                <div class="font-bold mb-2">标签</div>
                <div class="flex flex-wrap gap-2">
                    ${tagsHtml || '<span class="text-gray-500">暂无标签</span>'}
                </div>
            </div>

            <div class="divider"></div>
            
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <div class="font-bold">创建时间</div>
                    <div class="text-gray-500">${createdDisplay}</div>
                </div>
                <div>
                    <div class="font-bold">最后修改</div>
                    <div class="text-gray-500">${lastmodDisplay}</div>
                </div>
            </div>
            
            <div class="footer mt-4 text-right text-sm text-gray-500">
                躺平维基 · 数据由 wikit.unitreaty.org 提供
            </div>
        </div>
    </div>
</body>
</html>`;
}