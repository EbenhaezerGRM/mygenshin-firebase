import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import NahidaImage from "../assets/characters/Nahida.webp"
import GanyuImage from "../assets/characters/Ganyu.webp"
import RaidenImage from "../assets/characters/Raiden_Shogun.webp"
import YaemikoImage from "../assets/characters/Yae_Miko.webp"
import AyakaImage from "../assets/characters/Kamisato_Ayaka.webp"
import ZhongliImage from '../assets/characters/Zhongli.webp'
import TighnariImage from "../assets/characters/Tighnari.webp" 
import AyatoImage from "../assets/characters/Kamisato_Ayato.webp"
import IttoImage from "../assets/characters/Arataki_Itto.webp"
import MonaImage from "../assets/characters/Mona.webp"
import QiqiImage from "../assets/characters/Qiqi.webp"

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsBook } from "react-icons/bs";

function Characters () {
    return (
        <div>
        <Container>
            <br />
            <h1 className='text-white' id="Character">5⭐CHARACTER</h1>
            <Row>

            <Col md={4} className='charWrapper'>
                    <Card className="bg-dark text-white charImage">
                        <Image src={NahidaImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Nahida</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Nahida is a playable Dendro character in Genshin Impact
                                She is the vessel of Lesser Lord Kusanali, the current Dendro Archon.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                    Gnosis: Dendro
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper'>
                    <Card className="bg-dark text-white charImage">
                        <Image src={GanyuImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Ganyu</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Ganyu (Chinese: 甘雨 Gānyǔ) is a playable Cryo character in Genshin Impact.
                                She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as 
                                the general secretary of the Liyue Qixing.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                    Vision: Cryo
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={RaidenImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Raiden Shougun</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                The Raiden Shogun (Japanese: 雷電将軍 Raiden Shougun) is a playable Electro character in Genshin Impact.
                                As the Shogun, she is the vessel of Beelzebul, the current Electro Archon of Inazuma.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Gnosis: Electro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={YaemikoImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Yae Miko</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Yae Miko (Japanese: 八重神子 Yae Miko), also known as Guuji Yae (Japanese: 宮司 Guuji) or the Guuji, 
                                is a playable Electro character in Genshin Impact.
                                Miko oversees the Grand Narukami Shrine and is the owner of the Yae Publishing House.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Vision: Electro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={AyakaImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Kamisato Ayaka</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Yae Miko (Japanese: 八重神子 Yae Miko), also known as Guuji Yae (Japanese: 宮司 Guuji) or the Guuji, 
                                is a playable Electro character in Genshin Impact.
                                Miko oversees the Grand Narukami Shrine and is the owner of the Yae Publishing House.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Vision: Cryo 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={ZhongliImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Zhongli</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Zhongli (Chinese: 钟离 Zhōnglí) He is a consultant of the Wangsheng Funeral Parlor. 
                                He is later revealed to be the current vessel of the Geo Archon, Morax, who has decided to experience 
                                the world from the perspective of a mortal.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Gnosis: Geo 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={TighnariImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Tighnari</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                A Forest Watcher on profile in Gandharva Ville. Despite his intelligence, 
                                he prefers to live a solitary life in the depths of Avidya Forest rather 
                                than in the ivory tower of Sumeru Akademiya.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Vision: Dendro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={AyatoImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Kamisato Ayato</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Kamisato Ayato (Japanese: 神里綾人 Kamisato Ayato) is a playable Hydro character in Genshin Impact.
                                He is the current head of the Kamisato Clan, the older brother of Kamisato Ayaka, and the Yashiro Commissioner.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Vision: Hydro
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={IttoImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Arataki Itto</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Arataki Itto (Japanese: 荒瀧一斗 Arataki Itto) is a playable Geo character in Genshin Impact.
                                A descendant of the crimson oni, Itto is also the leader and founder of the Arataki Gang.
                                He is an intrepid man with Oni blood running through his veins.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Vision: Geo 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={MonaImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Mona</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Astrologist Mona Megistus is a playable Hydro character in Genshin Impact.
                                An astrologist of knowledgeable skill and high pride, Mona has settled in Mondstadt to avoid suffering the ire 
                                of her master after unwittingly reading the latter's diary.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Vision: Hydro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={QiqiImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Qiqi</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Qiqi (Chinese: 七七 Qīqī) is a playable Cryo character in Genshin Impact.
                                Resurrected as a zombie by the adepti, she has ended up in Baizhu's care 
                                and now works at Bubu Pharmacy in Liyue Harbor. she seldom has much in the way of words or emotion.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                Vision: Cryo 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>  
    )
}

export default Characters