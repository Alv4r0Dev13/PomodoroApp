import zeroLeft from './zeroLeft';

export default function secondsToMinutes(seconds: number = 0): string {
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}
