import { FC, ReactNode } from 'react';
import { TImage, TLink } from '../../../types';
import classNames from 'classnames';
import NextLink from 'next/link';

type Props = {
  title: string;
  summaryElement: ReactNode;
  link: TLink;
  image: TImage;
  isReverse?: boolean;
};

const SectionWrapper: FC<Props> = ({
  title,
  summaryElement,
  link,
  image,
  isReverse = false,
}) => {
  return (
    <section className="flex h-screen w-full items-center">
      <div
        className={classNames(
          'flex h-section w-full items-center justify-between',
          {
            'flex-row-reverse': isReverse,
          }
        )}
      >
        <div className="flex h-full w-1/2 items-center justify-center">
          <img {...image} className="aspect-square h-full" />
        </div>
        <div className="flex h-full w-1/2 flex-col justify-between px-20">
          <div className="space-y-5">
            <h1 className="border-b border-solid border-white pb-2 text-6xl font-black">
              {title}
            </h1>
            <p>{summaryElement}</p>
          </div>
          <NextLink {...link}>
            <a>{title}</a>
          </NextLink>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
