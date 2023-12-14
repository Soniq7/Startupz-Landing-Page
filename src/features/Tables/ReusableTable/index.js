import { Table, TableHeader, TableRow, TableCell } from "./styled";

const ReusableTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          {data.headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default ReusableTable;
