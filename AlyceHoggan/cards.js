var portfolio = [];

portfolio[0] = {title: 'Proximity',
                role: 'Product designer',
                team: [],
                problem: '<span class="boldDesc">Proximity Algorithm Design</span><br> + Disaster Management Dashboard<br><a href="https://kynamatrix.org/#Rcat0" target="_blank">more</a>',
								solution: '',
                date: 2007,
                location: 'Seattle',
                image: ['img/Proximity_Sketch.png'],
                link: [],
                client: '',
                agent: '',
                tag: [],
                category: 0,
                subcat: 0
								};

portfolio[1] = {title: 'Runway',
                role: 'Product designer',
                team: [],
                problem: '<span class="boldDesc">Airline Forms</span><br> + Runway Risk Assessment <br> (App)',
								solution: '',
                date: 2007,
                location: 'Seattle',
                image: ['img/Airline_Risk.png'],
                link: [],
                client: '',
                agent: '',
                tag: [],
                category: 0,
                subcat: 0
								};

portfolio[2] = {title: 'OnlineCourseUI',
                role: 'Product designer',
                team: [],
                problem: '<span class="boldDesc">Online Course </span><br> + Print & Interactive Documents <br> (Newsletters)',
								solution: '',
                date: 2007,
                location: 'Seattle',
                image: ['img/NewsletterDesign.png'],
                link: [],
                client: '',
                agent: '',
                tag: [],
                category: 0,
                subcat: 0
								};

portfolio[3] = {title: 'Website',
                role: 'Product designer',
                team: [],
                problem: '<span class="boldDesc">Website Analysis Strategy</span><br> + Information Architecture System',
								solution: '',
                date: 2007,
                location: 'Seattle',
                image: ['img/Church_Info_Arch.png'],
                link: [],
                client: '',
                agent: '',
                tag: [],
                category: 0,
                subcat: 0
								};

portfolio[4] = {title: 'Traffic control',
                role: 'Product designer',
                team: [],
                problem: '<span class="boldDesc">Air Traffic Monitor</span><br> + User Experience Complexity',
								solution: '',
                date: 2007,
                location: 'Seattle',
                image: ['r0.png','img/FlightNav.png'],
                link: [],
                client: '',
                agent: '',
                tag: [],
                category: 0,
                subcat: 0
								};

portfolio[5] = {title: 'Starlink',
                role: 'Product designer',
                team: [],
                problem: '<span class="boldDesc">Sattelite Tracker</span><br> + UI Intelligent Environment ',
								solution: '',
                date: 2007,
                location: 'Seattle',
                image: ['r0.png','img/Starlink.png'],
                link: [],
                client: '',
                agent: '',
                tag: [],
                category: 0,
                subcat: 0
								};

portfolio[6] = {title: 'Ocean Reef Decay Awareness ',
                role: 'Product designer and ghost writer',
                team: [],
                problem: '<span class="boldDesc">Edutainment Books </span><br> + Coral Reef Rescue ',
                solution: '',
                date: 2022,
                location: 'Seattle',
                image: ['r0.png','img/orbeeSplash.png'],
                link: [],
                client: '',
                agent: '',
                tag: [],
                category: 0,
                subcat: 0
                								};

/*
  Animation rotoscope/cutaway
  Financial tracker
  Ecommerce (Amazon redesign)
  Design fundamentals course
  Petwalker
  Orbee
  Scanfest
*/
  // The following code dynamically loads portfolio cards into the DOM
  var category = [
    'Portfolio Case Studies'
  ];

  // Define the steps to create and append cards
  function appendCards() {
    var lastCat = -1;
    for(var i=0;i<portfolio.length;i++){
      if(portfolio[i].category != lastCat) {
        lastCat = portfolio[i].category;
        var cat = document.createElement("div");
        cat.className = "titleBox";
        cat.id = "cat"+lastCat;
        cat.innerHTML = category[lastCat];
        wrapper.appendChild(cat);
      }
      var node = document.createElement("div");
      node.className = "card";
      node.innerHTML = '<img src="' + portfolio[i].image[0] + '"><p>' + portfolio[i].problem + '</p>';
      wrapper.appendChild(node);
    }
  }

  // Run the routine to add the cards
  appendCards();
