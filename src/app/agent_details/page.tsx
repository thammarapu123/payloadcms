import AgentDetails from "@/components/inner-pages/agent/agent-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Agent Details InteliRent - Real Estate",
};
const index = () => {
   return (
      <Wrapper>
         <AgentDetails />
      </Wrapper>
   )
}

export default index