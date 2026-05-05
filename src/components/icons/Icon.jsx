export default function Icon({ children, className, ...props }) {
  return (
    <span className={`cursor-pointer ${className || ''}`} {...props}>
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        {children}
      </svg>
    </span>
  )
}
