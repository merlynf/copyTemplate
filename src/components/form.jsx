import { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="px-5 md:w-1/3">
            <label>Name:</label>
          </div>
          <div className="px-5 md:w-2/3">
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="px-5 md:w-1/3">
            <label>Age:</label>
          </div>
          <div className="px-5 md:w-2/3">
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="px-5">
            <label>What is your favorite Color?</label>
          </div>
          <div className="px-5">
          <select value={inputs.colors} onChange={handleChange}>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
            </select>
          </div>
        </div>
      </div>
      {/* <div className="px-2">
        <div className="py-2">
          <label>
            Enter your Name:
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="py-2">
          <label>
            Enter your age:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="py-2">
          <label>
            What is your favorite Color?
            <select value={inputs.colors} onChange={handleChange}>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
            </select>
          </label>
        </div>
      </div> */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 mt-4"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
