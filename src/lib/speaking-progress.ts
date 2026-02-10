// 口语练习进度保存和管理

export interface SpeakingProgress {
  grade: number;
  currentIndex: number;
  completedCount: number;
  totalCount: number;
  timestamp: number;
  totalExercises: number;
}

const STORAGE_KEY = 'speaking-progress';

// 保存进度
export const saveSpeakingProgress = (progress: SpeakingProgress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save speaking progress:', error);
  }
};

// 获取进度
export const getSpeakingProgress = (): SpeakingProgress | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to get speaking progress:', error);
  }
  return null;
};

// 清除进度
export const clearSpeakingProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear speaking progress:', error);
  }
};

// 检查是否有有效的进度
export const hasValidSpeakingProgress = (): boolean => {
  const progress = getSpeakingProgress();
  if (!progress) return false;
  
  // 检查进度是否超过24小时（过期）
  const oneDay = 24 * 60 * 60 * 1000;
  if (Date.now() - progress.timestamp > oneDay) {
    clearSpeakingProgress();
    return false;
  }
  
  return true;
};

// 获取进度保存的时间
export const getSpeakingProgressAge = (): string => {
  const progress = getSpeakingProgress();
  if (!progress) return '';
  
  const minutes = Math.floor((Date.now() - progress.timestamp) / 60000);
  if (minutes < 60) return `${minutes}分钟前`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}小时前`;
  
  return `${Math.floor(hours / 24)}天前`;
};
