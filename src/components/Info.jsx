import {Container,styled,Table,TableBody, TableCell, TableHead, TableRow,Button} from '@mui/material';
import {fetchFormDetails} from '../service/Api';
import {useEffect,useState } from 'react';
import {Link} from "react-router-dom";


const MainContainer = styled(Container)`
    margin:5% auto 0 auto;
`; 

const TblHead = styled(TableHead)`
    background-color:black;
`;
const TblCell = styled(TableCell)`
    color:white;
    font-weight:bolder;
`;
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Info = ()=>{
    useEffect(()=>{
        getAllForms();
    },[]);
    const[allForms,setForms]  = useState([]);
    const getAllForms = async()=>{
        let response  = await fetchFormDetails();
        setForms(response.data);
    };
    const surv_arr = ["None","Tanmay Nandi","Haradhan De","Abhishek Das"];
    return(
        <MainContainer>
            <Table>
                <TblHead>
                    <TableRow>
                        <TblCell>Sl No</TblCell>
                        <TblCell>Form No</TblCell>
                        <TblCell>Surveyer</TblCell>
                        <TblCell>Action</TblCell>
                    </TableRow>
                </TblHead>
                <TableBody>
                    {
                        allForms.map((allForm,i)=>(
                            <StyledTableRow key={i}>
                                <TableCell>{allForm._id}</TableCell>
                                <TableCell>{allForm.formno}</TableCell>
                                <TableCell>{surv_arr[allForm.surveyer]}</TableCell>
                                <TableCell><Button variant="outlined" color="secondary" component={Link} to={`/edit/${allForm._id}`} >Edit</Button></TableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </MainContainer>
    );  
}
export default Info;