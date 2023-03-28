import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 10 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Orange New", color: "bg-orange-500", score: 5 },
  ];
  const config = [
    { label: "Name ", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    { label: "Score", render: (fruit) => fruit.score },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} keyFn={keyFn} config={config} />
    </div>
  );
}
export default TablePage;
