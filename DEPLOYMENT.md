# GitHub Pages Deployment Guide

## 🚀 Hướng dẫn Deploy lên GitHub Pages

### Bước 1: Push code lên GitHub

```bash
# Khởi tạo git repository (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit: NTEC Chess Club website"

# Add remote repository (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/NTEC.git

# Push lên GitHub
git push -u origin main
```

### Bước 2: Cấu hình GitHub Pages

1. Truy cập repository trên GitHub: `https://github.com/YOUR_USERNAME/NTEC`
2. Click vào tab **Settings**
3. Trong menu bên trái, click **Pages**
4. Trong phần **Build and deployment**:
   - **Source**: chọn "GitHub Actions"
5. Workflow sẽ tự động chạy khi bạn push code

### Bước 3: Đợi Deploy hoàn tất

- Vào tab **Actions** để xem quá trình deployment
- Sau khi hoàn tất (có dấu ✅), website sẽ được deploy tại:
  ```
  https://YOUR_USERNAME.github.io/NTEC/
  ```

## 📝 Cập nhật website

Mỗi khi bạn muốn cập nhật website:

```bash
# Add changes
git add .

# Commit với message mô tả thay đổi
git commit -m "Update: mô tả thay đổi của bạn"

# Push lên GitHub
git push
```

GitHub Actions sẽ tự động build và deploy website mới!

## 🔧 Cấu hình đã thêm

### 1. `next.config.ts`
```typescript
output: 'export',              // Xuất static files
images: { unoptimized: true }, // Không optimize images
basePath: '/NTEC',             // Base path cho GitHub Pages
assetPrefix: '/NTEC/',         // Asset prefix cho static files
```

### 2. `.github/workflows/nextjs.yml`
- Workflow tự động build và deploy khi push lên branch `main`

### 3. `public/.nojekyll`
- File để GitHub Pages không xử lý website như Jekyll

## ⚠️ Lưu ý

1. **Repository phải là public** hoặc bạn cần GitHub Pro để deploy private repo
2. Đợi 2-3 phút sau khi push để GitHub Actions hoàn tất deployment
3. Nếu gặp lỗi 404, kiểm tra:
   - Đã cấu hình GitHub Pages chưa (Settings > Pages)
   - Workflow đã chạy thành công chưa (Actions tab)
   - URL có đúng format không: `https://USERNAME.github.io/NTEC/`

## 🌐 Custom Domain (Optional)

Nếu muốn sử dụng domain riêng:

1. Tạo file `public/CNAME` với nội dung là domain của bạn:
   ```
   yourdomain.com
   ```

2. Cấu hình DNS records tại nhà cung cấp domain:
   ```
   Type: CNAME
   Name: www (hoặc @)
   Value: YOUR_USERNAME.github.io
   ```

3. Trong GitHub Settings > Pages, nhập custom domain

## 📦 Build Local

Để test build local trước khi deploy:

```bash
# Build
npm run build

# Test static export (cần cài http-server)
npx serve@latest out
```

---

✅ **Website sẽ tự động deploy khi bạn push code lên GitHub!**
