interface HeadingProps {
  text: string;
}

export default function Heading(props: HeadingProps) {
  return (
    <h2 className="text-4xl text-black sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
      {props.text}
    </h2>
  );
}
