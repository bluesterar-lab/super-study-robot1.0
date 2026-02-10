// 数学学习进度保存和管理

export interface MathProgress {
  grade: number;
  category: string | null;
  currentQuestionIndex: number;
  correctCount: number;
  totalCount: number;
  timestamp: number;
  totalQuestions: number;
}

const STORAGE_KEY = 'math-progress';

// 保存进度
export const saveMathProgress = (progress: MathProgress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save math progress:', error);
  }
};

// 获取进度
export const getMathProgress = (): MathProgress | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to get math progress:', error);
  }
  return null;
};

// 清除进度
export const clearMathProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear math progress:', error);
  }
};

// 检查是否有有效的进度
export const hasValidMathProgress = (): boolean => {
  const progress = getMathProgress();
  if (!progress) return false;
  
  // 检查进度是否超过24小时（过期）
  const oneDay = 24 * 60 * 60 * 1000;
  if (Date.now() - progress.timestamp > oneDay) {
    clearMathProgress();
    return false;
  }
  
  return true;
};

// 获取进度保存的时间
export const getMathProgressAge = (): string => {
  const progress = getMathProgress();
  if (!progress) return '';
  
  const minutes = Math.floor((Date.now() - progress.timestamp) / 60000);
  if (minutes < 60) return `${minutes}分钟前`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}小时前`;
  
  return `${Math.floor(hours / 24)}天前`;
};
