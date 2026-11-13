import { planets, moons } from './data.ts';
export const allIds = new Set([...planets, ...moons].map(item => item.id));
export function parseProgress(raw: string | null): string[] {
  try { const value: unknown = JSON.parse(raw ?? '[]'); return Array.isArray(value) ? [...new Set(value.filter((id): id is string => typeof id === 'string' && allIds.has(id)))] : []; } catch { return []; }
}
export function diameterRatio(left: number, right: number): number {
  if (!Number.isFinite(left) || !Number.isFinite(right) || left <= 0 || right <= 0) throw new RangeError('Diameter must be positive');
  return left / right;
}
export const number = (value: number) => new Intl.NumberFormat('ru-RU', {maximumFractionDigits:1}).format(value);
