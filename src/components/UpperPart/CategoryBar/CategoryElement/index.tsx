import React from 'react';
import styled from 'styled-components';

import './CategoryElement.scss';

interface Props {
  categoryId?: string;
  categoryColor: string;
  categoryName?: string;
  isModalStyle: boolean;
}

const CategoryElement = ({
  categoryId,
  categoryColor,
  categoryName,
  isModalStyle,
}: Props) => {
  const CategoryElementStyled = styled.div`
    border-left: 10px solid ${categoryColor};
    transition: background-color 0.8s ease;

    &:hover,
    &:active {
      background-color: ${categoryColor};
    }
  `;

  return (
    <CategoryElementStyled
      className={isModalStyle ? 'CategoryElement--modal' : 'CategoryElement'}
    >
      <div
        className={
          isModalStyle
            ? 'CategoryElement__text-part--modal'
            : 'CategoryElement__text-part'
        }
      >
        <p>{categoryName}</p>
      </div>
    </CategoryElementStyled>
  );
};

export default CategoryElement;
