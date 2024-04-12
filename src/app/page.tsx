"use client";
import { useState } from "react";
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
  PizzaCategoryOption,
} from "@/components/Elements";
import {
  AlignItems,
  Display,
  JustifyContent,
  MdTextPosition,
  Padding,
  TextColor,
} from "@/components/Enums";

export default function Home() {
  const [showMenu, setShowMenu] = useState("Traditional");

  const handleClick = (menu: string) => {
    setShowMenu(menu);
  };

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
            <Heading
              color={TextColor.black}
              text="United just for one reason"
            />
            <Paragraph
              color={TextColor.black}
              text="We are the first pizzeria to focus on this kind of service.
              Contributing to a better experience, security, comfort and
              quality. To place an order, simply use our chatbot!"
            />
          </GridChild>
          <div className="grid items-center justify-center gap-4 md:grid-cols-2">
            <GridChild position={MdTextPosition.left}>
              <Heading
                color={TextColor.black}
                text="Don't be afraid, the hungry doens't have to wait"
              />
              <Paragraph
                color={TextColor.black}
                text="✓ First quality ingredients"
              />
              <Paragraph color={TextColor.black} text="✓ Inspired recipes" />
              <Paragraph
                color={TextColor.black}
                text="✓ Love in every detail"
              />
              <Paragraph
                color={TextColor.black}
                text="✓ Our commitment is to always be present and meet your needs"
              />
            </GridChild>
            <PizzaImageDisplay
              display={Display.flex}
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Person making dough pizza"
            />
          </div>
        </GridContainer>
        <GridContainer padding={Padding["px-0"]}>
          <BgImageContainer url="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <BgImageOverlay
              justify={JustifyContent["justify-center"]}
              align={AlignItems["items-center"]}
            >
              <Heading color={TextColor.green} text="Weekly Promotion" />
              <div className="grid h-full w-full grid-cols-1 items-center justify-center md:h-full md:grid-cols-2">
                <PizzaImageDisplay
                  display={Display.hidden}
                  src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Pepperoni Pizza"
                />
                <GridChild position={MdTextPosition.center}>
                  <BgImageOverlay
                    justify={JustifyContent["justify-center"]}
                    align={AlignItems["items-center"]}
                  >
                    <GridChild position={MdTextPosition.center}>
                      <Heading color={TextColor.white} text="Pepperoni Classic" />
                      <Paragraph
                        color={TextColor.white}
                        text="It is specially prepared with first-quality Pepperoni sausage filling, mozzarella cheese, tomato sauce and oregano. The delicious and soft dough and the crunchy edge complement our version of Pepperoni pizza."
                      />
                    </GridChild>
                  </BgImageOverlay>
                </GridChild>
              </div>
            </BgImageOverlay>
          </BgImageContainer>
        </GridContainer>
        <GridContainer padding={Padding["px-8"]}>
          <GridChild position={MdTextPosition.center}>
            <Heading color={TextColor.red} text="Menu" />
            <Paragraph
              color={TextColor.black}
              text="A wide variety of products and ingredients, don't leave for tomorrow what you can eat today."
            />
          </GridChild>
          <ul className="relative m-auto flex w-7/12 items-center justify-center gap-8 text-center text-xl max-md:flex-col max-sm:w-full sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
            <PizzaCategoryOption
              flavor="Traditional"
              isActive={showMenu === "Traditional"}
              onClick={() => handleClick("Traditional")}
            />
            <PizzaCategoryOption
              flavor="Special"
              isActive={showMenu === "Special"}
              onClick={() => handleClick("Special")}
            />
            <PizzaCategoryOption
              flavor="Sweet"
              isActive={showMenu === "Sweet"}
              onClick={() => handleClick("Sweet")}
            />
            <PizzaCategoryOption
              flavor="Fit"
              isActive={showMenu === "Fit"}
              onClick={() => handleClick("Fit")}
            />
          </ul>
        </GridContainer>
      </main>
    </>
  );
}
