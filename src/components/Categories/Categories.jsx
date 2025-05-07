import { categorieName } from "../../const";
import { STag } from "./Categories.styled";

function Categories({onCategorySelect,selectedCategory}) {
  return (
    <>
      {categorieName.map((item, index) => (
    <STag
    key={index}
    onClick={() => onCategorySelect(item.value)}
    active={selectedCategory === item.value} 
  >
    <img  src={
      selectedCategory === item.value
        ? item.srcIcon.active
        : item.srcIcon.default
    } alt="Иконка категории" /> {item.name}
  </STag>
      ))}
    </>
  );
}

export default Categories;
