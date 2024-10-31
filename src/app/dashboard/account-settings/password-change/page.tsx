import PasswordChange from "@/components/dashboard/account-settings/password-change";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Dashboard Account Password Change InteliRent - Real Estate",
};
const index = () => {
   return (
      <Wrapper>
         <PasswordChange />
      </Wrapper>
   )
}

export default index