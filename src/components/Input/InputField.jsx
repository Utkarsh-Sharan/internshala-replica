const InputField = ({label, value, onChange, placeholder}) => {
  return (
    <article className='flex flex-col justify-center items-start'>
        <label htmlFor={label} className='capitalize'>{label}</label>
        <input
            name={label}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border border-gray-300 rounded-sm p-1"
        />
    </article>
  )
}

export default InputField