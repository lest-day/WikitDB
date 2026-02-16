import { styles } from './styles.js';
import { formatDate } from '../utils/helpers.js';

// 成功页面渲染
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
  const tagsHtml = tags.map(tag => `<span class="tag">${tag}</span>`).join('');

  return `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - 维基条目 · 躺平维基</title>
    <style>${styles}</style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h1>${title}</h1>
            <div class="wiki-path">📁 ${wiki} / ${page}</div>
        </div>
        <div class="content">
            <div class="meta-grid">
                <div class="meta-item">
                    <span class="meta-label">👍 评分</span>
                    <span class="meta-value">${rating}<small>点</small></span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">💬 评论数</span>
                    <span class="meta-value">${comments}</span>
                </div>
            </div>

            <div class="author-block">
                <div class="author-avatar">${author.charAt(0)}</div>
                <div class="author-detail">
                    <div>${author}</div>
                    <div class="role">编辑者</div>
                </div>
            </div>

            <div class="tags-section">
                <div class="tags-title">🏷️ 标签</div>
                <div>${tagsHtml || '<span style="color:#8a9bb0;">暂无标签</span>'}</div>
            </div>

            <div class="timestamps">
                <div class="timestamp-item">
                    <span class="timestamp-label">📅 创建时间</span>
                    <span class="timestamp-value">${createdDisplay}</span>
                </div>
                <div class="timestamp-item">
                    <span class="timestamp-label">✏️ 最后修改</span>
                    <span class="timestamp-value">${lastmodDisplay}</span>
                </div>
            </div>
            <div class="footer-note">
                躺平维基 · 数据由 wikit.unitreaty.org 提供
            </div>
        </div>
    </div>
</body>
</html>`;
}

// 错误页面渲染
export function renderError(errorMessage, wiki, page) {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>加载失败 - 躺平维基</title>
    <style>
        body { background: #f5f7fb; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; }
        .error-card { background: white; max-width: 600px; padding: 40px; border-radius: 32px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); text-align: center; }
        h2 { color: #b13e3e; margin-top: 0; }
        .path-hint { background: #f0f2f5; padding: 8px 20px; border-radius: 40px; font-family: monospace; margin: 20px 0; color: #1f3a57; }
        .back-link { color: #2b5f8a; text-decoration: none; font-weight: 500; }
    </style>
</head>
<body>
    <div class="error-card">
        <h2>⚠️ 无法加载条目</h2>
        <div class="path-hint">${wiki}/${page}</div>
        <p style="color:#4d6278;">${errorMessage}</p>
        <p>请检查路径或稍后重试。</p>
        <a href="javascript:history.back()" class="back-link">← 返回</a>
    </div>
</body>
</html>`;
}