export default function CheckBox({ text, className, labelFor, ...rest }) {
  return (
    <label className={className} htmlFor={labelFor}>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </label>
  );
}
