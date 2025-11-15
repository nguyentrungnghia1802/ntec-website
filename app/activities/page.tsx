export default function Activities() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hoạt động & Sự kiện</h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Tham gia các hoạt động đa dạng và phong phú của CLB
            </p>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lịch tập luyện</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { 
                day: 'Thứ 2', 
                time: '15:00 - 17:00', 
                activity: 'Tập luyện tự do', 
                description: 'Thành viên tự do đấu với nhau, rèn luyện kỹ năng',
                level: 'Tất cả trình độ',
                icon: '♟️'
              },
              { 
                day: 'Thứ 4', 
                time: '15:00 - 17:00', 
                activity: 'Buổi học chiến thuật', 
                description: 'Học các chiến thuật cơ bản và nâng cao',
                level: 'Trung cấp',
                icon: '📚'
              },
              { 
                day: 'Thứ 6', 
                time: '15:00 - 17:00', 
                activity: 'Giao lưu nội bộ', 
                description: 'Thi đấu giao hữu giữa các thành viên',
                level: 'Tất cả trình độ',
                icon: '🎯'
              },
              { 
                day: 'Thứ 7', 
                time: '09:00 - 12:00', 
                activity: 'Luyện tập nâng cao', 
                description: 'Phân tích ván cờ, học khai cuộc và tàn cuộc',
                level: 'Nâng cao',
                icon: '⚡'
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-slate-900">{item.day}</h3>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full">
                        {item.time}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                        {item.level}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-cyan-600 mb-2">{item.activity}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Workshop & Buổi học</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Khai cuộc cơ bản',
                date: '20/11/2025',
                time: '15:00 - 17:00',
                description: 'Học các khai cuộc phổ biến: Italian, Spanish, French Defense',
                instructor: 'Thầy Nguyễn Văn A',
                level: 'Cơ bản',
                icon: '🎓'
              },
              {
                title: 'Chiến thuật nâng cao',
                date: '25/11/2025',
                time: '15:00 - 17:00',
                description: 'Các chiến thuật: Fork, Pin, Skewer, Discovery Attack',
                instructor: 'Thầy Trần Văn B',
                level: 'Nâng cao',
                icon: '⚔️'
              },
              {
                title: 'Tàn cuộc cơ bản',
                date: '27/11/2025',
                time: '15:00 - 17:00',
                description: 'Kỹ thuật chiếu hết trong các tàn cuộc phổ biến',
                instructor: 'Thầy Lê Văn C',
                level: 'Trung cấp',
                icon: '🏁'
              },
              {
                title: 'Phân tích ván đấu kinh điển',
                date: '30/11/2025',
                time: '15:00 - 17:00',
                description: 'Phân tích các ván đấu của các Grandmaster nổi tiếng',
                instructor: 'Thầy Phạm Văn D',
                level: 'Tất cả',
                icon: '📊'
              },
            ].map((workshop, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{workshop.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                        {workshop.level}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        Sắp diễn ra
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{workshop.title}</h3>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p className="flex items-center gap-2">
                    <span className="text-cyan-600">📅</span>
                    {workshop.date} - {workshop.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-cyan-600">👨‍🏫</span>
                    {workshop.instructor}
                  </p>
                </div>
                <p className="text-gray-700">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Giải đấu & Giao lưu</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'Giải đấu nội bộ tháng 11',
                date: '15-18/11/2025',
                type: 'Nội bộ',
                format: 'Swiss System - 7 vòng',
                prize: 'Cúp + Giấy chứng nhận + Quà tặng',
                participants: '32 thành viên',
                status: 'Đang diễn ra',
                icon: '🏆'
              },
              {
                title: 'Giao lưu với CLB Cờ vua THPT A',
                date: '25/11/2025',
                type: 'Giao lưu',
                format: 'Đối kháng đồng đội',
                prize: 'Giao lưu học hỏi',
                participants: '20 vs 20',
                status: 'Sắp diễn ra',
                icon: '🤝'
              },
              {
                title: 'Giải cờ vua THPT Thành phố',
                date: '05-08/12/2025',
                type: 'Chính thức',
                format: 'Vòng loại + Playoff',
                prize: 'Huy chương + Tiền thưởng',
                participants: '100+ kỳ thủ',
                status: 'Đăng ký',
                icon: '🥇'
              },
            ].map((tournament, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{tournament.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{tournament.title}</h3>
                      <span className={`px-4 py-1 text-sm font-semibold rounded-full ${
                        tournament.status === 'Đang diễn ra' 
                          ? 'bg-red-100 text-red-700' 
                          : tournament.status === 'Sắp diễn ra'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {tournament.status}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                      <div>
                        <p className="mb-2"><strong>📅 Thời gian:</strong> {tournament.date}</p>
                        <p className="mb-2"><strong>🎯 Loại:</strong> {tournament.type}</p>
                        <p><strong>📋 Thể thức:</strong> {tournament.format}</p>
                      </div>
                      <div>
                        <p className="mb-2"><strong>🎁 Giải thưởng:</strong> {tournament.prize}</p>
                        <p><strong>👥 Quy mô:</strong> {tournament.participants}</p>
                      </div>
                    </div>
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
