import '../index.css';
import HeaderInfo from './ComponentForHeaderInfo';
import { Logo,SearchInput } from './ComponentForHead';
function Head() {
  return (
    <div className="headDiv">
      <Logo />
      <h4 className="forYellowBorder">Գլխավոր</h4>
      <HeaderInfo />
      <SearchInput />
    </div>
  );
}

export default Head;