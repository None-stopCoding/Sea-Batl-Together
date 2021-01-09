import './Login.css';

export const PlayButton = ({ startLogin }) => {
    return (
        <button className='sb-login__play btn-floating pulse cyan lighten-2'
                onClick={startLogin}
        >
            <i className="material-icons">
                <img alt="play button"
                    width='217px'
                    height='217px'
                    src={process.env.PUBLIC_URL + '/images/login/play.svg'}/>
            </i>
        </button>
    );
}