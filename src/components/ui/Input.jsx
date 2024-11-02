const Input = ({ id, placeholder, value, onChange, className = '' }) => (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-3 text-sm border border-gray-200 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  )

  export default Input;