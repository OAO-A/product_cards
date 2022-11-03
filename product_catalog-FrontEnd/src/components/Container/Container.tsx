import React from 'react';
import style from './container.module.scss';
import { Props } from './Props';

export const Container = (prop: Props) => {
  return (
    <div className={`${style.Container}`}>
      {prop.children}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      obcaecati similique cum voluptatem quasi ab quaerat, minima nostrum
      impedit nam aut cupiditate doloribus mollitia voluptatum porro
      exercitationem voluptatibus! Enim est assumenda, quasi ut corporis ratione
      repudiandae natus iusto? Culpa minima eaque, nemo sequi, accusantium eius
      suscipit atque perspiciatis aliquam sit dolores. Mollitia suscipit quis
      at, iste saepe commodi distinctio magnam vero adipisci assumenda. Corporis
      vel, officia autem eaque, ad quam tenetur nemo ipsum ipsa quidem tempore
      fugiat debitis quae quo laudantium fuga nam facere assumenda magnam
      temporibus veniam. Consectetur, nobis assumenda sit at quidem excepturi
      vero, rerum odit similique modi corrupti asperiores sequi saepe
      dignissimos architecto aliquid tempore rem earum quia cumque nostrum culpa
      eius in? Corporis debitis dolore, itaque temporibus voluptatibus culpa
      officiis dolorem hic atque, sunt esse eligendi nemo nihil velit iusto,
      nobis quas consequuntur. Corrupti odit quae voluptate quam voluptates.
      Beatae soluta atque ducimus corrupti iusto incidunt sint sequi, distinctio
      quae, voluptates odit voluptatum voluptate dolorum odio et quasi
      voluptatibus natus commodi, hic ullam iste voluptas minus facere! Quia
      natus error cumque earum explicabo distinctio voluptatum autem molestias
      excepturi corporis. Iure rem cumque sequi laudantium maiores maxime, iusto
      neque similique expedita vel illum dolor, harum non provident.
    </div>
  );
};
