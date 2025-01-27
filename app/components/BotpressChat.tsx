'use client';

import Script from 'next/script';

const BotpressChat = () => {
  return (
    <>
      {/* Load the Botpress Web Chat SDK */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        strategy="afterInteractive"
      />
      {/* Load the bot configuration */}
      <Script
        src="https://files.bpcontent.cloud/2025/01/25/17/20250125174833-HKK27QM4.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default BotpressChat;