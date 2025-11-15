export default function Members() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Thành viên</h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Gặp gỡ những thành viên tài năng và đam mê của CLB
            </p>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Huấn luyện viên</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Thầy Nguyễn Minh Tuấn',
                title: 'Huấn luyện viên trưởng',
                elo: '2200',
                achievement: 'Master FIDE, 15 năm kinh nghiệm huấn luyện',
                description: 'Chuyên về chiến thuật và khai cuộc',
                icon: '👨‍🏫'
              },
              {
                name: 'Thầy Trần Hoàng Anh',
                title: 'Huấn luyện viên phụ trách',
                elo: '2100',
                achievement: 'Candidate Master, HCV Giải ĐBSCL 2020',
                description: 'Chuyên về tàn cuộc và phân tích',
                icon: '👨‍🎓'
              },
            ].map((coach, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-center">
                  <div className="text-6xl mb-4">{coach.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{coach.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-3">{coach.title}</p>
                  <div className="inline-block px-4 py-2 bg-white rounded-full mb-4">
                    <span className="text-sm font-semibold text-gray-600">Elo Rating: </span>
                    <span className="text-lg font-bold text-cyan-600">{coach.elo}</span>
                  </div>
                  <p className="text-gray-700 mb-2 font-semibold">{coach.achievement}</p>
                  <p className="text-gray-600">{coach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Members */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Thành viên cốt lõi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Nguyễn Văn A', class: '12A1', elo: '1800', role: 'Chủ tịch', icon: '👑' },
              { name: 'Trần Thị B', class: '11A2', elo: '1750', role: 'Phó chủ tịch', icon: '⚡' },
              { name: 'Lê Văn C', class: '11A3', elo: '1700', role: 'Trưởng ban tổ chức', icon: '🎯' },
              { name: 'Phạm Thị D', class: '12A2', elo: '1680', role: 'Thành viên', icon: '♟️' },
              { name: 'Hoàng Văn E', class: '10A1', elo: '1650', role: 'Thành viên', icon: '♟️' },
              { name: 'Đỗ Thị F', class: '11A1', elo: '1620', role: 'Thành viên', icon: '♟️' },
              { name: 'Bùi Văn G', class: '12A3', elo: '1600', role: 'Thành viên', icon: '♟️' },
              { name: 'Vũ Thị H', class: '10A2', elo: '1580', role: 'Thành viên', icon: '♟️' },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-5xl mb-3">{member.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{member.class}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full">
                      Elo: {member.elo}
                    </span>
                  </div>
                  {member.role !== 'Thành viên' && (
                    <p className="text-sm text-blue-600 font-semibold">{member.role}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Thống kê thành viên</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-3">👥</div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">52</div>
              <p className="text-gray-700 font-semibold">Tổng thành viên</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-3">🏆</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
              <p className="text-gray-700 font-semibold">Thành viên trên 1700 Elo</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-3">📚</div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">25</div>
              <p className="text-gray-700 font-semibold">Thành viên mới năm 2025</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-3">⭐</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <p className="text-gray-700 font-semibold">Thành viên xuất sắc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Photos */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Hoạt động thành viên</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Buổi tập luyện hàng tuần', description: 'Thành viên tích cực tham gia luyện tập', icon: '📸' },
              { title: 'Giải đấu nội bộ', description: 'Các trận đấu căng thẳng và hấp dẫn', icon: '🎮' },
              { title: 'Workshop huấn luyện', description: 'Học hỏi kiến thức và kỹ năng mới', icon: '🎓' },
              { title: 'Giao lưu với CLB khác', description: 'Mở rộng mạng lưới và học hỏi', icon: '🤝' },
              { title: 'Hoạt động ngoại khóa', description: 'Team building và picnic cuối tuần', icon: '🎉' },
              { title: 'Trao giải thưởng', description: 'Vinh danh thành viên xuất sắc', icon: '🏅' },
            ].map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-6xl mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
