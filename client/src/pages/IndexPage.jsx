import Introduction from "../components/Introduction";
import ProjectSection from "../components/ProjectSection";
import SectionBreak from "../components/SectionBreak";
import SkillsSection from "../components/SkillSection";

export default function IndexPage() {
  return (
    <>
      <Introduction />
      <SectionBreak section={"Skills"} />
      <SkillsSection />
      <SectionBreak section={"Projects"} />

      <ProjectSection />
      <SectionBreak section={"Contact"} />
      
    </>
  );
}
