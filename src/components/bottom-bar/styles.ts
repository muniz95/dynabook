const styles = {
  bottomBar: {
    display: 'flex',
    height: '20%',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity 1s cubic-bezier(0.77, 0, 0.175, 1)',
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s 1s, opacity 1s cubic-bezier(0.77, 0, 0.175, 1)',
  },
  textSpeedControllersBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: '10vw',
    height: '10vw',
    borderRadius: '10px',
    backgroundColor: '#2eb297',
    color: 'white',
    fontWeight: 'bolder',
  },
};

export default styles;
