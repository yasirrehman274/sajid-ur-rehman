import type { NewsItem } from "@/types";

/**
 * Research updates and academic news.
 *
 * This list is intentionally empty: the source CV contains no news items,
 * conference announcements or research updates, and inventing any would
 * misrepresent the record. The news page renders a professional empty state
 * until genuine entries are added here.
 */
export const news: NewsItem[] = [];

/** Convenience flag so the UI does not need to import the array shape. */
export const hasNews = news.length > 0;
