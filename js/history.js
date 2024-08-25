

const timelines = {
  xo: {
    name: " X_O Game",
    date: "2020/1/01",
    logo: "assets/img/projects/X-O/logo.png",
    desc: "I Develped A Simple Tic Tac Toe Game",
    desc_de: "Ich habe ein einfaches Tic Tac Toe-Spiel entwickelt",
  },
  xpositron: {
    name: "X-POSITRON",
    date: "2020/4/01",
    logo: "assets/img/projects/X-POSITRON/logo.png",
    desc: "I have participated in a non-profit company as an instructor",
    desc_de: "Ich habe in einem gemeinnützigen Unternehmen als Ausbilder mitgewirkt",
  },
  interpolation: {
    name: "Interpolation",
    date: "2021/3/01",
    logo: "assets/img/projects/interpolation/logo.png",
    desc: "I have made a project for my university to solve math problems",
    desc_de: "Ich habe für meine Universität ein Projekt zur Lösung mathematischer Probleme gemacht",
  },
  cables: {
    name: "Cables",
    date: "2021/7/01",
    logo: "assets/img/projects/cables/logo.png",
    desc: "I Have Built An Android And Desktop App For A Cleint",
    desc_de: "Ich habe eine Android- und Desktop-App für einen Cleint erstellt",
  },
  rada: {
    name: "Rada",
    date: "2021/10/01",
    logo: "assets/img/projects/rada/logo.png",
    desc: "I Have Built A WebSite App For A Cleint",
    desc_de: "Ich habe eine Website-App für einen Kunden erstellt",
  },
  pharmacy: {
    name: "Pharmacy",
    date: "2022/1/01",
    logo: "assets/img/projects/Pharmacy/logo.png",
    desc: "I Have Built An App to order medicines online to facilitate the purchase process",
    desc_de: "Ich habe eine App entwickelt, um Medikamente online zu bestellen und den Kaufprozess zu vereinfachen",
  },
  cloudszone: {
    name: "cloudszone",
    date: "2022/3/01",
    logo: "assets/img/projects/cloudsZone/logo.png",
    desc: "I Started To Work at CloudZone",
    desc_de: "Ich habe angefangen, bei CloudZone zu arbeiten",
  },
  Lordsbox: {
    name: "Lordsbox",
    date: "2023/5/01",
    logo: "assets/img/projects/lordsbox/logo.png",
    desc: " I Have Built An App For A Goods transportation company in Germany",
    desc_de: "Ich habe eine App für ein Gütertransportunternehmen in Deutschland entwickelt",
  },

  miamed: {
    name: "miamed",
    date: "2023/9/01",
    logo: "assets/img/projects/miamed/logo.png",
    desc: "I have built a multi vendor app  for pharmacists to efficiently manage medicine purchases",
    desc_de: "Ich habe eine Multi-Vendor-App für Apotheker entwickelt, um Medikamenteneinkäufe effizient abzuwickeln",
  },
  diamondline: {
    name: "Diamond Line",
    date: "2023/11/01",
    logo: "assets/img/projects/diamondline/logo.jpg",
    desc: "I Have Built A Transportation app to order a car to travel within or across states",
    desc_de: "Ich habe eine Transport-App entwickelt, mit der man ein Auto für Fahrten innerhalb oder zwischen Staaten bestellen kann",
  },
  peaklink: {
    name: "Peaklink",
    date: "2024/02/01",
    logo: "assets/img/projects/peaklink/logo.jpg",
    desc: "I Have started to work at Peaklink",
    desc_de: "Ich habe angefangen, bei Peaklink zu arbeiten",
  },
  farmy: {
    name: "Farmy",
    date: "2024/02/20",
    logo: "assets/img/projects/farmy/logo.svg",
    desc: "I Have Built a food delivery mobile app",
    desc_de: "Ich habe eine mobile App für die Essenslieferung entwickelt",
  },
  ebsher: {
    name: "Ebsher",
    date: "2024/03/01",
    logo: "assets/img/projects/ebsher/logo.png",
    desc: "I Developed a comprehensive tourist guide app for exploring Syria",
    desc_de: "Ich habe eine umfassende Reiseführer-App zur Erkundung Syriens entwickelt",
  },
  mubashar: {
    name: "mubashar",
    date: "2024/4/01",
    logo: "assets/img/projects/mubasher/logo.svg",
    desc: " I have built a real-estate seller app",
    desc_de: "Ich habe eine App für Immobilienverkäufer entwickelt",
  },
  wlcd: {
    name: "wlcd",
    date: "2024/6/01",
    logo: "assets/img/projects/wlcd/logo.svg",
    desc: "I have built an academy app offering diverse courses for E-learning",
    desc_de: "Ich habe eine Akademie-App entwickelt, die verschiedene Kurse für E-Learning anbietet",
  },
  fiberforge: {
    name: "Fiberforge",
    date: "2024/8/01",
    logo: "assets/img/projects/fiberforge/logo.jpg",
    desc: "I have built an app that monitor employees and track shipments for a company in africa",
    desc_de: "Ich habe eine App entwickelt, die Mitarbeiter überwacht und Sendungen für ein Unternehmen in Afrika verfolgt",
  },
};

const getTimelines = () => {

  let timelinesData = "";
  let currentYear;
  Object.entries(timelines).reverse().forEach(([key, value], index) => {
    let dateObj = new Date(value.date);
    const year = dateObj.getFullYear();

    // to add year time line if it was changed
    let dateTimeline = '';
    if (currentYear == undefined || currentYear > year) {
      currentYear = year;
      dateTimeline = `
            <li class="timeline-start">
              <div class="rectangle"><span>${year + 1}</span></div>
            </li>
            `;
    }

    // to add the correct animation class
    let timelineClass = getClassName(index);

    timelinesData += `
      <div class="timeline-item wow ${timelineClass}" data-wow-delay="0.1s">
            <!-- /.timeline-start -->
           ${dateTimeline}
            <!-- /.timeline-end -->
            <!-- Timeline job & description  -->
            <li>
              <div class="rectangle timeline-rectangle"></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <div class="timeline-date">
                    <p>${dateObj.toLocaleString('default', { month: 'short' })}</p>
                  </div>
                  <!-- /.timeline-date -->
                  <div class="timeline-position">
                    <p>${value.name}</p>
                  </div>
                  <!-- /.timeline-position -->
                </div>
                <!-- /.timeline-heading -->
                <div class="timeline-body">
                  <div class="timeline-body-thumb">
                    <img loading="lazy" src="${value.logo}" class="img-res" alt="" />
                  </div>
                  <!-- /.timeline-body-thumb -->
                  <p class="localization" data-local="${value.desc_de}">
                    ${value.desc}
                  </p>
                </div>
                <!-- /.timeline-body -->
              </div>
              <!-- /.timeline-panel -->
            </li>
          </div>
      `;
  });

  // add the more button at the end 
  timelinesData += `<!-- Timeline Badge  -->
    <li class="timeline-end wow slideInUp" data-wow-delay="0.2s">
      <div class="rectangle">
        <span class="localization" data-local="Mehr">More</span>
      </div>
    </li>
    <!-- /.timeline-end -->
    `;
  return timelinesData;
}

export { timelines, getTimelines };

const getClassName = (index) => {
  if (index % 2 == 0) {
    return "slideInLeft";
  }
  else {
    return "slideInRight";
  }
} 