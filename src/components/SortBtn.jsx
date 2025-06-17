import Button from "./Button.jsx";
import "./SortBtn.css";

export default function SortBtn({ sortKey, onSort }) {
  return (
    <div className="SortBtn-container">
      <Button onClick={() => onSort(sortKey, "asc")}>▲</Button>
      <Button onClick={() => onSort(sortKey, "desc")}>▼</Button>
    </div>
  );
}
