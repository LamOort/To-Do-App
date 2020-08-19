import * as React from 'react';
import styled from 'styled-components';

import './CategoryElement.scss';

interface Props {
  categoryColor: string;
  categoryName: string;
}

const CategoryElement = ({ categoryColor, categoryName }: Props) => {
  const CategoryElementStyled: any = styled.div`
    border-left: 14px solid ${categoryColor};
    transition: background-color 0.8s ease;

    &:hover {
      background-color: ${categoryColor};
    }
  `;

  return (
    <CategoryElementStyled className="CategoryElement">
      <div className="CategoryElement__text-part">
        <p>{categoryName}</p>
      </div>
    </CategoryElementStyled>
  );
};

export default CategoryElement;
