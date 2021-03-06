import { BodyComponent } from "./components/BodyComponent";
import { Header } from "./components/Header";
import { MainStats } from "./components/MainStats";
import { Modal } from "./components/smallComps/Modal";

export function App(){
    return (<>
        <Modal/>
        <Header/>
        <MainStats/>
        <BodyComponent/>
        </>
    )
}