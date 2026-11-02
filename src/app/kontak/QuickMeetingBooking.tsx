"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  CheckCircle2,
  Users,
  ShieldCheck,
  Mail,
  ArrowRight,
  FileCheck,
  Check,
  Copy,
  ExternalLink,
  AlertCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Building2,
  Building,
  Navigation,
  Map,
  Sparkles,
  X,
  Tag,
} from "lucide-react";
import { FaWhatsapp, FaGoogle, FaEnvelope } from "react-icons/fa";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import { servicesPricingData } from "@/lib/services-pricing-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface BarlingmascakepHub {
  id: string;
  name: string;
  address: string;
  mapsQuery: string;
  isHQ?: boolean;
}

export interface BarlingmascakepRegency {
  id: string;
  name: string;
  shortName: string;
  hubs: BarlingmascakepHub[];
}

export const BARLINGMASCAKEP_REGIONS: BarlingmascakepRegency[] = [
  {
    id: "banyumas",
    name: "Kabupaten Banyumas & Purwokerto",
    shortName: "Banyumas",
    hubs: [
      {
        id: "hq-blankon",
        name: "Kantor Pusat BlankOn Digital Tech",
        address: "Jl. Ringin Tirto No. 42, Bancarkembar, Purwokerto Utara, Banyumas 53121",
        mapsQuery: "Jl. Ringin Tirto No. 42, Purwokerto Utara, Banyumas, Jawa Tengah 53121",
        isHQ: true,
      },
      {
        id: "hetero-pwt",
        name: "Hetero Space Banyumas",
        address: "Jl. Merdeka No. 64, Brubahan, Purwokerto Timur",
        mapsQuery: "Hetero Space Purwokerto, Jl. Merdeka, Purwokerto",
      },
      {
        id: "java-heritage",
        name: "Java Heritage Hotel (Meeting Lounge)",
        address: "Jl. Dr. Angka No. 71, Karangkobar, Purwokerto",
        mapsQuery: "Java Heritage Hotel Purwokerto",
      },
    ],
  },
  {
    id: "purbalingga",
    name: "Kabupaten Purbalingga",
    shortName: "Purbalingga",
    hubs: [
      {
        id: "braling-pbg",
        name: "Braling Grand Hotel by Azana",
        address: "Jl. Mayjen Sungkono No. 1, Selabaya, Kalimanah, Purbalingga",
        mapsQuery: "Braling Grand Hotel by Azana Purbalingga",
      },
      {
        id: "alun-pbg",
        name: "Pusat Kota / Sekitar Alun-Alun Purbalingga",
        address: "Purbalingga Lor, Kec. Purbalingga",
        mapsQuery: "Alun-Alun Purbalingga",
      },
    ],
  },
  {
    id: "cilacap",
    name: "Kabupaten Cilacap",
    shortName: "Cilacap",
    hubs: [
      {
        id: "fave-clp",
        name: "Favehotel Cilacap (Lounge / Meeting)",
        address: "Jl. Budi Utomo No. 9, Sidakaya, Cilacap Selatan",
        mapsQuery: "Favehotel Cilacap",
      },
      {
        id: "aston-clp",
        name: "Aston Inn Cilacap",
        address: "Jl. Semangka No. 24, Tambakreja, Cilacap Selatan",
        mapsQuery: "Aston Inn Cilacap",
      },
    ],
  },
  {
    id: "banjarnegara",
    name: "Kabupaten Banjarnegara",
    shortName: "Banjarnegara",
    hubs: [
      {
        id: "suryayudha-bna",
        name: "Surya Yudha Hotel Banjarnegara",
        address: "Jl. Raya Rejasa No. 1, Madukara, Banjarnegara",
        mapsQuery: "Surya Yudha Hotel Banjarnegara",
      },
      {
        id: "alun-bna",
        name: "Pusat Kota / Sekitar Alun-Alun Banjarnegara",
        address: "Kutabanjarnegara, Kec. Banjarnegara",
        mapsQuery: "Alun-Alun Banjarnegara",
      },
    ],
  },
  {
    id: "kebumen",
    name: "Kabupaten Kebumen",
    shortName: "Kebumen",
    hubs: [
      {
        id: "trioazana-kbm",
        name: "Trio Azana Style Hotel Kebumen",
        address: "Jl. H.M. Sarbini No. 109, Bumirejo, Kebumen",
        mapsQuery: "Trio Azana Style Hotel Kebumen",
      },
      {
        id: "meotel-kbm",
        name: "Meotel Kebumen by Dafam",
        address: "Jl. Ahmad Yani No. 31, Kebumen",
        mapsQuery: "Meotel Kebumen by Dafam",
      },
    ],
  },
];

const TIME_SLOTS = [
  { id: "slot-1", time: "09:30 - 10:15 WIB", period: "Pagi" },
  { id: "slot-2", time: "10:30 - 11:15 WIB", period: "Pagi" },
  { id: "slot-3", time: "13:30 - 14:15 WIB", period: "Siang" },
  { id: "slot-4", time: "14:30 - 15:15 WIB", period: "Siang" },
  { id: "slot-5", time: "16:00 - 16:45 WIB", period: "Sore" },
];

const SLUG_TO_CATEGORY: Record<string, string> = {
  "api-management-system-integration": "API Management & Integrasi Sistem",
  "blockchain": "Blockchain & Smart Contract",
  "cloud-computing": "Cloud Computing & DevOps",
  "creative-content-digital-media": "Konten Kreatif & Media Digital",
  "data-science": "Data Science & BI Dashboard",
  "game-development": "Game Development & Interaktif",
  "internet-of-things": "Internet of Things & Smart Hardware",
  "machine-learning-ai": "Kecerdasan Buatan (AI) & Machine Learning",
  "mobile-development": "Pengembangan Aplikasi Mobile (iOS & Android)",
  "quality-assurance-qa-testing": "Quality Assurance & Pengujian Sistem",
  "web-development": "Web Development & Portal Enterprise",
};

const CONSULTATION_CATEGORIES = [
  "Web Development & Portal Enterprise",
  "Pengembangan Aplikasi Mobile (iOS & Android)",
  "Kecerdasan Buatan (AI) & Machine Learning",
  "Cloud Computing & DevOps",
  "API Management & Integrasi Sistem",
  "Blockchain & Smart Contract",
  "Data Science & BI Dashboard",
  "Internet of Things & Smart Hardware",
  "Game Development & Interaktif",
  "Quality Assurance & Pengujian Sistem",
  "Konten Kreatif & Media Digital",
  "Audit Sistem & Konsultasi Arsitektur",
  "Kemitraan Strategis / Lainnya",
];

const INDO_MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const INDO_DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

const parseDateParts = (dateStr: string) => {
  const [y, m, d] = dateStr.split("-").map(Number);
  return { year: y || 2026, month: (m || 1) - 1, day: d || 1 };
};

const formatDateStr = (year: number, month: number, day: number) => {
  const y = String(year);
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const getNextBusinessDay = (baseDate = new Date()) => {
  const d = new Date(baseDate);
  d.setDate(d.getDate() + 1);
  while (d.getDay() === 0 || d.getDay() === 6) {
    d.setDate(d.getDate() + 1);
  }
  return formatDateStr(d.getFullYear(), d.getMonth(), d.getDate());
};

const getDayAfterTomorrowBusinessDay = (baseDate = new Date()) => {
  const d = new Date(baseDate);
  d.setDate(d.getDate() + 2);
  while (d.getDay() === 0 || d.getDay() === 6) {
    d.setDate(d.getDate() + 1);
  }
  return formatDateStr(d.getFullYear(), d.getMonth(), d.getDate());
};

const getNextMonday = (baseDate = new Date()) => {
  const d = new Date(baseDate);
  const currentDay = d.getDay();
  const daysUntilMonday = ((1 + 7 - currentDay) % 7) || 7;
  d.setDate(d.getDate() + daysUntilMonday);
  return formatDateStr(d.getFullYear(), d.getMonth(), d.getDate());
};

export default function QuickMeetingBooking() {
  const searchParams = useSearchParams();
  const paramLayanan = searchParams ? searchParams.get("layanan") || "" : "";
  const paramProyek = searchParams ? searchParams.get("proyek") || "" : "";

  const [activeLayananSlug, setActiveLayananSlug] = useState<string>("");
  const [activeProyekId, setActiveProyekId] = useState<string>("");

  useEffect(() => {
    if (paramLayanan) setActiveLayananSlug(paramLayanan);
    if (paramProyek) setActiveProyekId(paramProyek);
  }, [paramLayanan, paramProyek]);

  const matchedService = useMemo(() => {
    if (!activeLayananSlug) return null;
    return servicesPricingData[activeLayananSlug] || null;
  }, [activeLayananSlug]);

  const matchedProject = useMemo(() => {
    if (!matchedService || !activeProyekId) return null;
    return matchedService.projects.find((p) => p.id === activeProyekId) || null;
  }, [matchedService, activeProyekId]);

  const [meetingType, setMeetingType] = useState<"online" | "offline">("online");
  const [selectedDate, setSelectedDate] = useState(getNextBusinessDay());
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0].time);
  const [category, setCategory] = useState(CONSULTATION_CATEGORIES[0]);
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // BARLINGMASCAKEP Offline Location States
  const [selectedRegencyId, setSelectedRegencyId] = useState<string>("banyumas");
  const [locationType, setLocationType] = useState<"preset" | "client_office" | "custom">("preset");
  const [selectedPresetHubId, setSelectedPresetHubId] = useState<string>("hq-blankon");
  const [customLocationName, setCustomLocationName] = useState("");
  const [customAddress, setCustomAddress] = useState("");
  const [customPinUrl, setCustomPinUrl] = useState("");
  const [isPinCopied, setIsPinCopied] = useState(false);

  const getEffectiveOfflineLocation = () => {
    const regencyObj =
      BARLINGMASCAKEP_REGIONS.find((r) => r.id === selectedRegencyId) ||
      BARLINGMASCAKEP_REGIONS[0];

    if (locationType === "preset") {
      const currentHub =
        regencyObj.hubs.find((h) => h.id === selectedPresetHubId) ||
        regencyObj.hubs[0] ||
        BARLINGMASCAKEP_REGIONS[0].hubs[0];

      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentHub.mapsQuery)}`;
      const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(currentHub.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

      return {
        venueType: currentHub.isHQ ? "Kantor Pusat BlankOn (HQ)" : "Hub / Ruang Meeting Rekomendasi",
        name: currentHub.name,
        address: currentHub.address,
        regency: regencyObj.name,
        mapsUrl,
        embedUrl,
        isHQ: !!currentHub.isHQ,
      };
    }

    if (locationType === "client_office") {
      const locName =
        customLocationName.trim() ||
        (company.trim() ? `Kantor ${company.trim()}` : "Kantor / Instansi Klien");
      const locAddress = customAddress.trim() || `Area ${regencyObj.name}`;
      const query = `${locName}, ${locAddress}, ${regencyObj.name}, Jawa Tengah`;
      const mapsUrl = customPinUrl.trim().startsWith("http")
        ? customPinUrl.trim()
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

      return {
        venueType: "Kantor / Instansi Klien",
        name: locName,
        address: locAddress,
        regency: regencyObj.name,
        mapsUrl,
        embedUrl,
        isHQ: false,
      };
    }

    // custom
    const locName = customLocationName.trim() || "Titik Temu Pilihan Klien";
    const locAddress = customAddress.trim() || `Area ${regencyObj.name}`;
    const query = `${locName}, ${locAddress}, ${regencyObj.name}, Jawa Tengah`;
    const mapsUrl = customPinUrl.trim().startsWith("http")
      ? customPinUrl.trim()
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

    return {
      venueType: "Lokasi / Kafe / Titik Temu Kustom",
      name: locName,
      address: locAddress,
      regency: regencyObj.name,
      mapsUrl,
      embedUrl,
      isHQ: false,
    };
  };

  const handleCopyPinUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setIsPinCopied(true);
    setTimeout(() => setIsPinCopied(false), 2000);
  };

  // Custom Dropdown & Calendar States
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const datePickerRef = useRef<HTMLDivElement>(null);
  const timeDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  const initialDateParts = parseDateParts(selectedDate);
  const [calendarView, setCalendarView] = useState({
    year: initialDateParts.year,
    month: initialDateParts.month,
  });

  const handleToggleDatePicker = () => {
    if (!isDatePickerOpen) {
      const parts = parseDateParts(selectedDate);
      setCalendarView({ year: parts.year, month: parts.month });
    }
    setIsDatePickerOpen((prev) => !prev);
    setIsTimeDropdownOpen(false);
    setIsCategoryDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (datePickerRef.current && !datePickerRef.current.contains(target)) {
        setIsDatePickerOpen(false);
      }
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(target)) {
        setIsTimeDropdownOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(target)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDatePickerOpen(false);
        setIsTimeDropdownOpen(false);
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePrevMonth = () => {
    setCalendarView((prev) => {
      if (prev.month === 0) {
        return { year: prev.year - 1, month: 11 };
      }
      return { year: prev.year, month: prev.month - 1 };
    });
  };

  const handleNextMonth = () => {
    setCalendarView((prev) => {
      if (prev.month === 11) {
        return { year: prev.year + 1, month: 0 };
      }
      return { year: prev.year, month: prev.month + 1 };
    });
  };

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  const todayStr = formatDateStr(todayYear, todayMonth, todayDay);

  const isPrevMonthDisabled =
    calendarView.year < todayYear ||
    (calendarView.year === todayYear && calendarView.month <= todayMonth);

  const calendarCells = (() => {
    const cells: {
      day: number;
      dateStr: string;
      isCurrentMonth: boolean;
      isWeekend: boolean;
      isPast: boolean;
      isToday: boolean;
      isDisabled: boolean;
    }[] = [];

    const firstDay = new Date(calendarView.year, calendarView.month, 1).getDay();
    // Mon = 0, Sun = 6
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    const daysInPrev = new Date(calendarView.year, calendarView.month, 0).getDate();
    const daysInMonth = new Date(calendarView.year, calendarView.month + 1, 0).getDate();

    // Previous month trailing days
    for (let i = offset - 1; i >= 0; i--) {
      const prevDay = daysInPrev - i;
      const prevMonthIdx = calendarView.month === 0 ? 11 : calendarView.month - 1;
      const prevYear = calendarView.month === 0 ? calendarView.year - 1 : calendarView.year;
      const dateStr = formatDateStr(prevYear, prevMonthIdx, prevDay);
      cells.push({
        day: prevDay,
        dateStr,
        isCurrentMonth: false,
        isWeekend: false,
        isPast: true,
        isToday: false,
        isDisabled: true,
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = formatDateStr(calendarView.year, calendarView.month, day);
      const dayOfWeek = new Date(calendarView.year, calendarView.month, day).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isPast = dateStr < todayStr;
      const isToday = dateStr === todayStr;
      const isDisabled = isWeekend || isPast;

      cells.push({
        day,
        dateStr,
        isCurrentMonth: true,
        isWeekend,
        isPast,
        isToday,
        isDisabled,
      });
    }

    return cells;
  })();

  const normalizeWhatsApp = (value: string) => {
    // Hanya izinkan angka dan tanda + di awal
    let cleaned = value.replace(/[^\d+]/g, "");
    cleaned = cleaned.replace(/(?!^)\+/g, "");

    // Ubah awalan 08 menjadi 628
    if (cleaned.startsWith("08")) {
      cleaned = "628" + cleaned.slice(2);
    } else if (cleaned.startsWith("+62")) {
      cleaned = "62" + cleaned.slice(3);
    } else if (cleaned.startsWith("8")) {
      cleaned = "62" + cleaned;
    }

    return cleaned;
  };

  const isValidWhatsApp = (value: string) => {
    const normalized = normalizeWhatsApp(value);

    // Nomor HP Indonesia: 62 + 8 + 8–11 digit berikutnya
    return /^628[1-9]\d{7,10}$/.test(normalized);
  };
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitMethod, setSubmitMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [copied, setCopied] = useState(false);

  // Synchronize category and notes when matchedService or matchedProject changes
  useEffect(() => {
    if (activeLayananSlug && SLUG_TO_CATEGORY[activeLayananSlug]) {
      setCategory(SLUG_TO_CATEGORY[activeLayananSlug]);
    } else if (matchedService) {
      setCategory(matchedService.title);
    }

    if (matchedProject) {
      setNotes((prevNotes) => {
        if (!prevNotes || prevNotes.startsWith("Tertarik konsultasi")) {
          return `Tertarik konsultasi implementasi: ${matchedProject.name} (Estimasi ${matchedProject.priceRange}, Timeline ${matchedProject.timeline}). Ingin membahas ruang lingkup dan arsitektur teknisnya.`;
        }
        return prevNotes;
      });
    } else if (matchedService) {
      setNotes((prevNotes) => {
        if (!prevNotes || prevNotes.startsWith("Tertarik konsultasi")) {
          return `Tertarik konsultasi layanan ${matchedService.title} (Estimasi Investasi ${matchedService.startingPrice}). Ingin mendiskusikan kebutuhan sistem kami.`;
        }
        return prevNotes;
      });
    }
  }, [activeLayananSlug, matchedService, matchedProject]);

  const handleClearContext = () => {
    setActiveLayananSlug("");
    setActiveProyekId("");
  };

  const getFormattedDate = (dateStr: string) => {
    try {
      const { year, month, day } = parseDateParts(dateStr);
      const dateObj = new Date(year, month, day);
      return dateObj.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!isValidWhatsApp(whatsapp)) {
      document.getElementById("booking-whatsapp")?.focus();
      return;
    }

    if (meetingType === "offline" && locationType !== "preset") {
      if (!customLocationName.trim() || !customAddress.trim()) {
        setEmailError("Harap lengkapi Nama Tempat dan Alamat Lokasi Pertemuan di area BARLINGMASCAKEP.");
        return;
      }
    }

    const formattedDate = getFormattedDate(selectedDate);
    const effectiveLoc = getEffectiveOfflineLocation();

    let formatBlock = "";
    if (meetingType === "online") {
      formatBlock = "• Format Pertemuan: Daring / Online (Google Meet)";
    } else {
      formatBlock = `• Format Pertemuan: Tatap Muka / Offline (Wilayah BARLINGMASCAKEP)
• Tipe Titik Temu: ${effectiveLoc.venueType}
• Nama Lokasi: ${effectiveLoc.name}
• Wilayah: ${effectiveLoc.regency}
• Alamat Lengkap: ${effectiveLoc.address}
• Tautan Pin Google Maps: ${effectiveLoc.mapsUrl}`;
    }

    const projectInfo = matchedProject
      ? `• Rencana Implementasi: ${matchedProject.name} (Estimasi ${matchedProject.priceRange}, Waktu ${matchedProject.timeline})\n`
      : matchedService
      ? `• Layanan Spesifik: ${matchedService.title} (Estimasi Investasi ${matchedService.startingPrice})\n`
      : "";

    const message = `Halo Tim BlankOn Digital Tech,
Saya ingin mengajukan jadwal janji temu konsultasi teknologi:

• Nama Lengkap: ${fullName.trim()}
${company.trim() ? `• Perusahaan / Instansi: ${company.trim()}\n` : ""}• Email Resmi: ${email.trim()}
• No. WhatsApp: ${whatsapp.trim()}
${formatBlock}
• Tanggal: ${formattedDate}
• Waktu Sesi: ${selectedSlot}
• Kategori Konsultasi: ${category}
${projectInfo}${notes.trim() ? `• Catatan Kebutuhan: ${notes.trim()}\n` : ""}
Mohon informasi konfirmasi ketersediaan slot waktu ini. Terima kasih.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6285174155704?text=${encoded}`, "_blank");
    setSubmitted(true);
    setSubmitMethod("whatsapp");
  };

  const getEmailData = () => {
    const to = "blankondigitaltech@gmail.com";
    const subjectPrefix = matchedProject
      ? `[Konsultasi Proyek: ${matchedProject.name}]`
      : matchedService
      ? `[Konsultasi: ${matchedService.title}]`
      : `Pengajuan Janji Temu Konsultasi`;
    const subject = `${subjectPrefix} - ${fullName.trim() || "Calon Klien"} (${company.trim() || "Perseorangan"})`;
    const effectiveLoc = getEffectiveOfflineLocation();

    const formatLines =
      meetingType === "online"
        ? ["• Format Pertemuan: Daring / Online (Google Meet)"]
        : [
          "• Format Pertemuan: Tatap Muka / Offline (Wilayah BARLINGMASCAKEP)",
          `• Tipe Titik Temu: ${effectiveLoc.venueType}`,
          `• Nama Lokasi: ${effectiveLoc.name}`,
          `• Wilayah: ${effectiveLoc.regency}`,
          `• Alamat Lengkap: ${effectiveLoc.address}`,
          `• Tautan Pin Google Maps: ${effectiveLoc.mapsUrl}`,
        ];

    const projectLines = matchedProject
      ? [
          `• Rencana Implementasi Proyek: ${matchedProject.name}`,
          `• Estimasi Biaya Katalog: ${matchedProject.priceRange}`,
          `• Estimasi Waktu Pengerjaan: ${matchedProject.timeline}`,
        ]
      : matchedService
      ? [
          `• Layanan Spesifik: ${matchedService.title}`,
          `• Patokan Investasi Dasar: ${matchedService.startingPrice}`,
        ]
      : [];

    const lines = [
      "Halo Tim BlankOn Digital Tech,",
      "",
      "Saya ingin mengajukan jadwal janji temu konsultasi teknologi:",
      "",
      `• Nama Lengkap: ${fullName.trim() || "-"}`,
      company.trim() ? `• Perusahaan / Instansi: ${company.trim()}` : "",
      `• Email Pengirim: ${email.trim() || "-"}`,
      `• Nomor WhatsApp: ${whatsapp.trim() || "-"}`,
      ...formatLines,
      `• Rencana Tanggal: ${getFormattedDate(selectedDate)}`,
      `• Pilihan Waktu: ${selectedSlot}`,
      `• Topik Konsultasi: ${category}`,
      ...projectLines,
      notes.trim() ? `• Catatan Kebutuhan: ${notes.trim()}` : "",
      "",
      "Mohon informasi konfirmasi ketersediaan slot waktu ini.",
      "",
      "Terima kasih.",
    ].filter((line) => line !== null && line !== undefined);

    // RFC 6068 requires CRLF (\r\n) for newlines in mailto: body
    const body = lines.join("\r\n");

    return { to, subject, body };
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!fullName.trim()) {
      setEmailError("Harap masukkan Nama Lengkap Anda terlebih dahulu.");
      document.getElementById("booking-fullname")?.focus();
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Harap masukkan alamat Email Resmi yang valid (contoh: nama@perusahaan.com).");
      document.getElementById("booking-email")?.focus();
      return;
    }

    if (!whatsapp.trim() || !isValidWhatsApp(whatsapp)) {
      setEmailError("Harap masukkan nomor WhatsApp yang valid (contoh: 081234567890).");
      document.getElementById("booking-whatsapp")?.focus();
      return;
    }

    if (meetingType === "offline" && locationType !== "preset") {
      if (!customLocationName.trim() || !customAddress.trim()) {
        setEmailError("Harap lengkapi Nama Tempat dan Alamat Lokasi Pertemuan di area BARLINGMASCAKEP.");
        return;
      }
    }

    setIsEmailModalOpen(true);
  };

  const handleOpenGmail = () => {
    const { to, subject, body } = getEmailData();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setSubmitMethod("email");
    setIsEmailModalOpen(false);
  };

  const handleOpenDefaultMail = () => {
    const { to, subject, body } = getEmailData();
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setSubmitMethod("email");
    setIsEmailModalOpen(false);
  };

  const handleOpenOutlook = () => {
    const { to, subject, body } = getEmailData();
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(outlookUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setSubmitMethod("email");
    setIsEmailModalOpen(false);
  };

  const handleCopyDraft = async () => {
    const { to, subject, body } = getEmailData();
    const fullText = `Tujuan: ${to}\r\nSubjek: ${subject}\r\n\r\n${body}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const effectiveOfflineLoc = getEffectiveOfflineLocation();

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Spesifikasi & Ketentuan Sesi (Corporate Overview) */}
        <aside className="lg:col-span-5 flex flex-col gap-6">
          <div className="group relative isolate overflow-hidden border border-border bg-card/95 p-6 md:p-8 flex flex-col gap-6 shadow-xs backdrop-blur-sm transition-colors duration-300 hover:border-[var(--accent-color)]">
            {/* Latar foto & penyeimbang kontras (Penuh 100% tanpa terpotong margin) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-right opacity-40 transition-opacity duration-500 group-hover:opacity-75"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1717459254820-64fd9be3fb19?auto=format&fit=crop&w=1400&q=85")',
                  maskImage:
                    "linear-gradient(to left, black 0%, black 15%, transparent 80%)",
                  WebkitMaskImage:
                    "linear-gradient(to left, black 0%, black 15%, transparent 80%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-background/70 to-transparent dark:from-black/95" />
            </div>
            <div className="space-y-3 pb-6 border-b border-border">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-color)]"
                style={MONO}
              >
                SPESIFIKASI SESI
              </span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground" style={DISPLAY}>
                Sesi Eksplorasi Arsitektur & Solusi Digital
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-justify" style={BODY}>
                Diskusi strategis 1-on-1 bersama praktisi software engineering BlankOn Digital Tech untuk menganalisis kebutuhan sistem, arsitektur, dan model implementasi teknologi bisnis Anda.
              </p>
            </div>

            {/* Parameter Sesi */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-[var(--accent-color)] mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase" style={MONO}>
                    Durasi Sesi
                  </p>
                  <p className="text-sm font-semibold text-foreground" style={DISPLAY}>
                    30 hingga 45 Menit
                  </p>
                  <p className="text-xs text-muted-foreground" style={BODY}>
                    Fokus, efisien, dan berorientasi pada pemecahan masalah teknis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 shrink-0 text-[var(--accent-color)] mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase" style={MONO}>
                    Tim Yang Hadir
                  </p>
                  <p className="text-sm font-semibold text-foreground" style={DISPLAY}>
                    Solution Architect & Tech Lead
                  </p>
                  <p className="text-xs text-muted-foreground" style={BODY}>
                    Bukan sales representatif umum; Anda langsung berdialog dengan engineer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                {meetingType === "online" ? (
                  <Video className="h-5 w-5 shrink-0 text-[var(--accent-color)] mt-0.5" />
                ) : (
                  <MapPin className="h-5 w-5 shrink-0 text-[var(--accent-color)] mt-0.5" />
                )}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase" style={MONO}>
                    Pilihan Lokasi Pertemuan
                  </p>
                  <p className="text-sm font-semibold text-foreground" style={DISPLAY}>
                    {meetingType === "online"
                      ? "Google Meet (Daring)"
                      : `${effectiveOfflineLoc.name} (${BARLINGMASCAKEP_REGIONS.find((r) => r.id === selectedRegencyId)?.shortName || "Barlingmascakep"})`}
                  </p>
                  <p className="text-xs text-muted-foreground" style={BODY}>
                    {meetingType === "online"
                      ? "Tautan rapat resmi dikirimkan langsung via email/WhatsApp."
                      : "Tatap Muka di area BARLINGMASCAKEP (Pin Google Maps terlampir)."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--accent-color)] mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase" style={MONO}>
                    Kerahasiaan Informasi (NDA)
                  </p>
                  <p className="text-sm font-semibold text-foreground" style={DISPLAY}>
                    Perlindungan Data & Ide Bisnis
                  </p>
                  <p className="text-xs text-muted-foreground" style={BODY}>
                    Seluruh ide, diagram, maupun arsitektur eksisting Anda terjaga kerahasiaannya.
                  </p>
                </div>
              </div>
            </div>

            {/* Agenda Pembahasan */}
            <div className="pt-6 border-t border-border space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground" style={MONO}>
                Agenda Yang Dibahas:
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground" style={BODY}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <span>Identifikasi kendala sistem & kebutuhan produk digital</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <span>Rekomendasi stack teknologi, skalabilitas, dan keamanan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <span>Estimasi waktu pengerjaan dan roadmap implementasi</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bantuan Cepat */}
          <div className="group relative isolate overflow-hidden border border-border bg-card/80 p-5 shadow-xs backdrop-blur-sm transition-colors duration-300 hover:border-[var(--accent-color)]">
            {/* Latar foto & penyeimbang kontras (Penuh 100%) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-right opacity-45 transition-opacity duration-500 group-hover:opacity-75"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=900&q=80")',
                  maskImage:
                    "linear-gradient(to left, black 0%, transparent 80%)",
                  WebkitMaskImage:
                    "linear-gradient(to left, black 0%, transparent 80%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-background/40 to-transparent dark:from-black/95" />
            </div>
            <p className="text-xs text-muted-foreground mb-2" style={BODY}>
              Butuh konsultasi mendesak dalam kurun waktu kurang dari 24 jam?
            </p>
            <a
              href="https://wa.me/6285174155704"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-[var(--accent-color)] transition-colors"
              style={MONO}
            >
              <FaWhatsapp className="h-4 w-4 text-[var(--accent-color)]" />
              Hubungi Admin Operasional Langsung (+62 851-7415-5704)
            </a>
          </div>
        </aside>

        {/* Kolom Kanan: Formulir Pemesanan Jadwal (Corporate Scheduler) */}
        <main className="lg:col-span-7">
          <div className="group relative isolate overflow-hidden border border-border bg-card/95 p-6 md:p-10 shadow-xs backdrop-blur-sm flex flex-col gap-8 transition-colors duration-300 hover:border-[var(--accent-color)]">
            {/* Latar foto & penyeimbang kontras (Penuh 100% tanpa terpotong margin) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-right opacity-40 transition-opacity duration-500 group-hover:opacity-75"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1628081653896-61e610394639?auto=format&fit=crop&w=1600&q=85")',
                  maskImage:
                    "linear-gradient(to left, black 0%, black 8%, transparent 80%)",
                  WebkitMaskImage:
                    "linear-gradient(to left, black 0%, black 8%, transparent 80%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-background/70 to-transparent dark:from-black/95" />
            </div>
            <div className="border-b border-border pb-5">
              <h3 className="text-xl font-bold tracking-tight text-foreground" style={DISPLAY}>
                Formulir Reservasi Jadwal Konsultasi
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1" style={BODY}>
                Silakan lengkapi preferensi waktu dan kontak Anda. Konfirmasi resmi akan dikirim melalui WhatsApp & Email.
              </p>
            </div>

            {/* Banner Integrasi Konteks Layanan & Proyek Dari URL */}
            {matchedService && (
              <div className="p-4 rounded-xl border border-[var(--accent-color)]/60 bg-[var(--accent-color)]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs animate-fade-in">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping" />
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--accent-color)]" style={MONO}>
                      KONSULTASI TERINTEGRASI DARI KATALOG HARGA
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground" style={DISPLAY}>
                    Layanan: {matchedService.title}
                  </h4>
                  {matchedProject ? (
                    <p className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
                      Pilihan Proyek: <strong className="text-foreground">{matchedProject.name}</strong> • Rentang Biaya: <span className="font-mono text-foreground font-semibold">{matchedProject.priceRange}</span> (Estimasi {matchedProject.timeline})
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
                      Patokan Investasi: <span className="font-mono text-foreground font-semibold">{matchedService.startingPrice}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold bg-background border border-border text-foreground" style={MONO}>
                    Terdeteksi Otomatis
                  </span>
                  <button
                    type="button"
                    onClick={handleClearContext}
                    className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors text-xs"
                    title="Ganti / Reset Pilihan"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleWhatsAppBooking} className="space-y-7">
              {/* Langkah 1: Format Pertemuan */}
              <div className="space-y-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block" style={MONO}>
                  1. Pilih Format Pertemuan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <button
                    type="button"
                    onClick={() => setMeetingType("online")}
                    className={`flex items-start gap-3.5 p-4 border text-left transition-all cursor-pointer ${meetingType === "online"
                        ? "border-[var(--accent-color)] bg-background ring-1 ring-[var(--accent-color)]"
                        : "border-border bg-background hover:border-foreground/30"
                      }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center ${meetingType === "online"
                          ? "bg-[var(--accent-color)] text-black"
                          : "bg-muted text-muted-foreground"
                        }`}
                    >
                      <Video className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-foreground" style={DISPLAY}>
                          Daring / Online
                        </span>
                        {meetingType === "online" && (
                          <Check className="h-4 w-4 text-[var(--accent-color)] stroke-[3]" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground" style={BODY}>
                        Google Meet (Tautan dikirim via undangan)
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingType("offline")}
                    className={`flex items-start gap-3.5 p-4 border text-left transition-all cursor-pointer ${meetingType === "offline"
                        ? "border-[var(--accent-color)] bg-background ring-1 ring-[var(--accent-color)]"
                        : "border-border bg-background hover:border-foreground/30"
                      }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${meetingType === "offline"
                          ? "bg-[var(--accent-color)] text-black"
                          : "bg-muted text-muted-foreground"
                        }`}
                    >
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-foreground" style={DISPLAY}>
                          Tatap Muka di Lokasi
                        </span>
                        {meetingType === "offline" && (
                          <Check className="h-4 w-4 text-[var(--accent-color)] stroke-[3]" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground" style={BODY}>
                        Khusus Area BARLINGMASCAKEP
                      </p>
                    </div>
                  </button>
                </div>

                {/* Sub-Section: Pemilihan Lokasi Tatap Muka BARLINGMASCAKEP */}
                {meetingType === "offline" && (
                  <div className="rounded-xl border border-[var(--accent-color)]/30 bg-muted/15 p-4 sm:p-5 space-y-4 animate-fade-in">
                    {/* Header Cakupan */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[var(--accent-color)] shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground" style={MONO}>
                          Penentuan Lokasi Tatap Muka (BARLINGMASCAKEP)
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/30 w-fit">
                        Cakupan 5 Kabupaten
                      </span>
                    </div>

                    {/* Tab 5 Wilayah BARLINGMASCAKEP */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide block" style={MONO}>
                        Pilih Wilayah Kabupaten:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {BARLINGMASCAKEP_REGIONS.map((reg) => {
                          const isActive = selectedRegencyId === reg.id;
                          return (
                            <button
                              key={reg.id}
                              type="button"
                              onClick={() => {
                                setSelectedRegencyId(reg.id);
                                const firstHub = reg.hubs[0];
                                if (firstHub) setSelectedPresetHubId(firstHub.id);
                              }}
                              className={`px-3 py-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${isActive
                                  ? "bg-[var(--accent-color)] text-black border-[var(--accent-color)] shadow-xs"
                                  : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                                }`}
                              style={BODY}
                            >
                              {reg.shortName}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tipe Titik Temu */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide block" style={MONO}>
                        Pilihan Kategori Titik Temu:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setLocationType("preset")}
                          className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${locationType === "preset"
                              ? "border-[var(--accent-color)] bg-background ring-1 ring-[var(--accent-color)] text-foreground font-semibold"
                              : "border-border bg-background/50 text-muted-foreground hover:border-foreground/30"
                            }`}
                          style={BODY}
                        >
                          <div className="flex items-center gap-1.5">
                            <Building2 className="h-3.5 w-3.5 text-[var(--accent-color)]" />
                            <span>Hub Rekomendasi / HQ</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground font-normal mt-0.5">
                            Kantor BlankOn atau venue pilihan
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => setLocationType("client_office")}
                          className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${locationType === "client_office"
                              ? "border-[var(--accent-color)] bg-background ring-1 ring-[var(--accent-color)] text-foreground font-semibold"
                              : "border-border bg-background/50 text-muted-foreground hover:border-foreground/30"
                            }`}
                          style={BODY}
                        >
                          <div className="flex items-center gap-1.5">
                            <Building className="h-3.5 w-3.5 text-[var(--accent-color)]" />
                            <span>Kantor / Instansi Klien</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground font-normal mt-0.5">
                            Tim engineer hadir ke kantor Anda
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => setLocationType("custom")}
                          className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${locationType === "custom"
                              ? "border-[var(--accent-color)] bg-background ring-1 ring-[var(--accent-color)] text-foreground font-semibold"
                              : "border-border bg-background/50 text-muted-foreground hover:border-foreground/30"
                            }`}
                          style={BODY}
                        >
                          <div className="flex items-center gap-1.5">
                            <Map className="h-3.5 w-3.5 text-[var(--accent-color)]" />
                            <span>Kafe / Titik Temu Kustom</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground font-normal mt-0.5">
                            Pilih kafe atau lokasi publik
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Detail Form Sesuai Kategori */}
                    {locationType === "preset" ? (
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide block" style={MONO}>
                          Daftar Lokasi di {BARLINGMASCAKEP_REGIONS.find((r) => r.id === selectedRegencyId)?.name}:
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {BARLINGMASCAKEP_REGIONS.find((r) => r.id === selectedRegencyId)?.hubs.map((hub) => {
                            const isSelected = selectedPresetHubId === hub.id;
                            return (
                              <button
                                key={hub.id}
                                type="button"
                                onClick={() => setSelectedPresetHubId(hub.id)}
                                className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${isSelected
                                    ? "border-[var(--accent-color)] bg-background ring-1 ring-[var(--accent-color)]"
                                    : "border-border bg-background/70 hover:border-foreground/30"
                                  }`}
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-foreground" style={DISPLAY}>
                                      {hub.name}
                                    </span>
                                    {hub.isHQ && (
                                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--accent-color)] text-black">
                                        HQ UTAMA
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-muted-foreground" style={BODY}>
                                    {hub.address}
                                  </p>
                                </div>
                                {isSelected && (
                                  <Check className="h-4 w-4 text-[var(--accent-color)] stroke-[3] shrink-0 mt-0.5" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 pt-1">
                        <div className="space-y-1.5">
                          <label htmlFor="offline-loc-name" className="text-xs font-medium text-foreground block" style={BODY}>
                            Nama Tempat / Gedung / Kantor <span className="text-red-600 dark:text-red-500">*</span>
                          </label>
                          <input
                            id="offline-loc-name"
                            type="text"
                            placeholder={
                              locationType === "client_office"
                                ? "Contoh: Kantor PT Inovasi Solusi Digital"
                                : "Contoh: Kopi Titik Temu Purwokerto"
                            }
                            value={customLocationName}
                            onChange={(e) => setCustomLocationName(e.target.value)}
                            className="w-full border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent-color)] placeholder:text-muted-foreground/50 text-foreground rounded-lg"
                            style={BODY}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="offline-loc-address" className="text-xs font-medium text-foreground block" style={BODY}>
                            Alamat Lengkap di {BARLINGMASCAKEP_REGIONS.find((r) => r.id === selectedRegencyId)?.name} <span className="text-red-600 dark:text-red-500">*</span>
                          </label>
                          <input
                            id="offline-loc-address"
                            type="text"
                            placeholder="Contoh: Jl. Jenderal Sudirman No. 120, Purwokerto"
                            value={customAddress}
                            onChange={(e) => setCustomAddress(e.target.value)}
                            className="w-full border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent-color)] placeholder:text-muted-foreground/50 text-foreground rounded-lg"
                            style={BODY}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <label htmlFor="offline-loc-maps" className="text-xs font-medium text-foreground block" style={BODY}>
                              Link Pin Google Maps <span className="text-muted-foreground text-[11px]">(Opsional)</span>
                            </label>
                            <span className="text-[10px] text-muted-foreground font-mono">
                              Bisa paste link maps jika ada
                            </span>
                          </div>
                          <input
                            id="offline-loc-maps"
                            type="url"
                            placeholder="Contoh: https://maps.app.goo.gl/... (kosongkan jika ingin dibuat otomatis)"
                            value={customPinUrl}
                            onChange={(e) => setCustomPinUrl(e.target.value)}
                            className="w-full border border-border bg-background px-3.5 py-2.5 outline-none transition-colors focus:border-[var(--accent-color)] placeholder:text-muted-foreground/50 text-foreground rounded-lg font-mono text-xs"
                            style={BODY}
                          />
                        </div>
                      </div>
                    )}

                    {/* Preview Peta Google Maps Dinamis */}
                    <div className="space-y-2 pt-2 border-t border-border/80">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5" style={MONO}>
                          <Navigation className="h-3.5 w-3.5 text-[var(--accent-color)]" />
                          Preview Peta Google Maps Lokasi
                        </span>
                        <a
                          href={effectiveOfflineLoc.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[var(--accent-color)] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                          style={BODY}
                        >
                          <span>Buka Pin di Google Maps</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>

                      {/* Frame Peta */}
                      <div className="w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-border relative bg-background">
                        <iframe
                          key={effectiveOfflineLoc.embedUrl}
                          src={effectiveOfflineLoc.embedUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Google Maps - ${effectiveOfflineLoc.name}`}
                        />
                      </div>

                      {/* Kotak Ringkasan URL Pin Yang Siap Dikirim */}
                      <div className="p-3 rounded-lg border border-border bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-1.5 text-foreground font-medium truncate" style={BODY}>
                            <MapPin className="h-3.5 w-3.5 text-[var(--accent-color)] shrink-0" />
                            <span className="truncate">{effectiveOfflineLoc.name}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground truncate" style={BODY}>
                            {effectiveOfflineLoc.address} ({effectiveOfflineLoc.regency})
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                          <button
                            type="button"
                            onClick={() => handleCopyPinUrl(effectiveOfflineLoc.mapsUrl)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-border bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground text-[11px] font-mono transition-colors cursor-pointer"
                          >
                            {isPinCopied ? (
                              <>
                                <Check className="h-3 w-3 text-[var(--accent-color)]" />
                                <span>Tersalin</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Salin Pin</span>
                              </>
                            )}
                          </button>

                          <a
                            href={effectiveOfflineLoc.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--accent-color)] text-black font-semibold text-[11px] hover:opacity-90 transition-opacity"
                            style={BODY}
                          >
                            <ExternalLink className="h-3 w-3" />
                            <span>Maps</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Langkah 2: Tanggal & Slot Jam Kerja (Custom UI) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 2. Pilih Tanggal (Hari Kerja) */}
                <div className="space-y-2">
                  <label
                    htmlFor="booking-date-btn"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between"
                    style={MONO}
                  >
                    <span className="flex items-center gap-1.5">
                      2. Pilih Tanggal (Hari Kerja)
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    </span>
                    <span className="text-[10px] text-[var(--accent-color)] lowercase">
                      (senin - jumat)
                    </span>
                  </label>

                  <div className="relative" ref={datePickerRef}>
                    <input type="hidden" name="bookingDate" value={selectedDate} />
                    <button
                      type="button"
                      id="booking-date-btn"
                      aria-haspopup="dialog"
                      aria-expanded={isDatePickerOpen}
                      onClick={handleToggleDatePicker}
                      className={`w-full border bg-background px-3.5 py-3 text-left text-sm outline-none transition-all flex items-center justify-between text-foreground cursor-pointer ${isDatePickerOpen
                          ? "border-[var(--accent-color)] ring-1 ring-[var(--accent-color)]/30"
                          : "border-border hover:border-foreground/40"
                        }`}
                      style={BODY}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Calendar className="h-4 w-4 shrink-0 text-[var(--accent-color)]" />
                        <span className="font-medium truncate">
                          {getFormattedDate(selectedDate)}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isDatePickerOpen ? "rotate-180 text-foreground" : ""
                          }`}
                      />
                    </button>

                    {/* Popover Kalender Kustom BlankOn */}
                    {isDatePickerOpen && (
                      <div
                        role="dialog"
                        aria-label="Pilih Tanggal Pertemuan"
                        className="absolute left-0 right-0 sm:right-auto sm:w-[350px] top-full z-50 mt-2 p-4 border border-border bg-card/95 backdrop-blur-md shadow-2xl animate-fade-in"
                      >
                        {/* Header Navigasi Bulan */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                          <button
                            type="button"
                            disabled={isPrevMonthDisabled}
                            onClick={handlePrevMonth}
                            className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            aria-label="Bulan sebelumnya"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>

                          <span className="text-sm font-semibold text-foreground tracking-wide" style={DISPLAY}>
                            {INDO_MONTHS[calendarView.month]} {calendarView.year}
                          </span>

                          <button
                            type="button"
                            onClick={handleNextMonth}
                            className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                            aria-label="Bulan berikutnya"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Quick Shortcut Chips */}
                        <div className="flex items-center gap-1.5 mb-3.5">
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mr-0.5">
                            Pintas:
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const d = getNextBusinessDay();
                              setSelectedDate(d);
                              const p = parseDateParts(d);
                              setCalendarView({ year: p.year, month: p.month });
                              setIsDatePickerOpen(false);
                            }}
                            className="px-2 py-1 text-[11px] font-medium border border-border bg-muted/60 hover:border-[var(--accent-color)] hover:text-foreground transition-colors cursor-pointer rounded-xs"
                            style={BODY}
                          >
                            Besok
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const d = getDayAfterTomorrowBusinessDay();
                              setSelectedDate(d);
                              const p = parseDateParts(d);
                              setCalendarView({ year: p.year, month: p.month });
                              setIsDatePickerOpen(false);
                            }}
                            className="px-2 py-1 text-[11px] font-medium border border-border bg-muted/60 hover:border-[var(--accent-color)] hover:text-foreground transition-colors cursor-pointer rounded-xs"
                            style={BODY}
                          >
                            Lusa
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const d = getNextMonday();
                              setSelectedDate(d);
                              const p = parseDateParts(d);
                              setCalendarView({ year: p.year, month: p.month });
                              setIsDatePickerOpen(false);
                            }}
                            className="px-2 py-1 text-[11px] font-medium border border-border bg-muted/60 hover:border-[var(--accent-color)] hover:text-foreground transition-colors cursor-pointer rounded-xs"
                            style={BODY}
                          >
                            Senin Depan
                          </button>
                        </div>

                        {/* Hari-hari dalam seminggu */}
                        <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
                          {INDO_DAYS.map((day, idx) => (
                            <span
                              key={day}
                              className={`text-[11px] font-mono font-semibold py-1 ${idx >= 5 ? "text-muted-foreground/50" : "text-muted-foreground"
                                }`}
                            >
                              {day}
                            </span>
                          ))}
                        </div>

                        {/* Grid Tanggal */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {calendarCells.map((cell, idx) => {
                            if (!cell.isCurrentMonth) {
                              return (
                                <div
                                  key={`empty-${idx}`}
                                  className="h-8 flex items-center justify-center text-xs text-muted-foreground/20 select-none"
                                >
                                  {cell.day}
                                </div>
                              );
                            }

                            const isSelected = cell.dateStr === selectedDate;
                            const isDisabled = cell.isDisabled;

                            return (
                              <button
                                key={cell.dateStr}
                                type="button"
                                disabled={isDisabled}
                                onClick={() => {
                                  setSelectedDate(cell.dateStr);
                                  setIsDatePickerOpen(false);
                                }}
                                title={
                                  cell.isPast
                                    ? "Waktu telah lewat"
                                    : cell.isWeekend
                                      ? "Hari Libur (Pertemuan khusus hari kerja)"
                                      : cell.dateStr
                                }
                                className={`h-8 w-8 mx-auto flex items-center justify-center text-xs transition-colors rounded-sm cursor-pointer ${isSelected
                                    ? "bg-[var(--accent-color)] text-black font-bold shadow-xs"
                                    : isDisabled
                                      ? "text-muted-foreground/30 cursor-not-allowed line-through"
                                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                                  } ${cell.isToday && !isSelected ? "ring-1 ring-border font-bold" : ""}`}
                                style={BODY}
                              >
                                {cell.day}
                              </button>
                            );
                          })}
                        </div>

                        {/* Catatan Keterangan Hari Kerja */}
                        <div className="mt-3.5 pt-2.5 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground" style={BODY}>
                          <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
                            Senin – Jumat (Hari Kerja)
                          </span>
                          <span className="text-[10px] text-muted-foreground/60 font-mono">
                            Sab & Min libur
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-muted-foreground" style={BODY}>
                    Pertemuan dijadwalkan pada hari kerja resmi BlankOn.
                  </p>
                </div>

                {/* 3. Pilih Sesi Jam */}
                <div className="space-y-2">
                  <label
                    htmlFor="booking-slot-btn"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between"
                    style={MONO}
                  >
                    <span className="flex items-center gap-1.5">
                      3. Pilih Sesi Jam
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    </span>
                    <span className="text-[10px] text-emerald-500 font-mono">
                      (slot tersedia)
                    </span>
                  </label>

                  <div className="relative" ref={timeDropdownRef}>
                    <input type="hidden" name="bookingSlot" value={selectedSlot} />
                    <button
                      type="button"
                      id="booking-slot-btn"
                      aria-haspopup="listbox"
                      aria-expanded={isTimeDropdownOpen}
                      onClick={() => {
                        setIsTimeDropdownOpen((prev) => !prev);
                        setIsDatePickerOpen(false);
                        setIsCategoryDropdownOpen(false);
                      }}
                      className={`w-full border bg-background px-3.5 py-3 text-left text-sm outline-none transition-all flex items-center justify-between text-foreground cursor-pointer ${isTimeDropdownOpen
                          ? "border-[var(--accent-color)] ring-1 ring-[var(--accent-color)]/30"
                          : "border-border hover:border-foreground/40"
                        }`}
                      style={BODY}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Clock className="h-4 w-4 shrink-0 text-[var(--accent-color)]" />
                        <span className="font-medium truncate">{selectedSlot}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <span className="px-2 py-0.5 text-[11px] font-mono bg-muted text-muted-foreground rounded">
                          {TIME_SLOTS.find((s) => s.time === selectedSlot)?.period || "Sesi"}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isTimeDropdownOpen ? "rotate-180 text-foreground" : ""
                            }`}
                        />
                      </div>
                    </button>

                    {/* Popover Dropdown Jam */}
                    {isTimeDropdownOpen && (
                      <div
                        role="listbox"
                        aria-label="Pilih Jam Pertemuan"
                        className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden border border-border bg-card/95 backdrop-blur-md shadow-2xl py-1 divide-y divide-border/40 animate-fade-in"
                      >
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = selectedSlot === slot.time;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setSelectedSlot(slot.time);
                                setIsTimeDropdownOpen(false);
                              }}
                              className={`w-full px-3.5 py-2.5 flex items-center justify-between transition-colors text-left cursor-pointer ${isSelected ? "bg-accent/60" : "hover:bg-accent/40"
                                }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="relative flex h-2 w-2 shrink-0">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span
                                  className={`text-sm ${isSelected
                                      ? "font-semibold text-foreground"
                                      : "font-normal text-foreground"
                                    }`}
                                  style={BODY}
                                >
                                  {slot.time}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 ml-2">
                                <span className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 bg-muted rounded">
                                  Sesi {slot.period}
                                </span>
                                {isSelected ? (
                                  <Check className="h-4 w-4 text-[var(--accent-color)] stroke-[3]" />
                                ) : (
                                  <div className="w-4" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-muted-foreground" style={BODY}>
                    Zona Waktu: Waktu Indonesia Barat (WIB)
                  </p>
                </div>
              </div>

              {/* Langkah 3: Kategori Konsultasi */}
              <div className="space-y-2">
                <label
                  htmlFor="booking-category-btn"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  style={MONO}
                >
                  4. Topik Utama Konsultasi
                </label>

                <div className="relative" ref={categoryDropdownRef}>
                  <input type="hidden" name="bookingCategory" value={category} />
                  <button
                    type="button"
                    id="booking-category-btn"
                    aria-haspopup="listbox"
                    aria-expanded={isCategoryDropdownOpen}
                    onClick={() => {
                      setIsCategoryDropdownOpen((prev) => !prev);
                      setIsDatePickerOpen(false);
                      setIsTimeDropdownOpen(false);
                    }}
                    className={`w-full border bg-background px-3.5 py-3 text-left text-sm outline-none transition-all flex items-center justify-between text-foreground cursor-pointer ${isCategoryDropdownOpen
                        ? "border-[var(--accent-color)] ring-1 ring-[var(--accent-color)]/30"
                        : "border-border hover:border-foreground/40"
                      }`}
                    style={BODY}
                  >
                    <span className="truncate font-medium">{category}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 ml-2 ${isCategoryDropdownOpen ? "rotate-180 text-foreground" : ""
                        }`}
                    />
                  </button>

                  {isCategoryDropdownOpen && (
                    <div
                      role="listbox"
                      aria-label="Pilih Topik Konsultasi"
                      className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden border border-border bg-card/95 backdrop-blur-md shadow-2xl py-1 divide-y divide-border/40 animate-fade-in max-h-60 overflow-y-auto"
                    >
                      {CONSULTATION_CATEGORIES.map((item) => {
                        const isSelected = category === item;
                        return (
                          <button
                            key={item}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setCategory(item);
                              setIsCategoryDropdownOpen(false);
                            }}
                            className={`w-full px-3.5 py-2.5 flex items-center justify-between transition-colors text-left cursor-pointer ${isSelected ? "bg-accent/60" : "hover:bg-accent/40"
                              }`}
                          >
                            <span
                              className={`text-sm pr-3 ${isSelected
                                  ? "font-semibold text-foreground"
                                  : "font-normal text-foreground"
                                }`}
                              style={BODY}
                            >
                              {item}
                            </span>
                            {isSelected && (
                              <Check className="h-4 w-4 text-[var(--accent-color)] stroke-[3] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Langkah 4: Identitas Kontak Klien */}
              <div className="space-y-4 pt-2 border-t border-border">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block" style={MONO}>
                  5. Informasi Kontak Calon Klien
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="booking-fullname" className="text-xs font-medium text-foreground" style={BODY}>
                      Nama Lengkap <span className="text-red-600 dark:text-red-500">*</span>
                    </label>
                    <input
                      id="booking-fullname"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent-color)] placeholder:text-muted-foreground/50 text-foreground"
                      style={BODY}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="booking-company" className="text-xs font-medium text-foreground" style={BODY}>
                      Perusahaan / Instansi <span className="text-xs text-muted-foreground">(Opsional)</span>
                    </label>
                    <input
                      id="booking-company"
                      type="text"
                      placeholder="Nama PT, CV, atau startup"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent-color)] placeholder:text-muted-foreground/50 text-foreground"
                      style={BODY}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="booking-email" className="text-xs font-medium text-foreground" style={BODY}>
                      Email Resmi <span className="text-red-600 dark:text-red-500">*</span>
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      placeholder="nama@perusahaan.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent-color)] placeholder:text-muted-foreground/50 text-foreground"
                      style={BODY}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-whatsapp"
                      className="text-xs font-medium text-foreground"
                      style={BODY}
                    >
                      Nomor WhatsApp{" "}
                      <span className="text-red-600 dark:text-red-500">*</span>
                    </label>

                    <input
                      id="booking-whatsapp"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="081234567890"
                      value={whatsapp}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^\d+()\s-]/g, "");
                        setWhatsapp(value);
                      }}
                      onBlur={() => {
                        if (whatsapp.trim()) {
                          setWhatsapp(normalizeWhatsApp(whatsapp));
                        }
                      }}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent-color)] placeholder:text-muted-foreground/50 text-foreground"
                      style={BODY}
                      required
                      aria-invalid={whatsapp.length > 0 && !isValidWhatsApp(whatsapp)}
                      pattern="(?:\+?62|0)?8[1-9][0-9]{7,10}"
                      title="Masukkan nomor WhatsApp Indonesia yang valid, misalnya 081234567890"
                    />

                    {whatsapp.length > 0 && !isValidWhatsApp(whatsapp) && (
                      <p className="text-xs text-red-600 dark:text-red-500">
                        Masukkan nomor WhatsApp yang valid, misalnya 081234567890.
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="booking-notes" className="text-xs font-medium text-foreground" style={BODY}>
                    Gambaran Singkat Kebutuhan / Pertanyaan Khusus <span className="text-xs text-muted-foreground">(Opsional)</span>
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    placeholder="Contoh: Kami berencana mengembangkan sistem manajemen inventori pergudangan berbasis web yang terintegrasi dengan mobile scanner..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent-color)] placeholder:text-muted-foreground/50 text-foreground resize-none"
                    style={BODY}
                  />
                </div>
              </div>

              {/* Feedback State jika telah dikirim */}
              {submitted && (
                <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)] shrink-0" />
                    <p className="text-xs text-foreground leading-relaxed font-medium" style={BODY}>
                      {submitMethod === "email"
                        ? "Permintaan jadwal konsultasi berhasil disiapkan via Email. Silakan periksa jendela email Anda dan kirimkan ke blankondigitaltech@gmail.com. Tim BlankOn akan segera mengonfirmasi ketersediaan slot Anda."
                        : "Permintaan jadwal berhasil dikirim via WhatsApp. Tim BlankOn akan segera mengonfirmasi ketersediaan slot Anda."}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] underline text-muted-foreground hover:text-foreground shrink-0 cursor-pointer self-end sm:self-auto"
                    style={MONO}
                  >
                    Ajukan Ulang / Edit
                  </button>
                </div>
              )}

              {emailError && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 flex items-center gap-2.5 text-xs text-red-600 dark:text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <p style={BODY}>{emailError}</p>
                </div>
              )}

              {/* Tombol Aksi */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-bold transition-all hover:opacity-90 active:scale-[0.99] cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
                  style={{
                    ...DISPLAY,
                    backgroundColor: "var(--accent-color)",
                    color: "black",
                  }}
                >
                  <FaWhatsapp className="h-5 w-5 text-white dark:text-black" />
                  <span className="text-white dark:text-black">
                    {submitted ? "Jadwal Telah Diajukan" : "Kunci Jadwal Pertemuan via WhatsApp"}
                  </span>
                  {!submitted && <ArrowRight className="h-4 w-4 text-white dark:text-black" />}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <p className="text-[11px] text-muted-foreground text-center sm:text-left flex items-center gap-1.5" style={BODY}>
                    <FileCheck className="h-3.5 w-3.5 text-black dark:text-white" />
                    Pesan tersusun secara otomatis dan aman langsung ke WhatsApp resmi BlankOn Digital Tech.
                  </p>

                  <button
                    type="button"
                    disabled={submitted}
                    onClick={handleEmailClick}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline"
                    style={BODY}
                  >
                    <Mail className="h-3.5 w-3.5 text-black dark:text-white" />
                    Kirim via Email Resmi
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* Dialog Pilihan Provider Email */}
      <Dialog open={isEmailModalOpen} onOpenChange={setIsEmailModalOpen}>
        <DialogContent className="max-w-lg p-6 sm:p-7 border border-border bg-card/95 backdrop-blur-md">
          <DialogHeader className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)]" style={MONO}>
              <Mail className="h-3.5 w-3.5" />
              Pengiriman Email Resmi
            </div>
            <DialogTitle className="text-xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              Pilih Layanan Email Anda
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
              Pengajuan janji temu akan diarahkan ke <span className="font-semibold text-foreground">blankondigitaltech@gmail.com</span> dengan format jadwal yang telah terisi rapi. Pilih penghandle email default yang biasa Anda gunakan:
            </DialogDescription>
          </DialogHeader>

          {/* Ringkasan Tujuan */}
          <div className="my-2 rounded-xl border border-border bg-background/70 p-3.5 text-xs space-y-1.5">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Penerima:</span>
              <span className="font-mono font-semibold text-foreground">blankondigitaltech@gmail.com</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Pengirim:</span>
              <span className="font-semibold text-foreground truncate max-w-[240px]">{fullName} ({email})</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Sesi Waktu:</span>
              <span className="font-semibold text-foreground">{selectedSlot}</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Format Temu:</span>
              <span className="font-semibold text-foreground truncate max-w-[240px]">
                {meetingType === "online"
                  ? "Daring (Google Meet)"
                  : `Tatap Muka (${effectiveOfflineLoc.name})`}
              </span>
            </div>
            {meetingType === "offline" && (
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Pin Maps:</span>
                <a
                  href={effectiveOfflineLoc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-color)] hover:underline truncate max-w-[240px] font-mono text-[11px]"
                >
                  Lihat Pin Lokasi
                </a>
              </div>
            )}
          </div>

          {/* Opsi Provider */}
          <div className="grid grid-cols-1 gap-2.5 pt-1">
            {/* Opsi 1: Gmail Web */}
            <button
              type="button"
              onClick={handleOpenGmail}
              className="group flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)]/5 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500 dark:text-red-400">
                  <FaGoogle className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-foreground" style={DISPLAY}>
                      Google Mail (Gmail Web)
                    </span>
                    <span className="rounded bg-[var(--accent-color)]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[var(--accent-color)]" style={MONO}>
                      Populer
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground" style={BODY}>
                    Buka tab baru compose di browser dengan format lengkap terisi
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[var(--accent-color)] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </button>

            {/* Opsi 2: Aplikasi Email Default */}
            <button
              type="button"
              onClick={handleOpenDefaultMail}
              className="group flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)]/5 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground block" style={DISPLAY}>
                    Aplikasi Email Default (Mailto)
                  </span>
                  <p className="text-[11px] text-muted-foreground" style={BODY}>
                    Membuka Outlook Desktop, Apple Mail, Thunderbird, atau Mail Bawaan
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[var(--accent-color)] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </button>

            {/* Opsi 3: Outlook / Office 365 Web */}
            <button
              type="button"
              onClick={handleOpenOutlook}
              className="group flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)]/5 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 dark:text-sky-400">
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground block" style={DISPLAY}>
                    Outlook / Hotmail Web
                  </span>
                  <p className="text-[11px] text-muted-foreground" style={BODY}>
                    Buka compose webmail di outlook.live.com atau Office 365
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[var(--accent-color)] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </button>

            {/* Opsi 4: Salin Format */}
            <button
              type="button"
              onClick={handleCopyDraft}
              className="flex items-center justify-between p-3 rounded-xl border border-dashed border-border bg-muted/30 hover:bg-muted/60 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground block" style={DISPLAY}>
                    {copied ? "Draf Email Berhasil Disalin!" : "Salin Draf & Alamat Email Tujuan"}
                  </span>
                  <p className="text-[10px] text-muted-foreground" style={BODY}>
                    Jika ingin menempelkan (paste) secara manual di provider email lain
                  </p>
                </div>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
