import { TECHNOLOGIES, OTHER_SKILLS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          De skills, tools en technologieën waar ik goed in ben:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-6">
        <Typography variant="body3" className="text-center text-gray-500">
          Daarnaast ervaring met:
        </Typography>
        <div className="flex flex-col items-center gap-4">
          {OTHER_SKILLS.map((group) => (
            <div
              key={group.category}
              className="flex flex-col items-center gap-2"
            >
              <Typography
                variant="body3"
                className="text-center text-xs uppercase tracking-wide text-gray-400"
              >
                {group.category}
              </Typography>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
