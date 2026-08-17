import type { Project } from "@/types";

export function ProjectSpec({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const rows = [
    { label: "Role", value: project.role },
    { label: "Stack", value: project.technologies.slice(0, 4).join(" · ") },
    { label: "Type", value: project.category },
    { label: "Year", value: project.year },
  ];

  if (project.company) {
    rows.splice(1, 0, { label: "Team", value: project.company });
  }

  return (
    <dl
      className={
        compact
          ? "grid gap-3 sm:grid-cols-2"
          : "grid gap-4 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {rows.map((row) => (
        <div key={row.label}>
          <dt className="spec-label">{row.label}</dt>
          <dd className="mt-1 text-sm text-foreground">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
