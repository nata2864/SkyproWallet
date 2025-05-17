import { categorieName } from "../../const";
import { STag } from "./Categories.styled";

function Categories({onCategorySelect,selectedCategory}) {
  return (
    <>
      {categorieName.map((item, index) => (
    <STag
    key={index}
    onClick={() => onCategorySelect(item.value)}
    $isActive={selectedCategory === item.value} 
  >
    <img  src={

       item.srcIcon.default
       

    } alt="Иконка категории" /> {item.name}
  </STag>
      ))}
    </>
  );
}

export default Categories;
