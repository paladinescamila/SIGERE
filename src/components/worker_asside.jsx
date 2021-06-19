import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Asside from './Asside';
import AssideAccount from './AssideAccount';
import Conector_Projects from './Conector_Projects';
import Conector_Requirements from './Conector_Requirements';
import IntroductionSection from './IntroductionSection';
function worker_asside() {
    return (
        <>
        <Router>
        <AssideAccount/>
        <Switch>
            <Route path='/' exact component={Conector_Projects}/>
            <Route path='/requirements' component={Conector_Requirements}/>
            <Route path='/intro' component={IntroductionSection}/>
        </Switch>
        </Router>
        </>
    )
}

export default worker_asside
