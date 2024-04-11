interface ParagraphProps {
  text: string;
}

export default function Paragraph(props: ParagraphProps) {
  return (
    <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
      {props.text}
    </p>
  );
}
