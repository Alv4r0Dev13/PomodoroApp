import zeroLeft from './zeroLeft';

export default function secondsToTime(seconds: number = 0): string {
  const hrs = zeroLeft(seconds / 3600);
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${hrs}h ${min}m ${sec}s`;
}
