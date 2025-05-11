(async () => {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const allTrajets = [];
    let pageNum = 1;
    const maxPages = 15;
  
    while (pageNum <= maxPages) {
      console.log(`➡️ Lecture de la page ${pageNum}`);
      await sleep(1000); // pause avant extraction
  
      // 🔍 Extraction
      const runs = Array.from(document.querySelectorAll('.runs'));
      const trajets = runs.map(run => {
        const date = run.querySelector('.operation-date')?.innerText.trim() || '';
        const numeroVelo = run.querySelector('.bike-number span')?.innerText.trim() || '';
        const distance = run.querySelector('.SUBGROUP2 .runs-item:nth-child(1) .runs-item-content')?.innerText.trim() || '';
        const duree = run.querySelector('.duration')?.innerText.trim() || '';
        const vitesse = run.querySelector('.speed')?.innerText.trim() || '';
        const cout = run.querySelector('.text-center')?.innerText.trim().replace(/\s+/g, ' ') || '';
        const co2 = run.querySelector('.eco-details-small p span')?.parentNode?.innerText.trim() || '';
  
        return {
          Date: date,
          Vélo: numeroVelo,
          Distance: distance,
          Durée: duree,
          Vitesse: vitesse,
          Coût: cout,
          'CO2 économisé': co2
        };
      });
  
      console.log(`📦 ${trajets.length} trajets trouvés`);
      allTrajets.push(...trajets);
  
      const nextBtn = Array.from(document.querySelectorAll('ul.pagination li.page-item'))
        .find(li => li.innerText.includes('»') && !li.classList.contains('disabled'));
  
      if (!nextBtn || nextBtn.classList.contains('disabled')) {
        console.log('✅ Fin de la pagination (pas de bouton "suivant")');
        break;
      }
  
      nextBtn.querySelector('a').click();
      pageNum++;
      await sleep(1000); // pause après clic
    }
  
    console.log(`✅ ${allTrajets.length} trajets extraits sur ${pageNum - 1} page(s)`);
    console.table(allTrajets);
  
    // 📁 Génération du CSV avec BOM UTF-8
    const headers = Object.keys(allTrajets[0]);
    const csvContent = [
      headers.join(","),
      ...allTrajets.map(row =>
        headers.map(field => `"${(row[field] || '').replace(/"/g, '""')}"`).join(",")
      )
    ].join("\n");
  
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "velib_trajets.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  })();
  