const Textarea = ({ id, placeholder, value, onChange, rows = 4, className = '' }) => (
  <textarea
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={rows}
    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent hover:border-gray-700  ${className}`}
  />
)


export default Textarea
