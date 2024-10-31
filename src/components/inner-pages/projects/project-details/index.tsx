import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FooterFour from "@/layouts/footers/FooterFour"
import ProjectDetailsArea from "./ProjectDetailsArea"
import FancyBanner from "@/components/common/FancyBanner"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ProjectFour = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbThree title="Single Projects" link="pricing_01" link_title="Project" sub_title="Vintage City" style={false} />
         <ProjectDetailsArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ProjectFour;
