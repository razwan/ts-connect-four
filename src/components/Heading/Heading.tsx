import React from 'react';
import { LargeHeading, MediumHeading, SmallHeading, XSmallHeading } from './Heading.style';
export {
  LargeHeading,
  MediumHeading,
  SmallHeading,
  XSmallHeading,
} from "./Heading.style";

export interface IHeading {
  size: 'L' | 'M' | 'S' | 'XS';
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const Heading: React.FC<IHeading> = ({
  size,
  children,
  color = '#000000',
  className = ''
}) => {
  switch (size) {
    case 'L':
      return (
        <LargeHeading color={color} className={`${className}`}>
          {children}
        </LargeHeading>
      );
    case 'M':
      return (
        <MediumHeading color={color} className={` ${className}`}>
          {children}
        </MediumHeading>
      );
    case 'S':
      return (
        <SmallHeading color={color} className={` ${className}`}>
          {children}
        </SmallHeading>
      );
    default:
      return (
        <XSmallHeading color={color} className={`${className}`}>
          {children}
        </XSmallHeading>
      );
  }
};

export default Heading;