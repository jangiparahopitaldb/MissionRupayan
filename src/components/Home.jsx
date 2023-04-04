import {Col,Row,Image,Card,Container,Button} from 'react-bootstrap';
import {styled} from '@mui/material';
import back1 from '../pics/background1.png';
import img1 from '../pics/img1.png';
import hands from '../pics/hands.png';
import img2 from '../pics/img2.jpg';
import img3 from '../pics/img3.jpg';
import "./Component.css";
import tanmoy from "../pics/tanmoy.jpg";
import hara from "../pics/hara.jpg";
import avi from "../pics/avi.jpg";
import subho from "../pics/subho.jpg";
import bulti from "../pics/bulti.jpeg";
import {Avatar} from '@mui/material';




const MyRow = styled(Row)`
  width:100%;
  height:360px;
  margin-top:60px;
  position: absolute;
  background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
`;
const MainContainer = styled(Container)`
  position: relative;

`
const images_arr = [
    { image: tanmoy, text: "Tanmoy Nandi" },
    { image: hara, text: "Haradhon De" },
    { image: avi, text: "Abhishek Das" },
    { image: subho, text: "Subhojit De" },
    { image: bulti, text: "Bulti Bag" },
  ];
const members = images_arr.map((imageValue,index) =>
    <div style={{marginRight:'15px' }}>
        <Card border="info" className="text-center" style={{width:'12rem', height:'12rem'}}>
            <Card.Body>
                <Card.Title><center><Avatar src={imageValue.image} sx={{ width: 100, height: 100 }}/></center></Card.Title>
                <Card.Subtitle style={{fontSize:'15px'}}>{imageValue.text}</Card.Subtitle>
            </Card.Body>
        </Card>
    </div>
);

const Home = ()=>{
    const scrollLeft=()=>{
        document.getElementById('memberList').scrollLeft -= 100;
    }
    const scrollRight=()=>{
        document.getElementById('memberList').scrollLeft += 100;
    }
    return(
        <div>
            <MainContainer fluid>
                <MyRow className="justify-content-md-center" >
                    <Col xs="1" style={{backgroundColor:'yellow',height:'150px',marginTop:'100px',width:'2px'}}>
                    </Col>
                     <Col xs md="auto">
                        <p style={{color:'yellow',fontWeight:'bold',marginTop:'100px'}}>Now Need Help You</p>
                        <p style={{color:'white',fontWeight:'bold',marginTop:'5px',fontSize:'18px'}}>MISSION <u><i>Rupayan</i></u> Helps People<br/>In Rural Areas For Their Healths.</p>
                     </Col>
                     <Col xs lg="1" style={{marginTop:'20px', marginLeft:'40px'}}>
                        <Image src={back1} height={340} width={340} />
                     </Col>
                </MyRow>
                <div style={{width:'100%',position:'absolute',marginTop:'400px'}}>
                    <Row style={{backgroundImage:`url(${hands})`,backgroundPosition:'left bottom',backgroundRepeat:'no-repeat',backgroundSize:'contain', width:'100%',height:'500px',paddingTop:'12%',paddingLeft:'20%',backgroundColor:'#F6F6C9'}} >
                        <Col sm = {7}>
                            <div className="custocontainer">
                                <div className="box" style={{backgroundImage:`url(${img2})`}}></div>
                                <div className="box stack-top" style={{backgroundImage:`url(${img3})`}}></div>
                            </div>
                        </Col>
                        <Col sm={5} style={{marginTop:'5%'}}>
                            <p style={{color:'red',fontSize:'12px',fontWeight:'bold'}}>HELP PEOPLE NOW</p>
                            <p style={{color:'brown',fontSize:'24px',fontWeight:'bold'}}>WE'RE Non-Profit<br/>ORGANIZATION</p>
                            <p style={{color:'black',fontSize:'15px',fontWeight:'bold'}}><i>We serve health related free check up to all families of rural area in Hooghly, West Bengal.</i></p>
                            <p style={{color:'black',fontSize:'12px'}}>We serve health related free check up to all families of rural area and organize camps for some essential tests like thyroid, blood sugar or haemoglobin without any cost in Hooghly, West Bengal.</p>
                        </Col>
                    </Row>
                    <Row style={{backgroundColor:'#D10000',height:'120px',paddingTop:'3%'}}>
                        <Col sm></Col>
                        <Col sm xs className='text-white'><p><b>LET's MAKE A DIFFERENCE IN</b>
                        <br/><b>THE LIVES OF OTHERS</b></p></Col>
                        <Col sm></Col>
                        <Col sm></Col>
                    </Row>
                    <Row style={{height:'360px'}}>
                        <Col sm={8} style={{backgroundColor:'#ECECE7', position:'relative'}}>
                            <div style={{position:'absolute', marginLeft:'3%',marginTop:'5%'}}>
                                <p style={{fontSize:'12px',color:'#D10000',fontWeight:'bold'}}>IMPACT</p>
                                <p style={{fontSize:'15px',color:'black',fontWeight:'bold'}}>EXPLORE<br/>
                                OUR CHRAITABLE WORK<br/>
                                AND IMPACT</p>
                                <p style={{width:'70%',color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div style={{backgroundColor:'white',width:'250px',height:'250px', position:'absolute', marginLeft:'80%',marginTop:'8%',paddingLeft:'5%',paddingTop:'2%',paddingRight:'5%'}}>
                                <Row>
                                    <Col className='square-box' style={{width: '100px',height:'100px'}}></Col>
                                    <Col className='square-box' style={{width: '100px',height:'100px', backgroundColor:'#D10000'}}></Col>
                                </Row>
                                <Row>
                                    <Col className='square-box' style={{width: '100px',height:'100px',backgroundColor:'#D10000'}}></Col>
                                    <Col className='square-box' style={{width: '100px',height:'100px'}}></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={4} style={{backgroundColor:'black'}}></Col>
                    </Row>
                    <Row style={{height:'200px',padding:'5%'}}>
                        <Col sm={5}>
                            <p style={{fontSize:'10px',color:'#D10000',fontWeight:'bolder'}}>OUR MEMBERS</p>
                            <span style={{fontSize:'25px',color:'black',fontWeight:'bolder'}}>FIELD EXPERTS</span>
                            <p style={{fontSize:'12px'}}>We are expert in the corresponding fields and delivers the best service.</p>
                            <Button variant="outline-success" onClick={()=>scrollLeft()}>&lt;</Button>
                            &nbsp;
                            <Button variant="outline-success" onClick={()=>scrollRight()}>&gt;</Button>
                        </Col>
                        <Col sm={7}>
                            <div style={{display: 'flex', flexDirection:'row'}} className='memConatiner' id='memberList'>
                                {members}
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className="justify-content-md-center" style={{position:'absolute',marginTop:'340px',marginLeft:'12.5%',marginRight:'12.5%'}}>
                    <Card className='text-white' style={{marginLeft:'10px', width: '12rem'}}>
                        <Card.Img src={img1}/>
                            <Card.ImgOverlay>
                                <Card.Text>
                                    This is a demo
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className='text-white' style={{marginLeft:'10px', width: '12rem'}}>
                            <Card.Img src={img1} />
                            <Card.ImgOverlay>
                                <Card.Text>
                                This is a demo
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className='text-white' style={{marginLeft:'10px',marginRight:'10px',width: '12rem'}}>
                            <Card.Img src={img1} />
                            <Card.ImgOverlay>
                                <Card.Text>
                                This is a demo
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                </Row>            
            </MainContainer>
        </div>
    );  
}
export default Home;