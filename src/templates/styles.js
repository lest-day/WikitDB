// CSS样式
export const styles = `
    body {
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        background: #f5f7fb;
        margin: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
    }
    .card {
        background: white;
        max-width: 800px;
        width: 100%;
        border-radius: 32px;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        overflow: hidden;
        transition: transform 0.2s ease;
    }
    .card:hover {
        transform: scale(1.01);
    }
    .header {
        background: linear-gradient(145deg, #2b3b4d, #1d2a36);
        color: white;
        padding: 32px 32px 24px 32px;
    }
    .header h1 {
        margin: 0;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 1.2;
        word-break: break-word;
    }
    .header .wiki-path {
        font-size: 1rem;
        opacity: 0.7;
        margin-top: 12px;
        font-family: 'Fira Code', monospace;
        background: rgba(255,255,255,0.15);
        display: inline-block;
        padding: 4px 12px;
        border-radius: 40px;
    }
    .content {
        padding: 32px;
        background: #ffffff;
    }
    .meta-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 20px;
        margin-bottom: 28px;
        background: #f8fafd;
        padding: 24px;
        border-radius: 24px;
    }
    .meta-item {
        display: flex;
        flex-direction: column;
    }
    .meta-label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #5e6f88;
        margin-bottom: 6px;
    }
    .meta-value {
        font-size: 1.7rem;
        font-weight: 600;
        color: #1e2b39;
        line-height: 1.2;
    }
    .meta-value small {
        font-size: 0.9rem;
        font-weight: 400;
        color: #6b7b8f;
        margin-left: 6px;
    }
    .author-block {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #f0f4fa;
        padding: 16px 20px;
        border-radius: 60px;
        margin-bottom: 28px;
        width: fit-content;
    }
    .author-avatar {
        background: #3d5a78;
        color: white;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        font-weight: 300;
        text-transform: uppercase;
    }
    .author-detail {
        font-size: 1.2rem;
        font-weight: 500;
    }
    .author-detail .role {
        font-size: 0.8rem;
        color: #5a6f88;
        margin-top: 2px;
    }
    .tags-section {
        margin: 24px 0 20px 0;
    }
    .tags-title {
        font-size: 0.9rem;
        color: #4a5f78;
        letter-spacing: 0.5px;
        margin-bottom: 12px;
    }
    .tag {
        display: inline-block;
        background: #eef3f9;
        color: #1d3a5c;
        padding: 6px 18px;
        border-radius: 40px;
        font-size: 0.9rem;
        font-weight: 500;
        margin-right: 10px;
        margin-bottom: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.03);
        transition: background 0.2s;
    }
    .tag:hover {
        background: #dde6f0;
    }
    .timestamps {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        border-top: 2px dashed #d9e2ec;
        padding-top: 24px;
        margin-top: 16px;
        font-size: 0.9rem;
        color: #4b6079;
    }
    .timestamp-item {
        display: flex;
        flex-direction: column;
    }
    .timestamp-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        color: #8a9bb0;
    }
    .timestamp-value {
        font-weight: 500;
        margin-top: 4px;
    }
    .footer-note {
        margin-top: 20px;
        text-align: right;
        color: #95aac9;
        font-size: 0.8rem;
        border-top: 1px solid #edf2f9;
        padding-top: 16px;
    }
`;