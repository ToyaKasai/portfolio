import { ComponentProps, FC } from 'react';
import SectionWrapper from './SectionWrapper';

const AboutSection: FC = () => {
  const summaryElement = (
    <>
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    </>
  );

  const SectionWrapperProps: ComponentProps<typeof SectionWrapper> = {
    title: 'About Me',
    summaryElement,
    link: {
      href: '/about/',
    },
    image: {
      src: '/images/profile.png',
      alt: '',
    },
    isReverse: true,
  };

  return <SectionWrapper {...SectionWrapperProps} />;
};

export default AboutSection;
