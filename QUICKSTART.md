# Quick Start - Deploy to GitHub Pages

## 🚀 3 Bước đơn giản để deploy website

### Bước 1: Push code lên GitHub

```powershell
# Khởi tạo git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit: NTEC Chess Club website"

# Add remote (đã có sẵn)
git remote add origin https://github.com/nguyentrungnghia1802/ntec-website.git

# Push
git push -u origin main
```

### Bước 2: Enable GitHub Pages

1. Vào https://github.com/nguyentrungnghia1802/ntec-website
2. Settings → Pages
3. Source: chọn **"GitHub Actions"**

### Bước 3: Đợi Deploy ✅

- Vào tab **Actions** 
- Đợi workflow chạy xong (2-3 phút)
- Website sẽ có tại: **https://nguyentrungnghia1802.github.io/ntec-website/**

---

## 📝 Update website sau này

```powershell
git add .
git commit -m "Update: mô tả thay đổi"
git push
```

Xong! Website tự động update sau 2-3 phút.

---

## ✅ Đã cấu hình sẵn

- ✅ Next.js static export
- ✅ GitHub Actions workflow
- ✅ Tối ưu cho GitHub Pages
- ✅ Base path đúng cho repo

Không cần config gì thêm! Chỉ cần push code là xong 🎉
