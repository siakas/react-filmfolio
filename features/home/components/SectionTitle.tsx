type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return <h2 className="mb-4 text-2xl font-bold tracking-tight">{title}</h2>;
};
