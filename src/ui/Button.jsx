import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const className =
    "bg-yellow-400 uppercase font-semibold text-stone-800 px-4 py-3 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  const base =
    "bg-yellow-400 uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed";
  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " text-xs px-4 py-2 md:px-5 md:py-2.5",
    round: base + " text-sm px-2.5 py-1 md:px-3.5 md:py-2",
    secondary:
      " uppercase font-semibold border-2 border-stone-300 text-stone-400  inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 transition-colors focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };
  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={style[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
};

export default Button;
