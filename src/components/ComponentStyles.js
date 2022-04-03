const url = 'https://wallpapercave.com/wp/wp2649374.jpg'
export const ComponentStyles={
    boardCardContainer:{
        width:'150px',
        minHeight:'100px',
        borderRadius:'5px',
        color:'#fff',
        background:{
            color:'#86898F'
        },
        textDecoration:'none',
        position:'relative'
    },
    navlinkCloser:{
        position:'absolute',
        top:'0',
        right: '0'
    },
    boardsContainer:{
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        width: '60%',
        margin:'10px auto',
        padding:{
            left:'20px'
        },
        height: '100vh',
        overflow:'scroll',
        overflowX: 'hidden'

    },
    boardContainer:{
        width:'100%',
        height: '100vh',
        backgroundImage: `url(${url})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        color:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        // filter: 'blur(2px)',
    },
    column:{
        width:'32%',
        padding:'5px 10px',
        display:'flex',
        flexDirection: 'column',
        gap:'8px',
    },
    taskCard:{
        width:'100%',
        color:'#000',
        background:'rgba(255,255,255,.4)',
        borderRadius: '3px',
        padding:'5px 10px',
        fontSize:'12px',
        position: 'relative'

    },
    loader:{
        width:'100px'
    },
    deleteButton:{
        position:'absolute',
        top:'0',
        right:'5px',
        fontSize:'16px',
        background:'none',
        border:'none',
        outline:'none',
        '&:hover':{
            cursor:'pointer'
        }
    },
    newTaskContainer:{
        background:"#000",
        display:'flex',
        flexDirection: 'column',
        width:'50%'
    },
    textarea:{
        width: '100%',
        height: '50px',
        resize: 'none',
        padding:'5px'
    },
    newTaskTitle:{
        padding:'5px',
    },
    buttonRow:{
        display:'flex',
        gap:'5px',
        padding:{
            bottom:'5px'
        }
    }


}