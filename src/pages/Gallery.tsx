import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Music } from 'lucide-react';
import PerformanceCalendar from '../components/PerformanceCalendar';

// ---------------------------------------------------------------------------
// PERFORMANCE LIST — add new shows here (date format: 'YYYY-MM-DD').
// Shows dated today or earlier appear under "Performances Completed" and are counted
// automatically; future dates appear under "Upcoming Performances".
// ---------------------------------------------------------------------------
type Performance = { location: string; date: string; time?: string };

const performances: Performance[] = [
  { location: 'Hillsborough Library', date: '2025-09-16' },
  { location: 'Montgomery Senior Center', date: '2026-02-17' },
  { location: 'Montgomery Library', date: '2026-03-14' },
  { location: 'Quail Brook Senior Center', date: '2026-03-30' },
  { location: 'Montgomery High School (Jamnesty Festival)', date: '2026-04-24' },
  { location: 'West Windsor Library', date: '2026-06-06' },
  { location: 'Montgomery High School (Professional Band Gig)', date: '2026-06-12' },
  { location: 'Princeton Learning Experience Daycare', date: '2026-07-10' },
  { location: 'Franklin Township Senior Center', date: '2026-08-17' },
  { location: 'Brookdale Senior Living Center (Hillsborough Branch)', date: '2026-08-21' },
  { location: 'Trenton Farmers Market', date: '2026-09-12' },
  { location: 'Ciel Princeton', date: '2026-09-13' },
  { location: 'Hunterdon County Library', date: '2026-10-01' },
  { location: 'Manville Library', date: '2026-11-06', time: '10:30 AM - 12:00 PM' },
  { location: 'Monroe Library', date: '2026-11-08', time: '11:00 AM - 12:00 PM' },
];

const parseDate = (d: string) => {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(y, m - 1, day);
};

const formatDate = (d: string) =>
  parseDate(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

// Counts up from 0 to the target number for a lively counter effect
const useCountUp = (target: number, duration = 1500) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
};

const Gallery = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sorted = [...performances].sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
  const pastPerformances = sorted.filter((p) => parseDate(p.date) <= today);
  const upcomingPerformances = sorted.filter((p) => parseDate(p.date) > today);
  const performanceCount = useCountUp(pastPerformances.length);
  const upcomingCount = useCountUp(upcomingPerformances.length);

  // Unique locations, in order of their first performance
  const locations = Array.from(new Set(sorted.map((p) => p.location)));
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const selectedShows = sorted.filter((p) => p.location === selectedLocation);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 via-white to-sky-50 pt-20 pb-12">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Performances
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments of musical excellence and community connection through our performances.
            </p>
          </div>

          {/* Locations */}
          <div className="mb-10">
            <p className="flex items-center justify-center gap-1 text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              Locations:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {locations.map((loc) => {
                const active = loc === selectedLocation;
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setSelectedLocation(active ? null : loc)}
                    aria-pressed={active}
                    className={`px-3 py-1 rounded-full border text-xs font-medium transition-colors ${
                      active
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 border-orange-500 text-white shadow'
                        : 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100 hover:border-amber-400'
                    }`}
                  >
                    {loc}
                  </button>
                );
              })}
            </div>

            {selectedLocation && (
              <div className="mt-4 max-w-xl mx-auto bg-white rounded-2xl border-2 border-amber-300 shadow-md p-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{selectedLocation}</h3>
                  <button
                    type="button"
                    onClick={() => setSelectedLocation(null)}
                    className="text-gray-400 hover:text-gray-700 text-sm"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
                <ul className="space-y-2">
                  {selectedShows.map((p) => {
                    const upcoming = parseDate(p.date) > today;
                    return (
                      <li key={p.date} className="flex items-center justify-between gap-4 bg-amber-50 rounded-xl px-4 py-3 border border-amber-100">
                        <span className="text-gray-900 font-medium">
                          {formatDate(p.date)}
                          {p.time && <span className="block text-gray-500 text-sm font-normal">{p.time}</span>}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${upcoming ? 'bg-sky-100 text-sky-700' : 'bg-emerald-100 text-emerald-700'}`}>
                          {upcoming ? 'Upcoming' : 'Completed'}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Upcoming & Past Performances */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Music className="w-7 h-7 text-orange-500" />
                  Performances Completed
                </h2>
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl px-5 py-3 text-center shadow-md shrink-0">
                  <div className="text-3xl font-bold text-white tabular-nums leading-none">{performanceCount}</div>
                </div>
              </div>
              <ul className="space-y-3 max-h-[32rem] overflow-y-auto pr-1">
                {pastPerformances.map((p) => (
                  <li key={p.location + p.date} className="flex items-start justify-between gap-4 bg-white rounded-xl p-4 border border-amber-200 hover:border-orange-400 transition-colors">
                    <span className="font-medium text-gray-900">{p.location}</span>
                    <span className="text-orange-600 font-medium whitespace-nowrap">{formatDate(p.date)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-indigo-100 rounded-3xl p-6 md:p-8 border border-sky-200 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowCalendar(true)}
                    className="p-1 -m-1 rounded-lg hover:bg-sky-200 transition-colors"
                    aria-label="Open performance calendar"
                    title="Open calendar"
                  >
                    <Calendar className="w-7 h-7 text-sky-500" />
                  </button>
                  Upcoming Performances
                </h2>
                <div className="bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl px-5 py-3 text-center shadow-md shrink-0">
                  <div className="text-3xl font-bold text-white tabular-nums leading-none">{upcomingCount}</div>
                </div>
              </div>
              {upcomingPerformances.length > 0 ? (
                <ul className="space-y-3">
                  {upcomingPerformances.map((p) => (
                    <li key={p.location + p.date} className="flex items-start justify-between gap-4 bg-white rounded-xl p-4 border border-sky-200 hover:border-sky-400 transition-colors">
                      <span className="font-medium text-gray-900">{p.location}</span>
                      <span className="text-right whitespace-nowrap">
                        <span className="block text-sky-700 font-semibold">{formatDate(p.date)}</span>
                        {p.time && <span className="block text-gray-500 text-sm">{p.time}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-lg leading-relaxed">
                  New dates are being scheduled — check back soon! Interested in hosting The Luce Quintet?{' '}
                  <Link to="/contact" className="text-sky-700 hover:text-sky-500 font-semibold underline underline-offset-2">Get in touch</Link>.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showCalendar && <PerformanceCalendar shows={sorted} onClose={() => setShowCalendar(false)} />}
    </div>
  );
};


export default Gallery;
