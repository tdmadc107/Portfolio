# 🎨 Hướng Dẫn Cá Nhân Hóa Portfolio

Dự án này được thiết kế để dễ dàng tùy chỉnh. Tất cả các vị trí cần thay đổi được đánh dấu với comment `TODO`.

## 📍 Danh Sách TODO và Vị Trí

### 1. Header - Thông Tin Cơ Bản
**File**: `src/components/Header.tsx`

```typescript
// TODO: Thay đổi tên của bạn ở đây
<h1 className={styles.title}>Nguyễn Văn A</h1>

// TODO: Thay đổi chức danh/vị trí của bạn
<p className={styles.subtitle}>Full Stack Developer | UI/UX Enthusiast</p>
```

**Cần làm**:
- [ ] Thay tên của bạn
- [ ] Thay chức danh/vị trí hiện tại

---

### 2. Personal - Thông Tin Cá Nhân
**File**: `src/components/Personal.tsx`

```typescript
// TODO: Thay đổi URL ảnh đại diện của bạn
<img src="https://via.placeholder.com/150" alt="Avatar" />

// TODO: Cật nhật các thông tin cá nhân của bạn
- Số điện thoại: "+84 (0) 123 456 789"
- Email: "your.email@example.com"
- Địa chỉ: "Hà Nội, Việt Nam"
- Vị trí: "Full Stack Developer"

// TODO: Thay đổi các link mạng xã hội của bạn
- LinkedIn: "https://linkedin.com"
- GitHub: "https://github.com"
- Twitter/X: "https://twitter.com"

// TODO: Viết một mô tả ngắn về bản thân bạn
```

**Cần làm**:
- [ ] Thay URL ảnh (có thể dùng link ảnh từ Facebook, LinkedIn hoặc upload lên cloudinary/imgur)
- [ ] Cập nhật tất cả thông tin liên hệ
- [ ] Cập nhật link các mạng xã hội
- [ ] Viết mô tả về bản thân

---

### 3. Education - Học Vấn
**File**: `src/components/Education.tsx`

Mảng `educationData` chứa các khóa học:

```typescript
const educationData: EducationItem[] = [
  {
    school: 'Đại Học Bách Khoa Hà Nội',      // Tên trường
    degree: 'Cử Nhân',                        // Cấp bằng
    field: 'Công Nghệ Thông Tin',            // Ngành
    startDate: '2018',                        // Năm bắt đầu
    endDate: '2022',                          // Năm kết thúc
    description: 'GPA: 3.8/4.0 - Tốt nghiệp Xuất sắc' // Mô tả
  }
]
```

**Cần làm**:
- [ ] Thay tên trường/đại học
- [ ] Cập nhật cấp bằng
- [ ] Cập nhật ngành học
- [ ] Cập nhật năm bắt đầu/kết thúc
- [ ] Cập nhật mô tả hoặc thành tích

---

### 4. Experience - Kinh Nghiệm Làm Việc
**File**: `src/components/Experience.tsx`

Mảng `experienceData` chứa các vị trí làm việc:

```typescript
const experienceData: ExperienceItem[] = [
  {
    company: 'Tech Company A',                    // Tên công ty
    position: 'Senior Full Stack Developer',      // Chức danh
    startDate: 'Jan 2022',                        // Ngày bắt đầu
    endDate: 'Present',                           // Ngày kết thúc (Present = hiện tại)
    description: 'Dẫn dắt một team 5 người...',  // Mô tả công việc
    technologies: ['React', 'TypeScript', ...]   // Công nghệ sử dụng
  }
]
```

**Cần làm**:
- [ ] Thay tên công ty
- [ ] Cập nhật chức danh
- [ ] Cập nhật ngày bắt đầu/kết thúc
- [ ] Viết mô tả chi tiết công việc
- [ ] Cập nhật danh sách công nghệ đã dùng

---

### 5. Certifications - Chứng Chỉ
**File**: `src/components/Certifications.tsx`

```typescript
const certificationsData: CertificationItem[] = [
  {
    name: 'AWS Certified Solutions Architect - Associate',  // Tên chứng chỉ
    issuer: 'Amazon Web Services (AWS)',                     // Nơi cấp
    issueDate: 'Jan 2023',                                   // Ngày cấp
    expiryDate: 'Jan 2026',                                  // Ngày hết hạn (nếu có)
    credentialId: 'ABC123XYZ',                               // ID chứng chỉ
    credentialUrl: 'https://aws.amazon.com/certification'   // Link xác minh
  }
]
```

**Cần làm**:
- [ ] Thêm chứng chỉ của bạn
- [ ] Cập nhật tên chứng chỉ
- [ ] Cập nhật tổ chức cấp
- [ ] Cập nhật ngày cấp
- [ ] Cập nhật ngày hết hạn (nếu có)
- [ ] Cập nhật ID và link xác minh

---

### 6. Achievements - Vinh Danh & Thành Tích
**File**: `src/components/Achievements.tsx`

```typescript
const achievementsData: AchievementItem[] = [
  {
    title: 'Employee of the Year',                          // Tiêu đề
    description: 'Được vinh danh là nhân viên xuất sắc...', // Mô tả
    date: '2023',                                            // Ngày/ năm
    icon: '⭐'                                               // Icon emoji
  }
]
```

**Icon emoji có thể dùng**:
- ⭐ - Star
- 🚀 - Rocket
- 💻 - Laptop
- 🎤 - Microphone
- 🧑‍🏫 - Teacher
- 📜 - Document
- 🏅 - Medal
- 🎓 - Graduation
- 👑 - Crown
- 🔥 - Fire

**Cần làm**:
- [ ] Thêm các thành tích của bạn
- [ ] Chọn icon phù hợp
- [ ] Viết mô tả chi tiết
- [ ] Cập nhật ngày/năm đạt thành tích

---

### 7. Footer - Liên Hệ
**File**: `src/components/Footer.tsx`

```typescript
// TODO: Cập nhật email của bạn
<a href="mailto:your.email@example.com">your.email@example.com</a>

// TODO: Cập nhật điện thoại của bạn
<a href="tel:+84123456789">+84 (0) 123 456 789</a>

// TODO: Cập nhật các link mạng xã hội của bạn
// TODO: Cập nhật thông tin bản quyền của bạn
```

**Cần làm**:
- [ ] Cập nhật email
- [ ] Cập nhật số điện thoại
- [ ] Cập nhật link mạng xã hội
- [ ] Cập nhật tên/năm bản quyền

---

## 🎨 Tùy Chỉnh Màu Sắc

**File**: `src/index.css`

```css
:root {
  /* Primary Colors - Thay đổi màu chính */
  --primary-dark: #0f172a;    /* Nền tối */
  --primary-light: #1e293b;   /* Nền sáng */
  --accent-blue: #3b82f6;     /* Accent xanh dương */
  --accent-purple: #8b5cf6;   /* Accent tím */
  --accent-cyan: #06b6d4;     /* Accent xanh ngọc */

  /* Text Colors - Thay đổi màu chữ */
  --text-primary: #f1f5f9;    /* Chữ chính */
  --text-secondary: #cbd5e1;  /* Chữ phụ */
  --text-muted: #94a3b8;      /* Chữ mờ */

  /* Background Colors - Thay đổi màu nền */
  --bg-primary: #0f172a;      /* Nền chính */
  --bg-secondary: #1e293b;    /* Nền phụ */
  --bg-tertiary: #334155;     /* Nền thứ ba */

  /* Border Colors */
  --border-color: #475569;    /* Màu đường viền */
}
```

**Một số color scheme gợi ý**:

1. **Cool Blue (Xanh lạnh)**:
   - `--primary-dark: #0a1f3e`
   - `--accent-blue: #007bff`
   - `--accent-cyan: #0dcaf0`

2. **Sunset (Hoàng hôn)**:
   - `--primary-dark: #2d1b2e`
   - `--accent-blue: #ff6b6b`
   - `--accent-purple: #ee5a6f`

3. **Forest Green (Xanh rừng)**:
   - `--primary-dark: #0d2e1f`
   - `--accent-blue: #10b981`
   - `--accent-cyan: #14b8a6`

---

## 📸 Ảnh Đại Diện

Bạn có thể lấy ảnh từ:
- **Cloudinary** (Free & dễ dàng): https://cloudinary.com
- **Imgur** (Simple upload): https://imgur.com
- **imgbb** (Free image hosting): https://imgbb.com
- **Facebook / LinkedIn** (Link trực tiếp từ profile)

URL ví dụ:
```
https://i.imgur.com/your-image-id.jpg
https://res.cloudinary.com/user/image/upload/image.jpg
```

---

## 🔗 Social Links - Mạng Xã Hội

**LinkedIn**:
```
https://linkedin.com/in/your-username
```

**GitHub**:
```
https://github.com/your-username
```

**Twitter/X**:
```
https://twitter.com/your-handle
```

**Facebook**:
```
https://facebook.com/your-profile
```

---

## 📋 Checklist Hoàn Thành

- [ ] Cập nhật Header (tên + chức danh)
- [ ] Cập nhật Personal (ảnh, thông tin, bio)
- [ ] Cập nhật Education (trường, bằng, ngành)
- [ ] Cập nhật Experience (công ty, vị trí, kỹ năng)
- [ ] Cập nhật Certifications (chứng chỉ)
- [ ] Cập nhật Achievements (thành tích)
- [ ] Cập nhật Footer (liên hệ, mạng xã hội)
- [ ] (Tùy chọn) Tùy chỉnh màu sắc
- [ ] Test responsiveness trên mobile
- [ ] Deploy lên hosting (Vercel, Netlify, etc.)

---

## 🚀 Deploy Portfolio

### Vercel (Recommended)
1. Push code lên GitHub
2. Vào https://vercel.com
3. Import project
4. Deploy tự động

### Netlify
1. Kết nối GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Tạo gh-pages branch
# Push content của folder dist lên gh-pages
```

---

## 💡 Tips

✨ **Make it Personal**
- Thêm ảnh đại diện chuyên nghiệp
- Viết bio ngắn gọn, hấp dẫn
- Chỉ thêm thành tích thực sự

📱 **Mobile First**
- Kiểm tra trên điện thoại trước
- Đảm bảo các link hoạt động
- Test tất cả form nếu có

🎨 **Design & UX**
- Giữ nguyên color scheme xanh lá - tím (chuyên nghiệp)
- Không thêm quá nhiều animation
- Typography rõ ràng, dễ đọc

---

Chúc bạn hoàn thành portfolio đẹp và nhận được vị trí công việc lý tưởng! 🎉
