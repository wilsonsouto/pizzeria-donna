import { BackgroundContainer } from "@/components/Layout";
import { Logo } from "@/components/Elements";

export default function Home() {
  return (
    <>
      <header>
        <BackgroundContainer url="https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/pizzas_selector_1600x900.jpg?rev=6a81e278-07fc-4e95-9ba1-361063f35adf&hash=B8B1264AB6FC3F4B1AE140EB390208CD">
          <Logo span1="Pizzeria" span2="Donna" />
        </BackgroundContainer>
      </header>
    </>
  );
}
