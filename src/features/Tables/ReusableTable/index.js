import { Table, TableHeader, TableCell } from "./styled";


const ReusableTable = ({ data }) => {
    return (
      <Table>
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  
  export default ReusableTable;