import "./fonts.css";
import France from "../../public/asssets/frenchTot/France.png";
import Bento01 from "../../public/asssets/bentos/Bento01.png";
import Bento02 from "../../public/asssets/bentos/Bento02.png";
import Bento03 from "../../public/asssets/bentos/Bento03.png";
import Bento04 from "../../public/asssets/bentos/Bento04.png";
import Bento05 from "../../public/asssets/bentos/Bento05.png";
import Bento06 from "../../public/asssets/bentos/Bento06.png";
import Plugntote from "../../public/asssets/plugntote.png";
import Image from "next/image";
import { Video } from "./ui/video";

export default function Home() {
  return (
    <main className="p-0">

      <Video />
      <navbar>
        logo <button>acheter</button>
      </navbar>
      <p>The french tototte</p>

      <Image src={France} alt="french-flag" />

      <p>pour ceux qui osent être différents</p>

      <button className="p-2 bg-blue">découvrir</button>

      <div className="flex">
        <Image className="" src={Bento02} alt="bento-picture" />

        <div className="flex-col">
          <Image src={Bento03} alt="bento-picture" />
          <div className="flex">
            <Image src={Bento04} alt="bento-picture" />
            <Image src={Bento06} alt="bento-picture" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Image src={Bento01} alt="bento-picture" />
        <Image src={Bento05} alt="bento-picture" />
      </div>

      <Image src={Plugntote} alt="plug-n-tote" />

      <div className="flex-col">
      <p className="title">
      technologie plug’n’tote
        </p>
        <p className="text">
        La tototte est équipée de la <span className="bold">technologie
        plug'n'tote </span> , permettant de
        changer de plug à volonté, offrant ainsi un accès à <span>
        une gamme infinie de
        saveurs de suçotage
          </span>pour satisfaire tous les goûts.
        </p>
      </div>

      <div className="flex-col">
        <p className="text">
        Cette technologie vous permet de changer en un clin d’œil de saveur pour <span>  voyager du bout des lèvres.</span>
        </p>
      </div>


      <button>Découvrir les saveurs</button>
    </main>
  );
}
