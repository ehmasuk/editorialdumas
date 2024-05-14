const popupWraper = {
    position: 'fixed',
    padding: '100px 0',
    height: '100vh',
    left: '0',
    top: '0',
    backgroundColor: 'rgb(0 0 0 / 35%)',
    width: '100%',
    zIndex: '99',
    backdropFilter: 'blur(1px)',
    overflow: 'auto'
}
const popupInner = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    margin: 'auto',
    position: 'relative',
}

export {popupWraper,popupInner}