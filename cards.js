  // The following code dynamically loads portfolio cards into the DOM
  var category = [
    'Services'
  ];
  var portfolio = [ 
 
////////////////////////////////////////
// Brand identity  cat=0
//
  {
  id:13,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/HeroGray.png",
  desc:'<span class="boldDesc">Brand Identity:</span><br> Build trust in your brand with consistency, scalability, and memorable creative concepts.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:13,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/HeroGray.png",
  desc:'<span class="boldDesc">Responsive Websites:</span><br> Clearly communicate your message on any device.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:13,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/HeroGray.png",
  desc:'<span class="boldDesc">Interactive Content:</span><br> Synchronize graphics with narration, music, and foley.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:13,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/HeroGray.png",
  desc:'<span class="boldDesc">Software Design:</span><br>Useful, navigation and interface designs, for internal and external clients.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:13,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/HeroGray.png",
  desc:'<span class="boldDesc">Database Optimization:</span><br> Data is integral to all software: we help build new high-performance systems and improve existing ones.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:13,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/HeroGray.png",
  desc:'<span class="boldDesc">Autonomous Systems:</span><br> Automated vehicle code has been tested on a track with a real car, and successfully stopped and started at a traffic light under harsh sunlight conditions.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },  
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
      node.innerHTML = '<p>' + portfolio[i].desc + '</p>';
      wrapper.appendChild(node);
    }
  }

  // Run the routine to add the cards
  appendCards();
