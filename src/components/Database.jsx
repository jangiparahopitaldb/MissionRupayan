import {Container, Typography} from '@mui/material';
import {FormControl,FormGroup,Input,InputLabel,Button,Select,MenuItem,styled} from '@mui/material';
import {useState } from 'react';
import { addFormDetails } from '../service/Api';
import {useNavigate} from 'react-router-dom';


const MainContainer = styled(Container)`
    width:40%;
    margin:5% auto 0 auto;
    & > div{
        margin-top:15px;
    }
`; 
const Formcontroler = styled(FormControl)`
    margin-top:15px;
`
const defaultValue = {
    formno:'',
    surveyer:''
}



const Database = ()=>{
    const navigate = useNavigate();
    const [info,setInfo] = useState(defaultValue);
    const onValueChange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value});
    }
    const addDetails=async()=>{
        await addFormDetails(info);
    }
    const fetchDetails = async()=>{
        navigate('/details');
    }
    return(
      <MainContainer>
            <Typography variant='h5'>Add Form No</Typography>
            <FormGroup>
                <Formcontroler>
                    <InputLabel>Form No</InputLabel>
                    <Input 
                        placeholder='Enter Form No'
                        name = "formno"
                        onChange={(e)=>onValueChange(e)}
                        />
                </Formcontroler>
                <Formcontroler>
                    <InputLabel>Surveyer</InputLabel>
                    <Select
                        label="Surveyer"
                        onChange={(e)=>onValueChange(e)}
                        name = "surveyer"
                        defaultValue="choose"
                    >
                        <MenuItem value="">
                            <em>Admin</em>
                        </MenuItem>
                        <MenuItem value={1}>Tanmay Nandi</MenuItem>
                        <MenuItem value={2}>Haradhan De</MenuItem>
                        <MenuItem value={3}>Abhishek Das</MenuItem>
                        <MenuItem value={7}>Subhojit De</MenuItem>
                        <MenuItem value={10}>Bulti Bag</MenuItem>
                    </Select>
                </Formcontroler>
                <Formcontroler>
                    <Button variant='outlined' color='success' onClick={()=>addDetails()}>Save</Button>
                </Formcontroler>
            </FormGroup>
            <Button variant='outlined' color='primary' onClick={()=>fetchDetails()}>View</Button>
      </MainContainer>  
    );  
}
export default Database;