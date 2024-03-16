import React from "react";
import { AccordionItem } from "./accordionItem";
import "./accordion.scss";
import { AccordionItemProps } from "../../interfaces/accordionInterfaces";

export const Accordion = ({
  accordionItems = [
    {
      itemTitle: "Accordion Item #1",
      headingId: "accordion-headingOne",
      collapseId: "accordion-item-test-one",
      itemContent: (
        <>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </>
      ),
    },
    {
      itemTitle: "Accordion Item #2",
      headingId: "accordion-headingTwo",
      collapseId: "accordion-item-test-two",
      itemContent: (
        <>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </>
      ),
    },
  ],
}: AccordionItemProps) => {
  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {accordionItems.map(
          ({ itemTitle, headingId, collapseId, itemContent }, index) => (
            <AccordionItem
              key={index}
              itemTitle={itemTitle}
              headingId={headingId}
              collapseId={collapseId}
              itemContent={itemContent}
            />
          )
        )}
      </div>
    </>
  );
};
