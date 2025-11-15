export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Liên hệ</h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Hãy liên hệ với chúng tôi để biết thêm thông tin về CLB
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Thông tin liên hệ
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                  <div className="text-3xl">📧</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:ntecchess@school.edu.vn"
                      className="text-cyan-600 hover:text-cyan-700"
                    >
                      ntecchess@school.edu.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-3xl">📱</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      Điện thoại
                    </h3>
                    <a
                      href="tel:+84123456789"
                      className="text-cyan-600 hover:text-cyan-700"
                    >
                      (+84) 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                  <div className="text-3xl">📍</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      Địa chỉ
                    </h3>
                    <p className="text-gray-700">
                      Trường THPT Ngọc Tảo
                      <br />
                      Chùa thôn Thống Nhất, Ngọc Tảo, Phúc Thọ
                      <br />
                      Thành phố Hà Nội
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-3xl">⏰</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      Giờ làm việc
                    </h3>
                    <p className="text-gray-700">
                      Thứ 2 - Thứ 6: 15:00 - 17:00
                      <br />
                      Thứ 7: 09:00 - 12:00
                      <br />
                      Chủ nhật: Nghỉ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Quick Contact */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Kết nối với chúng tôi
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div className="flex-1 text-left">
                    <p className="font-semibold">Facebook</p>
                    <p className="text-sm text-blue-100">@NTECChessClub</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                  <div className="flex-1 text-left">
                    <p className="font-semibold">Telegram</p>
                    <p className="text-sm text-sky-100">@ntecchess</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <div className="flex-1 text-left">
                    <p className="font-semibold">Zalo</p>
                    <p className="text-sm text-blue-100">0123456789</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <div className="flex-1 text-left">
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm text-pink-100">@ntecchessclub</p>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-cyan-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  📝 Gửi tin nhắn nhanh
                </h3>
                <p className="text-gray-600 mb-4">
                  Bạn có thắc mắc? Hãy liên hệ trực tiếp với chúng tôi qua các
                  kênh trên hoặc đến trực tiếp phòng CLB tại trường.
                </p>
                <a
                  href="/join"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Đăng ký tham gia ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Bản đồ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-2xl font-bold text-slate-900 mb-2">
                  Trường THPT XYZ
                </p>
                <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
                <p className="text-sm text-gray-500 mt-4">
                  (Tích hợp Google Maps hoặc embed map tại đây)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Câu hỏi thường gặp
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Làm thế nào để tham gia CLB?",
                answer:
                  "Bạn có thể đăng ký tham gia thông qua form trên website hoặc liên hệ trực tiếp với ban quản lý CLB.",
              },
              {
                question: "CLB có phù hợp với người mới bắt đầu không?",
                answer:
                  "Có! CLB chào đón tất cả các bạn, từ người mới bắt đầu đến người có kinh nghiệm. Chúng tôi có các buổi học dành riêng cho người mới.",
              },
              {
                question: "Lệ phí tham gia là bao nhiêu?",
                answer:
                  "CLB hoàn toàn miễn phí cho học sinh trong trường. Một số giải đấu có thể có phí đăng ký nhỏ để trang trải chi phí.",
              },
              {
                question: "Tôi cần chuẩn bị gì khi tham gia?",
                answer:
                  "Chỉ cần sự đam mê với cờ vua! CLB có đầy đủ bàn cờ và đồng hồ cho thành viên.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  ❓ {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
