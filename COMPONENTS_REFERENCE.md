# 📖 Components Reference

## Overview

Tất cả 7 components chính với các props, types, và styling details.

---

## 1. Header Component

**File**: `src/components/Header.tsx`

### Purpose
Navigation header với sticky positioning, logo, và menu links.

### Props
None - Component này không nhận props.

### Interface Types
```typescript
// No interfaces needed - static data
```

### Features
- 🔨 Sticky header
- 📱 Responsive navigation
- ✨ Gradient text effect
- 🎨 Hover animations trên links

### Things to Customize

```typescript
// Header.tsx - Line 9
<h1>Nguyễn Văn A</h1>  // → Thay tên của bạn

// Header.tsx - Line 10
<p>Full Stack Developer | UI/UX Enthusiast</p>  // → Thay chức danh
```

### CSS Classes
- `.header` - Container chính
- `.nav` - Navigation wrapper
- `.logo` - Logo section
- `.navLinks` - Navigation links list
- `.navLinks a` - Individual links

---

## 2. Personal Component

**File**: `src/components/Personal.tsx`

### Purpose
Thông tin cá nhân, ảnh, bio, và social media links.

### Props
None - Component này không nhận props.

### Interface Types
```typescript
// No interfaces - cả dữ liệu đều hardcoded
```

### Features
- 👤 Avatar image with border gradient
- 📋 Personal information cards
- 🔗 Social media buttons
- 📝 Bio section
- 🎨 Gradient text effects

### Things to Customize

```typescript
// Personal.tsx - Image
<img src="https://via.placeholder.com/150" alt="Avatar" />
// → Dán URL ảnh của bạn

// Personal.tsx - Contact details
- Số điện thoại: "+84 (0) 123 456 789"
- Email: "your.email@example.com"
- Địa chỉ: "Hà Nội, Việt Nam"

// Personal.tsx - Social links
- LinkedIn: "https://linkedin.com"
- GitHub: "https://github.com"

// Personal.tsx - Bio
"Lập trình viên Full Stack với hơn 5 năm kinh nghiệm..."
// → Viết mô tả của bạn
```

### CSS Classes
- `.personal` - Section container
- `.content` - Grid layout
- `.avatar` - Avatar image
- `.info` - Info section
- `.heading` - Section heading
- `.details` - Info items grid
- `.item` - Individual info item
- `.socials` - Social links container
- `.bio` - Bio section

---

## 3. Education Component

**File**: `src/components/Education.tsx`

### Purpose
Hiển thị học vấn dưới dạng timeline.

### Props
None

### Interface Types
```typescript
interface EducationItem {
  school: string      // Tên trường
  degree: string      // Cấp bằng: "Cử Nhân", "Cao Đẳng", etc.
  field: string       // Ngành học: "Công Nghệ Thông Tin"
  startDate: string   // Năm bắt đầu: "2018"
  endDate: string     // Năm kết thúc: "2022"
  description: string // Mô tả hoặc thành tích
}
```

### Features
- 📚 Vertical timeline layout
- 🎯 Timeline markers với gradient line
- 🎨 Card-based design
- 💫 Hover animations
- 📱 Responsive grid

### Things to Customize

```typescript
// Education.tsx - Mảng educationData
const educationData: EducationItem[] = [
  {
    school: 'Your University Name',
    degree: 'Cử Nhân / Thạc Sĩ / etc.',
    field: 'Your Field of Study',
    startDate: 'YYYY',
    endDate: 'YYYY',
    description: 'Your achievement or honors'
  },
  // Thêm nhiều items khác nếu cần
]
```

### CSS Classes
- `.education` - Section container
- `.heading` - Section heading
- `.timeline` - Timeline container với pseudo-element line
- `.timelineItem` - Individual timeline item
- `.marker` - Timeline circular marker
- `.card` - Content card
- `.period` - Date badge

---

## 4. Experience Component

**File**: `src/components/Experience.tsx`

### Purpose
Hiển thị kinh nghiệm làm việc với công ty, vị trí, và kỹ năng.

### Props
None

### Interface Types
```typescript
interface ExperienceItem {
  company: string          // Tên công ty
  position: string         // Chức danh: "Senior Dev", "Junior Dev"
  startDate: string        // "Jan 2022", "March 2020"
  endDate: string          // "Present" hoặc "Dec 2021"
  description: string      // Mô tả công việc
  technologies: string[]   // ["React", "TypeScript", "Node.js"]
}
```

### Features
- 💼 Company & position display
- 📅 Date badges
- 🏷️ Technology tags/badges
- 📝 Detailed descriptions
- 💫 Hover lift effects
- 📱 Responsive grid

### Things to Customize

```typescript
// Experience.tsx - Mảng experienceData
const experienceData: ExperienceItem[] = [
  {
    company: 'Company Name',
    position: 'Your Job Title',
    startDate: 'Month Year',  // "Jan 2022"
    endDate: 'Present or Month Year',
    description: 'What you did here...',
    technologies: ['Tech1', 'Tech2', 'Tech3']
  }
]
```

### CSS Classes
- `.experience` - Section container
- `.heading` - Section heading
- `.experienceList` - Cards container
- `.experienceCard` - Individual card
- `.header` - Card header
- `.position` - Position title
- `.company` - Company name
- `.period` - Date badge
- `.description` - Job description
- `.technologies` - Tech tags container
- `.badge` - Individual technology tag

---

## 5. Certifications Component

**File**: `src/components/Certifications.tsx`

### Purpose
Hiển thị chứng chỉ và credentials dưới dạng grid cards.

### Props
None

### Interface Types
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

### Features
- 🏆 Grid card layout
- 🎓 Icon badges (emoji)
- 📅 Issue & expiry dates
- 🔗 Credential verification links
- 💫 Hover lift effects
- 📱 Responsive grid 3-4 items per row

### Things to Customize

```typescript
// Certifications.tsx - Mảng certificationsData
const certificationsData: CertificationItem[] = [
  {
    name: 'Certification Name',
    issuer: 'Organization Name',
    issueDate: 'Month Year',
    expiryDate: 'Month Year (optional)',
    credentialId: 'Your ID (optional)',
    credentialUrl: 'https://certification-link.com'
  }
]
```

### CSS Classes
- `.certifications` - Section container
- `.heading` - Section heading
- `.certificationsGrid` - Grid container
- `.certCard` - Individual certificate card
- `.icon` - Icon emoji
- `.name` - Certificate name
- `.issuer` - Issuing organization
- `.dates` - Date container
- `.link` - Verification link button

---

## 6. Achievements Component

**File**: `src/components/Achievements.tsx`

### Purpose
Hiển thị thành tích, giải thưởng, và vinh danh.

### Props
None

### Interface Types
```typescript
interface AchievementItem {
  title: string       // "Employee of the Year"
  description: string // "Được vinh danh vì..."
  date: string        // "2023" hoặc "2020-Present"
  icon: string        // Emoji: "⭐", "🚀", "💻", etc.
}
```

### Features
- 🌟 Icon-based cards
- 📊 Grid layout 3 items per row
- 📝 Titles & descriptions
- 📅 Date display
- ✨ Top gradient bar decoration
- 💫 Hover animations

### Things to Customize

```typescript
// Achievements.tsx - Mảng achievementsData
const achievementsData: AchievementItem[] = [
  {
    title: 'Achievement Title',
    description: 'Detailed description...',
    date: '2023',  // Can be "2023" or "2021-Present"
    icon: '⭐'     // Any emoji
  }
]
```

### Suggested Icons
- ⭐ Star (Award)
- 🚀 Rocket (Launch/Promotion)
- 💻 Laptop (Tech achievement)
- 🎤 Microphone (Speaking/Presentation)
- 🧑‍🏫 Teacher (Mentoring)
- 📜 Document (Patent/Publication)
- 🏅 Medal (Competition)
- 👑 Crown (Leadership)
- 🔥 Fire (Hot achievement)
- 💡 Lightbulb (Innovation)

### CSS Classes
- `.achievements` - Section container
- `.heading` - Section heading
- `.achievementsGrid` - Grid container (3 columns)
- `.achievementCard` - Individual card
- `.badge` - Icon badge
- `.title` - Achievement title
- `.date` - Date display
- `.description` - Achievement description

---

## 7. Footer Component

**File**: `src/components/Footer.tsx`

### Purpose
Footer với contact info, navigation, at social links.

### Props
None

### Features
- 📞 Contact information
- 🔗 Social media links
- 📱 Navigation links
- 📅 Auto-current year copyright
- 🎨 Gradient divider
- 📱 Responsive 3-column grid

### Things to Customize

```typescript
// Footer.tsx - Contact section
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

<a href="tel:+84123456789">
  +84 (0) 123 456 789
</a>

// Footer.tsx - Social links
<a href="https://linkedin.com">LinkedIn</a>
<a href="https://github.com">GitHub</a>
<a href="https://twitter.com">Twitter/X</a>

// Footer.tsx - Copyright
<p>&copy; {currentYear} Your Name. All rights reserved.</p>
```

### CSS Classes
- `.footer` - Footer container
- `.content` - Content grid
- `.section` - Individual section
- `.socialLinks` - Social links list
- `.navLinks` - Navigation links
- `.divider` - Gradient divider line
- `.bottom` - Bottom copyright section

---

## 🎨 App Component

**File**: `src/components/App.tsx`

### Purpose
Main component - orchestrates tất cả sections.

### Props
None

### Structure
```typescript
<div className={styles.container}>
  <Header />
  <main className={styles.main}>
    <Personal />
    <Education />
    <Experience />
    <Certifications />
    <Achievements />
  </main>
  <Footer />
</div>
```

### CSS Classes
- `.container` - Main flex container
- `.main` - Main content area with max-width

---

## 🎯 Data Flow Summary

```
App.tsx
├── Header (navigation)
├── Personal (contact info)
├── Education (timeline array)
├── Experience (work array)
├── Certifications (credentials array)
├── Achievements (accomplishments array)
└── Footer (contact & nav)
```

---

## 💡 Tips for Customization

1. **Start with Header** - Update name & title first
2. **Add Avatar** - Personal.tsx image
3. **Fill Basic Info** - Phone, email, address
4. **Add Work History** - Experience section
5. **Add Education** - Education timeline
6. **Add Certs** - Certifications
7. **Add Achievements** - Showcase your wins
8. **Update Footer** - Final contact info

---

## 🔧 Common Customizations

### Adding More Experience Items
```typescript
const experienceData: ExperienceItem[] = [
  // ... existing items
  {
    company: 'New Company',
    position: 'New Position',
    // ... rest of data
  }
]
```

### Changing Icons in Achievements
```typescript
{
  title: 'My Achievement',
  icon: '🎯'  // Change emoji
}
```

### Adding New Social Links
```typescript
<a href="https://your-portfolio.com">Portfolio</a>
```

### Updating Colors
Edit `src/index.css` CSS variables:
```css
--accent-blue: #your-color;
```

---

## ✅ Validation Checklist

- [ ] All TODO comments identified
- [ ] Personal information complete
- [ ] Education details accurate
- [ ] Experience entries detailed
- [ ] Certifications verified
- [ ] Achievements meaningful
- [ ] Social links working
- [ ] Images loading properly
- [ ] No typos in content
- [ ] Tested on mobile

---

**Happy customizing! 🎨**
