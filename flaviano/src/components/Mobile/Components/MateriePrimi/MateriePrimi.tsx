import React from 'react';
import { MateriePrimePage } from '../../../../../types';
import MateriaPrima from '../MateriaPrima/MateriaPrima';

interface Props {
  materiePrimi: MateriePrimePage
}

const MateriePrimi= ({ materiePrimi }: Props) => {
  return (
    <>
      <MateriaPrima height={"350px"} title={"Lievito Madre"} hexColor={materiePrimi.lievitoMadreColor.hex} fluidImg={materiePrimi.lievitoMadreImg.asset.fluid} text={materiePrimi.lievitoMadreText} />
      <MateriaPrima whiteBehindImg imgBehindTitle height={"500px"} title={"Limoni di sorrento"} hexColor={materiePrimi.limoniColor.hex} fluidImg={materiePrimi.limoniImg.asset.fluid} text={materiePrimi.limoniText} />
      <MateriaPrima imgLeft height={"400px"} title={"Mela Annurca"} hexColor={materiePrimi.melaColor.hex} fluidImg={materiePrimi.melaImg.asset.fluid} text={materiePrimi.melaText} />
      <MateriaPrima height={"400px"} title={"Noci di Sorrento"} hexColor={materiePrimi.nociColor.hex} fluidImg={materiePrimi.nociImg.asset.fluid} text={materiePrimi.nociText} />
      <MateriaPrima imgBehindTitle height={"450px"} title={"Nocciola di Giffoni"} hexColor={materiePrimi.nocciolaColor.hex} fluidImg={materiePrimi.nocciolaImg.asset.fluid} text={materiePrimi.nocciolaText} />
      <MateriaPrima imgLeft height={"320px"} title={"Miele Millefiori"} hexColor={materiePrimi.mieleColor.hex} fluidImg={materiePrimi.mieleImg.asset.fluid} text={materiePrimi.mieleText} />
      <MateriaPrima longTitle imgLeft height={"520px"} title={"Albicocche del Vesuvio"} hexColor={materiePrimi.albicocceColor.hex} fluidImg={materiePrimi.albicocceImg.asset.fluid} text={materiePrimi.albicocceText} />
    </>
  )
}

export default MateriePrimi;