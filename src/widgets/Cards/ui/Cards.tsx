import React from 'react';
import Link from 'next/link';

import { Card } from '../styledComponents/Card';
import { FlexContainer } from '../styledComponents/FlexContainer';
import { StyledA } from '../styledComponents/StyledA';

interface ICardsProps {
  link: string;
  name: string;
}

export const Cards = React.memo(function Cards({ link, name }: ICardsProps) {
  return (
    <FlexContainer>
      <Card>
        <Link href={link} passHref legacyBehavior>
          <StyledA>{name}</StyledA>
        </Link>
      </Card>
    </FlexContainer>
  );
});
