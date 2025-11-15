# NTEC Chess Club Website

Website chính thức của Câu lạc bộ Cờ vua NTEC - Trường THPT XYZ

## 🎯 Giới thiệu

Website được xây dựng bằng Next.js + TypeScript, hiển thị thông tin và hoạt động của CLB Cờ vua NTEC. Đây là phiên bản **Giai đoạn 1** (Static Website) với các tính năng hiển thị thông tin cơ bản.

## 🚀 Công nghệ sử dụng

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## 📁 Cấu trúc dự án

```
ntec-website/
├── app/                    # App Router pages
│   ├── page.tsx           # Trang chủ
│   ├── about/             # Giới thiệu CLB
│   ├── activities/        # Hoạt động & Sự kiện
│   ├── members/           # Thành viên
│   ├── gallery/           # Thư viện ảnh
│   ├── contact/           # Liên hệ
│   ├── join/              # Đăng ký tham gia
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation bar
│   └── Footer.tsx         # Footer
├── public/               # Static assets
└── README.md             # Documentation
```

## 🎨 Tính năng

### ✅ Giai đoạn 1 - Website tĩnh (Đã hoàn thành)

1. **Trang chủ (Home)**
   - Giới thiệu ngắn về CLB
   - Thông báo mới nhất
   - Lịch hoạt động tuần
   - Thống kê CLB
   - Call-to-action "Tham gia ngay"

2. **Giới thiệu (About)**
   - Lịch sử thành lập
   - Mục tiêu & Định hướng
   - Ban quản lý
   - Thành tựu nổi bật

3. **Hoạt động (Activities)**
   - Lịch tập luyện
   - Workshop & Buổi học
   - Giải đấu & Giao lưu

4. **Thành viên (Members)**
   - Huấn luyện viên
   - Thành viên cốt lõi
   - Thống kê thành viên

5. **Thư viện (Gallery)**
   - Album giải đấu
   - Hoạt động thường ngày
   - Chuyến đi giao lưu

6. **Liên hệ (Contact)**
   - Thông tin liên hệ
   - Mạng xã hội
   - Bản đồ
   - FAQ

7. **Đăng ký (Join Us)**
   - Form đăng ký thành viên
   - Quyền lợi thành viên
   - Yêu cầu & Quy trình

## 🛠️ Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js 18.x trở lên
- npm hoặc yarn

### Cài đặt

```bash
# Clone repository
git clone https://github.com/nguyentrungnghia1802/ntec-website.git
cd ntec-website

# Cài đặt dependencies
npm install
```

### Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại: `http://localhost:3000`

### Build production

```bash
npm run build
npm run start
```

## 🌐 Deployment

Website được deploy tự động lên GitHub Pages khi push code lên branch `main`.

**Live URL**: `https://nguyentrungnghia1802.github.io/ntec-website/`

Xem hướng dẫn chi tiết trong file [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Thiết kế

- **Tone màu**: Màu lạnh chủ đạo (Cyan, Blue, Slate)
- **Style**: Modern, Clean, Professional
- **Responsive**: Tối ưu cho Desktop, Tablet, Mobile
- **Typography**: Font Inter cho tính chuyên nghiệp

### Palette màu chính

- Primary: Cyan-500 (#06B6D4) → Blue-600 (#2563EB)
- Background: Slate-50 (#F8FAFC)
- Dark: Slate-900 (#0F172A)
- Accent: Cyan gradients

## 📱 Responsive Design

Website được thiết kế responsive hoàn toàn:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔮 Roadmap - Giai đoạn 2 (Dynamic Website)

Các tính năng dự kiến trong tương lai:

- [ ] Backend với Next.js API Routes / NestJS
- [ ] Database (MongoDB / PostgreSQL)
- [ ] Dashboard Admin
- [ ] Authentication (Login/Register)
- [ ] Member Profile System
- [ ] Event Management
- [ ] News/Blog System
- [ ] Online Registration với email notification
- [ ] Elo Rating System
- [ ] Photo Gallery với upload

## 📄 License

MIT License - Copyright (c) 2025 Nguyen Trung Nghia

## 👥 Contributors

- **Nguyễn Trung Nghĩa** - Developer

## 📞 Liên hệ

- Email: ntecchess@school.edu.vn
- Phone: (+84) 123 456 789
- Facebook: @NTECChessClub

---

Made with ♟️ by NTEC Chess Club
