import { useState } from "react";

export const useForm = ({ initialValues, validate }) => {
  const [formData, setFormData] = useState(initialValues);
  
  const [errors, setErrors] = useState(
    Object.fromEntries(Object.keys(initialValues).map((key) => [key, ""]))
  );
  
  const [dirty, setDirty] = useState(
    Object.fromEntries(Object.keys(initialValues).map((key) => [key, false]))
  );

  const [focus, setFocus] = useState(
    Object.fromEntries(Object.keys(initialValues).map((key) => [key, false]))
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setDirty((prev) => ({ ...prev, [name]: true }));
  };

  const handleFocus = (field) => {
    setFocus((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocus((prev) => ({ ...prev, [field]: false }));
    validateForm();
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
    setDirty({});
  };

  const validateForm = () => {
    const { isValid, errors: newErrors } = validate(formData);
    const fullErrors = { ...errors, ...newErrors };
    setErrors(fullErrors);

    return isValid;
  };

  return {
    formData,
    errors,
    focus,
    dirty,
    handleChange,
    handleFocus,
    handleBlur,
    validateForm,
    resetForm,
  };
};