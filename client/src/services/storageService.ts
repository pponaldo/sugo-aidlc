import { DiaryEntry } from '../types';

const STORAGE_KEY = 'sugo-entries';

export function saveEntry(entry: DiaryEntry): void {
  const entries = getAllEntries();
  entries.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function getAllEntries(): DiaryEntry[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function getEntryById(id: string): DiaryEntry | null {
  return getAllEntries().find((e) => e.id === id) || null;
}

export function getEntriesByMonth(year: number, month: number): DiaryEntry[] {
  return getAllEntries().filter((e) => {
    const d = new Date(e.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
}
