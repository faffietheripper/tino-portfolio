import React from "react";
import ContactHero from "../../Images/ContactHero.jpeg";

export default function ContactHero() {
  return (
    <div>
      <div class="flex flex-col h-[75vh] bg-white">
        <img src={ContactHero} alt="Studio" class="object-cover w-full h-[80vh]" />
      </div>
    </div>
  );
}
