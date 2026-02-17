import React from 'react';
const config = require('../wikitdb.config.js');

const Footer = () => {
    const year = new Date().getFullYear();
    const since = config.SITE_SINCE;
    const copyrightDate =
        parseInt(since) < year ? since + '-' + year : year;

    return (
        <>
            <footer class="relative bg-gray-800/50 py-8 text-sm font-medium text-gray-300 text-center">
                {`© ${copyrightDate} - `}{config.SITE_AUTHOR}
            </footer>
        </>
    );
};

export default Footer;
