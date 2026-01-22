import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  try {
    const store = getStore("scripture-verses");
    
    if (req.method === 'GET') {
      // Get all verses
      const versesJson = await store.get("verses");
      const verses = versesJson ? JSON.parse(versesJson) : [];
      
      return new Response(JSON.stringify({ verses }), {
        status: 200,
        headers
      });
    }
    
    if (req.method === 'POST') {
      // Save all verses (admin only - you can add authentication here)
      const body = await req.json();
      const { verses } = body;
      
      await store.set("verses", JSON.stringify(verses));
      
      return new Response(JSON.stringify({ success: true, verses }), {
        status: 200,
        headers
      });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers
    });
    
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers
    });
  }
};

export const config = {
  path: "/api/verses"
};
