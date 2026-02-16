// 工具函数
export function decodePathPart(part) {
    return decodeURIComponent(part);
  }
  
  export function formatDate(dateStr) {
    if (dateStr === '未知' || !dateStr) return dateStr;
    try {
      const d = new Date(dateStr);
      return d.toLocaleString('zh-CN', { timeZone: 'UTC', hour12: false }) + ' UTC';
    } catch {
      return dateStr;
    }
  }
  
  export function validatePath(pathParts) {
    return pathParts.length >= 2;
  }