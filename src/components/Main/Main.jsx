import {
  SMain,
  STableSection,
  SSectionTitle,
  STableFilters,
  SSortLink,
  SExpenseTable,
  SFormAside,
  SExpenseForm,
  SInput,
  SCategoryTags,
  STag,
  SSubmitBtn,
} from "./Main.styled";
import MiniBucket from "../../../public/first-box/mini-bucket.svg";
import MiniPen from "../../../public/first-box/mini-pen.svg";
import MiniCar from "../../../public/second-box/mini-car.svg";
import MiniFood from "../../../public/second-box/mini-food.svg";
import MiniGames from "../../../public/second-box/mini-games.svg";
import MiniHouse from "../../../public/second-box/mini-house.svg";
import MiniOther from "../../../public/second-box/mini-other.svg";
import MiniTeacher from "../../../public/second-box/mini-teacher.svg";
function Main() {
  return (
    <>
      <SMain>
        <STableSection>
          <SSectionTitle>Таблица расходов</SSectionTitle>
          <STableFilters>
            <div>Фильтровать по категории</div>
            <div>
              Сортировать по <SSortLink href="#">дате</SSortLink>
            </div>
          </STableFilters>
          <SExpenseTable>
            <thead>
              <tr>
                <th>Описание</th>
                <th>Категория</th>
                <th>Дата</th>
                <th>Сумма</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Пятерочка</td>
                <td>Еда</td>
                <td>03.07.2024</td>
                <td>3 500 ₽</td>
                <td>
                  <button>
                    <img src={MiniBucket} alt="logo" />
                  </button>
                  <button>
                    <img src={MiniPen} alt="logo" />
                  </button>
                </td>
              </tr>
            </tbody>
          </SExpenseTable>
        </STableSection>

        <SFormAside>
          <SSectionTitle>Новый расход</SSectionTitle>
          <SExpenseForm>
            <div>
              <label>Описание</label>
              <SInput type="text" placeholder="Введите описание" />
            </div>
            <div>
              <label>Категория</label>
              <SCategoryTags>
                <STag>
                  <img src={MiniFood} alt="logo" /> Еда
                </STag>
                <STag>
                  <img src={MiniCar} alt="logo" /> Транспорт
                </STag>
                <STag>
                  <img src={MiniHouse} alt="logo" /> Жилье
                </STag>
                <STag>
                  <img src={MiniGames} alt="logo" /> Развлечения
                </STag>
                <STag>
                  <img src={MiniTeacher} alt="logo" /> Образование
                </STag>
                <STag>
                  <img src={MiniOther} alt="logo" /> Другое
                </STag>
              </SCategoryTags>
            </div>
            <div>
              <label>Дата</label>
              <SInput type="date" />
            </div>
            <div>
              <label>Сумма</label>
              <SInput type="number" placeholder="Введите сумму" />
            </div>
            <SSubmitBtn type="submit">Добавить новый расход</SSubmitBtn>
          </SExpenseForm>
        </SFormAside>
      </SMain>
    </>
  );
}

export default Main;
