import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import JadecutterImage from '../assets/weapons/Primordial_Jade_Cutter.webp'
import LostprayerImage from '../assets/weapons/Lost_Prayer_to_the_Sacred_Winds.webp'
import MitsspliterImage from '../assets/weapons/Mistsplitter_Reforged.webp'
import SkywardImage from '../assets/weapons/Skyward_Harp.webp'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsBook } from "react-icons/bs";

const Weapon = () => {
    return (
        <div>

        <Container>
            <br />
            <h1 className='text-white' id="weapon">5⭐WEAPON</h1>
            <Row>

                <Col md={4}>
                    <Card className="bg-dark text-light charImage">
                        <Image src={MitsspliterImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1'>
                                <Card.Title className='text-center'>Mistsplitter Reforged</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Mistsplitter Reforged (Japanese: 霧切の廻光 Kirigiri no Kaikou) is an Inazuman sword.
                                A sword that blazes with a fierce violet light. The name "Reforged" 
                                comes from it having been broken once before.
                                This Is One of the swords that the Shogun bestowed upon her Hatamoto.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                    Type: Sword
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="bg-dark text-white charImage">
                        <Image src={JadecutterImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1'>
                                <Card.Title className='text-center'>Primordial Jade Cutter</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Primordial Jade Cutter (Chinese: 磐岩结绿 Pányán Jiélǜ, "Gathering Greenery on Monolith") 
                                is a Liyue sword. It was originally forged by Rex Lapis.
                                A ceremonial sword masterfully carved from pure jade. 
                                There almost seems to be an audible sigh in the wind as it is swung.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                    Type: Sword
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="bg-dark text-white charImage">
                        <Image src={SkywardImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Skyward Harp</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                    A greatbow that symbolizes Dvalin's affiliation with the Anemo Archon. 
                                    The sound of the bow firing is music to the Anemo Archon's ears. 
                                    It contains the power of the sky and wind within.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                    Type: Bow
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="bg-dark text-light charImage">
                        <Image src={LostprayerImage} alt="banner"/>
                            <div className='p-2 m-1'>
                                <Card.Title className='text-center'>Lost Prayer to the Sacred Winds</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                An educational tome written by anonymous early inhabitants who worshiped the wind. 
                                It has been blessed by the wind for its faithfulness and influence over the millennia. 
                                Countless hands have touched this book, though any prints they left have since been carried away 
                                by the wind.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                    Type: Catalyst
                                </Card.Text>
                            </div>    
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>  
    )
}

export default Weapon