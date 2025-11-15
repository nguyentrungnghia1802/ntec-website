export default function About() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Giới thiệu</h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Tìm hiểu về câu lạc bộ cờ vua NTEC - Nơi nuôi dưỡng tài năng và đam mê
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lịch sử thành lập</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Câu lạc bộ Cờ vua NTEC được thành lập vào năm 2022 với mục tiêu tạo ra một 
                môi trường học tập và giao lưu bổ ích cho các học sinh yêu thích cờ vua tại 
                trường THPT.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Từ những ngày đầu với chỉ 15 thành viên, CLB đã không ngừng phát triển và hiện 
                có hơn 50 thành viên tích cực. Chúng tôi tự hào là nơi tập hợp những học sinh 
                đam mê cờ vua, từ người mới bắt đầu đến những kỳ thủ có trình độ.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Qua 3 năm hoạt động, NTEC Chess Club đã tổ chức hơn 15 giải đấu nội bộ và 
                tham gia nhiều giải đấu cấp thành phố, đạt được những thành tích đáng tự hào.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mục tiêu & Định hướng</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Sứ mệnh</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">▸</span>
                  Phát triển tư duy logic và khả năng tư duy chiến lược
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">▸</span>
                  Tạo môi trường học tập lành mạnh và thân thiện
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">▸</span>
                  Nâng cao trình độ cờ vua cho thành viên
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">▸</span>
                  Xây dựng tinh thần fair-play và kỷ luật
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tầm nhìn</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">▸</span>
                  Trở thành CLB cờ vua hàng đầu tại khu vực
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">▸</span>
                  Đào tạo các kỳ thủ tài năng cho các giải quốc gia
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">▸</span>
                  Mở rộng mạng lưới giao lưu với các CLB khác
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">▸</span>
                  Phổ biến văn hóa cờ vua trong nhà trường
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ban quản lý</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Nguyễn Văn A',
                role: 'Chủ tịch CLB',
                description: 'Học sinh lớp 12A1, Elo: 1800',
                icon: '👑'
              },
              {
                name: 'Trần Thị B',
                role: 'Phó chủ tịch',
                description: 'Học sinh lớp 11A2, Elo: 1750',
                icon: '⚡'
              },
              {
                name: 'Lê Văn C',
                role: 'Trưởng ban tổ chức',
                description: 'Học sinh lớp 11A3, Elo: 1700',
                icon: '🎯'
              },
            ].map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-5xl mb-4">{member.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Thành tựu nổi bật</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { year: '2023', title: 'Giải Nhất Giải cờ vua THPT Thành phố', icon: '🥇' },
              { year: '2023', title: 'Giải Ba Giải cờ vua học sinh cấp Quốc gia', icon: '🥉' },
              { year: '2024', title: 'CLB xuất sắc cấp trường', icon: '⭐' },
              { year: '2024', title: 'Giải Nhì Giải cờ vua THPT khu vực', icon: '🥈' },
              { year: '2024', title: 'Tổ chức thành công 5 giải đấu nội bộ', icon: '🎯' },
              { year: '2025', title: 'Mở rộng thành viên lên 50+', icon: '👥' },
            ].map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="text-cyan-600 font-bold mb-1">{achievement.year}</div>
                    <p className="text-gray-800 font-semibold">{achievement.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
