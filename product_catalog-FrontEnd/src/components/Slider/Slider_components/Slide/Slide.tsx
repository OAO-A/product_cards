import React, { useContext } from 'react';
import style from './slide.module.scss';
import classNames from 'classnames';
import { SliderContext } from '../../Slider';

type Props = {
  imgUrl: string;
  index: number;
};

export const Slide: React.FC<Props> = ({ imgUrl, index }) => {
  const { slideNumber } = useContext(SliderContext);
  return (
    <div
      className={classNames(
        // style.slide,
        { [style.selected_slide]: slideNumber === index }
        // {[style.hide_image]: slideNumber !== index},
      )}
      // style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      <img
        src={imgUrl}
        className={classNames(
          style.slide_image,
          // {[style.hide_image]: slideNumber !== index},
          { [style.selected_image]: slideNumber === index }
        )}
      />
    </div>
  );
};
