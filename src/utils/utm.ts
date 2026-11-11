import { UtmParams } from '../types/lead';

const UTM_STORAGE_KEY = 'forz_feirao_utms';

export function captureUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const keys: (keyof UtmParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'fbclid',
    'gclid',
  ];

  const current: UtmParams = {};
  let hasAny = false;

  for (const key of keys) {
    const val = params.get(key);
    if (val) {
      current[key] = val;
      hasAny = true;
    }
  }

  if (hasAny) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(current));
    } catch {
      // Ignore storage failures in private browsing
    }
    return current;
  }

  try {
    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as UtmParams;
    }
  } catch {
    // Ignore parse errors
  }

  return {};
}
