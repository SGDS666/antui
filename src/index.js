import { render } from "react-dom";
import App from "./App";
import './index.css'
import { RecoilRoot } from "recoil";

const root = document.getElementById('root')
render(
    <RecoilRoot>
        <App/>
    </RecoilRoot>

,root)

