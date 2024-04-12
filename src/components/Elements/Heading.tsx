import { TextColor } from "../Enums";

interface HeadingProps {
  text: string;
  color: TextColor;
}

export default function Heading(props: HeadingProps) {
  return (
    <h2
      className={`text-center text-4xl ${props.color} font-header sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl`}
    >
      {props.text}
    </h2>
  );
}
