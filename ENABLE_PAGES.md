# ⚙️ Cách Enable GitHub Pages

## Bước chi tiết để kích hoạt GitHub Pages

### 1. Truy cập Settings
- Mở repository: https://github.com/nguyentrungnghia1802/ntec-website
- Click tab **"Settings"** (ở góc trên bên phải)

### 2. Vào phần Pages
- Trong menu bên trái, tìm và click **"Pages"**
- Hoặc truy cập trực tiếp: https://github.com/nguyentrungnghia1802/ntec-website/settings/pages

### 3. Cấu hình Build and deployment

#### Source
- Chọn: **"GitHub Actions"** (không phải "Deploy from a branch")

![GitHub Actions Source](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

### 4. Xong! ✅

Không cần làm gì thêm. Workflow sẽ tự động chạy khi bạn push code.

---

## 🔍 Kiểm tra Deployment

### Xem trạng thái build
1. Click tab **"Actions"** ở repository
2. Xem workflow "Deploy Next.js to GitHub Pages"
3. Đợi đến khi có dấu ✅ (màu xanh)

### Các bước trong workflow:
- ⚙️ **build**: Build Next.js website
- 🚀 **deploy**: Deploy lên GitHub Pages

Thời gian: ~2-3 phút

---

## 🌐 Truy cập Website

Sau khi deployment thành công:

**URL**: https://nguyentrungnghia1802.github.io/ntec-website/

---

## ❗ Troubleshooting

### Lỗi: "404 - Page not found"
✅ **Giải pháp**:
1. Đảm bảo đã enable GitHub Pages (Source: GitHub Actions)
2. Đợi workflow chạy xong (check tab Actions)
3. Xóa cache browser và reload (Ctrl + Shift + R)

### Lỗi: Workflow không chạy
✅ **Giải pháp**:
1. Check tab Actions có enabled không
2. Repository phải là **public** (hoặc có GitHub Pro)

### Lỗi: Build failed
✅ **Giải pháp**:
1. Vào tab Actions → Click vào workflow failed
2. Xem log lỗi
3. Fix lỗi và push lại

---

## 📝 Update Website

Mỗi khi cập nhật code:
```bash
git add .
git commit -m "Update: mô tả"
git push
```

→ Workflow tự động chạy và deploy website mới!

---

**🎉 Chúc mừng! Website của bạn đã online!**
