export default function Button({ type = "button", handleOnClick, variant, children }) {
  let classes = 'w-full py-3 px-6 text-white text-center shadow-sm hover:shadow-none';

  switch (variant) {
    case 'success': {
      classes += ' bg-green-500 hover:bg-green-700';
      break;
    }

    case 'danger': {
      classes += ' bg-red-500';
      break;
    }
  }

  return (
    <button type={type} onClick={handleOnClick} className={classes}>
      {children}
    </button>
  )
}