import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import AddCategoryWindow from './AddCategoryWindow';
import CategoryCard from './CategoryCard';

import categoriesData from '../data/categories';
function Conector_home() {

    const createCategoryOption = () => {
        setDisplay(<AddCategoryWindow homeOption={homeOption}/>);
    }

    const homeOption = () => {
        setDisplay(<Home createCategoryOption={createCategoryOption} categoryOption={categoryOption}/>);
    }

    const categoryOption = () => {
        setDisplay(<CategoryCard category={categoriesData['Project-001'][0]} homeOption={homeOption}/>);
    }

    
      
    const [display, setDisplay] = useState(<Home createCategoryOption={createCategoryOption} categoryOption={categoryOption}/>);
    return (
        <>
        <div>
        <div>
          {display}
        </div>
      </div>
      </>
    )
}

export default Conector_home;
