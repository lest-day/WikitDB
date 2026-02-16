const config = require('../wikitdb.config.js');

function Footer() {
  return (
    <footer>
      {config.SITE.NAME}
    </footer>
  );
}
