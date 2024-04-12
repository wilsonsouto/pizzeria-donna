interface PizzaCategoryOptionProps {
  flavor: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function PizzaCategoryOption(props: PizzaCategoryOptionProps) {
  return (
    <li className="flex w-2/4 flex-col">
      <a
        className={`cursor-pointer rounded-sm border-[1px] px-6 py-2 transition duration-200 ease-out ${props.isActive ? "bg-red text-white" : "border-black hover:border-red hover:text-red"}`}
        onClick={props.onClick}
      >
        {props.flavor}
      </a>
    </li>
  );
}
