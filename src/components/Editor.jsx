import {Box, styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import { useState } from 'react';



import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';




const Heading = styled(Box)`
display:flex;
background-color: #1d1e22;
color: white;
`



const Header = styled(Box)`
display: flex;
background-color:#060606;
color: white;
justify-content: space-between;
`


const Container = styled(Box)
`
flex-grow:1;
flex-basic:0;
padding:0 10px;
`



const Editor = ({heading, icon, color, value, onChange})=>{

    const [open, setOpen] = useState(true);

    const handlechange = (editor, data, value)=>{
        onChange(value);
    }
    
    return (
        <Container style={open ? {flexGrow : 1} : {flexGrow: 0}}>
            <Header>
                <Heading>
                     <Box component="span"
                       style={{
                        background:color,
                        height: 20,
                        width: 20,
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        fontWeight: 'bold',
                        color: '#000',
                        marginRight: 5,
                        paddingBottom: 2
                       }}>{icon}</Box>{heading}
                </Heading>
                <CloseFullscreenIcon 
                   onClick={() => setOpen(prevState => !prevState)}
                   fontSize='small' 
                   style={{alignSelf:'center'}}
                />
            </Header>
           <ControlledEditor 
           className='controlled-editor'
           value={value}
           onBeforeChange={handlechange}
           options={{
            theme: 'material',
            lineNumbers: true
           }}
           />
        </Container>
    )
}



export default Editor;