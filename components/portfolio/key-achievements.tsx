import { useTranslations } from "next-intl";

interface KeyAchievementsProps {
  projectKey: string;
}

export default function KeyAchievements({ projectKey }: KeyAchievementsProps) {
  const projects = useTranslations(`projects.${projectKey}`);
  const t = useTranslations("common");

  const achievements = projects.raw("keyAchievements") as string[];

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-2xl font-bold text-primary">
        {t("keyAchievements")}
      </h4>
      <ul className="text-lg space-y-2">
        {achievements.map((achievement, index) => {
          const parsed = projects.rich(`keyAchievements.${index}`, {
            bold: (chunks) => <strong className="text-white">{chunks}</strong>,
          });

          return (
            <li key={index} className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="font-bold text-lg">{parsed}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
