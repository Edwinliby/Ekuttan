import { NextResponse } from 'next/server';

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Edwin Liby | Designer &amp; Developer</title>
  <link>https://edwinliby.dev</link>
  <description>Welcome to the portfolio of Edwin Liby, a Designer and Developer with over 3 years of experience. Build with Clarity, Delivered with Speed.</description>
  <language>en-in</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="https://edwinliby.dev/feed.xml" rel="self" type="application/rss+xml" />
  
  <item>
    <title>Experience &amp; Portfolio</title>
    <link>https://edwinliby.dev</link>
    <description>I have been in the industry for almost 3 years as a Designer &amp; Developer, collaborating with 7+ companies including Mulearn, Volshauz, and Makemypass.</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <guid>https://edwinliby.dev</guid>
  </item>
</channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
