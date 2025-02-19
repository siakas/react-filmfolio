type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return <h2 className="font-bold tracking-tight mb-4 text-2xl">{title}</h2>;
};
