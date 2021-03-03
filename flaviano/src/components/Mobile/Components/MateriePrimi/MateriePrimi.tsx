import React from 'react';
import { MateriePrimePage } from '../../../../../types';
import MateriaPrima from '../MateriaPrima/MateriaPrima';

interface Props {
  materiePrimi: MateriePrimePage
}

const MateriePrimi= ({ materiePrimi }: Props) => {
  console.log("materie prime mobile", materiePrimi);
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