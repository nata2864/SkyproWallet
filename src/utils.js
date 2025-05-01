
export function checkLs() {
    try {
      const data = window.localStorage.getItem("userInfo");
      if (!data) return null;
  
      const parsed = JSON.parse(data);
  
    
      if (
        typeof parsed === "object" &&
        parsed !== null &&
        typeof parsed.name === "string" && 
        typeof parsed.token === "string"   
      ) {
        return parsed;
      } else {
        console.warn("Некорректная структура данных в localStorage");
        return null;
      }
    } catch (error) {
      console.error("Ошибка при парсинге localStorage userInfo:", error);
      return null;
    }
  }
  
  
  export   const checkRequiredFields = (formData, requiredFields) => {
    const errors = {};
    let isValid = true;
  
    for (const field of requiredFields) {
      if (!formData[field]?.trim()) {
        errors[field] = true;
        isValid = false;
      }
    }
  
    return { isValid, errors };
  };

  