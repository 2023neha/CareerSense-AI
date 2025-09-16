import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/Data/industries";
import OnboardingForm from "./_components/onboarding-form";

const Onboardingpage = async () => {
  const {isOnboarded} = await getUserOnboardingStatus ();
  if(isOnboarded){
    redirect("/dashboard");
  }
  return <main>
    <OnboardingForm industries = {industries} />
  </main>
  
};

export default Onboardingpage
