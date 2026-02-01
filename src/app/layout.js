import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const timeStamp = new Date().toLocaleString();
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
        Page rendered on {' '}
        {timeStamp}
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
