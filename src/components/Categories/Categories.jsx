import { categorieName } from "../../const";
import { STag } from "./Categories.styled";

function Categories() {
  return (
    <>
      {categorieName.map((item, index) => (
        <STag key={index}>
          <img src={item.srcIcon} alt="Иконка категории" /> {item.name}
        </STag>
      ))}
    </>
  );
}

export default Categories;
