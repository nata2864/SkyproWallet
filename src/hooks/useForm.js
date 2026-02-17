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
    // Также исправлена функция сброса, чтобы возвращать ошибки в исходное состояние
    setErrors(
      Object.fromEntries(Object.keys(initialValues).map((key) => [key, ""]))
    );
    setDirty(
      Object.fromEntries(Object.keys(initialValues).map((key) => [key, false]))
    );
  };

  // Исправлена ошибка связанная с выводом ошибок, теперь создаем каждый раз новый объект ошибок.
  const validateForm = () => {
    const { isValid, newErrors } = validate(formData);
    const initialErrorState = Object.fromEntries(
      Object.keys(initialValues).map((key) => [key, ""])
    );
    setErrors({ ...initialErrorState, ...newErrors });

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
    setFormData,
  };
};