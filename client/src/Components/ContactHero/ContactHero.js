import React from "react";
import ContactHeroImg from "../../Images/ContactHeroImg.jpeg";

export default function ContactHero() {
  return (
    <div>
      <div class="flex flex-col h-[75vh] bg-white">
        <img src={ContactHeroImg} alt="Studio" class="object-cover w-full h-[80vh]" />
      </div>
    </div>
  );
}
