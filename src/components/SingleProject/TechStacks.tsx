import { FaReact, FaNodeJs, FaStripe, FaCloudRain } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiWebpack,
  SiTypescript,
  SiTailwindcss,
  SiJsonwebtokens,
  SiReactquery,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
interface IconMap {
  [key: string]: React.ComponentType<any> | null;
}

export const iconMap: IconMap = {
  Typescript: SiTypescript,
  React: FaReact,
  Zustand: GiBearFace,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  Prisma: SiPrisma,
  MySQL: SiMysql,
  Stripe: FaStripe,
  Cloudinary: FaCloudRain,
  "Next.js": SiNextdotjs,
  Tailwindcss: SiTailwindcss,
  Postgresql: SiPostgresql,
  Webpack: SiWebpack,
  Reacquery: SiReactquery,
  JWT: SiJsonwebtokens,
};

function TechStacks({ techStackData }: { techStackData: string[] }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold mb-7">Tech Stack</h1>

      <ul className="flex flex-wrap">
        {techStackData.map((tech: string) => {
          const IconComponent = iconMap[tech];
          return (
            <li key={tech} className="flex flex-wrap items-center mb-4 mr-4">
              {IconComponent && (
                <IconComponent className="mr-2 text-xl w-7 h-7" />
              )}
              <span>{tech}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TechStacks;
