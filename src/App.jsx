import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple, FaAndroid } from "react-icons/fa";

const ACCENT = "#C9E730";
const DEEP = "#003332";

const Section = ({ children, className = "" }) => (
  <section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const FeatureCard = ({ title, text, icon }) => (
  <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition flex flex-col">
    <div className="text-xl font-semibold text-white flex items-center gap-3 mb-2">
      <span className="text-2xl" aria-hidden>{icon}</span>
      {title}
    </div>
    <p className="text-white/80 leading-relaxed mt-1 flex-1">{text}</p>
  </div>
);

export default function LandingNaoMatch() {
  const onNavClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div style={{ backgroundColor: DEEP }} className="min-h-screen text-white font-sans">
      <style>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 96px; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-black/10 border-b border-white/10">
        <Section className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/iconPlaystore.png" alt="NaoMatch" className="w-9 h-9 rounded-lg" />
            <span className="text-lg font-semibold tracking-tight">NaoMatch</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#features" onClick={(e) => onNavClick(e, '#features')} className="hover:text-white cursor-pointer">Fonctionnalités</a>
            <a href="#captures" onClick={(e) => onNavClick(e, '#captures')} className="hover:text-white cursor-pointer">Captures</a>
            <a href="#faq" onClick={(e) => onNavClick(e, '#faq')} className="hover:text-white cursor-pointer">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#stores" className="px-4 py-2 rounded-full font-medium" style={{ backgroundColor: ACCENT, color: "#002a2a" }}>Télécharger</a>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <Section >
        <div className="flex flex-col items-center text-center gap-2 pt-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-4xl mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Votre match, votre terrain, <span style={{ color: ACCENT }}>à portée de main.</span>
          </motion.h1>

          <motion.div
            className="relative mt-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="pointer-events-none absolute -inset-6 rounded-3xl opacity-40"
              style={{ background: `radial-gradient(60% 60% at 50% 40%, ${ACCENT}22 0%, transparent 70%)` }}
            />
            <img
              src="/presentation.png"
              alt="Présentation NaoMatch"
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full max-w-[520px] sm:max-w-[560px] md:max-w-[600px] lg:max-w-[640px]"
            />
          </motion.div>
        </div>


        {/* Clarification banner */}
        {/* <div className=" mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
          <span className="text-xl">🧭</span>
          <p className="text-white/80">
            <strong>Bandeau :</strong> NaoMatch n'effectue pas la réservation du terrain — <em>organise l'équipe</em>, coordonnez-vous dans le chat puis réservez au club de votre choix.
          </p>
        </div> */}
      </Section>

      {/* Features */}
      <Section className="py-16">
        <div id="features" className="max-w-3xl mb-10">
          <motion.h2 className="text-3xl font-extrabold" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Fonctionnalités clés</motion.h2>
          <motion.p className="text-white/80 mt-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>Le meilleur du padel communautaire, sans friction.</motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {[
            { t: "Trouver des partenaires", s: "Découvre des joueurs autour de toi selon leur niveau et leurs dispos.", i: "🎯" },
            { t: "Rejoindre en 1 clic", s: "Inscris-toi instantanément à un match ouvert qui te convient.", i: "⚡" },
            { t: "Créer un match", s: "Choisis lieu, date et niveau ; les partenaires te rejoignent automatiquement.", i: "🗓️" },
            { t: "Chat & Statistiques", s: "Coordonne la réservation dans le chat et suis tes matchs joués/gagnés.", i: "💬" },
          ].map((f, idx) => (
            <motion.div key={f.t} className="h-full" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 * idx }}>
              <FeatureCard title={f.t} text={f.s} icon={f.i} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social proof */}
      <Section className="pb-16">
        <motion.h3 className="text-2xl font-bold mb-3" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>Ce que disent les premiers joueurs</motion.h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            name: "Anne So",
            text: "Je viens de la télécharger : design super clean, hyper intuitif. On s'est trouvé un match en 2 minutes — je partage direct sur mes groupes !",
            rating: 4,
          }, {
            name: "Lisa P",
            text: "Super application ! Simple et intuitive, elle a un vrai potentiel pour trouver facilement des joueurs.",
            rating: 4,
          }].map((r, i) => (
            <motion.div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="flex items-center gap-2 text-lg" aria-label={`Note ${r.rating} sur 5`}>
                <span>★★★★☆</span>
                <span className="text-white/60 text-sm">{r.rating}/5</span>
              </div>
              <p className="text-white/80 mt-2 max-w-3xl">“{r.text}”</p>
              <p className="text-white/60 mt-3 text-sm italic">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Captures */}
      <div id="captures"></div>
      <Section className="pb-10">
        <motion.h2
          className="text-3xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Aperçu de l'application
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { src: "/jouer.png", alt: "Liste des matchs", caption: "Jouer — matchs autour de toi" },
            { src: "/vos match  - ancien.png", alt: "Vos matchs", caption: "Tes matchs — à venir & passés" },
            { src: "/profil.png", alt: "Profil joueur", caption: "Profil — statistiques & niveau" },
          ].map((c, idx) => (
            <motion.figure
              key={c.alt}
              className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 * idx }}
            >
              <img
                src={c.src}
                alt={c.alt}
                className="rounded-xl border border-white/10 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[300px] h-auto"
              />
              <figcaption className="mt-2 text-sm text-white/70 text-center">{c.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>
      
      {/* Stores below captures */}
      <Section className="pb-20">
        <div id="stores" className="flex flex-col items-center text-center gap-4">
          <motion.h2 className="text-2xl font-extrabold" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>Téléchargez l'application</motion.h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://apps.apple.com/fr/app/naomatch/id6744617518" className="px-5 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/10 flex items-center gap-2"><FaApple /> Télécharger sur iOS</a>
            <a href="https://play.google.com/store/apps/details?id=com.naomatch.app&pcampaignid=web_share" className="px-5 py-3 rounded-xl font-semibold flex items-center gap-2" style={{ backgroundColor: ACCENT, color: "#003332" }}><FaAndroid /> Télécharger sur Android</a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pb-16">
        <motion.h2 className="text-3xl font-extrabold mb-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>FAQ</motion.h2>
        <div id="faq" className="space-y-3">
          {[
            { q: "Comment se coordonne le terrain ?", a: "Vous rejoignez uniquement des partenaires. La réservation du terrain est à la charge du créateur du match. Discutez dans le chat pour vous coordonner 🙂" },
            { q: "Les niveaux sont-ils gérés ?", a: "Chaque joueur choisit son niveau et peut le modifier. Lorsqu’un joueur crée un match, le niveau affiché reprend le niveau du créateur." },
            { q: "Des évolutions prévues ?", a: "Oui ! L'application débute : beaucoup d’améliorations arrivent. Vos retours et suggestions sont les bienvenus." },
          ].map((item, idx) => (
            <AccordionItem key={item.q} item={item} delay={0.05 * idx} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <Section className="py-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <img src="/iconPlaystore.png" alt="NaoMatch" className="w-8 h-8 rounded-lg" />
            <div className="text-white/70 text-sm">© {new Date().getFullYear()} NaoMatch — Tous droits réservés</div>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <a className="hover:text-white" href="https://antoinegilles.github.io/naomathSuppressionPlayStore/" target="_blank" rel="noreferrer">Suppression de compte</a>
            <span className="text-white/40">•</span>
            <a className="hover:text-white opacity-60 cursor-not-allowed" title="À venir">CGU</a>
            <span className="text-white/40">•</span>
            <a className="hover:text-white opacity-60 cursor-not-allowed" title="À venir">Politique de confidentialité</a>
          </div>
          <div className="md:text-right text-sm">
            <a className="px-4 py-2 rounded-full font-medium inline-block hover:bg-white/10 border border-white/20" href="mailto:antoine.gilles.perso@gmail.com">Contact</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}

function AccordionItem({ item, delay = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-5" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay }}>
      <button type="button" onClick={() => setOpen((o) => !o)} className="w-full font-semibold text-lg flex items-center justify-between text-left" aria-expanded={open}>
        <span>{item.q}</span>
        <span className={`text-white/50 transition-transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-white/80 mt-3">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
