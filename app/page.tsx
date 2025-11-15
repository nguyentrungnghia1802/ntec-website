import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Carousel */}
      <HeroBanner />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Về chúng tôi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mục tiêu</h3>
              <p className="text-gray-700">
                Phát triển tư duy logic, khả năng phân tích và tính kiên nhẫn thông qua môn cờ vua.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cộng đồng</h3>
              <p className="text-gray-700">
                Xây dựng môi trường học tập và giao lưu thân thiện cho các bạn yêu thích cờ vua.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Thành tích</h3>
              <p className="text-gray-700">
                Tham gia các giải đấu cấp trường, thành phố và quốc gia để nâng cao trình độ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Thông báo mới nhất</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📢</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">Mới</span>
                    <span className="text-gray-500 text-sm">15/11/2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Giải đấu nội bộ tháng 11</h3>
                  <p className="text-gray-600 mb-4">
                    Đăng ký tham gia giải đấu cờ vua nội bộ dành cho tất cả thành viên CLB. 
                    Giải thưởng hấp dẫn và cơ hội giao lưu.
                  </p>
                  <Link href="/activities" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                    Chi tiết →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">Sắp tới</span>
                    <span className="text-gray-500 text-sm">20/11/2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Workshop chiến thuật nâng cao</h3>
                  <p className="text-gray-600 mb-4">
                    Buổi học chuyên sâu về các chiến thuật và kỹ thuật cờ vua nâng cao. 
                    Dành cho các thành viên từ trung cấp trở lên.
                  </p>
                  <Link href="/activities" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                    Chi tiết →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lịch hoạt động tuần</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <div className="space-y-4">
              {[
                { day: 'Thứ 2', time: '15:00 - 17:00', activity: 'Tập luyện tự do', icon: '♟️' },
                { day: 'Thứ 4', time: '15:00 - 17:00', activity: 'Buổi học chiến thuật', icon: '📚' },
                { day: 'Thứ 6', time: '15:00 - 17:00', activity: 'Giao lưu nội bộ', icon: '🎯' },
                { day: 'Thứ 7', time: '09:00 - 12:00', activity: 'Luyện tập nâng cao', icon: '⚡' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="font-bold text-slate-900">{item.day}</div>
                    <div className="text-cyan-600 font-semibold">{item.time}</div>
                    <div className="text-gray-700">{item.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Thành viên</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Buổi tập luyện</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">Giải đấu</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-gray-300">Năm hoạt động</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Sẵn sàng tham gia?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Hãy trở thành một phần của cộng đồng cờ vua NTEC ngay hôm nay!
          </p>
          <Link
            href="/join"
            className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Đăng ký ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
