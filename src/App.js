import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "./translation/i18n";

function App() {
  const { t } = useTranslation();
  const switchLanguage = lang => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="App">
      <div className="card p-2">
        <div className="card-body">
          <h5 class="card-title">{t("content.functional")}</h5>
          <h5 class="card-title">{t("content.class")}</h5>
          <h5 class="card-title">{t("content.text")}</h5>
          <button onClick={() => switchLanguage("en")}>Change to EN </button>
          <button onClick={() => switchLanguage("vi")}>Change to VI </button>
        </div>
      </div>
    </div>
  );
}

export default App;
