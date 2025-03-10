import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterFour from "@/layouts/footers/FooterFour"
import AgencyDetailsArea from "./AgencyDetailsArea"
import FancyBanner from "@/components/common/FancyBanner"

const AgencyDetails = () => {
   return (
      <>
         <HeaderOne style={true}/>
         <BreadcrumbThree title="Agency Details" link="agency" link_title="Agency" sub_title="Rainbow Housing" style={false} />
         <AgencyDetailsArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default AgencyDetails
