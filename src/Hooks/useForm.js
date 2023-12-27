import React, { useState } from "react";

const types = {
  email: {
    regex: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
    message: "Preencha um e-mail válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const validate = (value) => {
    if (type === false) {
      return true;
    }

    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  };
  return {
    error,
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
