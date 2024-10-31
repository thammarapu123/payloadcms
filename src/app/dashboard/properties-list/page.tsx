import PropertyList from "@/components/dashboard/properties-list";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Dashboard Property List InteliRent - Real Estate",
};
const index = () => {
   return (
      <Wrapper>
         <PropertyList />
      </Wrapper>
   )
}

export default index