import type { SkillGroup } from "@/types";

/** Two-column expertise summary used on the home page and about page. */
export default function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className="card-base h-full p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent-soft"
        >
          <svg viewBox="0 0 20 20" className="size-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.7">
            {group.id === "computational" ? (
              <path d="M7 3.5 3 10l4 6.5M13 3.5 17 10l-4 6.5M11.5 5.5 8.5 14.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <path d="M8 3v4.5L4.5 15A1.5 1.5 0 0 0 5.8 17.5h8.4A1.5 1.5 0 0 0 15.5 15L12 7.5V3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 3h6M6.6 12.5h6.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{group.title}</h3>
      </div>

      <p className="mt-3 text-pretty text-[0.875rem] leading-relaxed text-muted">{group.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="rounded-full border border-border-base bg-surface px-3 py-1.5 text-[0.8125rem] leading-snug text-muted"
            title={skill.description}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
