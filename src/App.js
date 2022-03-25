import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import "./components/styles/styles.scss"
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom"
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
// import * as React from 'react'
// import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
//
// const messagesInFrench = {
//     myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
// }

function App() {
    return (
        <div className="App">
            {/*<IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">*/}
            {/*    <p>*/}
            {/*        <FormattedMessage*/}
            {/*            id="myMessage"*/}
            {/*            defaultMessage="Today is {ts, date, ::yyyyMMdd}"*/}
            {/*            values={{ts: Date.now()}}*/}
            {/*        />*/}
            {/*        <br />*/}
            {/*        <FormattedNumber value={19} style="currency" currency="EUR" />*/}
            {/*    </p>*/}

            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-me" element={<About/>}/>
                <Route path="/skills" element={<Skills/>}/>
                {/*<Route path="/contacts" element={<Contacts/>}/>*/}
            </Routes>
            {/*</IntlProvider>*/}
        </div>
    );
}

export default App;
