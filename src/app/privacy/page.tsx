import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Cookie } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="AMIRUDIN" className="h-8 w-auto" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  AMIRUDIN
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AMIRUDIN</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded-r-lg">
            <p className="text-sm text-blue-800">
              <strong>Terakhir Diperbarui:</strong> 1 Januari 2024
            </p>
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-8">
            {/* Data Collection */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengumpulan Data</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Kami mengumpulkan berbagai jenis informasi untuk menyediakan layanan terbaik kepada Anda:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat rumah/kantor</li>
                        <li><strong>Informasi Bisnis:</strong> Nama perusahaan, jabatan, industri, ukuran perusahaan</li>
                        <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, sistem operasi, data penggunaan website</li>
                        <li><strong>Informasi Komunikasi:</strong> Riwayat komunikasi, permintaan konsultasi, feedback</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Penggunaan Data</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Data yang kami kumpulkan digunakan untuk:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Menyediakan layanan konsultasi bisnis yang Anda minta</li>
                        <li>Mengkomunikasikan informasi tentang layanan kami</li>
                        <li>Memproses permintaan dan transaksi Anda</li>
                        <li>Mempersonalisasi pengalaman Anda di website kami</li>
                        <li>Meningkatkan kualitas layanan dan produk kami</li>
                        <li>Mengirimkan newsletter dan informasi promosi (dengan persetujuan Anda)</li>
                        <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Keamanan Data</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Kami melindungi data Anda dengan:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Enkripsi data selama transmisi dan penyimpanan</li>
                        <li>Akses terbatas ke data pribadi hanya untuk staf yang berwenang</li>
                        <li>Firewall dan sistem keamanan yang canggih</li>
                        <li>Backup data teratur dan aman</li>
                        <li>Audit keamanan berkala</li>
                        <li>Kepatuhan terhadap standar keamanan industri</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Sebagai pengguna, Anda memiliki hak untuk:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Mengakses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                        <li><strong>Mengoreksi:</strong> Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                        <li><strong>Menghapus:</strong> Meminta penghapusan data pribadi Anda</li>
                        <li><strong>Membatasi:</strong> Membatasi pemrosesan data pribadi Anda</li>
                        <li><strong>Menolak:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
                        <li><strong>Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookie</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Website kami menggunakan cookie untuk:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Mengingat preferensi dan pengaturan Anda</li>
                        <li>Menganalisis traffic dan penggunaan website</li>
                        <li>Mempersonalisasi konten dan iklan</li>
                        <li>Meningkatkan keamanan website</li>
                      </ul>
                      <p>
                        Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Party Services */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Pihak Ketiga</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Kami dapat berbagi data Anda dengan pihak ketiga terpercaya untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Penyedia layanan pembayaran</li>
                    <li>Layanan email marketing</li>
                    <li>Platform analitik web</li>
                    <li>Penyedia hosting dan infrastruktur</li>
                  </ul>
                  <p>
                    Semua pihak ketiga yang kami bekerja sama telah melalui proses due diligence yang ketat 
                    dan memiliki komitmen yang sama terhadap privasi data.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-slate-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                    menggunakan hak privasi Anda, silakan hubungi kami:
                  </p>
                  <div className="bg-white p-6 rounded-xl space-y-3">
                    <p><strong>Email:</strong> privacy@amirudin.com</p>
                    <p><strong>Telepon:</strong> 087855340727</p>
                    <p><strong>Alamat:</strong> JL. KASANG PUDAK LR. H. SELAMET RT. 031, Desa/Kelurahan Kasang Pudak, Kec. Kumpeh Ulu, Kab. Muaro Jambi, Provinsi Jambi 36373</p>
                  </div>
                  <p>
                    Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>
              Dengan menggunakan layanan <span className="font-semibold text-blue-600">AMIRUDIN</span>, 
              Anda menyetujui pengumpulan dan penggunaan data sesuai dengan kebijakan privasi ini.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}