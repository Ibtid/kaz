export interface ContributionListProps {
    contributions: { id: number; text: string }[];
    removeContribution: (id: number) => void;
  }