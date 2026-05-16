const InputField = ({label, value, onChange, options}) => {
  const toggleOption = (option) => {
    if (value.includes(option)) {
      onChange(label, value.filter((v) => v !== option));
    } else {
      onChange(label, [...value, option]);
    }
  };

  return (
    <article className="flex flex-col justify-center items-start">
      <label className="capitalize">{label}</label>
      <div className="border border-gray-300 rounded-sm p-2 w-60 h-14 overflow-y-auto">
        {options.map((option, idx) => (
          <label key={idx} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => toggleOption(option)}
            />
            <p className="text-sm">{option}</p>
          </label>
        ))}
      </div>
    </article>
  );
}

export default InputField