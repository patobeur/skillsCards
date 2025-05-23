const urlRNCP = "https://www.francecompetences.fr/recherche/rncp/"
const urlONISEP= "https://www.onisep.fr/metier"
const container = document.getElementById("cartes-container");
const familleFiltersContainer = document.getElementById("famille-filters");
const formationFiltersContainer = document.getElementById("formation-filters");

let selectedFamille = null;
let selectedFormation = null;

function generateCartes() {
    container.innerHTML = "";
    competences.forEach(c => {
        const matchFamille = !selectedFamille || c.famille === selectedFamille;
        const matchFormation = !selectedFormation || c.id_formations.includes(selectedFormation);

        if (matchFamille && matchFormation) {
            
            // Couleur
            const familleColor = familles.find(f => f.id === c.famille)?.color || "#FFF";
            const familleIcone = familles.find(f => f.id === c.famille)?.icone || "";
            
            const carteContainer = document.createElement("div");
            carteContainer.className = "carte-container";

            const carte = document.createElement("div");
            carte.className = "carte";
            carte.appendChild(carteContainer);
            carte.style.backgroundImage = "url('assets/fonds/"+familleIcone+"')";
            carte.setAttribute("data-famille", c.famille);
            carte.setAttribute("data-formations", c.id_formations.join(","));

            // Titre
            const titre = document.createElement("h3");
            titre.textContent = c.competence;
            titre.className = 'titre color'+familleColor
            carteContainer.appendChild(titre);

            // Famille
            const familleDiv = document.createElement("div");
            const familleNom = familles.find(f => f.id === c.famille)?.nom || "Famille inconnue";
            familleDiv.className = 'famille';
            familleDiv.textContent = `${familleNom}`;            
            carteContainer.appendChild(familleDiv);

            // Description
            const description = document.createElement("p");
            description.className = 'description';
            description.textContent = c.description;
            carteContainer.appendChild(description);


            // // Famille Label
            // const familleLabel = document.createElement("strong");
            // familleLabel.textContent = "Famille : ";
            // familleDiv.prepend(familleLabel);

            // Formations
            const formationsDiv = document.createElement("div");
            formationsDiv.className = 'formations';
            c.id_formations.forEach(id => {
                const formationObj = formations.find(f => f.id === id);
                if (formationObj) {
                    const badge = document.createElement("span");
                    // badge.className = "badge";
                    badge.className = 'formation-badge';
                    const a = document.createElement("a");
                    // a.textContent = formationObj.tag;
                    a.href = urlRNCP+formationObj.lien_rncp;
                    a.title = formationObj.nom;
                    a.target = "_blank";
                    badge.appendChild(a);

                    const badgeimg = document.createElement("img");
                    badgeimg.className = 'formation-badgeimg';
                    badgeimg.alt = formationObj.nom;
                    badgeimg.src = "assets/icones/"+formationObj.icone+""

                    a.prepend(badgeimg);
                    formationsDiv.appendChild(badge);

                }
            });
            carteContainer.appendChild(formationsDiv);

            // Sources
            const sourcesDiv = document.createElement("div");
            const sourcesLabel = document.createElement("strong");
            sourcesLabel.textContent = "Sources : ";
            sourcesDiv.appendChild(sourcesLabel);

            c.sources.forEach(source => {
                const lien = document.createElement("a");
                lien.href = source.lien;
                lien.target = "_blank";
                lien.className = "source-link";
                lien.textContent = "Lien";
                sourcesDiv.appendChild(lien);
            });
            carteContainer.appendChild(sourcesDiv);

            container.appendChild(carte);
        }
    });
}

function generateFamilleFilters() {
    familles.forEach(f => {
        const btn = document.createElement("button");
        btn.className = "filter-button color" + f.color;
        btn.textContent = f.nom;
        btn.onclick = () => {
            selectedFamille = selectedFamille === f.id ? null : f.id;
            generateCartes();
            highlightFilters();
        };
        btn.setAttribute("data-id", f.id);
        familleFiltersContainer.appendChild(btn);
    });
}

function generateFormationFilters() {
    formations.forEach(f => {
        const btn = document.createElement("button");
        btn.className = "filter-button";
        btn.textContent = f.tag;
        btn.onclick = () => {
            selectedFormation = selectedFormation === f.id ? null : f.id;
            generateCartes();
            highlightFilters();
        };
        btn.setAttribute("data-id", f.id);
        formationFiltersContainer.appendChild(btn);
    });
}

function highlightFilters() {
    document.querySelectorAll("#famille-filters button").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-id") === selectedFamille);
    });
    document.querySelectorAll("#formation-filters button").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-id") === selectedFormation);
    });
}
    generateFamilleFilters();
    generateFormationFilters();
    generateCartes();