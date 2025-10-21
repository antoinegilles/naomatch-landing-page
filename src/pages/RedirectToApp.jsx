import { useEffect } from "react";

export default function RedirectToApp() {
  useEffect(() => {
    // ✅ Lecture du paramètre id depuis l’URL (compatible HashRouter)
    let matchId = null;

    if (window.location.hash.includes("?")) {
      const searchParams = new URLSearchParams(window.location.hash.split("?")[1]);
      matchId = searchParams.get("id");
    } else if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      matchId = searchParams.get("id");
    }

    if (!matchId) {
      console.warn("Aucun match ID trouvé dans l’URL.");
      return;
    }

    console.log("🔗 Match ID détecté :", matchId);

    const appLink = `naomatch://match/${matchId}`;
    const playStore = "https://play.google.com/store/apps/details?id=com.naomatch.app";
    const appStore = "https://apps.apple.com/fr/app/naomatch/id6744617518";

    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const storeUrl = isIOS ? appStore : playStore;

    // Tente d’ouvrir l’app
    window.location.href = appLink;

    // Redirige vers le store après 1,5s si l’app n’est pas installée
    const timeout = setTimeout(() => {
      window.location.href = storeUrl;
    }, 1500);

    return () => clearTimeout(timeout);
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
        Si rien ne se passe,&nbsp;
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
