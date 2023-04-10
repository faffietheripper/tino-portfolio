import React from "react";
import Footer from "../../Components/Footer/Footer";
import MedvilleDesc from "../../Components/MedvilleDesc/MedvilleDesc";
import PageUnderCon from "../../Components/PageUnderCon/PageUnderCon";
import BacktoTop from "./Components/BacktoTop/BacktoTop";


function Medville() {
  return (
    <div>
      <PageUnderCon />
      <MedvilleDesc />
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default Medville;
