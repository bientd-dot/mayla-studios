# MAYLA STUDIOS ✨ - Bio Storefront (Phong cách Lynhvu.passio.eco)

Trang web thời trang tĩnh (Static Web) giới thiệu và bán đồ cho shop **Mayla Studios** ([@mayla.studios](https://www.instagram.com/mayla.studios/)), lấy cảm hứng từ giao diện Bio Link / Storefront hiện đại, tối giản và thanh lịch của [lynhvu.passio.eco](https://lynhvu.passio.eco/).

---

## 🌟 Điểm nổi bật của giao diện

1. **Thiết kế chuẩn Mobile-first & Bio Store:**
   - Tối ưu hiển thị tuyệt đẹp trên cả điện thoại (smartphone) và máy tính (desktop).
   - Tone màu kem, be pastel sang trọng, chuẩn aesthetic nhẹ nhàng, nữ tính của Mayla Studios.
   
2. **Tính năng tiện ích người dùng:**
   - **Thanh tìm kiếm tức thì (Instant Search):** Gõ tìm theo tên sản phẩm, chất liệu, phân loại.
   - **Bộ lọc danh mục mượt mà:** Tất cả, Đầm & Váy, Set Đồ & Tweed, Áo Kiểu, Áo Khoác Blazer, Chân Váy & Quần.
   - **Tab nổi bật:** Lọc nhanh hàng Bán chạy (HOT), Hàng mới về (NEW), Đang giảm giá (SALE).
   - **Sắp xếp linh hoạt:** Theo giá tăng dần, giảm dần hoặc theo thứ tự A-Z.
   - **Quick View Popup (Xem nhanh chi tiết):**
     - Xem ảnh lớn chất lượng cao.
     - Mô tả chất liệu, thiết kế, form dáng.
     - Chọn size (S, M, L) kèm bảng quy đổi chiều cao / cân nặng.
     - Nút **"Mua ngay trên Shopee Mall"** & **"Nhắn tin tư vấn trên Instagram"**.
   - **Yêu thích (Wishlist):** Bấm thả tim lưu các mẫu váy yêu thích (lưu trực tiếp vào bộ nhớ trình duyệt).
   - **Chia sẻ link:** 1 chạm sao chép liên kết shop để gửi bạn bè.
   - **Nút liên hệ nổi (Floating Actions):** Chat Instagram và truy cập Shopee nhanh ở góc màn hình.

3. **Thuần Static (Không cần Backend):**
   - Không cần cài `node_modules`, không cần build phức tạp.
   - Chạy trực tiếp chỉ bằng cách click đúp mở `index.html` hoặc đưa lên GitHub Pages.

---

## 🚀 Hướng dẫn xem trước trên máy tính (Local)

1. Mở thư mục dự án `c:\Users\Bin\Downloads\linhphuong`.
2. Nhấp đúp vào file `index.html` để mở ngay trên trình duyệt (Chrome, Cốc Cốc, Edge, Safari).
3. (Hoặc) Sử dụng extension **Live Server** trên VS Code để xem với tính năng auto-reload.

---

## 📦 Hướng dẫn đẩy lên GitHub và kích hoạt GitHub Pages để xem online

Bạn chỉ cần thực hiện 4 bước sau trong Terminal (PowerShell hoặc Git Bash):

### Bước 1: Khởi tạo Git và Commit
```bash
# Di chuyển vào thư mục dự án nếu chưa ở trong đó
cd c:\Users\Bin\Downloads\linhphuong

# Khởi tạo git
git init

# Thêm tất cả file
git add .

# Tạo commit đầu tiên
git commit -m "feat: Khoi tao Bio Store Mayla Studios"
```

### Bước 2: Tạo repository mới trên GitHub
1. Truy cập [github.com/new](https://github.com/new).
2. Đặt tên repository (ví dụ: `mayla-studios` hoặc `linhphuong-store`).
3. Chọn chế độ **Public**.
4. Nhấn **Create repository**.

### Bước 3: Đẩy mã nguồn lên GitHub
Sao chép lệnh từ GitHub (thay `username` bằng tài khoản GitHub của bạn):
```bash
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-ban>/mayla-studios.git
git push -u origin main
```

### Bước 4: Kích hoạt GitHub Pages để lấy link xem trước
1. Vào repository vừa tạo trên GitHub, chọn tab **Settings** (Cài đặt).
2. Ở menu bên trái, tìm và nhấp vào mục **Pages**.
3. Tại phần **Build and deployment** -> **Branch**:
   - Chọn nhánh **`main`**.
   - Thư mục chọn **`/(root)`**.
   - Bấm **Save**.
4. Đợi khoảng 1-2 phút, GitHub Pages sẽ tạo cho bạn link xem trước công khai dạng:
   👉 `https://<tai-khoan-cua-ban>.github.io/mayla-studios/`

---

## 🛠️ Hướng dẫn tùy biến sản phẩm và link mua hàng

Tất cả thông tin sản phẩm và link mua sắm được quản lý rất đơn giản trong file **`app.js`**:

```javascript
{
  id: 1,
  name: "Rosé Silk Midi Dress - Đầm Lụa Thắt Nơ Lưng",
  category: "dresses", // dresses | sets | tops | bottoms | outers
  price: 495000,
  originalPrice: 590000,
  discount: "-16%",
  badge: "HOT", // HOT | NEW | BEST | SALE
  image: "link_anh_san_pham_cua_shop.jpg",
  desc: "Mô tả chất liệu, kiểu dáng...",
  shopeeUrl: "https://shopee.vn/link-sp-cua-ban",
  instaUrl: "https://www.instagram.com/mayla.studios/"
}
```

Bạn chỉ cần thay đường link `shopeeUrl` và `instaUrl` thành link thực tế của shop để khách hàng click vào là đến ngay giỏ hàng!

---
© 2026 MAYLA STUDIOS Bio Storefront.
