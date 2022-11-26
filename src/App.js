import styles from "./styles/App.module.css"
import Foundation from "./components/UI/foundation/Foundation";
import Button from "./components/UI/button/Button";
import SettingsContainer from "./components/SettingsContainer/SettingsContainer";

function App() {
    return (
        <div className={styles.app}>
            <Foundation>
                <Button>
                    Сгенерировать пароль
                </Button>
                <SettingsContainer/>
            </Foundation>
        </div>
    );
}

export default App;
