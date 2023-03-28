function Table({ data, keyFn, config }) {
  const renderedHearders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });
  const renderedRows = data.map((rowData) => {
    const renderedCell = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCell}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHearders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
export default Table;
