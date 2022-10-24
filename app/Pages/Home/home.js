import "./styles.css"
import { homeCmp } from "../../Components/Home/homeCmp";
import { btnHang, btnPkemon, btnQuiz, btnTopo } from "../../Utils/btnInit";
import { btnRaya } from "../../Utils/btnInit";


export const Home = () => {
    homeCmp();
    btnPkemon();
    btnQuiz();
    btnRaya();
    btnHang();
    btnTopo();
}    

