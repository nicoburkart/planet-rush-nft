import Image from 'next/image';
import { Paragraph, SubTitle } from '../atoms/Typography';

type Props = {
  image: string;
  title: string;
  desc: string;
};

export const HiwStep = ({ title, desc, image }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between lg:w-1/3">
      <Image src={image} alt="" height={128} width={128}></Image>
      <SubTitle className="mt-8 text-center text-zinc-800">{title}</SubTitle>
      <Paragraph className="max-w-[400px] text-center text-zinc-800">
        {desc}
      </Paragraph>
    </div>
  );
};
