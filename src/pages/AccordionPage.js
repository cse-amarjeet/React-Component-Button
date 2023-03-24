import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "lehx",
      label: "can I use React on a project",
      content:
        "You can use React on any project You can use React on any project You can use React on any projectYou can use React on any project",
    },
    {
      id: "ledddf",
      label: "can I use javascript on a project",
      content:
        "You can use javascript on any project You can use javascript on any project You can use javascript on any project You can use javascript on any project",
    },
    {
      id: "sdd",
      label: "can I use Css on a project",
      content:
        "You can use Css on any project You can use Css on any project You can use Css on any projectYou can use Css on any project",
    },
  ];

  return <Accordion items={items} />;
}
export default AccordionPage;
