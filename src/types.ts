export type FAQItem = {
    question: string;
    answer?: string;
  };
  
  export type ContactMethod = {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: {
      label: string;
      value: string;
      link?: string;
    }[];
    footer?: string;
  };