'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, CheckCircle, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling for navigation links
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Konsultasi Bisnis",
      description: "Solusi strategis untuk pengembangan usaha Anda dengan pendekatan yang terukur dan profesional.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Manajemen Proyek",
      description: "Koordinasi dan pengelolaan proyek yang efisien untuk mencapai tujuan bisnis Anda.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Pengembangan Usaha",
      description: "Membantu mengembangkan potensi usaha Anda dengan strategi yang inovatif dan terpercaya.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const advantages = [
    "Berpengalaman lebih dari 10 tahun",
    "Tim profesional dan terpercaya",
    "Solusi tepat sesuai kebutuhan",
    "Harga kompetitif dan transparan",
    "Layanan konsultasi 24/7",
    "Garansi kepuasan pelanggan"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="AMIRUDIN" className="h-10 w-auto" />
              <span className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent ${scrolled ? 'text-blue-600' : 'text-blue-600'}`}>
                AMIRUDIN
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                Hubungi Kami
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</button>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Solusi Terpercaya untuk
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
                    Kesuksesan Bisnis Anda
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="font-semibold text-blue-600">AMIRUDIN</span> - Partner profesional Anda dalam mengembangkan potensi usaha dengan solusi inovatif dan terpercaya.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-3">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Pelajari Lebih Lanjut
                </Button>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-8 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-blue-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    500+
                  </motion.div>
                  <div className="text-sm text-gray-600">Klien Puas</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-blue-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    10+
                  </motion.div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-blue-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    98%
                  </motion.div>
                  <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl"
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <Card className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Business Success" 
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mitra Bisnis Terpercaya</h3>
                  <p className="text-gray-600 mb-6">
                    Bergabunglah dengan ratusan klien yang telah mempercayakan kesuksesan bisnis mereka kepada kami.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                    Konsultasi Gratis
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AMIRUDIN</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah mitra bisnis profesional yang berkomitmen untuk membantu mengembangkan potensi usaha Anda dengan solusi inovatif dan terpercaya.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="About AMIRUDIN" 
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Visi & Misi Kami</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Visi</h4>
                  <p className="text-gray-600">
                    Menjadi mitra bisnis terdepan yang memberikan solusi inovatif dan terpercaya untuk kesuksesan klien.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Misi</h4>
                  <p className="text-gray-600">
                    Memberikan layanan konsultasi bisnis berkualitas tinggi dengan pendekatan yang personal dan solusi yang tepat sasaran.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Layanan Support</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">A+</div>
                  <div className="text-sm text-gray-600">Kualitas Layanan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai layanan profesional yang dirancang khusus untuk mendukung kesuksesan bisnis Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white h-full">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                      Pelajari Lebih Lanjut
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AMIRUDIN</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk kebutuhan bisnis Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                </motion.div>
                <span className="text-gray-700 font-medium">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Siap untuk memulai perjalanan kesuksesan bisnis Anda? Hubungi kami sekarang juga!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Alamat</div>
                      <div className="text-blue-100">
                        JL. KASANG PUDAK LR. H. SELAMET RT. 031, Desa/Kelurahan Kasang Pudak, Kec. Kumpeh Ulu, Kab. Muaro Jambi, Provinsi Jambi 36373
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Telepon</div>
                      <div className="text-blue-100">087855340727</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-100">info@amirudin.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Masukkan email Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pesan</label>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent h-32"
                      placeholder="Masukkan pesan Anda"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-3">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="AMIRUDIN" className="h-8 w-auto" />
                <span className="text-xl font-bold">AMIRUDIN</span>
              </div>
              <p className="text-gray-400">
                Mitra terpercaya untuk kesuksesan bisnis Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Konsultasi Bisnis</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Manajemen Proyek</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pengembangan Usaha</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>087855340727</li>
                <li>info@amirudin.com</li>
                <li>Jambi, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AMIRUDIN. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}