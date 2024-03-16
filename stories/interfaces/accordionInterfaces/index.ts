export interface AccordionItemProps {
  itemTitle: string;
  headingId: string;
  collapseId: string;
  children: React.ReactNode;
}

export interface AccordionProps {
  accordionItems: AccordionItemProps[];
}
