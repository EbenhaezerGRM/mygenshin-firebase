import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsArrowReturnLeft } from "react-icons/bs";

// weapon
import lostPrayer from '../assets/weapons/Lost_Prayer_to_the_Sacred_Winds.webp'
import skyWard from '../assets/weapons/Skyward_Harp.webp'
import theCatch from '../assets/weapons/The_Catch.webp'
import Mistsplitter from '../assets/weapons/Mistsplitter_Reforged.webp'
import whiteTassel from '../assets/weapons/White_Tassel.webp'
import prototypeCresent from '../assets/weapons/Prototype_Crescent.webp'
import jadeCutter from '../assets/weapons/Primordial_Jade_Cutter.webp'
import whiteBlind from '../assets/weapons/White_Blind.webp'
import oasthswornEye from '../assets/weapons/Oathsworn_Eye.webp'
import amenomaKageuchi from '../assets/weapons/Amenoma_Kageuchi.webp'

// wanderer's_Troupe
import wtFlower from '../assets/artifacts/wanderers_Troupe/wanderers_troupe_flower.webp'
import wtPlume from '../assets/artifacts/wanderers_Troupe/wanderers_troupe_plume.webp'
import wtSands from '../assets/artifacts/wanderers_Troupe/wanderers_troupe_sands.webp'
import wtGoblet from '../assets/artifacts/wanderers_Troupe/wanderers_troupe_goblet.webp'

// noblesse_Oblige
import noFlower from '../assets/artifacts/noblesse_Oblige/noblesse_oblige_flower.webp'
import noPlume from '../assets/artifacts/noblesse_Oblige/noblesse_oblige_plume.webp'
import noSands from '../assets/artifacts/noblesse_Oblige/noblesse_oblige_sands.webp'
import noGoblet from '../assets/artifacts/noblesse_Oblige/noblesse_oblige_goblet.webp'
import noCirclet from '../assets/artifacts/noblesse_Oblige/noblesse_oblige_circlet.webp'

// gladiator's_Finale
import gfFlower from '../assets/artifacts/gladiators_Finale/gladiators_finale_flower.webp'
import gfPlume from '../assets/artifacts/gladiators_Finale/gladiators_finale_plume.webp'
import gfSands from '../assets/artifacts/gladiators_Finale/gladiators_finale_sands.png'
import gfGoblet from '../assets/artifacts/gladiators_Finale/gladiators_finale_goblet.png'
import gfCirclet from '../assets/artifacts/gladiators_Finale/gladiators_finale_circlet.png'

// emblem_Of_Severate_Fate
import eosfFlower from '../assets/artifacts/emblem_Of_Severed_Fate/emblem_of_severed_fate_flower.webp'
import eosfPlume from '../assets/artifacts/emblem_Of_Severed_Fate/emblem_of_severed_fate_plume.webp'
import eosfSands from '../assets/artifacts/emblem_Of_Severed_Fate/emblem_of_severed_fate_sands.webp'
import eosfGoblet from '../assets/artifacts/emblem_Of_Severed_Fate/emblem_of_severed_fate_goblet.webp'
import eosfCirclet from '../assets/artifacts/emblem_Of_Severed_Fate/emblem_of_severed_fate_circlet.webp'

// shimenawas_Reminiscence
import srFlower from '../assets/artifacts/shimenawas_Reminiscence/shimenawas_reminiscence_flower.webp'
import srSands from '../assets/artifacts/shimenawas_Reminiscence/shimenawas_reminiscence_sands.webp'

// heart_Of_Depth
import hodPlume from '../assets/artifacts/heart_Of_Depth/heart_of_depth_plume.webp'
import hodGoblet from '../assets/artifacts/heart_Of_Depth/heart_of_depth_goblet.webp'

// deepwood_Memories
import dmFlower from '../assets/artifacts/deepwood_Memories/deepwood_memories_flower.webp'
import dmPlume from '../assets/artifacts/deepwood_Memories/deepwood_memories_plume.webp'
import dmSands from '../assets/artifacts/deepwood_Memories/deepwood_memories_sands.webp'

// echoes_Of_An_Offering
import eoaoGoblet from '../assets/artifacts/echoes_Of_An_Offering/echoes_of_an_offering_goblet.webp'
import eoaoCirclet from '../assets/artifacts/echoes_Of_An_Offering/echoes_of_an_offering_circlet.webp'

// tenacity_Of_The_Millelith
import totmFlower from '../assets/artifacts/tenacity_Of_The_Millelith/tenacity_of_the_millelith_flower.webp'

// gilded_Dreams
import gdCirclet from '../assets/artifacts/gilded_Dreams/gilded_dreams_circlet.png'

// blizzard_Strayer
import bsFlower from '../assets/artifacts/blizzard_Strayer/blizzard_strayer_flower.webp'
import bsPlume from '../assets/artifacts/blizzard_Strayer/blizzard_strayer_plume.webp'
import bsCirclet from '../assets/artifacts/blizzard_Strayer/blizzard_strayer_circlet.webp'

function Details() {
  return (
    <div>
    <Container >
      <br />
      <h1 className='text-white' id="details">DETAILS<a className="returnButton" href="#Character"><BsArrowReturnLeft /></a></h1>

      <h4 className="text-white">Nahida</h4>
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={dmFlower}/>
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={dmPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={srSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={hodGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={lostPrayer} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Ganyu</h4>
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={wtFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={wtPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={wtSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={wtGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eoaoCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={skyWard} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Raiden Shougun</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={eosfFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eosfPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eosfSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eosfGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={bsCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={theCatch} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Yae Miko</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={eosfFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eosfPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={wtGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={lostPrayer} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Kamisato Ayaka</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={gfFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={bsPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={noSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={bsCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={Mistsplitter} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Zhongli</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={noFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={noPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={noSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={noGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={whiteTassel} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Tighnari</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={bsFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={wtPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={wtSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={hodGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={noCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={prototypeCresent} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Kamisato Ayato</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={srFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={srSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={bsCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={jadeCutter} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Arataki Itto</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={bsFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={srSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eosfGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eosfCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={whiteBlind} />
      </Card>
    </CardGroup>
    </Container>
    
    <br />

    <Container >
      <br />
      <h4 className="text-white">Mona</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={gfFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eosfPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={dmSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={hodGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gdCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={oasthswornEye} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Qiqi</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={totmFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={hodPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={srSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={eoaoGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={bsCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={amenomaKageuchi} />
      </Card>
    </CardGroup>
    </Container>
    </div>
  );
}

export default Details;