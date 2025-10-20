import { useEffect } from "react";

function getMatchIdFromUrl() {
  // supporte /match?id=123 (BrowserRouter) et #/match?id=123 (HashRouter)
  const search = window.location.search || (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '');
  const params = new URLSearchParams(search);
  return params.get('id');
}

export default function RedirectToApp() {
  useEffect(() => {
    const matchId = getMatchIdFromUrl();

    const appLink  = `naomatch://match/${matchId}`;
    const playStore = "https://play.google.com/store/apps/details?id=com.naomatch.app";
    const appStore  = "https://apps.apple.com/fr/app/naomatch/id6744617518";
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const storeUrl = isIOS ? appStore : playStore;

    window.location.href = appLink;
    const t = setTimeout(() => { window.location.href = storeUrl; }, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{textAlign:'center', paddingTop:'25vh', color:'white'}}>
      <h2>Ouverture de NaoMatch…</h2>
      <p>Si rien ne se passe, <a href="https://play.google.com/store/apps/details?id=com.naomatch.app" style={{color:'#C9E730'}}>télécharge l’app ici</a>.</p>
    </div>
  );
}
