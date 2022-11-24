import styles from "./styles/App.module.css"
import Foundation from "./components/UI/foundation/Foundation";
import Button from "./components/UI/button/Button";

function App() {
    return (
        <div className={styles.app}>
            <Foundation>
                <Button>
                    Сгенерировать пароль
                </Button>
            </Foundation>
        </div>
    );
}

export default App;
