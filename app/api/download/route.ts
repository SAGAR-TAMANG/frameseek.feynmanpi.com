import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const os = searchParams.get('os');

  // The public URL of your Cloudflare R2 bucket
  const BASE_URL = 'https://download.frameseek.feynmanpi.com';

  try {
    if (os === 'windows') {
      // Fetch the latest.yml file to find the exact filename of the latest .exe
      // We cache it for 60 seconds so it's fast but still updates quickly when you release
      const response = await fetch(`${BASE_URL}/latest.yml`, { next: { revalidate: 60 } }); 
      
      if (!response.ok) {
        throw new Error('Failed to fetch latest.yml');
      }
      
      const ymlText = await response.text();
      
      // Extract the filename using regex (looks for "path: filename.exe")
      const match = ymlText.match(/path:\s*(.+)/);
      if (match && match[1]) {
        const filename = match[1].trim();
        // Redirect the user directly to the .exe file
        return NextResponse.redirect(`${BASE_URL}/${filename}`);
      }
    } 
    
    if (os === 'mac') {
      // For Mac, electron-builder generates latest-mac.yml
      const response = await fetch(`${BASE_URL}/latest-mac.yml`, { next: { revalidate: 60 } });
      
      if (!response.ok) {
         // If Mac build isn't uploaded yet, just redirect to the site
         return NextResponse.redirect('https://frameseek.feynmanpi.com');
      }
      
      const ymlText = await response.text();
      const match = ymlText.match(/path:\s*(.+)/);
      
      if (match && match[1]) {
        const filename = match[1].trim();
        return NextResponse.redirect(`${BASE_URL}/${filename}`);
      }
    }

    return NextResponse.json({ error: 'Invalid OS specified or file not found' }, { status: 400 });

  } catch (error) {
    console.error('Download routing error:', error);
    // If something fails, redirect them back to the site safely
    return NextResponse.redirect('https://frameseek.feynmanpi.com');
  }
}
