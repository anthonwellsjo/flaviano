import React from 'react';
import { MateriePrimePage } from '../../../../../types';
import MateriaPrima from '../MateriaPrima/MateriaPrima';

interface Props {
  materiePrimi: MateriePrimePage,
  horizontal?: boolean | undefined,
  english: boolean
}

const MateriePrimi = ({ materiePrimi, horizontal, english }: Props) => {
  const isHorizontal = !horizontal || horizontal === undefined ? false : true;
  console.log("materie prime mobile", materiePrimi);
  if (isHorizontal && !english) return (
    <>
      <MateriaPrima marginTop={"20px"} height={"220px"} title={"Lievito Madre"} hexColor={materiePrimi.lievitoMadreColor.hex} fluidImg={materiePrimi.lievitoMadreImg.asset.fluid} text={materiePrimi.lievitoMadreTextMobile} />
      <MateriaPrima whiteBehindImg imgBehindTitle height={"300px"} title={"Limoni di sorrento"} hexColor={materiePrimi.limoniColor.hex} fluidImg={materiePrimi.limoniImg.asset.fluid} text={materiePrimi.limoniTextMobile} />
      <MateriaPrima imgLeft height={"250px"} title={"Mela Annurca"} hexColor={materiePrimi.melaColor.hex} fluidImg={materiePrimi.melaImg.asset.fluid} text={materiePrimi.melaTextMobile} />
      <MateriaPrima marginTop={"20px"} height={"220px"} title={"Noci di Sorrento"} hexColor={materiePrimi.nociColor.hex} fluidImg={materiePrimi.nociImg.asset.fluid} text={materiePrimi.nociTextMobile} />
      <MateriaPrima marginTop={"20px"} imgBehindTitle height={"300px"} title={"Nocciola di Giffoni"} hexColor={materiePrimi.nocciolaColor.hex} fluidImg={materiePrimi.nocciolaImg.asset.fluid} text={materiePrimi.nocciolaTextMobile} />
      <MateriaPrima marginTop={"50px"} imgLeft height={"220px"} title={"Miele Millefiori"} hexColor={materiePrimi.mieleColor.hex} fluidImg={materiePrimi.mieleImg.asset.fluid} text={materiePrimi.mieleTextMobile} />
      <MateriaPrima marginTop={"60px"} imgBehindTitle longTitle height={"280px"} title={"Albicocche del Vesuvio"} hexColor={materiePrimi.albicocceColor.hex} fluidImg={materiePrimi.albicocceImg.asset.fluid} text={materiePrimi.albicocceTextMobile} />
    </>
  )
  if (isHorizontal && english) return (
    <>
      <MateriaPrima marginTop={"20px"} height={"220px"} title={"Sour Dough"} hexColor={materiePrimi.lievitoMadreColor.hex} fluidImg={materiePrimi.lievitoMadreImg.asset.fluid} text={materiePrimi.lievitoMadreTextMobileEng} />
      <MateriaPrima whiteBehindImg imgBehindTitle height={"300px"} title={"Sorrento Lemons"} hexColor={materiePrimi.limoniColor.hex} fluidImg={materiePrimi.limoniImg.asset.fluid} text={materiePrimi.limoniTextMobileEng} />
      <MateriaPrima imgLeft height={"250px"} title={"Annurca Apples"} hexColor={materiePrimi.melaColor.hex} fluidImg={materiePrimi.melaImg.asset.fluid} text={materiePrimi.melaTextMobileEng} />
      <MateriaPrima marginTop={"20px"} height={"220px"} title={"Sorrento Walnuts"} hexColor={materiePrimi.nociColor.hex} fluidImg={materiePrimi.nociImg.asset.fluid} text={materiePrimi.nociTextMobileEng} />
      <MateriaPrima marginTop={"20px"} imgBehindTitle height={"300px"} title={"Giffoni Hazelnuts"} hexColor={materiePrimi.nocciolaColor.hex} fluidImg={materiePrimi.nocciolaImg.asset.fluid} text={materiePrimi.nocciolaTextMobileEng} />
      <MateriaPrima marginTop={"50px"} imgLeft height={"220px"} title={"Millefiori Honey"} hexColor={materiePrimi.mieleColor.hex} fluidImg={materiePrimi.mieleImg.asset.fluid} text={materiePrimi.mieleTextMobileEng} />
      <MateriaPrima marginTop={"60px"} imgBehindTitle longTitle height={"280px"} title={"Vesuvio Apricots"} hexColor={materiePrimi.albicocceColor.hex} fluidImg={materiePrimi.albicocceImg.asset.fluid} text={materiePrimi.albicocceTextMobileEng} />
    </>
  )
  if (english) return (
    <>
      <MateriaPrima height={"350px"} title={"Sour Dough"} hexColor={materiePrimi.lievitoMadreColor.hex} fluidImg={materiePrimi.lievitoMadreImg.asset.fluid} text={materiePrimi.lievitoMadreTextMobileEng} />
      <MateriaPrima whiteBehindImg imgBehindTitle height={"500px"} title={"Sorrento Lemons"} hexColor={materiePrimi.limoniColor.hex} fluidImg={materiePrimi.limoniImg.asset.fluid} text={materiePrimi.limoniTextMobileEng} />
      <MateriaPrima imgLeft height={"400px"} title={"Annurca Apples"} hexColor={materiePrimi.melaColor.hex} fluidImg={materiePrimi.melaImg.asset.fluid} text={materiePrimi.melaTextMobileEng} />
      <MateriaPrima height={"400px"} title={"Sorrento Walnuts"} hexColor={materiePrimi.nociColor.hex} fluidImg={materiePrimi.nociImg.asset.fluid} text={materiePrimi.nociTextMobileEng} />
      <MateriaPrima imgBehindTitle height={"450px"} title={"Giffoni Hazelnuts"} hexColor={materiePrimi.nocciolaColor.hex} fluidImg={materiePrimi.nocciolaImg.asset.fluid} text={materiePrimi.nocciolaTextMobileEng} />
      <MateriaPrima imgLeft height={"320px"} title={"Millefiori Honey"} hexColor={materiePrimi.mieleColor.hex} fluidImg={materiePrimi.mieleImg.asset.fluid} text={materiePrimi.mieleTextMobileEng} />
      <MateriaPrima imgBehindTitle longTitle height={"520px"} title={"Vesuvio Apricots"} hexColor={materiePrimi.albicocceColor.hex} fluidImg={materiePrimi.albicocceImg.asset.fluid} text={materiePrimi.albicocceTextMobileEng} />
    </>
  )
  return (
    <>
      <MateriaPrima height={"350px"} title={"Lievito Madre"} hexColor={materiePrimi.lievitoMadreColor.hex} fluidImg={materiePrimi.lievitoMadreImg.asset.fluid} text={materiePrimi.lievitoMadreTextMobile} />
      <MateriaPrima whiteBehindImg imgBehindTitle height={"500px"} title={"Limoni di sorrento"} hexColor={materiePrimi.limoniColor.hex} fluidImg={materiePrimi.limoniImg.asset.fluid} text={materiePrimi.limoniTextMobile} />
      <MateriaPrima imgLeft height={"400px"} title={"Mela Annurca"} hexColor={materiePrimi.melaColor.hex} fluidImg={materiePrimi.melaImg.asset.fluid} text={materiePrimi.melaTextMobile} />
      <MateriaPrima height={"400px"} title={"Noci di Sorrento"} hexColor={materiePrimi.nociColor.hex} fluidImg={materiePrimi.nociImg.asset.fluid} text={materiePrimi.nociTextMobile} />
      <MateriaPrima imgBehindTitle height={"450px"} title={"Nocciola di Giffoni"} hexColor={materiePrimi.nocciolaColor.hex} fluidImg={materiePrimi.nocciolaImg.asset.fluid} text={materiePrimi.nocciolaTextMobile} />
      <MateriaPrima imgLeft height={"320px"} title={"Miele Millefiori"} hexColor={materiePrimi.mieleColor.hex} fluidImg={materiePrimi.mieleImg.asset.fluid} text={materiePrimi.mieleTextMobile} />
      <MateriaPrima imgBehindTitle longTitle height={"520px"} title={"Albicocche del Vesuvio"} hexColor={materiePrimi.albicocceColor.hex} fluidImg={materiePrimi.albicocceImg.asset.fluid} text={materiePrimi.albicocceTextMobile} />
    </>
  )
}

export default MateriePrimi;