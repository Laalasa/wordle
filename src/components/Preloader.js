import { ColorRing } from 'react-loader-spinner'
import '../styles/Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <ColorRing
                visible={true}
                height="120"
                width="120"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#f4c498','#ECBFD5', '#6f9d87', '#ECBFD5', '#f4c498']}
            />
        </div>
    );
}

export default Preloader;