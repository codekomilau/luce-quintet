import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type CalendarShow = { location: string; date: string; time?: string };

type Props = {
  shows: CalendarShow[];
  onClose: () => void;
};

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const toKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const PerformanceCalendar = ({ shows, onClose }: Props) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = toKey(today);

  // Open on the month of the next upcoming show, or the current month if none
  const next = shows.map((s) => s.date).sort().find((d) => d >= todayKey);
  const start = next ? new Date(Number(next.slice(0, 4)), Number(next.slice(5, 7)) - 1, 1) : new Date(today.getFullYear(), today.getMonth(), 1);

  const [month, setMonth] = useState(start);
  const [selectedKey, setSelectedKey] = useState<string | null>(next ?? null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const byDate = new Map<string, CalendarShow[]>();
  shows.forEach((s) => byDate.set(s.date, [...(byDate.get(s.date) ?? []), s]));

  const year = month.getFullYear();
  const m = month.getMonth();
  const firstWeekday = new Date(year, m, 1).getDay();
  const daysInMonth = new Date(year, m + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, m, i + 1)),
  ];
  // Always show 6 weeks so the calendar keeps the same height every month
  while (cells.length < 42) cells.push(null);

  const selectedShows = selectedKey ? byDate.get(selectedKey) ?? [] : [];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Performance calendar"
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => { setMonth(new Date(year, m - 1, 1)); setSelectedKey(null); }}
            className="p-2 rounded-full hover:bg-sky-100 text-sky-700"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-bold text-gray-900">
            {month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => { setMonth(new Date(year, m + 1, 1)); setSelectedKey(null); }}
              className="p-2 rounded-full hover:bg-sky-100 text-sky-700"
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
              aria-label="Close calendar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500 mb-1">
          {WEEKDAYS.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {cells.map((d, i) => {
            if (!d) return <div key={`blank-${i}`} className="h-10" />;
            const key = toKey(d);
            const hasShow = byDate.has(key);
            const isUpcoming = key >= todayKey;
            const isSelected = key === selectedKey;
            const isToday = key === todayKey;
            const base = 'h-10 rounded-xl text-sm flex items-center justify-center transition-colors';
            const style = hasShow
              ? isUpcoming
                ? 'bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-bold cursor-pointer hover:opacity-90'
                : 'bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold cursor-pointer hover:opacity-90'
              : 'text-gray-700';
            return (
              <button
                key={key}
                type="button"
                disabled={!hasShow}
                onClick={() => setSelectedKey(key)}
                className={`${base} ${style} ${isSelected ? 'ring-2 ring-offset-2 ring-gray-900' : ''} ${
                  isToday && !hasShow ? 'border border-sky-400' : ''
                }`}
              >
                {d.getDate()}
              </button>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-gradient-to-br from-amber-400 to-orange-500" /> Completed
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-gradient-to-br from-sky-400 to-indigo-500" /> Upcoming
          </span>
        </div>

        {/* Fixed-height details area so the calendar size never changes */}
        <div className="mt-4 h-24 bg-sky-50 border border-sky-200 rounded-xl p-4 overflow-y-auto">
          {selectedShows.length === 0 ? (
            <p className="h-full flex items-center justify-center text-sm text-gray-500">
              Click a highlighted date to see the performance.
            </p>
          ) : (
            selectedShows.map((s) => (
              <div key={s.location}>
                <p className="font-semibold text-gray-900">{s.location}</p>
                <p className="text-sm text-gray-600">
                  {new Date(Number(s.date.slice(0, 4)), Number(s.date.slice(5, 7)) - 1, Number(s.date.slice(8, 10))).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                  {s.time && ` · ${s.time}`}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceCalendar;
