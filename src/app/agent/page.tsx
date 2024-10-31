import Agent from "@/components/inner-pages/agent/agent";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Agent InteliRent - Real Estate",
};
const index = () => {
   return (
      <Wrapper>
         <Agent />
      </Wrapper>
   )
}

export default index