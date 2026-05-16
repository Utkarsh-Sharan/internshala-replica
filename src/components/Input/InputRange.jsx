const InputRange = ({value, onChange}) => {
  const handleRange = (e) => {
    onChange("stipendRange", e.target.value);
  }

  return (
    <article className="flex flex-col justify-center items-start">
            <label htmlFor="range">Desired minimum monthly stipend {"(₹)"}</label>
            <input 
                type="range" 
                name="range" 
                id="range"
                min={0}
                max={5}
                value={value}
                onChange={handleRange}
                className="w-full"
            />

            <div className="flex justify-between w-full mt-2 text-sm text-gray-600">
                <span>0</span>
                <span>2K</span>
                <span>4K</span>
                <span>6K</span>
                <span>8K</span>
                <span>10K+</span>
            </div>
        </article>
  )
}

export default InputRange