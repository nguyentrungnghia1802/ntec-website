export default function Gallery() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Thư viện ảnh</h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Những khoảnh khắc đáng nhớ của CLB Cờ vua NTEC
            </p>
          </div>
        </div>
      </section>

      {/* Tournament Albums */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Album giải đấu</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Giải THPT Thành phố 2024',
                date: 'Tháng 12, 2024',
                photos: 45,
                highlight: 'Giải Nhì đồng đội',
                icon: '🥈'
              },
              { 
                title: 'Giải nội bộ mùa Thu 2024',
                date: 'Tháng 10, 2024',
                photos: 32,
                highlight: 'Giải đấu sôi nổi',
                icon: '🏆'
              },
              { 
                title: 'Giải học sinh cấp Quốc gia',
                date: 'Tháng 8, 2024',
                photos: 28,
                highlight: 'Giải Ba cá nhân',
                icon: '🥉'
              },
              { 
                title: 'Giao lưu THPT A & B',
                date: 'Tháng 6, 2024',
                photos: 38,
                highlight: 'Thắng 12-8',
                icon: '🤝'
              },
              { 
                title: 'Giải nội bộ mùa Xuân 2024',
                date: 'Tháng 3, 2024',
                photos: 30,
                highlight: 'Kỳ thủ mới nổi',
                icon: '🌸'
              },
              { 
                title: 'Giải THPT khu vực 2023',
                date: 'Tháng 11, 2023',
                photos: 42,
                highlight: 'Giải Nhất đồng đội',
                icon: '🥇'
              },
            ].map((album, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-cyan-200 to-blue-300 flex items-center justify-center">
                  <div className="text-8xl">{album.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{album.title}</h3>
                  <p className="text-gray-600 mb-3">{album.date}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-600 font-semibold">{album.photos} ảnh</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full">
                      ⭐ {album.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Activities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Hoạt động thường ngày</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Buổi tập luyện', count: 120, icon: '♟️' },
              { title: 'Workshop', count: 24, icon: '📚' },
              { title: 'Giao lưu nội bộ', count: 36, icon: '🎯' },
              { title: 'Sự kiện đặc biệt', count: 18, icon: '🎉' },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-6xl">{category.icon}</div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{category.title}</h3>
                  <p className="text-cyan-600 font-semibold">{category.count}+ ảnh</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Albums */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Chuyến đi giao lưu</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Chuyến đi Đà Lạt 2024',
                date: 'Tháng 5, 2024',
                duration: '3 ngày 2 đêm',
                participants: 35,
                description: 'Giao lưu với CLB Cờ vua ĐH Đà Lạt',
                highlights: ['Thắng cảnh tuyệt đẹp', 'Giao lưu thân thiện', 'Team building'],
                icon: '🏔️'
              },
              {
                title: 'Chuyến đi Vũng Tàu 2024',
                date: 'Tháng 9, 2024',
                duration: '2 ngày 1 đêm',
                participants: 42,
                description: 'Picnic và giao lưu cùng CLB Cờ vua THPT Vũng Tàu',
                highlights: ['Bãi biển tuyệt vời', 'Giải đấu bãi biển', 'BBQ party'],
                icon: '🏖️'
              },
            ].map((trip, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="h-56 bg-gradient-to-br from-cyan-200 via-blue-300 to-purple-300 flex items-center justify-center">
                  <div className="text-9xl">{trip.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{trip.title}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-gray-600">
                    <p><strong>📅</strong> {trip.date}</p>
                    <p><strong>⏱️</strong> {trip.duration}</p>
                    <p className="col-span-2"><strong>👥</strong> {trip.participants} thành viên</p>
                  </div>
                  <p className="text-gray-700 mb-4">{trip.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900">Điểm nhấn:</p>
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.map((highlight, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Stats */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Tổng số ảnh</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">25</div>
              <div className="text-gray-300">Album</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">15</div>
              <div className="text-gray-300">Sự kiện lớn</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-gray-300">Năm hoạt động</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
