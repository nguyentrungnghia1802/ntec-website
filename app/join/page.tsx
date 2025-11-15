'use client';

import { useState } from 'react';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    experience: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In phase 1, just show alert. In phase 2, this will send to backend
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      class: '',
      experience: '',
      reason: '',
    });
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tham gia CLB</h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Hãy trở thành một phần của cộng đồng cờ vua NTEC ngay hôm nay!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Quyền lợi thành viên</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Học miễn phí', description: 'Tham gia các buổi học và workshop không mất phí' },
              { icon: '🏆', title: 'Thi đấu', description: 'Cơ hội tham gia các giải đấu nội bộ và chính thức' },
              { icon: '👥', title: 'Cộng đồng', description: 'Kết nối với những người có chung đam mê' },
              { icon: '📚', title: 'Tài liệu', description: 'Truy cập thư viện tài liệu và video học tập' },
              { icon: '🎯', title: 'Huấn luyện', description: 'Được huấn luyện bởi các HLV có kinh nghiệm' },
              { icon: '⭐', title: 'Chứng nhận', description: 'Nhận chứng nhận thành viên và thành tích' },
              { icon: '🎉', title: 'Sự kiện', description: 'Tham gia picnic, team building và các hoạt động vui' },
              { icon: '🔥', title: 'Phát triển', description: 'Rèn luyện tư duy logic và kỹ năng chiến lược' },
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
                <div className="text-5xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Form đăng ký</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Điền thông tin của bạn vào form dưới đây. Chúng tôi sẽ liên hệ với bạn sớm nhất!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="0123456789"
                />
              </div>

              {/* Class */}
              <div>
                <label htmlFor="class" className="block text-sm font-semibold text-slate-900 mb-2">
                  Lớp <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="class"
                  name="class"
                  required
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="10A1"
                />
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-slate-900 mb-2">
                  Trình độ cờ vua <span className="text-red-500">*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">-- Chọn trình độ --</option>
                  <option value="beginner">Mới bắt đầu</option>
                  <option value="intermediate">Trung cấp</option>
                  <option value="advanced">Nâng cao</option>
                </select>
              </div>

              {/* Reason */}
              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-slate-900 mb-2">
                  Lý do muốn tham gia CLB
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Chia sẻ lý do bạn muốn tham gia CLB cờ vua NTEC..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Đăng ký ngay
              </button>

              <p className="text-center text-sm text-gray-600">
                Bằng cách đăng ký, bạn đồng ý với các điều khoản và chính sách của CLB
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Yêu cầu thành viên</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Điều kiện
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">▸</span>
                  Là học sinh trường THPT
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">▸</span>
                  Có đam mê với cờ vua
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">▸</span>
                  Cam kết tham gia đều đặn
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">▸</span>
                  Tuân thủ nội quy CLB
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span> Quy trình
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">1.</span>
                  Điền form đăng ký trên website
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">2.</span>
                  Ban quản lý xem xét hồ sơ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">3.</span>
                  Liên hệ xác nhận qua email/phone
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">4.</span>
                  Chào mừng thành viên mới!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
