import "./loader.css";
import { InfinitySpin } from  'react-loader-spinner';
const Loader = () => {
  return (<div className="loading"> 
                <InfinitySpin 
                    width='200'
                    color="rgb(203,26,128)"
                />
    </div>)
};
export default Loader;