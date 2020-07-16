import cx from "classnames";
import React, { PureComponent } from "react";
import mockup from "./asodesk-test-mockup.png";
import "./Info.scss";
import { InfoProps } from "./InfoProps";

export class Info extends PureComponent<InfoProps> {
  render() {
    const { className } = this.props;

    return (
      <article className={ cx("Info", className) }>
        <p>
          Суть задачи следующая: вывести в таблицу данные о ключевых словах.
          <br />url: <code>/stats/</code>
        </p>

        <ul>
          <li>
            Первая колонка - чекбокс.
            <br />Можно выделить несколько чекбоксов, нельзя убрать все чекбоксы, хотя бы один всегда должен
            остаться.
          </li>
          <li>
            Вторая - вывод поля <code>keyword</code>
          </li>
          <li>
            Третья - кнопка перехода в другой инструмент, с передачей <code>keyword</code> как параметра.
            <br />По клику на <code>explore</code> открывать страницу с url <code>/explore</code>, ее оставить
            пустой
          </li>
          <li>
            Четвертая - Открытие попапа, число у <code>Show</code> - вывод поля <code>suggestions_count</code>.
            <br />Попап - реально открывать, можно оставить пустым.
          </li>
          <li>
            Пятая и далее вывод соответствующих параметров (только для iphone):
            <br /><code>Traffic Score</code> в JSON именуется как <code>users_per_day</code>,
            <br /><code>Total Apps</code> так и называется,
            <br /><code>Rank</code> это <code>position_info</code>.
          </li>
          <li>
            <code>Color</code> - один из 6 цветов, соответствующих числам 0-5, цвета любые, в мокапе предложенные.
          </li>
          <li>
            Последняя - удаление строки.
            <br />По клику строку удалять, состояние можно не хранить.
          </li>
        </ul>

        <p>
          Фреймворк - React, таблица - react-tables (желательно самый свежий),
          либо аналогичный модуль на выбор (выбор обосновать).
          <br />Использовать TypeScript - обязательно. React hooks - обязательно.
        </p>

        <h2>Mockup</h2>
        <img src={ mockup } alt='' className='Info__mockup' />
      </article>
    );
  }
}