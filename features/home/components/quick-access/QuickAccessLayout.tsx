import { QuickAccess } from "@/features/home/components/quick-access/QuickAccess";
import { SectionContainer } from "@/features/home/components/SectionContainer";
import { SectionTitle } from "@/features/home/components/SectionTitle";

export const QuickAccessLayout = () => {
  return (
    <SectionContainer>
      <SectionTitle title="クイックアクセス" />
      <QuickAccess />
    </SectionContainer>
  );
};
