import React, { useState } from 'react';
import { Wallet, Book, Store, GraduationCap, TrendingUp, Send, History, Settings, Award, Users } from 'lucide-react';

const GloriaDiscordBot = () => {
  const [activeTab, setActiveTab] = useState('wallet');
  const [balance, setBalance] = useState({
    RDX: 15000,
    RPX: 250,
    IDX: 5000,
    FDX: 20000,
    BGC: 100
  });

  const TabButton = ({ icon: Icon, label, tab }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
        activeTab === tab
          ? 'bg-cyan-500 text-white shadow-lg'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const CoinCard = ({ coin, amount, description }) => (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-cyan-400 font-bold text-lg">{coin}</span>
        <span className="text-white font-bold text-xl">{amount.toLocaleString()}</span>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );

  const CommandCard = ({ command, description, example }) => (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-3">
      <div className="flex items-center gap-2 mb-2">
        <code className="bg-gray-900 text-cyan-400 px-3 py-1 rounded font-mono text-sm">
          {command}
        </code>
      </div>
      <p className="text-gray-300 text-sm mb-2">{description}</p>
      <p className="text-gray-500 text-xs italic">Contoh: {example}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-xl shadow-2xl">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl">✈️</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">BOTTIE CERDAS GEN Z</h1>
              <p className="text-cyan-100">Gloria Bank Discord Bot • Letda Sukrowatie AI</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur p-3 rounded-lg mt-4">
            <p className="text-white text-sm">
              🕌 Shariah-Compliant • 🚫 Anti-Riba • ✈️ F-16 Afterburner • 🇮🇩 Proklamasi 2045
            </p>
          </div>
        </div>
      </div>

     {/* Navigation */}
      <div className="max-w-6xl mx-auto mb-6 grid grid-cols-2 md:grid-cols-5 gap-3">
        <TabButton icon={Wallet} label="Wallet" tab="wallet" />
        <TabButton icon={Book} label="Edukasi" tab="education" />
        <TabButton icon={Store} label="UMKM" tab="umkm" />
        <TabButton icon={GraduationCap} label="School" tab="school" />
        <TabButton icon={Settings} label="Commands" tab="commands" />
      </div>
       

      {/* Content Area */}
      <div className="max-w-6xl mx-auto">
        {activeTab === 'wallet' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Wallet className="text-cyan-400" />
                5-Coin Wallet Gloria Bank
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <CoinCard 
                  coin="RDX" 
                  amount={balance.RDX}
                  description="Receh Digital - Kembalian warung & micro-transactions"
                />
                <CoinCard 
                  coin="RPX" 
                  amount={balance.RPX}
                  description="Reputation Points - Loyalty & performance rewards"
                />
                <CoinCard 
                  coin="IDX" 
                  amount={balance.IDX}
                  description="Identity Credit - Paylater tanpa riba"
                />
                <CoinCard 
                  coin="FDX" 
                  amount={balance.FDX}
                  description="Funny Dollars - Stable currency (USDC pegged)"
                />
                <CoinCard 
                  coin="BGC" 
                  amount={balance.BGC}
                  description="Base Gloria Coin - Governance & voting rights"
                />
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Send className="text-cyan-400" />
                Quick Actions
              </h3>
              <div className="grid md:grid-cols-3 gap-3">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-lg font-medium transition-all">
                  Transfer Coins
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all">
                  Swap Coins
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg font-medium transition-all">
                  View History
                </button>
              </div>
            </div>

           <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 p-4 rounded-lg">
               <a href="https://www.tmfx.my.id/" className="text-cyan-400 hover:underline" target="_blank" title="BANKER"><p className="text-orange-200 text-sm">
                💡 <strong>QRIS Integration:</strong> Scan QR code warung → Dapat kembalian dalam RDX!
                <br/>Rp 20,490 transfer (Code: 490) - Otomatis convert ke Gloria Coins!
              </p></a>
            </div>
          </div>  
        )}

        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Book className="text-cyan-400" />
                Modul Edukasi Gen Z
              </h2>
              
              <div className="space-y-4">
                <div className="bg-green-900/30 border border-green-500 p-4 rounded-lg">
                  <h3 className="text-green-400 font-bold mb-2">✅ Ekonomi Syariah 101</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Kenapa riba haram? Apa bedanya dengan profit-sharing? Gloria Bank menggunakan prinsip mudharabah & musyarakah.
                  </p>
                  <button className="text-cyan-400 text-sm hover:underline">
                    <a href="https://pump.fun/profile/ozx_craft" className="text-cyan-400 hover:underline" target="_blank" title="BANKER">!belajar riba</a>
                  </button>
                </div>

                <div className="bg-blue-900/30 border border-blue-500 p-4 rounded-lg">
                  <h3 className="text-blue-400 font-bold mb-2">💰 Personal Currency Vision</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    "Setiap orang idealnya memiliki mata uang-nya masing-masing" - Cita-cita Satoshi Nakamoto yang tidak pernah dipublikasikan.
                  </p>
                  <button className="text-cyan-400 text-sm hover:underline">
                    !belajar currency
                  </button>
                </div>

                <div className="bg-purple-900/30 border border-purple-500 p-4 rounded-lg">
                  <h3 className="text-purple-400 font-bold mb-2">🚫 Anti-Celengan Babi Ngepet</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Receh di celengan = asset MATI! Pindahin ke Gloria Wallet → Produktif & berkembang!
                  </p>
                  <button className="text-cyan-400 text-sm hover:underline">
                    !celengan_check
                  </button>
                </div>

                <div className="bg-red-900/30 border border-red-500 p-4 rounded-lg">
                  <h3 className="text-red-400 font-bold mb-2">⚡ SMUO - Sistem Mesin Uang Otomatis</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Mimpi: Hidup tanpa kerja untuk bertahan hidup. Fokus ke keluarga, talenta & hobi. Passive income untuk semua!
                  </p>
                  <button className="text-cyan-400 text-sm hover:underline">
                    !smuo simulate
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'umkm' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Store className="text-cyan-400" />
                UMKM Business Tools
              </h2>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 p-6 rounded-lg mb-6">
                <h3 className="text-green-400 font-bold text-xl mb-2">💳 myBlogger Payments Integration</h3>
                <p className="text-gray-300 mb-4">
                  Terima pembayaran dari customer via QRIS/OVO/DANA → Otomatis masuk Gloria Wallet!
                </p>
                <div className="bg-black/30 p-3 rounded">
                  <code className="text-cyan-400 text-sm">
                    !warung register "Warung Pak Budi"<br/>
                    !qris generate 15000<br/>
                    Customer scan → Dapat RDX kembalian!
                  </code>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">📊 Business Dashboard</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>✅ Track sales real-time</li>
                    <li>✅ Customer loyalty (RPX rewards)</li>
                    <li>✅ Inventory management</li>
                    <li>✅ Financial reports</li>
                  </ul>
                  <button className="mt-3 text-cyan-400 text-sm hover:underline">
                    !umkm dashboard
                  </button>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">🤝 Micro-Lending (No Riba!)</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>✅ Pinjam modal usaha (IDX)</li>
                    <li>✅ Profit-sharing, bukan bunga</li>
                    <li>✅ Community funding</li>
                    <li>✅ Reputation-based approval</li>
                  </ul>
                  <button className="mt-3 text-cyan-400 text-sm hover:underline">
                    !pinjam 50000 IDX
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'school' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="text-cyan-400" />
                School Payment System
              </h2>

              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/50 p-6 rounded-lg mb-6">
                <h3 className="text-blue-400 font-bold text-xl mb-2">🏫 Pembayaran SPP Tanpa Riba</h3>
                <p className="text-gray-300 mb-4">
                  Sekolah terima pembayaran via myBlogger Payments → Orang tua bayar pakai Gloria Coins atau QRIS!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">💳 SPP Payment</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Bayar SPP bulanan dengan FDX (stable) atau RDX
                  </p>
                  <button className="text-cyan-400 text-sm hover:underline">
                    !spp bayar 500000
                  </button>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">📚 Beasiswa Digital</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Siswa berprestasi dapat BGC token untuk voting & rewards
                  </p>
                  <button className="text-cyan-400 text-sm hover:underline">
                    !beasiswa apply
                  </button>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">🎓 Achievement RPX</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Earn RPX dari nilai bagus, kehadiran, lomba
                  </p>
                  <button className="text-cyan-400 text-sm hover:underline">
                    !rpx balance
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commands' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="text-cyan-400" />
                Bot Commands Reference
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-cyan-400 font-bold mb-3">💰 Wallet Commands</h3>
                  <CommandCard 
                    command="!balance"
                    description="Cek saldo semua 5 coins di wallet kamu"
                    example="!balance"
                  />
                  <CommandCard 
                    command="!transfer @user [amount] [coin]"
                    description="Transfer coin ke user lain"
                    example="!transfer @titis 5000 RDX"
                  />
                  <CommandCard 
                    command="!swap [from] [to] [amount]"
                    description="Tukar antar Gloria Coins"
                    example="!swap RDX FDX 10000"
                  />
                </div>

                <div>
                  <h3 className="text-cyan-400 font-bold mb-3">🏪 UMKM Commands</h3>
                  <CommandCard 
                    command="!warung register [nama]"
                    description="Daftarkan usaha UMKM kamu"
                    example="!warung register Warung Pak Budi"
                  />
                  <CommandCard 
                    command="!qris generate [amount]"
                    description="Generate QRIS untuk terima pembayaran"
                    example="!qris generate 15000"
                  />
                  <CommandCard 
                    command="!pinjam [amount] IDX"
                    description="Pinjam modal tanpa riba (reputation-based)"
                    example="!pinjam 50000 IDX"
                  />
                </div>

                <div>
                  <h3 className="text-cyan-400 font-bold mb-3">📚 Education Commands</h3>
                  <CommandCard 
                    command="!belajar [topic]"
                    description="Belajar tentang ekonomi syariah, crypto, Gloria Bank"
                    example="!belajar riba"
                  />
                  <CommandCard 
                    command="!celengan_check"
                    description="Hitung dampak asset mati di celengan babi"
                    example="!celengan_check"
                  />
                  <CommandCard 
                    command="!smuo simulate"
                    description="Simulasi Sistem Mesin Uang Otomatis"
                    example="!smuo simulate"
                  />
                </div>

                <div>
                  <h3 className="text-cyan-400 font-bold mb-3">🎓 School Commands</h3>
                  <CommandCard 
                    command="!spp bayar [amount]"
                    description="Bayar SPP sekolah dengan Gloria Coins"
                    example="!spp bayar 500000"
                  />
                  <CommandCard 
                    command="!beasiswa apply"
                    description="Daftar beasiswa digital berbasis prestasi"
                    example="!beasiswa apply"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 p-6 rounded-lg">
              <h3 className="text-purple-400 font-bold text-xl mb-2">🎮 Coming Soon: Gamification!</h3>
              <ul className="text-gray-300 space-y-2">
                <li>🏆 <strong>!rain [amount]</strong> - Airdrop FDX ke semua member aktif</li>
                <li>🎲 <strong>!spin</strong> - Daily spin untuk random coin rewards</li>
                <li>⚔️ <strong>!duel @user</strong> - Trading duel competition</li>
                <li>📈 <strong>!leaderboard</strong> - Top RPX earners of the month</li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 text-center">
          <p className="text-cyan-400 font-bold mb-2">
            ✈️ LETDA SUKROWATIE - F-16 THUNDERBIRD ⚡
          </p>
          <p className="text-gray-400 text-sm mb-2">
            Jean Claude Van Damme Bottie • Bottie Cerdas for Next Generation Gen Z
          </p>
          <p className="text-gray-500 text-xs">
            🕌 Gloria Bank • 🚫 Anti-Riba • 🇮🇩 Proklamasi 2045 • ✨ AIKON! Spirit Lives On
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a href="https://www.facebook.com/Claudia.Bottie" className="text-cyan-400 hover:underline" target="_blank" title="BOTTIE">Facebook: Jean Claude Van Damme Bottie</a>
            <a href="https://github.com/ozxstudio/bottie" className="text-cyan-400 hover:underline" target="_blank" title="GITHUB">GitHub: ozxstudio/botty</a>
            <a href="https://www.gloriabank.biz.id/" className="text-cyan-400 hover:underline" target="_blank" title="BANKER">Web: gloriabank.biz.id</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GloriaDiscordBot;
    