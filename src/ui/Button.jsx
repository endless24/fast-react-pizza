import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    " inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-500 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const style = {
    primary: base + " px-2 py-3 md:px-4 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs tracking-tighter",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",

    secondary:
      " inline-block text-sm rounded-full border-2 border-stone-300  font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-500 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-4 md:py-4 ",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={style[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
