"use client";

import { useState } from "react";
import { cn, DISPLAY, BODY, MONO } from "@/lib/utils";
import { User, Building2, Store, Landmark, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import HCaptcha from '@hcaptcha/react-hcaptcha';

type Category = "pribadi" | "company" | "umkm" | "pemerintahan" | null;

const Label = ({ children, required }: { children: React.ReactNode, required?: boolean }) => (
  <label className="block text-sm font-semibold mb-2 text-foreground" style={BODY}>
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const FormField = ({ label, required, children }: { label: string, required?: boolean, children: React.ReactNode }) => (
  <div className="mb-6">
    <Label required={required}>{label}</Label>
    {children}
  </div>
);

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={cn(
      "w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-foreground transition-colors text-foreground",
      props.className
    )}
  />
);

const Select = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...props}
    className={cn(
      "w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-foreground transition-colors appearance-none text-foreground cursor-pointer",
      props.className
    )}
  >
    {children}
  </select>
);

const Textarea = ({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className={cn(
      "w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-foreground transition-colors resize-none text-foreground",
      props.className
    )}
  />
);

const RadioGroup = ({ name, options }: { name: string, options: string[] }) => (
  <div className="flex flex-col gap-3">
    {options.map(opt => (
      <label key={opt} className="flex items-center gap-3 cursor-pointer group w-fit">
        <input type="radio" name={name} value={opt} required className="w-4 h-4 accent-foreground" />
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors" style={BODY}>{opt}</span>
      </label>
    ))}
  </div>
);

const RadioGroupHorizontal = ({ name, options }: { name: string, options: string[] }) => (
  <div className="flex flex-wrap gap-6">
    {options.map(opt => (
      <label key={opt} className="flex items-center gap-3 cursor-pointer group w-fit">
        <input type="radio" name={name} value={opt} required className="w-4 h-4 accent-foreground" />
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors" style={BODY}>{opt}</span>
      </label>
    ))}
  </div>
);

// --- CATEGORY FORMS ---

const PersonalForm = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Nama Lengkap" required><Input type="text" name="Nama Lengkap" required /></FormField>
      <FormField label="Email" required><Input type="email" name="Email" required /></FormField>
    </div>
    <FormField label="Nomor WhatsApp/Telepon" required><Input type="tel" name="No WhatsApp" required /></FormField>
    <FormField label="Apa tujuan utama Anda menggunakan layanan ini?" required>
      <Select name="Tujuan Utama" required>
        <option value="">Pilih tujuan utama...</option>
        <option value="Mengelola aktivitas pribadi">Mengelola aktivitas pribadi</option>
        <option value="Meningkatkan produktivitas">Meningkatkan produktivitas</option>
        <option value="Mencatat/mengelola data pribadi">Mencatat/mengelola data pribadi</option>
        <option value="Belajar atau mengembangkan kemampuan">Belajar atau mengembangkan kemampuan</option>
        <option value="Lainnya">Lainnya</option>
      </Select>
    </FormField>
    <FormField label="Seberapa sering Anda akan menggunakan layanan ini?" required>
      <RadioGroup name="Frekuensi Penggunaan" options={["Setiap hari", "Beberapa kali seminggu", "Beberapa kali sebulan", "Sesekali"]} />
    </FormField>
    <FormField label="Fitur apa yang paling Anda butuhkan?" required>
      <Textarea name="Fitur yang dibutuhkan" rows={3} required placeholder="Ceritakan fitur yang dapat membantu Anda..." />
    </FormField>
    <FormField label="Apakah Anda pernah menggunakan layanan serupa sebelumnya?" required>
      <RadioGroupHorizontal name="Pernah menggunakan serupa" options={["Ya", "Tidak"]} />
    </FormField>
    <FormField label="Dari mana Anda mengetahui layanan kami?" required>
      <Input type="text" name="Sumber info" required placeholder="Misal: Google, Teman, LinkedIn..." />
    </FormField>
  </>
);

const CompanyForm = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Nama Lengkap" required><Input type="text" name="Nama Lengkap" required /></FormField>
      <FormField label="Jabatan/Posisi Anda" required><Input type="text" name="Jabatan" required /></FormField>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Email Perusahaan" required><Input type="email" name="Email" required /></FormField>
      <FormField label="Nomor WhatsApp/Telepon" required><Input type="tel" name="No WhatsApp" required /></FormField>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Nama Perusahaan" required><Input type="text" name="Nama Perusahaan" required /></FormField>
      <FormField label="Industri/Bidang Perusahaan" required><Input type="text" name="Industri" required placeholder="Misal: Teknologi, F&B, Keuangan..." /></FormField>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Jumlah Karyawan" required>
        <Select name="Jumlah Karyawan" required>
          <option value="">Pilih skala perusahaan...</option>
          <option value="1–10">1–10 karyawan</option>
          <option value="11–50">11–50 karyawan</option>
          <option value="51–200">51–200 karyawan</option>
          <option value="201–500">201–500 karyawan</option>
          <option value=">500"> 500 karyawan</option>
        </Select>
      </FormField>
      <FormField label="Berapa orang yang akan menggunakan layanan ini?" required>
        <Input type="number" name="Estimasi User" required placeholder="Contoh: 25" min="1" />
      </FormField>
    </div>

    <FormField label="Apa tujuan utama perusahaan menggunakan layanan ini?" required>
      <Select name="Tujuan Utama" required>
        <option value="">Pilih tujuan utama...</option>
        <option value="Operasional">Operasional</option>
        <option value="Manajemen tim">Manajemen tim</option>
        <option value="Penjualan">Penjualan</option>
        <option value="Customer service">Customer service</option>
        <option value="Administrasi">Administrasi</option>
        <option value="Analisis/data">Analisis/data</option>
        <option value="Lainnya">Lainnya</option>
      </Select>
    </FormField>
    <FormField label="Masalah atau kebutuhan utama apa yang ingin Anda selesaikan?" required>
      <Textarea name="Masalah Utama" rows={3} required placeholder="Ceritakan kendala yang sedang dialami perusahaan..." />
    </FormField>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Apakah saat ini perusahaan menggunakan solusi lain?" required>
        <RadioGroupHorizontal name="Menggunakan Solusi Lain" options={["Ya", "Tidak"]} />
      </FormField>
      <FormField label="Jika ya, solusi apa yang saat ini digunakan?">
        <Input type="text" name="Nama Solusi Lain" placeholder="Boleh dikosongkan jika tidak ada" />
      </FormField>
    </div>

    <FormField label="Apakah Anda membutuhkan integrasi dengan sistem lain?" required>
      <RadioGroupHorizontal name="Butuh Integrasi" options={["Ya", "Tidak", "Belum tahu"]} />
    </FormField>
    <FormField label="Bagaimana Anda mengetahui layanan kami?" required>
      <Input type="text" name="Sumber info" required placeholder="Misal: Google, Iklan, Rekomendasi..." />
    </FormField>
  </>
);

const UmkmForm = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Nama Lengkap" required><Input type="text" name="Nama Lengkap" required /></FormField>
      <FormField label="Nama Usaha" required><Input type="text" name="Nama Usaha" required /></FormField>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Email" required><Input type="email" name="Email" required /></FormField>
      <FormField label="Nomor WhatsApp" required><Input type="tel" name="No WhatsApp" required /></FormField>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Jenis Usaha" required>
        <Select name="Jenis Usaha" required>
          <option value="">Pilih jenis usaha...</option>
          <option value="Kuliner/F&B">Kuliner/F&B</option>
          <option value="Retail">Retail</option>
          <option value="Jasa">Jasa</option>
          <option value="Online shop/e-commerce">Online shop/e-commerce</option>
          <option value="Manufaktur/produksi">Manufaktur/produksi</option>
          <option value="Agribisnis">Agribisnis</option>
          <option value="Lainnya">Lainnya</option>
        </Select>
      </FormField>
      <FormField label="Sudah berapa lama usaha berjalan?" required>
        <Select name="Lama Usaha Berjalan" required>
          <option value="">Pilih umur usaha...</option>
          <option value="<1 tahun"> 1 tahun</option>
          <option value="1–3 tahun">1–3 tahun</option>
          <option value="3–5 tahun">3–5 tahun</option>
          <option value=">5 tahun"> 5 tahun</option>
        </Select>
      </FormField>
    </div>

    <FormField label="Berapa orang yang terlibat dalam usaha?" required>
      <Select name="Jumlah Tim" required>
        <option value="">Pilih skala tim...</option>
        <option value="Saya sendiri">Saya sendiri</option>
        <option value="2–5 orang">2–5 orang</option>
        <option value="6–10 orang">6–10 orang</option>
        <option value="11–25 orang">11–25 orang</option>
        <option value=">25 orang"> 25 orang</option>
      </Select>
    </FormField>

    <FormField label="Apa kebutuhan utama usaha Anda saat ini?" required>
      <Select name="Kebutuhan Utama" required>
        <option value="">Pilih prioritas utama...</option>
        <option value="Meningkatkan penjualan">Meningkatkan penjualan</option>
        <option value="Mengelola pelanggan">Mengelola pelanggan</option>
        <option value="Mengelola operasional">Mengelola operasional</option>
        <option value="Mengelola keuangan">Mengelola keuangan</option>
        <option value="Mengelola stok">Mengelola stok</option>
        <option value="Meningkatkan produktivitas">Meningkatkan produktivitas</option>
        <option value="Lainnya">Lainnya</option>
      </Select>
    </FormField>

    <FormField label="Apa tantangan terbesar yang sedang dihadapi bisnis Anda?" required>
      <Textarea name="Tantangan Utama" rows={3} required placeholder="Ceritakan apa yang menghambat pertumbuhan usaha..." />
    </FormField>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Apakah saat ini menggunakan aplikasi/tools lain?" required>
        <RadioGroupHorizontal name="Menggunakan Tools Lain" options={["Ya", "Tidak"]} />
      </FormField>
      <FormField label="Jika ya, aplikasi apa yang digunakan?">
        <Input type="text" name="Nama Aplikasi Lain" placeholder="Boleh dikosongkan jika tidak ada" />
      </FormField>
    </div>

    <FormField label="Bagaimana Anda mengetahui layanan kami?" required>
      <Input type="text" name="Sumber info" required placeholder="Misal: Instagram, TikTok, Teman..." />
    </FormField>
  </>
);

const PemerintahForm = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Nama Lengkap" required><Input type="text" name="Nama Lengkap" required /></FormField>
      <FormField label="Jabatan/Posisi" required><Input type="text" name="Jabatan" required /></FormField>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Email Resmi Instansi" required><Input type="email" name="Email" required placeholder="email@instansi.go.id" /></FormField>
      <FormField label="Nomor WhatsApp/Telepon" required><Input type="tel" name="No WhatsApp" required /></FormField>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Nama Instansi/Lembaga" required><Input type="text" name="Nama Instansi" required /></FormField>
      <FormField label="Tingkat Pemerintahan" required>
        <Select name="Tingkat Pemerintahan" required>
          <option value="">Pilih tingkat...</option>
          <option value="Pemerintah Pusat">Pemerintah Pusat</option>
          <option value="Pemerintah Provinsi">Pemerintah Provinsi</option>
          <option value="Pemerintah Kabupaten/Kota">Pemerintah Kabupaten/Kota</option>
          <option value="Kecamatan">Kecamatan</option>
          <option value="Desa/Kelurahan">Desa/Kelurahan</option>
          <option value="BUMN/BUMD">BUMN/BUMD</option>
          <option value="Lembaga/Institusi Pemerintah lainnya">Lembaga/Institusi Pemerintah lainnya</option>
        </Select>
      </FormField>
    </div>

    <FormField label="Nama unit kerja/bidang/bagian" required>
      <Input type="text" name="Unit Kerja" required />
    </FormField>

    <FormField label="Apa tujuan utama instansi menggunakan layanan ini?" required>
      <Select name="Tujuan Utama" required>
        <option value="">Pilih tujuan utama...</option>
        <option value="Administrasi pemerintahan">Administrasi pemerintahan</option>
        <option value="Pelayanan publik">Pelayanan publik</option>
        <option value="Pengelolaan data">Pengelolaan data</option>
        <option value="Pengelolaan dokumen">Pengelolaan dokumen</option>
        <option value="Koordinasi internal">Koordinasi internal</option>
        <option value="Monitoring & pelaporan">Monitoring & pelaporan</option>
        <option value="Digitalisasi proses kerja">Digitalisasi proses kerja</option>
        <option value="Lainnya">Lainnya</option>
      </Select>
    </FormField>

    <FormField label="Apa masalah atau proses yang ingin diselesaikan/digitalisasi?" required>
      <Textarea name="Masalah Utama" rows={3} required placeholder="Jelaskan secara ringkas kendala di unit kerja Anda..." />
    </FormField>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Berapa jumlah pegawai yang diperkirakan menggunakan?" required>
        <Select name="Estimasi User" required>
          <option value="">Pilih estimasi...</option>
          <option value="1–10">1–10 orang</option>
          <option value="11–50">11–50 orang</option>
          <option value="51–200">51–200 orang</option>
          <option value="201–500">201–500 orang</option>
          <option value=">500"> 500 orang</option>
        </Select>
      </FormField>
      <FormField label="Siapa saja yang akan menggunakan layanan?" required>
        <Select name="Target Pengguna" required>
          <option value="">Pilih pengguna...</option>
          <option value="Internal pegawai">Internal pegawai</option>
          <option value="Pimpinan">Pimpinan</option>
          <option value="Antar-unit kerja">Antar-unit kerja</option>
          <option value="Masyarakat/publik">Masyarakat/publik</option>
          <option value="Mitra/instansi lain">Mitra/instansi lain</option>
        </Select>
      </FormField>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Apakah perlu integrasi dengan sistem pemerintah lain?" required>
        <RadioGroupHorizontal name="Butuh Integrasi" options={["Ya", "Tidak", "Belum tahu"]} />
      </FormField>
      <FormField label="Apakah terdapat kebutuhan khusus keamanan data/hak akses?" required>
        <RadioGroupHorizontal name="Kebutuhan Keamanan Khusus" options={["Ya", "Tidak", "Belum tahu"]} />
      </FormField>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <FormField label="Apakah saat ini menggunakan sistem/aplikasi lain?" required>
        <RadioGroupHorizontal name="Menggunakan Sistem Lain" options={["Ya", "Tidak"]} />
      </FormField>
      <FormField label="Jika ya, sebutkan sistem yang digunakan.">
        <Input type="text" name="Nama Sistem Lain" placeholder="Kosongkan jika tidak ada" />
      </FormField>
    </div>

    <FormField label="Bagaimana Anda mengetahui layanan kami?" required>
      <Input type="text" name="Sumber info" required placeholder="Misal: Surat Edaran, Rekan Kerja, Google..." />
    </FormField>
  </>
);


export default function OnboardingForm() {
  const [category, setCategory] = useState<Category>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [resultMessage, setResultMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!captchaToken) {
      setStatus("error");
      setResultMessage("Mohon selesaikan Captcha terlebih dahulu.");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    // HCaptcha otomatis menyisipkan field g-recaptcha-response untuk kompatibilitas mundur.
    // Kita hapus field ini agar Web3Forms tidak mengira kita menggunakan reCaptcha (fitur berbayar).
    formData.delete("g-recaptcha-response");

    // Required Web3Forms fields
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
    formData.append("subject", `Onboarding Baru: ${category?.toUpperCase()}`);
    formData.append("from_name", "BlankOn Digital Tech - Onboarding");
    formData.append("Persona", category || "Unknown");

    // Menambahkan replyto secara eksplisit karena input bernama "Email" (huruf besar)
    const userEmail = formData.get("Email");
    if (userEmail) {
      formData.append("replyto", userEmail as string);
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResultMessage("Pesan Anda telah berhasil terkirim. Tim BlankOn Digital Tech akan segera menghubungi Anda dalam waktu 1x24 jam.");
      } else {
        setStatus("error");
        setResultMessage(data.message || "Terjadi kesalahan sistem. Silakan coba lagi nanti.");
      }
    } catch (error) {
      setStatus("error");
      setResultMessage("Koneksi gagal. Silakan periksa jaringan internet Anda dan coba lagi.");
    }
  };

  const categories = [
    { id: "pribadi", icon: <User size={28} />, title: "Personal", desc: "Penggunaan untuk individu, freelance, atau personal." },
    { id: "company", icon: <Building2 size={28} />, title: "Company", desc: "Untuk korporasi, startup, dan skala perusahaan." },
    { id: "umkm", icon: <Store size={28} />, title: "UMKM", desc: "Untuk usaha mikro, kecil, dan menengah lokal." },
    { id: "pemerintahan", icon: <Landmark size={28} />, title: "Pemerintah", desc: "Untuk instansi, lembaga, atau dinas pemerintahan." },
  ];

  if (status === "success") {
    return (
      <div className="max-w-8xl mx-auto text-center py-20 px-6">
        <div className="w-20 h-20 bg-[var(--accent-color))] text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-black mb-4" style={DISPLAY}>Terima Kasih!</h2>
        <p className="text-muted-foreground leading-relaxed mb-8" style={BODY}>{resultMessage}</p>
        <button
          onClick={() => { setStatus("idle"); setCategory(null); }}
          className="bg-foreground text-background font-semibold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer"
          style={DISPLAY}
        >
          Kembali ke Awal
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto px-6 md:px-28">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground" style={DISPLAY}>
          Ceritakan Kebutuhan Anda
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" style={BODY}>
          Kami ingin memastikan solusi yang kami bangun benar-benar tepat sasaran. Silakan pilih profil yang paling mewakili Anda saat ini.
        </p>
      </div>

      {/* Category Selector */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {categories.map((c, index) => {
          const isActive = category === c.id

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id as Category)}
              className={cn(
                "group relative min-h-[180px] overflow-hidden rounded-[20px] max-w-8xl w-full",
                "border p-6 text-left",
                "transition-all duration-300 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20",
                isActive
                  ? "border-[var(--accent-color)] bg-foreground text-background"
                  : "border-border/60 bg-white dark:bg-black text-foreground hover:-translate-y-1 hover:border-[var(--accent-color)] hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.25)]"
              )}
            >
              {/* Decorative glow */}
              <div
                className={cn(
                  "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full",
                  "bg-[var(--accent-color)]/80 blur-2xl transition-all duration-500",
                  "group-hover:scale-150",
                  isActive && "bg-[var(--accent-color)]/80"
                )}
              />

              {/* Top row */}
              <div className="relative flex items-start justify-between">
                <span
                  className={cn(
                    "text-[11px] font-medium tracking-[0.18em] uppercase",
                    isActive
                      ? "text-background/50"
                      : "text-[var(--text-foreground)]"
                  )}
                >
                  0{index + 1}
                </span>

                <div
                  className={cn(
                    "transition-transform duration-300",
                    "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                    isActive
                      ? "text-background"
                      : "text-[var(--text-foreground)]"
                  )}
                >
                  {c.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-10 max-w-[90%]">
                <h3
                  className={cn(
                    "text-xl font-semibold tracking-tight",
                    isActive ? "text-background" : "text-foreground"
                  )}
                  style={DISPLAY}
                >
                  {c.title}
                </h3>

                <p
                  className={cn(
                    "mt-2 text-sm leading-6",
                    isActive
                      ? "text-background/60"
                      : "text-muted-foreground"
                  )}
                  style={BODY}
                >
                  {c.desc}
                </p>
              </div>

              {/* Arrow */}
              <div
                className={cn(
                  "absolute bottom-6 right-6",
                  "transition-all duration-300",
                  "group-hover:translate-x-1",
                  isActive
                    ? "text-background/70"
                    : "text-muted-foreground/50"
                )}
              >
                →
              </div>
            </button>
          )
        })}
      </div>


      {/* Dynamic Form */}
      {category && (
        <div className="bg-muted/30 border border-border rounded-3xl p-8 md:p-12 animate-fade-up shadow-sm">
          <form onSubmit={onSubmit}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-foreground" style={DISPLAY}>
                Profil {categories.find(c => c.id === category)?.title}
              </h2>
              <p className="text-muted-foreground text-sm" style={BODY}>
                Silakan lengkapi formulir di bawah ini dengan data yang sebenar-benarnya.
              </p>
            </div>

            {category === "pribadi" && <PersonalForm />}
            {category === "company" && <CompanyForm />}
            {category === "umkm" && <UmkmForm />}
            {category === "pemerintahan" && <PemerintahForm />}

            {status === "error" && (
              <div className="bg-red-500/10 text-red-500 border border-red-500/20 p-4 rounded-xl mb-6 text-sm" style={BODY}>
                {resultMessage}
              </div>
            )}

            <div className="mb-6 flex justify-center sm:justify-start">
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                onVerify={(token) => setCaptchaToken(token)}
              />
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs text-muted-foreground max-w-xs" style={MONO}>
                Data Anda aman dan hanya akan digunakan untuk keperluan komunikasi proyek.
              </p>
              <p style={MONO} className="text-[10px]"> © 2026 BlankOn Digital Tech | All rights reserved. </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold px-10 py-4 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed rounded-xl cursor-pointer"
                style={DISPLAY}
              >
                {status === "submitting" ? (
                  <><Loader2 size={18} className="animate-spin" /> Mengirim...</>
                ) : (
                  <>Kirim Permintaan <ArrowRight size={18} /></>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
