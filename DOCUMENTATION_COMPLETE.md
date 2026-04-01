
# 📚 Portfolio - Complete Documentation & Guide

**Language:** [Vietnamese](#vietnamese---tài-liệu-đầy-đủ) | [English](#english---complete-documentation)

---

# Vietnamese - Tài Liệu Đầy Đủ

## 📖 Mục Lục (Vietnamese)

1. [Giới Thiệu Dự Án](#giới-thiệu-dự-án)
2. [Hướng Dẫn Nhanh](#hướng-dẫn-nhanh)
3. [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
4. [Hướng Dẫn Cá Nhân Hóa](#hướng-dẫn-cá-nhân-hóa)
5. [Quản Lý Dữ Liệu](#quản-lý-dữ-liệu)
6. [Tùy Chỉnh Giao Diện](#tùy-chỉnh-giao-diện)
7. [Tham Khảo Components](#tham-khảo-components)
8. [Deploy](#deploy)

---

## Giới Thiệu Dự Án

Một website hồ sơ cá nhân chuyên nghiệp được xây dựng với **React 18 + TypeScript + CSS Modules** và **Vite** build tool.

### ✨ Tính Năng Chính

- 🎨 **Thiết Kế Hiện Đại** - Gradient màu sắc hài hòa, animations mượt mà
- 📱 **Responsive Design** - Hoàn hảo trên tất cả thiết bị (mobile → desktop)
- ⚡ **TypeScript Type-Safe** - Phát triển an toàn với type checking
- 🎯 **Modular CSS** - CSS Modules không xung đột style
- 📊 **7 Sections Hoàn Chỉnh**:
  - 👤 Thông Tin Cá Nhân
  - 📚 Học Vấn (Timeline)
  - 💼 Kinh Nghiệm Làm Việc
  - 🏆 Chứng Chỉ (Grid Cards)
  - 🌟 Vinh Danh & Thành Tích
  - 🔗 Footer

### 🎨 Color Scheme

| Component | Color | Hex |
|-----------|-------|-----|
| Primary Dark | Xanh lá đậm | `#0f172a` |
| Primary Light | Xanh lá nhạt | `#1e293b` |
| Accent Blue | Xanh dương | `#3b82f6` |
| Accent Purple | Tím | `#8b5cf6` |
| Accent Cyan | Xanh ngọc | `#06b6d4` |
| Text Primary | Trắng | `#f1f5f9` |
| Text Secondary | Xám nhạt | `#cbd5e1` |

---

## Hướng Dẫn Nhanh

### 1️⃣ Cài Đặt Dependencies

```bash
cd d:\Project\Portfolio
npm install
```

### 2️⃣ Chạy Development Server

```bash
npm run dev
```

Server sẽ tự động mở: **http://localhost:3000**

### 3️⃣ Cá Nhân Hóa Portfolio

Mở các file và tìm comment `TODO` để cập nhật:

| File | Cập Nhật |
|------|----------|
| `Header.tsx` | 👤 Tên + Chức danh |
| `Personal.tsx` | 📷 Ảnh + Thông tin + Bio |
| `Education.tsx` | 🎓 Trường học + Bằng cấp |
| `Experience.tsx` | 💼 Công ty + Vị trí + Kỹ năng |
| `Certifications.tsx` | 📜 Chứng chỉ |
| `Achievements.tsx` | 🏆 Vinh danh |
| `Footer.tsx` | 🔗 Liên hệ |

### 4️⃣ Build Production

```bash
npm run build
```

Output ở folder: `dist/`

### 5️⃣ Deploy (Optional)

Xem phần [Deploy](#deploy) ở dưới.

---

## Cấu Trúc Dự Án

### 📁 Folder Structure

```
d:\Project\Portfolio/
├── public/
│   └── assets/
│       ├── images/          # Ảnh dự án, screenshot
│       └── icons/           # Icon SVG, favicon
│
├── src/
│   ├── components/
│   │   ├── Header.tsx                           (Navigation)
│   │   ├── Personal.tsx                         (Personal Info)
│   │   ├── Education.tsx                        (Education Timeline)
│   │   ├── Experience.tsx                       (Work Experience)
│   │   ├── Certifications.tsx                   (Certificates)
│   │   ├── Achievements.tsx                     (Achievements)
│   │   ├── Footer.tsx                           (Footer)
│   │   └── *.module.css                         (Component Styles)
│   │
│   ├── data/
│   │   ├── index.ts                 # 🎯 Import từ đây
│   │   ├── personal.ts              # Thông tin cá nhân
│   │   ├── experiences.ts           # Kinh nghiệm
│   │   ├── education.ts             # Học vấn
│   │   ├── certifications.ts        # Chứng chỉ
│   │   ├── achievements.ts          # Thành tích
│   │   ├── projects.ts              # Dự án
│   │   ├── services.ts              # Dịch vụ
│   │   └── skills.ts                # Kỹ năng
│   │
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   │
│   ├── styles/
│   │   ├── global.css               # Global styles
│   │   └── variables.css            # CSS variables
│   │
│   ├── utils/
│   │   ├── constants.ts             # App constants
│   │   └── helpers.ts               # Helper functions
│   │
│   ├── hooks/
│   │   └── useInViewport.ts         # Custom hooks
│   │
│   ├── App.tsx                      # Main component
│   ├── main.tsx                     # Entry point
│   └── vite-env.d.ts                # Vite types
│
├── .env.example                     # Environment template
├── .gitignore                       # Git ignore
├── .prettierrc                      # Code formatting
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tsconfig.node.json               # Node TypeScript config
├── vite.config.ts                   # Vite config
└── README.md                        # Main documentation
```

### 🎯 Folder Purposes

| Folder | Mục Đích |
|--------|----------|
| `/public/assets` | Static images & icons (served directly) |
| `/src/components` | React components (Header, Footer, etc.) |
| `/src/data` | Static data files (experiences, education, etc.) |
| `/src/types` | TypeScript interfaces & types |
| `/src/styles` | Global styles & CSS variables |
| `/src/utils` | Utility functions & helpers |
| `/src/hooks` | Custom React hooks |

---

## Hướng Dẫn Cá Nhân Hóa

### Header - Thông Tin Cơ Bản

**File**: `src/components/Header.tsx`

**Tính năng**:
- 📱 **Responsive Dropdown Menu** - Ở chế độ mobile, header sẽ collapse thành dropdown menu hamburger khi scroll
- 💻 **Desktop Unchanged** - Ở desktop, header giữ nguyên layout ban đầu
- ✨ **Smooth Animations** - Subtitle fade out, header collapse, hamburger animation

**Cách hoạt động**:
- Ở đầu trang: Header hiển thị bình thường với logo, subtitle, và navigation
- Khi scroll down (mobile ≤768px): 
  - Header thu gọn (padding giảm)
  - Subtitle ẩn đi (fade out)
  - Navigation chuyển thành hamburger button (3 dòng)
  - Click hamburger để mở dropdown menu
- Ở desktop (≥769px): Không có thay đổi gì

```typescript
// TODO: Thay tên của bạn
<h1>Nguyễn Văn A</h1>

// TODO: Thay chức danh
<p>Full Stack Developer | UI/UX Enthusiast</p>
```

**Cần làm**:
- [ ] Thay tên
- [ ] Thay chức danh hiện tại

---

### Personal - Thông Tin Cá Nhân

**File**: `src/components/Personal.tsx`

```typescript
// TODO: Thay ảnh đại diện
<img src="./assets/images/portfolio_header.jpg" alt="Avatar" />

// TODO: Cập nhật thông tin
{
  "📞 Điện Thoại": "+84 (0) 123 456 789",
  "📧 Email": "your.email@example.com",
  "📍 Địa Chỉ": "Hà Nội, Việt Nam",
  "💼 Vị Trí": "Full Stack Developer"
}

// TODO: Thay link mạng xã hội
{
  "LinkedIn": "https://linkedin.com/in/your-username",
  "GitHub": "https://github.com/your-username",
  "Twitter/X": "https://twitter.com/your-handle"
}

// TODO: Viết mô tả bản thân
"Lập trình viên Full Stack với hơn 5 năm kinh nghiệm..."
```

**Cần làm**:
- [ ] Update ảnh đại diện
- [ ] Update tất cả thông tin liên hệ
- [ ] Update link mạng xã hội
- [ ] Viết bio bản thân

---

### Education - Học Vấn

**File**: `src/components/Education.tsx`

```typescript
interface EducationItem {
  school: string      // "Đại Học Bách Khoa Hà Nội"
  degree: string      // "Cử Nhân"
  field: string       // "Công Nghệ Thông Tin"
  startDate: string   // "2018"
  endDate: string     // "2022"
  description: string // "GPA: 3.8/4.0 - Tốt nghiệp Xuất sắc"
}
```

**Cần làm**:
- [ ] Thêm các trường học
- [ ] Update cấp bằng (Cử nhân, Cao đẳng, Thạc sĩ, etc.)
- [ ] Update ngành học
- [ ] Update năm bắt đầu/kết thúc
- [ ] Thêm mô tả hoặc thành tích

---

### Experience - Kinh Nghiệm Làm Việc

**File**: `src/components/Experience.tsx`

```typescript
interface ExperienceItem {
  company: string          // "Tech Company A"
  position: string         // "Senior Full Stack Developer"
  startDate: string        // "Jan 2022"
  endDate: string          // "Present"
  description: string      // "Dẫn dắt một team 5 người..."
  technologies: string[]   // ["React", "TypeScript", "Node.js"]
}
```

**Cần làm**:
- [ ] Thêm các công ty
- [ ] Update chức danh (Senior, Junior, Mid-level, etc.)
- [ ] Update khoảng thời gian
- [ ] Viết mô tả chi tiết công việc
- [ ] Liệt kê công nghệ sử dụng

---

### Certifications - Chứng Chỉ

**File**: `src/components/Certifications.tsx`

```typescript
interface CertificationItem {
  name: string              // "AWS Certified Solutions Architect"
  issuer: string            // "Amazon Web Services"
  issueDate: string         // "Jan 2023"
  expiryDate?: string       // "Jan 2026" (optional)
  credentialId?: string     // "ABC123XYZ" (optional)
  credentialUrl?: string    // "https://..." (optional)
}
```

**Cần làm**:
- [ ] Thêm chứng chỉ của bạn
- [ ] Update tổ chức cấp
- [ ] Update ngày cấp
- [ ] Update ngày hết hạn (nếu có)
- [ ] Thêm link xác minh (nếu có)

---

### Achievements - Vinh Danh & Thành Tích

**File**: `src/components/Achievements.tsx`

```typescript
interface AchievementItem {
  title: string       // "Employee of the Year"
  description: string // "Được vinh danh vì..."
  date: string        // "2023" hoặc "2021-Present"
  icon: string        // Emoji: "⭐", "🚀", "💻", etc.
}
```

**Emoji Gợi Ý**:
- ⭐ Star (Giải thưởng)
- 🚀 Rocket (Thăng chức/Khởi chạy)
- 💻 Laptop (Thành tích kỹ thuật)
- 🎤 Microphone (Trình bày/Nói chuyện)
- 🧑‍🏫 Teacher (Mentoring)
- 📜 Document (Patent/Publication)
- 🏅 Medal (Cuộc thi)
- 👑 Crown (Leadership)
- 🔥 Fire (Hot achievement)
- 💡 Lightbulb (Innovation)

**Cần làm**:
- [ ] Thêm thành tích của bạn
- [ ] Chọn emoji phù hợp
- [ ] Viết mô tả chi tiết
- [ ] Update ngày/năm đạt thành tích

---

### Footer - Liên Hệ

**File**: `src/components/Footer.tsx`

```typescript
// TODO: Update email
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// TODO: Update điện thoại
<a href="tel:+84123456789">
  +84 (0) 123 456 789
</a>

// TODO: Update link mạng xã hội
// TODO: Update thông tin bản quyền
```

**Cần làm**:
- [ ] Update email
- [ ] Update số điện thoại
- [ ] Update link mạng xã hội
- [ ] Update tên và năm bản quyền

---

## Quản Lý Dữ Liệu

### 📊 Data Management System

Dữ liệu được quản lý tập trung trong `src/data/`:

```
src/data/
├── index.ts              # 🎯 Import từ đây (central export)
├── personal.ts           # Thông tin cá nhân & social links
├── experiences.ts        # Kinh nghiệm làm việc
├── education.ts          # Học vấn
├── certifications.ts     # Chứng chỉ
├── achievements.ts       # Thành tích
├── projects.ts           # Dự án
├── services.ts           # Dịch vụ
└── skills.ts             # Kỹ năng
```

### ✅ Cách Sử Dụng

**Import từ '@data'**:

```typescript
// ✅ Tốt - Import từ alias
import { experiences, projects, personalInfo } from '@data';

// ❌ Tránh - Relative path dài dòng
import { experiences } from '../../../data/experiences';
```

**Trong Components**:

```typescript
import { experiences } from '@data';

export const ExperienceSection = () => {
  return (
    <div>
      {experiences.map((exp) => (
        <article key={exp.id}>
          <h3>{exp.company}</h3>
          <p>{exp.position}</p>
          <p>{exp.description}</p>
        </article>
      ))}
    </div>
  );
};
```

### 🔄 Luồng Maintenance

**Muốn thêm kinh nghiệm?**
1. Mở `src/data/experiences.ts`
2. Thêm object vào array
3. ✅ Auto-update ở tất cả components

**Muốn cập nhật thông tin cá nhân?**
1. Mở `src/data/personal.ts`
2. Sửa `personalInfo` hoặc `socialLinks`
3. ✅ Tất cả components dùng nó cập nhật

### 💡 Best Practices

```typescript
// ✅ GOOD
{experiences.map((exp) => (
  <div key={exp.id}>{exp.company}</div>
))}

// ❌ BAD (Anti-pattern)
{experiences.map((exp, index) => (
  <div key={index}>{exp.company}</div>
))}
```

**Quy tắc**: Chỉ sửa dữ liệu ở `src/data/` → tất cả components tự động cập nhật! 🎯

---

## Tùy Chỉnh Giao Diện

### 🎨 Màu Sắc (Colors)

**File**: `src/styles/variables.css`

```css
:root {
  /* Primary Colors */
  --primary-color: #2563eb;
  --primary-dark: #1e40af;
  --primary-light: #3b82f6;

  /* Accent Colors */
  --secondary-color: #64748b;
  --secondary-light: #94a3b8;

  /* Text Colors */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-light: #9ca3af;

  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;

  /* Border Colors */
  --border-color: #e5e7eb;
}
```

### 🎨 Color Schemes Gợi Ý

**1. Cool Blue (Xanh Lạnh)**
```css
--primary-color: #007bff;
--accent-blue: #0dcaf0;
--accent-cyan: #0d6efd;
```

**2. Sunset (Hoàng Hôn)**
```css
--primary-color: #ff6b6b;
--accent-purple: #ee5a6f;
--accent-blue: #ffa94d;
```

**3. Forest Green (Xanh Rừng)**
```css
--primary-color: #10b981;
--accent-cyan: #14b8a6;
--accent-blue: #06b6d4;
```

### 📐 Khoảng Cách (Spacing)

```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;
```

### 🔤 Font Sizes

```css
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
```

### 🌒 Dark Mode

File `src/styles/variables.css` tự động hỗ trợ Dark Mode!

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f9fafb;
    --bg-primary: #111827;
    /* ... more dark theme variables */
  }
}
```

---

## Tham Khảo Components

### Component Cheatsheet

| Component | Props | Styles | Notes |
|-----------|-------|--------|-------|
| **Header** | ❌ None | header.module.css | Navigation header |
| **Personal** | ❌ None | personal.module.css | Avatar + info |
| **Education** | ❌ None | education.module.css | Timeline layout |
| **Experience** | ❌ None | experience.module.css | Company cards |
| **Certifications** | ❌ None | certifications.module.css | Certificate grid |
| **Achievements** | ❌ None | achievements.module.css | Achievement cards |
| **Footer** | ❌ None | footer.module.css | Footer section |

### CSS Classes Pattern

Mỗi component có file `*.module.css` riêng với pattern:

```css
.section        /* Container main */
.heading        /* Title */
.content        /* Content wrapper */
.item           /* Individual item */
.card           /* Card element */
.button         /* CTA button */
/* ... etc */
```

**Lợi ích CSS Modules**:
- ✅ No CSS conflicts
- ✅ Scoped class names
- ✅ Easy maintenance
- ✅ Type-safe imports

---

## Deploy

### 🌐 Deployment Options

#### 1️⃣ Vercel (Recommended)

```bash
# Cài Vercel CLI
npm install -g vercel

# Deploy
vercel
```

✅ **Lợi ích**:
- Zero-config deployment
- Automatic scaling
- Preview URLs

#### 2️⃣ Netlify

1. Push code lên GitHub
2. Vào https://netlify.com
3. Kết nối GitHub repo
4. Auto-deploy trên push

#### 3️⃣ GitHub Pages

```bash
npm run build
# Push dist/ folder lên gh-pages branch
```

#### 4️⃣ Hosting Truyền Thống

```bash
npm run build
# Upload dist/ folder via FTP
```

---

### 📝 Pre-Deployment Checklist

- [ ] Tất cả TODO comments đã cập nhật
- [ ] Test trên mobile (F12 → Ctrl+Shift+M)
- [ ] Kiểm tra tất cả links hoạt động
- [ ] Update favicon
- [ ] Update meta tags (Open Graph)
- [ ] Run build: `npm run build`
- [ ] Test production build: `npm run preview`

---

# English - Complete Documentation

## 📖 Table of Contents (English)

1. [Project Overview](#project-overview-en)
2. [Quick Start](#quick-start-en)
3. [Project Structure](#project-structure-en)
4. [Customization Guide](#customization-guide-en)
5. [Data Management](#data-management-en)
6. [UI Customization](#ui-customization-en)
7. [Components Reference](#components-reference-en)
8. [Deployment](#deployment-en)

---

## Project Overview (EN)

A professional portfolio website built with **React 18 + TypeScript + CSS Modules** and **Vite** build tool.

### ✨ Key Features

- 🎨 **Modern Design** - Harmonious gradient colors, smooth animations
- 📱 **Fully Responsive** - Perfect on all devices (mobile → desktop)
- ⚡ **TypeScript Type-Safe** - Safe development with type checking
- 🎯 **Modular CSS** - CSS Modules with zero style conflicts
- 📊 **7 Complete Sections**:
  - 👤 Personal Information
  - 📚 Education (Timeline)
  - 💼 Work Experience
  - 🏆 Certifications (Grid)
  - 🌟 Achievements
  - 🔗 Footer

### 🎨 Color Palette

| Component | Description | Hex |
|-----------|-------------|-----|
| Primary Dark | Dark green | `#0f172a` |
| Primary Light | Light green | `#1e293b` |
| Accent Blue | Blue | `#3b82f6` |
| Accent Purple | Purple | `#8b5cf6` |
| Accent Cyan | Cyan | `#06b6d4` |
| Text Primary | White | `#f1f5f9` |
| Text Secondary | Light gray | `#cbd5e1` |

---

## Quick Start (EN)

### 1️⃣ Install Dependencies

```bash
cd d:\Project\Portfolio
npm install
```

### 2️⃣ Run Development Server

```bash
npm run dev
```

Server will automatically open: **http://localhost:3000**

### 3️⃣ Customize Your Portfolio

Search for `TODO` comments in these files:

| File | Update |
|------|--------|
| `Header.tsx` | 👤 Name + Job Title |
| `Personal.tsx` | 📷 Avatar + Info + Bio |
| `Education.tsx` | 🎓 School + Degree |
| `Experience.tsx` | 💼 Company + Role + Skills |
| `Certifications.tsx` | 📜 Certifications |
| `Achievements.tsx` | 🏆 Achievements |
| `Footer.tsx` | 🔗 Contact Info |

### 4️⃣ Build for Production

```bash
npm run build
```

Output: `dist/` folder

### 5️⃣ Deploy (Optional)

See [Deployment](#deployment-en) section below.

---

## Project Structure (EN)

### 📁 Directory Layout

```
d:\Project\Portfolio/
├── public/
│   └── assets/
│       ├── images/          # Project images, screenshots
│       └── icons/           # SVG icons, favicon
│
├── src/
│   ├── components/
│   │   ├── Header.tsx                           (Navigation)
│   │   ├── Personal.tsx                         (Personal Info)
│   │   ├── Education.tsx                        (Education Timeline)
│   │   ├── Experience.tsx                       (Work Experience)
│   │   ├── Certifications.tsx                   (Certificates)
│   │   ├── Achievements.tsx                     (Achievements)
│   │   ├── Footer.tsx                           (Footer)
│   │   └── *.module.css                         (Component Styles)
│   │
│   ├── data/
│   │   ├── index.ts                 # 🎯 Import from here
│   │   ├── personal.ts              # Personal info
│   │   ├── experiences.ts           # Work experience
│   │   ├── education.ts             # Education
│   │   ├── certifications.ts        # Certifications
│   │   ├── achievements.ts          # Achievements
│   │   ├── projects.ts              # Projects
│   │   ├── services.ts              # Services
│   │   └── skills.ts                # Skills
│   │
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   │
│   ├── styles/
│   │   ├── global.css               # Global styles
│   │   └── variables.css            # CSS variables
│   │
│   ├── utils/
│   │   ├── constants.ts             # App constants
│   │   └── helpers.ts               # Helper functions
│   │
│   ├── hooks/
│   │   └── useInViewport.ts         # Custom hooks
│   │
│   ├── App.tsx                      # Main component
│   ├── main.tsx                     # Entry point
│   └── vite-env.d.ts                # Vite types
│
├── .env.example                     # Environment template
├── .gitignore                       # Git ignore
├── .prettierrc                      # Code formatting
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tsconfig.node.json               # Node TypeScript config
├── vite.config.ts                   # Vite config
└── README.md                        # Main documentation
```

### 🎯 Folder Purposes

| Folder | Purpose |
|--------|---------|
| `/public/assets` | Static assets (images, icons) |
| `/src/components` | React components |
| `/src/data` | Centralized data files |
| `/src/types` | TypeScript type definitions |
| `/src/styles` | Global styles & CSS variables |
| `/src/utils` | Utility functions |
| `/src/hooks` | Custom React hooks |

---

## Customization Guide (EN)

### Header Component

**File**: `src/components/Header.tsx`

**Features**:
- 📱 **Responsive Dropdown Menu** - On mobile, header collapses to hamburger dropdown menu when scrolling
- 💻 **Desktop Unchanged** - On desktop, header keeps original layout
- ✨ **Smooth Animations** - Subtitle fade out, header collapse, hamburger animation

**How it works**:
- At top of page: Header displays normally with logo, subtitle, and navigation links
- When scrolling down (mobile ≤768px):
  - Header compacts (reduced padding)
  - Subtitle fades out
  - Navigation becomes hamburger button (3 lines)
  - Click hamburger to open dropdown menu
- On desktop (≥769px): No changes

```typescript
// TODO: Update your name
<h1>Your Name Here</h1>

// TODO: Update your job title
<p>Full Stack Developer | UI/UX Designer</p>
```

**What to do**:
- [ ] Update name
- [ ] Update job title

---

### Personal Component

**File**: `src/components/Personal.tsx`

```typescript
// TODO: Update avatar image
<img src="./assets/images/portfolio_header.jpg" alt="Avatar" />

// TODO: Update contact information
{
  "📞 Phone": "+1 (123) 456-7890",
  "📧 Email": "your.email@example.com",
  "📍 Location": "City, Country",
  "💼 Position": "Full Stack Developer"
}

// TODO: Update social media links
{
  "LinkedIn": "https://linkedin.com/in/your-username",
  "GitHub": "https://github.com/your-username",
  "Twitter": "https://twitter.com/your-handle"
}

// TODO: Write your bio
"Senior Full Stack Developer with 5+ years of experience..."
```

**What to do**:
- [ ] Update avatar image
- [ ] Update contact information
- [ ] Update social links
- [ ] Write your bio

---

### Education Component

**File**: `src/components/Education.tsx`

```typescript
interface EducationItem {
  school: string      // "University Name"
  degree: string      // "Bachelor", "Master", "Associate"
  field: string       // "Computer Science"
  startDate: string   // "2018"
  endDate: string     // "2022"
  description: string // "GPA: 3.8/4.0 - Cum Laude"
}
```

**What to do**:
- [ ] Add your schools
- [ ] Update degree level
- [ ] Update field of study
- [ ] Update start/end dates
- [ ] Add honors or achievements

---

### Experience Component

**File**: `src/components/Experience.tsx`

```typescript
interface ExperienceItem {
  company: string          // "Tech Company Inc"
  position: string         // "Senior Developer"
  startDate: string        // "Jan 2022"
  endDate: string          // "Present"
  description: string      // "Led frontend development team..."
  technologies: string[]   // ["React", "TypeScript", "Node.js"]
}
```

**What to do**:
- [ ] Add your companies
- [ ] Update position titles
- [ ] Update employment dates
- [ ] Write detailed descriptions
- [ ] List technologies used

---

### Certifications Component

**File**: `src/components/Certifications.tsx`

```typescript
interface CertificationItem {
  name: string              // "AWS Certified Solutions Architect"
  issuer: string            // "Amazon Web Services"
  issueDate: string         // "Jan 2023"
  expiryDate?: string       // "Jan 2026" (optional)
  credentialId?: string     // "ABC123XYZ" (optional)
  credentialUrl?: string    // "https://..." (optional)
}
```

**What to do**:
- [ ] Add your certifications
- [ ] Update issuing organization
- [ ] Update issue date
- [ ] Add expiry date (if applicable)
- [ ] Add credential verification links

---

### Achievements Component

**File**: `src/components/Achievements.tsx`

```typescript
interface AchievementItem {
  title: string       // "Employee of the Year"
  description: string // "Recognized for exceptional performance..."
  date: string        // "2023" or "2021-Present"
  icon: string        // Emoji: "⭐", "🚀", "💻", etc.
}
```

**Suggested Emojis**:
- ⭐ Star (Award)
- 🚀 Rocket (Launch/Promotion)
- 💻 Laptop (Tech achievement)
- 🎤 Microphone (Speaking)
- 🧑‍🏫 Teacher (Mentoring)
- 📜 Document (Patent/Publication)
- 🏅 Medal (Competition)
- 👑 Crown (Leadership)
- 🔥 Fire (Hot achievement)
- 💡 Lightbulb (Innovation)

**What to do**:
- [ ] Add your achievements
- [ ] Choose appropriate emojis
- [ ] Write detailed descriptions
- [ ] Update achievement dates

---

### Footer Component

**File**: `src/components/Footer.tsx`

```typescript
// TODO: Update email
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// TODO: Update phone
<a href="tel:+11234567890">
  +1 (123) 456-7890
</a>

// TODO: Update social links
// TODO: Update copyright information
```

**What to do**:
- [ ] Update email
- [ ] Update phone number
- [ ] Update social links
- [ ] Update copyright name and year

---

## Data Management (EN)

### 📊 Centralized Data System

Data is managed centrally in `src/data/`:

```
src/data/
├── index.ts              # 🎯 Import from here
├── personal.ts           # Personal info & social links
├── experiences.ts        # Work experience
├── education.ts          # Education
├── certifications.ts     # Certifications
├── achievements.ts       # Achievements
├── projects.ts           # Projects
├── services.ts           # Services
└── skills.ts             # Skills
```

### ✅ How to Use

**Import from '@data'**:

```typescript
// ✅ GOOD - Use alias
import { experiences, projects, personalInfo } from '@data';

// ❌ BAD - Relative paths
import { experiences } from '../../../data/experiences';
```

**In Components**:

```typescript
import { experiences } from '@data';

export const ExperienceSection = () => {
  return (
    <div>
      {experiences.map((exp) => (
        <article key={exp.id}>
          <h3>{exp.company}</h3>
          <p>{exp.position}</p>
          <p>{exp.description}</p>
        </article>
      ))}
    </div>
  );
};
```

### 🔄 Maintenance Flow

**Add new work experience?**
1. Open `src/data/experiences.ts`
2. Add object to array
3. ✅ Auto-updates all components

**Update personal info?**
1. Open `src/data/personal.ts`
2. Edit `personalInfo` or `socialLinks`
3. ✅ All components auto-update

### 💡 Best Practices

```typescript
// ✅ GOOD - Use unique IDs
{experiences.map((exp) => (
  <div key={exp.id}>{exp.company}</div>
))}

// ❌ BAD - Never use index as key
{experiences.map((exp, index) => (
  <div key={index}>{exp.company}</div>
))}
```

**Golden Rule**: Update data only in `src/data/` → all components auto-update! 🎯

---

## UI Customization (EN)

### 🎨 Colors

**File**: `src/styles/variables.css`

```css
:root {
  /* Primary Colors */
  --primary-color: #2563eb;
  --primary-dark: #1e40af;
  --primary-light: #3b82f6;

  /* Accent Colors */
  --secondary-color: #64748b;
  --secondary-light: #94a3b8;

  /* Text Colors */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-light: #9ca3af;

  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;

  /* Border Colors */
  --border-color: #e5e7eb;
}
```

### 🎨 Color Schemes

**1. Cool Blue**
```css
--primary-color: #007bff;
--accent-blue: #0dcaf0;
--accent-cyan: #0d6efd;
```

**2. Sunset**
```css
--primary-color: #ff6b6b;
--accent-purple: #ee5a6f;
--accent-blue: #ffa94d;
```

**3. Forest Green**
```css
--primary-color: #10b981;
--accent-cyan: #14b8a6;
--accent-blue: #06b6d4;
```

### 📐 Spacing

```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;
```

### 🔤 Font Sizes

```css
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
```

### 🌒 Dark Mode

Dark mode is automatically supported via `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f9fafb;
    --bg-primary: #111827;
    /* ... more dark theme colors */
  }
}
```

---

## Components Reference (EN)

### Component Overview

| Component | Purpose | Props | Notes |
|-----------|---------|-------|-------|
| **Header** | Navigation | ❌ None | Sticky header |
| **Personal** | Contact Info | ❌ None | Avatar + Info |
| **Education** | Education Timeline | ❌ None | Vertical timeline |
| **Experience** | Work History | ❌ None | Company cards |
| **Certifications** | Certificates | ❌ None | Grid layout |
| **Achievements** | Accomplishments | ❌ None | Achievement cards |
| **Footer** | Footer | ❌ None | Contact & links |

### CSS Modules Pattern

Each component has its own `*.module.css`:

```typescript
// Header.tsx
import styles from './Header.module.css';

export const Header = () => {
  return <header className={styles.header}>...</header>;
};
```

**Benefits**:
- ✅ No CSS conflicts
- ✅ Scoped class names
- ✅ Easy to maintain
- ✅ Type-safe imports

---

## Deployment (EN)

### 🌐 Deployment Options

#### 1️⃣ Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

✅ **Benefits**:
- Zero-config deployment
- Automatic scaling
- Built-in analytics
- Preview URLs
- Free tier available

#### 2️⃣ Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Connect GitHub repo
4. Auto-deploy on push

#### 3️⃣ GitHub Pages

```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

#### 4️⃣ Traditional Hosting

```bash
npm run build
# Upload dist/ folder via FTP
```

---

### 📝 Pre-Deployment Checklist

- [ ] All TODO comments updated
- [ ] Mobile testing done (F12 → Ctrl+Shift+M)
- [ ] All links working
- [ ] Favicon updated
- [ ] Meta tags updated
- [ ] Production build tested: `npm run preview`
- [ ] No console errors
- [ ] Images optimized
- [ ] Performance checked

---

## Tech Stack

```json
{
  "framework": "React 18",
  "language": "TypeScript 5",
  "styling": "CSS Modules",
  "builder": "Vite 4",
  "package-manager": "npm"
}
```

## Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

## DevDependencies

```json
{
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "@vitejs/plugin-react": "^4.0.0",
  "typescript": "^5.0.0",
  "vite": "^4.0.0"
}
```

---

## Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint            # Run linter (if configured)
npm run type-check      # TypeScript type checking
```

---

## Responsive Design

Website is optimized for:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1024px+)
- 🖥️ Wide (1440px+)

All components use flexbox and CSS Grid for responsive layouts.

---

## Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

---

## Performance Tips

1. **Images**: Optimize before uploading
   - Use tools like TinyPNG, ImageOptim
   - Use modern formats (WebP if possible)

2. **Code Splitting**: Vite handles automatically

3. **CSS**: 
   - CSS Modules scope styles
   - No unused CSS shipped

4. **Builds**: 
   - Production build: `npm run build`
   - Check with: `npm run preview`

---

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- --port 3001
```

### Styles not applying?
- Check CSS module import
- Verify class names match
- Restart dev server

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript errors?
- Update `tsconfig.json`
- Check type definitions
- Verify import paths

---

## Contributing & Support

- 📖 Full documentation included
- 💬 Comments in code
- 🔍 Search for `TODO` to find customization points
- 📧 Update contact info in Footer

---

## License

This project is for personal use. Feel free to customize and deploy!

---

## Additional Resources

### Documentation
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Vite Docs](https://vitejs.dev)
- [CSS Modules](https://github.com/css-modules/css-modules)

### Tools
- [Cloudinary](https://cloudinary.com) - Image hosting
- [Vercel](https://vercel.com) - Deployment
- [Netlify](https://netlify.com) - Deployment
- [GitHub Pages](https://pages.github.com) - Free hosting

### Learning
- [Google Fonts](https://fonts.google.com) - Typography
- [Color Hunt](https://colorhunt.co) - Color palettes
- [Unsplash](https://unsplash.com) - Free images
- [Pexels](https://pexels.com) - Free images

---

## Good Luck! 🚀

You now have a complete, professional portfolio website. Customize it with your information and share it with the world!

**Happy coding!** 💻✨

---

**Document Version**: 1.0.0  
**Last Updated**: March 2026  
**Language**: Vietnamese & English
