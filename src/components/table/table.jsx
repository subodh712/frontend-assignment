import { memo } from "react";
import "./table.css";

const TableDefaultHeightMap = {
    5: 300,
    10: 452,
    20: 862,
};

function Table ({ data, itemsPerPage }) {
    return (
        <table style={{ minHeight: TableDefaultHeightMap[itemsPerPage] }}>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Percentage funded</th>
                <th>Amount pledged</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item["s.no"]}>
                  <td>{item["s.no"]}</td>
                  <td>{item["percentage.funded"]}</td>
                  <td>{item["amt.pledged"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
    )
}
export default memo(Table);