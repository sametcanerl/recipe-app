import { HeaderText, HomeImg, ImgDiv } from './Home.style';

import { useContext } from 'react';
import Header from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import homeSvg from '../../assets/home.svg';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
 
  const {recipes} = useContext(AuthContext)

  // console.log(recipes);
  return (
    <div>
      <Header
        // setQuery={setQuery}
        // setSelectedMeal={setSelectedMeal}
        // mealType={mealType}
        // getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
