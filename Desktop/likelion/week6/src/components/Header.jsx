import './Header.css'
import Image from './Image';


const Header = ({login}) => {
    return <div id="header">
        <div><Image/></div>
            <div>뉴스</div>
            <div>교과서</div>
        <div>
            <div id="bar"><span></span></div>
            <div></div>
        </div>
        {login === "로그인" ? <div>{login}</div> : <div><div>{login}</div><div></div></div>}
        
        </div>;
  };
  

  export default Header;

  