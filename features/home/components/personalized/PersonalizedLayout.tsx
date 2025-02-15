import { Personalized } from "@/features/home/components/personalized/Personalized";
import { SectionContainer } from "@/features/home/components/SectionContainer";
import { SectionTitle } from "@/features/home/components/SectionTitle";

export const PersonalizedLayout = () => {
  return (
    <SectionContainer>
      <SectionTitle title="あなたへのおすすめ" />
      <Personalized />
    </SectionContainer>
  );
};
