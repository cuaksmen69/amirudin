import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Users, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
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
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AMIRUDIN</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Syarat dan ketentuan ini mengatur penggunaan layanan yang disediakan oleh AMIRUDIN. 
              Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini.
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded-r-lg">
            <p className="text-sm text-blue-800">
              <strong>Terakhir Diperbarui:</strong> 1 Januari 2024
            </p>
          </div>

          {/* Terms and Conditions Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Penerimaan Syarat</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Dengan mengakses dan menggunakan layanan <span className="font-semibold text-blue-600">AMIRUDIN</span>, Anda:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Menyatakan bahwa Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                        <li>Setuju untuk terikat oleh syarat dan ketentuan ini serta semua perubahannya</li>
                        <li>Menyatakan bahwa Anda memiliki kapasitas hukum untuk membuat perjanjian ini</li>
                        <li>Menyatakan bahwa Anda berusia minimal 18 tahun atau telah mendapatkan persetujuan orang tua/wali</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        <span className="font-semibold">AMIRUDIN</span> menyediakan layanan konsultasi bisnis meliputi:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Konsultasi bisnis dan strategi perusahaan</li>
                        <li>Manajemen proyek dan koordinasi tim</li>
                        <li>Pengembangan usaha dan ekspansi pasar</li>
                        <li>Analisis pasar dan riset kompetitif</li>
                        <li>Pelatihan dan pengembangan sumber daya manusia</li>
                        <li>Layanan pendukung bisnis lainnya</li>
                      </ul>
                      <p>
                        Kami berhak mengubah, menangguhkan, atau menghentikan layanan kapan saja dengan pemberitahuan sebelumnya.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Kewajiban Pengguna</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Sebagai pengguna layanan kami, Anda setuju untuk:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Memberikan informasi yang akurat, lengkap, dan terkini</li>
                        <li>Menjaga kerahasiaan informasi akun dan kredensial Anda</li>
                        <li>Menggunakan layanan hanya untuk tujuan yang sah dan legal</li>
                        <li>Tidak melanggar hak kekayaan intelektual pihak ketiga</li>
                        <li>Tidak melakukan aktivitas yang merugikan atau ilegal</li>
                        <li>Mematuhi semua peraturan dan hukum yang berlaku</li>
                        <li>Tidak mengganggu atau mencoba merusak sistem kami</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Syarat Pembayaran</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-blue-900 mb-4">Ketentuan Pembayaran:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Harga Layanan:</strong> Harga yang tercantum adalah harga yang berlaku dan dapat berubah sewaktu-waktu</li>
                      <li><strong>Metode Pembayaran:</strong> Pembayaran dapat dilakukan melalui transfer bank, kartu kredit, atau metode lain yang disetujui</li>
                      <li><strong>Jadwal Pembayaran:</strong> Pembayaran harus dilakukan sesuai dengan kesepakatan yang ditetapkan</li>
                      <li><strong>Pembayaran Terlambat:</strong> Dikenakan denda sebesar 2% per bulan dari total tagihan</li>
                      <li><strong>Pembatalan:</strong> Pembatalan layanan harus dilakukan minimal 7 hari sebelum tanggal dimulainya layanan</li>
                      <li><strong>Pengembalian Dana:</strong> Pengembalian dana akan diproses sesuai dengan kebijakan pengembalian dana kami</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hak Kekayaan Intelektual</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Semua hak kekayaan intelektual terkait dengan layanan <span className="font-semibold text-blue-600">AMIRUDIN</span> adalah milik kami atau pemberi lisensi kami.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Anda tidak boleh menyalin, mendistribusikan, atau memodifikasi materi kami tanpa izin tertulis</li>
                    <li>Nama, logo, dan merek dagang AMIRUDIN adalah milik eksklusif kami</li>
                    <li>Konten yang disediakan dalam layanan dilindungi oleh hak cipta dan hukum kekayaan intelektual lainnya</li>
                    <li>Anda mendapatkan lisensi terbatas untuk menggunakan layanan sesuai dengan syarat ini</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kerahasiaan</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Kami berkomitmen untuk menjaga kerahasiaan informasi Anda:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Informasi pribadi dan bisnis Anda akan kami rahasiakan</li>
                    <li>Kami tidak akan membagikan informasi Anda kepada pihak ketiga tanpa persetujuan Anda</li>
                    <li>Karyawan kami terikat oleh perjanjian kerahasiaan</li>
                    <li>Kami menerapkan keamanan yang memadai untuk melindungi data Anda</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Batasan Tanggung Jawab</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg">
                    <p className="text-amber-800">
                      <strong>Penting:</strong> Layanan kami disediakan "sebagaimana adanya" tanpa jaminan apa pun.
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial</li>
                    <li>Tanggung jawab maksimal kami terbatas pada jumlah yang telah Anda bayarkan untuk layanan</li>
                    <li>Kami tidak menjamin hasil spesifik dari layanan konsultasi kami</li>
                    <li>Kami tidak bertanggung jawab atas keputusan bisnis yang Anda buat berdasarkan saran kami</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengakhiran Layanan</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Kami atau Anda dapat mengakhiri layanan dengan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Pemberitahuan 30 hari:</strong> Untuk pengakhiran reguler</li>
                    <li><strong>Pelanggaran Syarat:</strong> Pengakhiran segera jika Anda melanggar syarat dan ketentuan</li>
                    <li><strong>Alasan Bisnis:</strong> Kami berhak menghentikan layanan kapan saja dengan pemberitahuan</li>
                  </ul>
                  <p>
                    Setelah pengakhiran, Anda harus membayar semua biaya yang belum dibayar dan kami akan menghapus data Anda sesuai dengan kebijakan privasi kami.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Jika terjadi sengketa terkait layanan kami:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Upaya mediasi akan dilakukan terlebih dahulu</li>
                        <li>Sengketa akan diselesaikan melalui perundingan baik</li>
                        <li>Jika mediasi gagal, sengketa akan diselesaikan melalui arbitrase</li>
                        <li>Arbitrase akan dilakukan sesuai dengan hukum yang berlaku di Indonesia</li>
                        <li>Keputusan arbitrase bersifat final dan mengikat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-slate-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                  </p>
                  <div className="bg-white p-6 rounded-xl space-y-3">
                    <p><strong>Email:</strong> legal@amirudin.com</p>
                    <p><strong>Telepon:</strong> 087855340727</p>
                    <p><strong>Alamat:</strong> JL. KASANG PUDAK LR. H. SELAMET RT. 031, Desa/Kelurahan Kasang Pudak, Kec. Kumpeh Ulu, Kab. Muaro Jambi, Provinsi Jambi 36373</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>
              Syarat dan ketentuan ini merupakan perjanjian yang mengikat antara Anda dan <span className="font-semibold text-blue-600">AMIRUDIN</span>. 
              Dengan menggunakan layanan kami, Anda mengakui telah membaca, memahami, dan menyetujui syarat dan ketentuan ini.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}