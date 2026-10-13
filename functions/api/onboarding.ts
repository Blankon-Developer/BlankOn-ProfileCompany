// Cloudflare Pages Function untuk endpoint /api/onboarding
// Berjalan secara native di Cloudflare Workers Edge

interface Env {
  GOOGLE_SCRIPT_URL?: string;
}

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}) => {
  try {
    const data = (await context.request.json()) as Record<string, any>;

    // Validasi dasar
    if (!data || !data.Email) {
      return new Response(
        JSON.stringify({ success: false, message: 'Alamat email wajib diisi.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const scriptUrl = context.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Server belum dikonfigurasi: GOOGLE_SCRIPT_URL tidak ditemukan di Cloudflare Environment Variables.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Teruskan data ke Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseText = await response.text();
    let result: any;
    try {
      result = JSON.parse(responseText);
    } catch {
      result = {
        success: response.ok,
        message: response.ok ? 'Data berhasil dikirim.' : responseText,
      };
    }

    const status =
      response.ok && result.success !== false
        ? 200
        : response.status >= 400
        ? response.status
        : 400;

    return new Response(JSON.stringify(result), {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        message: `Terjadi kesalahan di server: ${error?.message || error}`,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
