# 🍶 GrappoMilla

Il sito web ufficiale (non ufficiale) del folklore più amato del team.

## 📋 Descrizione

GrappoMilla è un sito web statico che celebra un inside joke diventato leggenda: la combinazione di grappa e camomilla, con proporzioni dipendenti da "quanto è stata dura la giornata".

**Tecnologie**: HTML5, CSS3, JavaScript vanilla (no framework)

## 🚀 Come visualizzare il sito localmente

### Metodo 1: Apertura diretta
Apri `index.html` con il tuo browser preferito

### Metodo 2: Server locale (consigliato)

Con Python:
```bash
python -m http.server 8000
# Apri: http://localhost:8000
```

Con Node.js:
```bash
npx http-server -p 8000
```

## 📂 Struttura del progetto

```
GrappoMilla/
├── index.html
├── assets/
│   ├── styles.css
│   ├── script.js
│   └── img/
│       ├── fiaschetta-placeholder.svg
│       ├── cortina-placeholder.svg
│       └── ai-demo-placeholder.svg
└── README.md
```

## 🎨 Come sostituire le immagini

Le immagini attuali sono SVG placeholder. Per sostituire con immagini reali, modifica i percorsi in `index.html`.

## 🌐 Pubblicazione su GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/grappomilla.git
git push -u origin main
```

Poi attiva GitHub Pages da Settings → Pages → Source: main branch

## 🎁 Funzionalità

- **Dark Mode**: Toggle in alto a destra
- **Proportion Meter**: Messaggi casuali auto-refresh
- **Easter Egg**: Konami Code (↑↑↓↓←→←→BA)
- **Responsive**: Mobile-first design
- **Accessibile**: ARIA labels, contrasto WCAG AA

## 📱 Compatibilità

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Mobile browsers

---

**Powered by folklore, not by policies** 🍶
