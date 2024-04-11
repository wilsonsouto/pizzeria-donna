import {
  BgImageContainer,
  BgImageOverlay,
  GridChild,
  GridContainer,
} from "@/components/Layout";
import {
  BrandLogo,
  Heading,
  Paragraph,
  PizzaImageDisplay,
} from "@/components/Elements";
import {
  AlignItems,
  JustifyContent,
  MdTextPosition,
  Padding,
} from "@/components/Enums";

export default function Home() {
  return (
    <>
      <header>
        <BgImageContainer url="https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/pizzas_selector_1600x900.jpg?rev=6a81e278-07fc-4e95-9ba1-361063f35adf&hash=B8B1264AB6FC3F4B1AE140EB390208CD">
          <BgImageOverlay
            justify={JustifyContent["justify-center"]}
            align={AlignItems["items-center"]}
          >
            <BrandLogo span1="Pizzeria" span2="Donna" />
          </BgImageOverlay>
        </BgImageContainer>
      </header>
      <main>
        <GridContainer padding={Padding["px-8"]}>
          <GridChild position={MdTextPosition.center}>
            <Heading text="United just for one reason" />
            <Paragraph
              text="We are the first pizzeria to focus on this kind of service.
              Contributing to a better experience, security, comfort and
              quality. To place an order, simply use our chatbot!"
            />
          </GridChild>
          <div className="grid place-items-center gap-4 md:grid-cols-2">
            <GridChild position={MdTextPosition.left}>
              <Heading text="Don't be afraid, the hungry doens't have to wait" />
              <Paragraph text="✓ First quality ingredients" />
              <Paragraph text="✓ Inspired recipes" />
              <Paragraph text="✓ Love in every detail" />
              <Paragraph text="✓ Our commitment is to always be present and meet your needs" />
            </GridChild>
            <PizzaImageDisplay
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Person making dough pizza"
            />
          </div>
        </GridContainer>
        <GridContainer padding={Padding["px-0"]}>
          <BgImageContainer url="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <BgImageOverlay
              justify={JustifyContent["justify-start"]}
              align={AlignItems["items-center"]}
            >
              <Heading text="Weekly Promotion" />
            </BgImageOverlay>
          </BgImageContainer>
        </GridContainer>
      </main>
    </>
  );
}
