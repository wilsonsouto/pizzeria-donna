import {
  BgImageContainer,
  GridChild,
  GridContainer,
} from "@/components/Layout";
import { Logo, Heading, Paragraph } from "@/components/Elements";
import { MdTextPosition } from "@/components/Enums";

export default function Home() {
  return (
    <>
      <header>
        <BgImageContainer url="https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/pizzas_selector_1600x900.jpg?rev=6a81e278-07fc-4e95-9ba1-361063f35adf&hash=B8B1264AB6FC3F4B1AE140EB390208CD">
          <Logo span1="Pizzeria" span2="Donna" />
        </BgImageContainer>
      </header>
      <main>
        <GridContainer>
          <GridChild position={MdTextPosition.center}>
            <Heading text="United just for one reason" />
            <Paragraph
              text="We are the first pizzeria to focus on this kind of service.
              Contributing to a better experience, security, comfort and
              quality. To place an order, simply use our chatbot!"
            />
          </GridChild>
        </GridContainer>
      </main>
    </>
  );
}
