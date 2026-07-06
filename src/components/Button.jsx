export default function Button({ children, size = 'md', variant = 'secondary', onClick }) {
  const sizes = {
    sm: 'py-2 px-4 w-20 text-sm',
    md: 'py-3 px-5 w-45 text-base',
    lg: 'py-4 px-6 w-30 text-lg',
  }

  const variantClasses = {
    primary:
      'text-bg-start bg-linear-to-b from-primary-start to-primary-end shadow-primary hover:from-primary-end hover:to-primary-start hover:shadow-primary-hover active:to-primary-end',
    secondary:
      'text-text bg-linear-to-b from-bg-start to-bg-end shadow-secondary hover:from-bg-end hover:to-bg-start hover:shadow-secodary-hover',
  }

  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} ${variantClasses[variant]} rounded-full transition duration-800 hover:cursor-pointer`}
    >
      {children}
    </button>
  )
}
