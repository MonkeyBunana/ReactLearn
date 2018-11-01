import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter as Router, Switch} from 'react-router-dom'

import UserAddPage from "./pages/UserAdd";
import HomePage from "./pages/Home";

/**
 * 一个HashRouter只能放一个route，多放要加组件进行嵌套
 *      使用Switch（仅仅渲染当前路径），然后加个exact（严格匹配路径）就ok
 */
ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user/add" component={UserAddPage}/>
        </Switch>
    </Router>
), document.getElementById('root'));



























// class Names extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn : true};
//
//         this.changeName = this.changeName.bind(this);
//     }
//
//     changeName() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <h1 id="n" onClick={this.changeName}>
//                 {this.state.isToggleOn ? 'hello react' : 'goodbye react'}
//             </h1>
//         );
//     }
// }
//
// function Name(props) {
//     return <h3>网站名称：{props.name}</h3>;
// }
// function Url(props) {
//     return <h3 onClick={OnAppClick}>网站地址：{props.url}</h3>;
// }
// function OnAppClick() {
//     window.location.href = "https://react.docschina.org/";
// }
// function App() {
//     return (
//         <div>
//             <Name name="React"/>
//             <Url url="https://react.docschina.org/"/>
//         </div>
//     );
// }
//
// function Clock(prop) {
//     return (
//         <div>
//             <Names/>
//             <h2>现在是 {prop.date.toLocaleTimeString()}.</h2>
//             <h3><App/></h3>
//         </div>
//     );
// }
//
//
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }
//
//
// setInterval(tick, 1000)