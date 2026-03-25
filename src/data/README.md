# Data Management Guide - Quản lý dữ liệu tập trung

## 📋 Cấu trúc Thư mục

```
src/data/
├── index.ts              # 🎯 Export tất cả dữ liệu (import từ đây)
├── personal.ts           # 👤 Thông tin cá nhân
├── experiences.ts        # 💼 Kinh nghiệm làm việc
├── education.ts          # 🎓 Học vấn
├── certifications.ts     # 📜 Chứng chỉ
├── achievements.ts       # 🏆 Thành tựu
├── projects.ts           # 🚀 Dự án
├── services.ts           # 🛠️ Dịch vụ
└── skills.ts             # 💻 Kỹ năng
```

## 🎯 Cách sử dụng

### Import dữ liệu

```tsx
// ✅ Cách tốt: Import từ '@data'
import { experiences, projects, personalInfo } from '@data';

// Hoặc import riêng lẻ
import { experiences } from '@data/experiences';
import { projects } from '@data/projects';
```

### Trong Component

```tsx
import { experiences, projects } from '@data';

export const ExperienceSection = () => {
  return (
    <div>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <h3>{exp.company}</h3>
          <p>{exp.position}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};
```

## 📝 Cách Chỉnh sửa Dữ liệu

### ❌ Sai
```tsx
// Không nên hardcode dữ liệu trong component
export const ExperienceSection = () => {
  const data = [
    { id: '1', company: 'ABC', position: '...' },
    { id: '2', company: 'XYZ', position: '...' },
  ];
  // ...
};
```

### ✅ Đúng
```tsx
// Tất cả dữ liệu centralized trong src/data/
// Chỉ cần sửa ở một chỗ

// src/data/experiences.ts
export const experiences = [
  { id: '1', company: 'ABC', position: '...' },
  { id: '2', company: 'XYZ', position: '...' },
];

// src/components/sections/Experience.tsx
import { experiences } from '@data';
export const ExperienceSection = () => {
  return (
    <div>
      {experiences.map((exp) => (...))}
    </div>
  );
};
```

## 🔄 Luồng Maintenance

### Muốn thêm kinh nghiệm mới?
1. Mở `src/data/experiences.ts`
2. Thêm object vào array `experiences`
3. Tự động cập nhật ở tất cả component sử dụng nó

### Muốn thêm dự án mới?
1. Mở `src/data/projects.ts`
2. Thêm object vào array `projects`
3. Tự động hiển thị ở section Projects

### Muốn chỉnh sửa thông tin cá nhân?
1. Mở `src/data/personal.ts`
2. Cập nhật `personalInfo` hoặc `socialLinks`
3. Tất cả component dùng nó đều cập nhật

## 📊 Dữ liệu có sẵn

### Personal (personal.ts)
```typescript
personalInfo   // Thông tin cá nhân
socialLinks    // Liên kết mạng xã hội
```

### Experience (experiences.ts)
```typescript
experiences    // Danh sách kinh nghiệm làm việc
```

### Education (education.ts)
```typescript
educations     // Danh sách học vấn
```

### Certifications (certifications.ts)
```typescript
certifications // Danh sách chứng chỉ
```

### Achievements (achievements.ts)
```typescript
achievements   // Danh sách thành tựu
```

### Projects (projects.ts)
```typescript
projects       // Danh sách dự án
```

### Services (services.ts)
```typescript
services       // Danh sách dịch vụ
```

### Skills (skills.ts)
```typescript
skillsData     // Kỹ năng theo categories
```

## 💡 Best Practices

### 1. **Luôn import từ '@data'**
```tsx
// ✅ Tốt
import { experiences } from '@data';

// ❌ Tránh
import { experiences } from '../data/experiences';
```

### 2. **Không modify dữ liệu trong component**
```tsx
// ❌ Không
const sorted = experiences.sort(...);

// ✅ Tốt - Sửa ở file data
// Hoặc dùng useMemo/useState nếu cần
const [sorted] = useMemo(() => {
  return experiences.sort(...);
}, []);
```

### 3. **Dùng id để identify**
```tsx
// ✅ Tốt
{experiences.map((exp) => (
  <div key={exp.id}>{exp.company}</div>
))}

// ❌ Tránh
{experiences.map((exp, index) => (
  <div key={index}>{exp.company}</div>
))}
```

### 4. **Giữ dữ liệu fresh và đủ chi tiết**
```tsx
// ✅ Đủ thông tin
{
  company: 'Tech Corp',
  position: 'Senior Developer',
  description: 'Làm việc với React, TypeScript...',
  technologies: ['React', 'TypeScript'],
}

// ❌ Thiếu thông tin
{
  company: 'Tech Corp',
  position: 'Developer',
}
```

## 🚀 Lợi ích

✅ **Dễ maintenance** - Sửa duy nhất một nơi  
✅ **Dễ mở rộng** - Thêm loại dữ liệu mới dễ dàng  
✅ **Dễ quản lý** - Tất cả dữ liệu ở một folder  
✅ **Tái sử dụng** - Import và dùng ở bất kỳ component nào  
✅ **Type-safe** - TypeScript auto-complete  
✅ **Scalable** - Cấu trúc support dự án lớn  

---

**Quy tắc vàng:** Nếu chỉnh sửa dữ liệu, chỉ cần sửa ở `src/data/` 🎯
