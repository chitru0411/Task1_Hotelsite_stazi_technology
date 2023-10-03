
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import NewYork from './NewYork';
import Mumbai from './Mumbai';
import London from './London';
import Paris from './Paris';






const App = () => {
  return (
   <>

          <Routes>
                 <Route path="/"    element={<NewYork/>}  />
                <Route path="/mumbai" element={<Mumbai/>} />
                <Route path="/paris" element={<Paris/>}/>
                <Route path="/london" element={<London/>}/>
            </Routes>
   </>
  );
};

export default App;

/*<li> <a href='/'>New York</a></li>
                     <li><a href='/Mumbai' target='_blank'>Mumbai</a></li>
                     <li><a href='/Paris' target='_blank'>Paris</a></li>
                    <li><a href='/London' target='_blank'>London</a></li>*/

                    /*<li><Link to="/"><NewYork/></Link> </li>
                     <li><Link to="/mumbai"><Mumbai/></Link></li>
                     <li><Link to="/paris"><Paris/></Link></li>
                    <li><Link to="/london"><London/></Link></li>*/