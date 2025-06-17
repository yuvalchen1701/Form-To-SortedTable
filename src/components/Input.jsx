import "./Form.css";

export default function Input({ children, id, type = "text" }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{children}</label>
      <input type={type} name={id} id={id} />
    </div>
  );
}
