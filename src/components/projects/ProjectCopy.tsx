import type { Project } from "@/types";

export function ProjectCopy({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const responsibilities = compact
    ? project.responsibilities.slice(0, 3)
    : project.responsibilities;
  const achievements = compact
    ? project.achievements.slice(0, 3)
    : project.achievements;

  return (
    <div className={compact ? "space-y-5" : "space-y-10"}>
      <CopyList title="Responsibilities" items={responsibilities} />
      <CopyList title="Achievements" items={achievements} />
    </div>
  );
}

function CopyList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="spec-label">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground md:text-[0.95rem] md:leading-7">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1 shrink-0 bg-primary" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
