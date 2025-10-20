import { useEffect } from "react";

export default function RedirectToApp() {
  useEffect(() => {
    // ✅ On récupère le paramètre "id" même si on est en mode HashRouter (#/match?id=xxx)
    let matchId = null;

    if (window.location.hash.includes("?")) {
      const searchParams = new URLSearchParams(window.location.hash.split("?")[1]);
      matchId = searchParams.get("id");
    } else if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      matchId = searchParams.get("id");
    }

    // Sécurité si pas d'id
    if (!matchId) {
      console.warn("Aucun match ID détecté dans l’URL.");
      return;
    }

    console.log("🔗 Match ID détecté :", matchId);

    // Liens de deep link + fallback stores
    const appLink = `naomatch://match/${matchId}`;
    const playStore = "https://play.google.com/store/apps/details?id=com.naomatch.app";
    const appStore = "https://apps.apple.com/fr/app/naomatch/id6744617518";

    // Détection plateforme
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const storeUrl = isIOS ? appStore : playStore;

    // ✅ Tentative d’ouverture de l’app
    window.location.href = appLink;

    // ✅ Redirection fallback vers le store après 1,5s
    const timer = setTimeout(() => {
      window.location.href = storeUrl;
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "25vh",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Ouverture de NaoMatch…</h2>
      <p>
        Si rien ne se passe,{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.naomatch.app"
          style={{ color: "#C9E730" }}
        >
          télécharge l’app ici
        </a>.
      </p>
    </div>
  );
}
