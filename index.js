import React from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Footer.js';

function App() {
    return (
      <div>
        <h1>欢迎来到 WikitDB</h1>
        <Footer />
      </div>
    );
}

export default function handler(request, response) {
    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>WikitDB</title>
                <link href="https://cdn.jsdelivr.net/npm/rippleui@1.12.1/dist/css/rippleui.min.css" rel="stylesheet">
            </head>
            <body>
                <div id="root"></div>
                <script>
                    ${createRoot.toString()}
                    ${React.createElement.toString()}
                    ${App.toString()}
                    const container = document.getElementById('root');
                    const root = createRoot(container);
                    root.render(React.createElement(App));
                </script>
            </body>
        </html>
    `;
    return response.status(200).send(html);
}
