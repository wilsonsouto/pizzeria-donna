import { TextColor } from "../Enums";

interface ParagraphProps {
  text: string;
  color: TextColor;
}

export default function Paragraph(props: ParagraphProps) {
  return (
    <p
      className={`font-paragraph text-xl ${props.color} sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl`}
    >
      {props.text}
    </p>
  );
}
