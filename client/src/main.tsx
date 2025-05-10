import { createRoot } from "react-dom/client";
import SimpleApp from "./SimpleApp";
import "./index.css";
import './i18n';

// Folosim aplicația simplificată pentru testare
createRoot(document.getElementById("root")!).render(<SimpleApp />);