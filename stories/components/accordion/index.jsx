import { AccordionItem } from "./accordionItem";

export const Accordion = ({
  accordionItems = [
    {
      itemTitle: "Accordion Item #1",
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
}) => {
  return (
    <>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        {accordionItems.map(({ itemTitle, itemContent }, index) => (
          <AccordionItem
            key={index}
            itemTitle={itemTitle}
            itemContent={itemContent}
          />
        ))}
      </div>
    </>
  );
};
