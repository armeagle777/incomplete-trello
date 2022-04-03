export const pagesStyles = {
    navigationLink: {
        textDecoration: 'none',
        padding: '8px 16px',
        color: 'blue',
        fontSize: '20px',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    navigation: {
        width: '100%',
        height: '50px',
        paddingRight: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottom: '1px solid blue'
    },
    headerContainer: {
        height: '60px',
        width: '100%',
        background: {
            color: '#1976d2;'
        },
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navContainer:{
        width:'70%,'
    },
    navigationLinks:{
        textDecoration:'none',
        margin:'10px',
        color:'#fff',
    },
    activeLink:{
        color:'red',
        textDecoration:"none"
    }
}