import { useState } from "react";
import { toast } from "react-toastify";

export const useForm = ({ initialValues, validate }) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState(
    Object.fromEntries(Object.keys(initialValues).map((key) => [key, false]))
  );
  const [focus, setFocus] = useState(
    Object.fromEntries(Object.keys(initialValues).map((key) => [key, false]))
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleFocus = (field) => {
    setFocus((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocus((prev) => ({ ...prev, [field]: false }));
    validateForm(); // Валидация при потере фокуса
  };

  const validateForm = () => {
    const { isValid, newErrors, messages } = validate(formData);
    setErrors(newErrors);

    messages.forEach((msg) => toast.error(msg));

    return isValid;
  };

  return {
    formData,
    setFormData,
    errors,
    focus,
    handleChange,
    handleFocus,
    handleBlur,
    validateForm,
  };
};
