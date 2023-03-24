import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    className,
    "border rounded p-3 shadow bg-white w-full"
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;

// const Dropdown = document.querySelector(".w-48");

// const handleClick = (event) => {
//   if (Dropdown.contains(event.target)) {
//     console.log("Inside the Dropdown");
//   } else {
//     console.log("Outside the Dropdown");
//   }
// };
// document.addEventListener("click", handleClick, true);
