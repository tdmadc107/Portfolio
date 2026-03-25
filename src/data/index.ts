/**
 * Central data export file
 * Tất cả dữ liệu portfolio được quản lý ở một nơi
 * Chỉ cần import từ '@data' là có tất cả
 */

// Import từ các file riêng biệt
export * from './experiences';
export * from './education';
export * from './certifications';
export * from './achievements';
export * from './projects';
export * from './services';
export * from './skills';
export * from './personal';

// Hoặc nếu muốn group lại:
export {
  experiences,
} from './experiences';
export {
  educations,
} from './education';
export {
  certifications,
} from './certifications';
export {
  achievements,
} from './achievements';
export {
  projects,
} from './projects';
export {
  services,
} from './services';
export {
  skillsData,
} from './skills';
export {
  personalInfo,
  socialLinks,
} from './personal';
