import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validasi dasar
    if (!data.Email) {
      return NextResponse.json({ success: false, message: 'Alamat email wajib diisi.' }, { status: 400 });
    }

    // URL Google Apps Script yang akan Anda dapatkan nanti
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error('GOOGLE_SCRIPT_URL belum diatur di .env.local');
      return NextResponse.json({ success: false, message: 'Server belum dikonfigurasi sepenuhnya (Script URL hilang).' }, { status: 500 });
    }

    // Meneruskan request dari website ke server Google Sheets Anda
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
      result = { success: response.ok, message: response.ok ? 'Data berhasil dikirim.' : responseText };
    }

    if (!response.ok || result.success === false) {
      console.error('Google Script Error:', result);
      return NextResponse.json({ success: false, message: result.message || 'Gagal menyimpan data ke Google Sheets.' }, { status: 400 });
    }

    // Jika sukses
    return NextResponse.json({ success: true, message: result.message || 'Pesan dan auto-reply berhasil terkirim.' });
  } catch (error: any) {
    console.error('Next.js Server Error:', error);
    return NextResponse.json({ success: false, message: `Terjadi kesalahan internal: ${error.message}` }, { status: 500 });
  }
}
