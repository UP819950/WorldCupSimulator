/////////////////////////////////////////////   ///////////////////////////////////////////////////
              /*    TODO    */
/*



Edit groups so goal difference is taken into account.
         
     



                                                                                                 */ 
//////////////////////////////////////////////////////////////////////////////////////////////////



const print = x => console.log(x);
WAIT_TIME = 3000
function wait(wait){
     var waitTill = new Date(new Date().getTime() + WAIT_TIME);
     while(waitTill > new Date()){}   ///////////// edit these 2 lines to skip ahead with user input? on drawmatch commentary as well
}
function calculateGoalNumber(teamBias) {

    let biasCon = Math.floor(Math.random() + teamBias );
    
    let score = Math.floor(Math.random() * 3 )  ;
    let uncommonScore = Math.floor(Math.random() * 6)  ;
    let rareScore = Math.floor(Math.random() * 21 )  ;
    let scoreCon = Math.random() ;

    if (scoreCon > 0.999 ) {
         finalScore = rareScore ;
    } else if (scoreCon > 0.85 ){
         finalScore = uncommonScore ;
    } else  {finalScore = score ; }
         return finalScore + biasCon;
}

let Teams = [];
Teams.push({ name: "Uruguay", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.40, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Fernando Muslera", goals : 0 }, {name : "Diego Godín", goals : 0 }, {name : "Martín Cáceres", goals : 0 },{name : "José Giménez", goals : 0 },{name : "Sebastián Coates", goals : 0 },{name : "Matías Vecino", goals : 0 },{name : "Nahitan Nández", goals : 0 },{name : "Rodrigo Bentancur", goals : 0 },{name : "Giorgian De Arrascaeta", goals : 0 },{name : "Edinson Cavani", goals : 0 },{name : "Cristhian Stuani", goals : 0 }]} )
Teams.push({ name: "Russia", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.30, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Guilherme", goals : 0 }, {name : "Fyodor Kudryashov", goals : 0 }, {name : "Mário Fernandes", goals : 0 },{name : "Andrei Semyonov", goals : 0 },{name : "Roman Neustädter", goals : 0 },{name : "Yuri Zhirkov", goals : 0 },{name : "Roman Zobnin", goals : 0 },{name : "Aleksei Ionov", goals : 0 },{name : "Magomed Ozdoyev", goals : 0 },{name : "Artem Dzyuba", goals : 0 },{name : "Fyodor Smolov", goals : 0 }]} )
Teams.push({ name: "Saudi Arabia", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.10, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Fawaz Al-Qarni", goals : 0 }, {name : "Saud Abdulhamid", goals : 0 }, {name : "Hassan Tambakti", goals : 0 },{name : "Ziyad Al-Sahafi", goals : 0 },{name : "Mohammed Al-Khabrani", goals : 0 },{name : "Salem Al-Dawsari", goals : 0 },{name : "Salman Al-Faraj", goals : 0 },{name : "Yahya Al-Shehri", goals : 0 },{name : "Nawaf Al Abed", goals : 0 },{name : "Abdullah Al-Hamdan", goals : 0 },{name : "Firas Al-Buraikan", goals : 0 }]} )
Teams.push({ name: "Egypt", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.20, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Mohamed El Shenawy", goals : 0 }, {name : "Ahmed Fathy", goals : 0 }, {name : "Ramy Rabia", goals : 0 },{name : "Ayman Ashraf", goals : 0 },{name : "Mahmoud Alaa", goals : 0 },{name : "Mohamed El Neny", goals : 0 },{name : "Tarek Hamed", goals : 0 },{name : "Trézéguet", goals : 0 },{name : "Amr El Solia", goals : 0 },{name : "Kahraba", goals : 0 },{name : "Mohamed Salah", goals : 0 }]} )
Teams.push({ name: "Spain", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.70, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "David de Gea", goals : 0 }, {name : "Sergio Ramos", goals : 0 }, {name : "Jesús Navas", goals : 0 },{name : "Dani Carvajal", goals : 0 },{name : "Diego Llorente", goals : 0 },{name : "Sergio Busquets", goals : 0 },{name : "Thiago", goals : 0 },{name : "Rodri", goals : 0 },{name : "Óscar", goals : 0 },{name : "Gerard", goals : 0 },{name : "Álvaro Morata", goals : 0 }]} )
Teams.push({ name: "Portugal", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.70, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Rui Patrício", goals : 0 }, {name : "Pepe", goals : 0 }, {name : "Raphaël Guerreiro", goals : 0 },{name : "José Fonte", goals : 0 },{name : "Rúben Dias", goals : 0 },{name : "João Moutinho", goals : 0 },{name : "Bernardo Silva", goals : 0 },{name : "Danilo Pereira", goals : 0 },{name : "Bruno Fernandes", goals : 0 },{name : "Cristiano Ronaldo", goals : 0 },{name : "André Silva", goals : 0 }]} )
Teams.push({ name: "Iran", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.10, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Alireza Beiranvand", goals : 0 }, {name : "Vouria Ghafouri", goals : 0 }, {name : "Milad Mohammadi", goals : 0 },{name : "Morteza Pouraliganji", goals : 0 },{name : "Ramin Rezaeian", goals : 0 },{name : "Masoud Shojaei", goals : 0 },{name : "Omid Ebrahimi", goals : 0 },{name : "Vahid Amiri", goals : 0 },{name : "Mehdi Torabi", goals : 0 },{name : "Karim Ansarifard", goals : 0 },{name : "Sardar Azmoun", goals : 0 }]} )
Teams.push({ name: "Morocco", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.10, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Munir Mohand Mohamedi", goals : 0 }, {name : "Romain Saïss", goals : 0 }, {name : "Achraf Hakimi", goals : 0 },{name : "	Zouhair Feddal", goals : 0 },{name : "Noussair Mazraoui", goals : 0 },{name : "Sofyan Amrabat", goals : 0 },{name : "Selim Amallah", goals : 0 },{name : "Hakim Ziyech", goals : 0 },{name : "Youssef En-Nesyri", goals : 0 },{name : "Sofiane Boufal", goals : 0 },{name : "Oussama Idrissi", goals : 0 }]} )
Teams.push({ name: "France", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.70, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Hugo Lloris", goals : 0 }, {name : "Raphaël Varane", goals : 0 }, {name : "Lucas Digne", goals : 0 },{name : "Benjamin Pavard", goals : 0 },{name : "Lucas Hernandez", goals : 0 },{name : "N'Golo Kanté", goals : 0 },{name : "Moussa Sissoko", goals : 0 },{name : "Steven Nzonzi", goals : 0 },{name : "Paul Pogba", goals : 0 },{name : "Kylian Mbappé", goals : 0 },{name : "Antoine Griezmann", goals : 0 }]} )
Teams.push({ name: "Denmark", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.50, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Kasper Schmeichel", goals : 0 }, {name : "Simon Kjær", goals : 0 }, {name : "Andreas Christensen", goals : 0 },{name : "Mathias Jørgensen", goals : 0 },{name : "Henrik Dalsgaard", goals : 0 },{name : "Christian Eriksen", goals : 0 },{name : "Thomas Delaney", goals : 0 },{name : "Pierre-Emile Højbjerg", goals : 0 },{name : "Lasse Schöne", goals : 0 },{name : "Yussuf Poulsen", goals : 0 },{name : "Martin Braithwaite", goals : 0 }]} )
Teams.push({ name: "Peru", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.20, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Pedro Gallese", goals : 0 }, {name : "Christian Ramos", goals : 0 }, {name : "Aldo Corzo", goals : 0 },{name : "Nilson Loyola", goals : 0 },{name : "Luis Advíncula", goals : 0 },{name : "Yoshimar Yotún", goals : 0 },{name : "Christofer Gonzáles", goals : 0 },{name : "Renato Tapia", goals : 0 },{name : "Christian Cueva", goals : 0 },{name : "Edison Flores", goals : 0 },{name : "Paolo GuerreroI", goals : 0 }]} )
Teams.push({ name: "Australia", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.30, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Mathew Ryan", goals : 0 }, {name : "Trent Sainsbury", goals : 0 }, {name : "Miloš Degenek", goals : 0 },{name : "Rhyan Grant", goals : 0 },{name : "Bailey Wright", goals : 0 },{name : "Aaron Mooy", goals : 0 },{name : "Tom Rogic", goals : 0 },{name : "Massimo Luongo", goals : 0 },{name : "Jackson Irvine", goals : 0 },{name : "Mathew Leckie", goals : 0 },{name : "Jamie Maclaren", goals : 0 }]} )
Teams.push({ name: "Croatia", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.60, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Lovre Kalinić", goals : 0 }, {name : "Šime Vrsaljko", goals : 0 }, {name : "Dejan Lovren", goals : 0 },{name : "Domagoj Vida", goals : 0 },{name : "Borna Barišić", goals : 0 },{name : "Mateo Kovačić", goals : 0 },{name : "Ivan Rakitić", goals : 0 },{name : "Milan Badelj", goals : 0 },{name : "Luka Modrić", goals : 0 },{name : "Ivan Perišić", goals : 0 },{name : "Andrej Kramarić", goals : 0 }]} )
Teams.push({ name: "Argentina", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.60, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Agustín Marchesín", goals : 0 }, {name : "Marcos Rojo", goals : 0 }, {name : "Nicolás Otamendi", goals : 0 },{name : "Nicolás Tagliafico", goals : 0 },{name : "Germán Pezzella", goals : 0 },{name : "Erik Lamela", goals : 0 },{name : "Marcos Acuña", goals : 0 },{name : "Leandro Paredes", goals : 0 },{name : "Giovani Lo Celso", goals : 0 },{name : "Lionel Messi", goals : 0 },{name : "Sergio Agüero", goals : 0 }]} )
Teams.push({ name: "Nigeria", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.30, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Ikechukwu Ezenwa", goals : 0 }, {name : "Kenneth Omeruo", goals : 0 }, {name : "William Troost-Ekong", goals : 0 },{name : "Leon Balogun", goals : 0 },{name : "Chidozie Awaziem", goals : 0 },{name : "Wilfred Ndidi", goals : 0 },{name : "Peter Etebo", goals : 0 },{name : "Shehu Abdullahi", goals : 0 },{name : "Ramon Azeez", goals : 0 },{name : "Ahmed Musa", goals : 0 },{name : "Alex Iwobi", goals : 0 }]} )
Teams.push({ name: "Iceland", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.40, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Hannes Þór Halldórsson", goals : 0 }, {name : "Kári Árnason", goals : 0 }, {name : "Ragnar Sigurðsson", goals : 0 },{name : "Hörður Björgvin Magnússon", goals : 0 },{name : "Ari Freyr Skúlason", goals : 0 },{name : "Birkir Bjarnason", goals : 0 },{name : "Emil Hallfreðsson", goals : 0 },{name : "Gylfi Sigurðsson", goals : 0 },{name : "Jóhann Berg Guðmundsson", goals : 0 },{name : "Kolbeinn Sigþórsson", goals : 0 },{name : "Alfreð Finnbogason", goals : 0 }]} )
Teams.push({ name: "Brazil", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.60, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Alisson", goals : 0 }, {name : "Dani Alves", goals : 0 }, {name : "Thiago Silva", goals : 0 },{name : "Marquinhos", goals : 0 },{name : "Danilo", goals : 0 },{name : "Philippe Coutinho", goals : 0 },{name : "Casemiro", goals : 0 },{name : "Willian", goals : 0 },{name : "Fabinho", goals : 0 },{name : "Neymar", goals : 0 },{name : "Roberto Firmino", goals : 0 }]} )
Teams.push({ name: "Switzerland", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.50, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Yann Sommer", goals : 0 }, {name : "Ricardo Rodríguez", goals : 0 }, {name : "Fabian Schär", goals : 0 },{name : "Denis Zakaria", goals : 0 },{name : "Michael Lang", goals : 0 },{name : "Granit Xhaka", goals : 0 },{name : "Denis Zakaria", goals : 0 },{name : "Steven Zuber", goals : 0 },{name : "Renato Steffen", goals : 0 },{name : "Haris Seferović", goals : 0 },{name : "Mario Gavranović", goals : 0 }]} )
Teams.push({ name: "Serbia", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.20, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Marko Dmitrović", goals : 0 }, {name : "Aleksandar Kolarov", goals : 0 }, {name : "Nikola Maksimović", goals : 0 },{name : "Nikola Milenković", goals : 0 },{name : "Stefan Mitrović", goals : 0 },{name : "Dušan Tadić", goals : 0 },{name : "Adem Ljajić", goals : 0 },{name : "Filip Kostić", goals : 0 },{name : "Filip Đuričić", goals : 0 },{name : "Aleksandar Mitrović", goals : 0 },{name : "Luka Jović", goals : 0 }]} )
Teams.push({ name: "Costa Rica", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.20, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Keylor Navas", goals : 0 }, {name : "Giancarlo González", goals : 0 }, {name : "Rónald Matarrita", goals : 0 },{name : "Francisco Calvo", goals : 0 },{name : "Kendall Waston", goals : 0 },{name : "Johan Venegas", goals : 0 },{name : "David Guzmán", goals : 0 },{name : "Yeltsin Tejeda", goals : 0 },{name : "Randall Leal", goals : 0 },{name : "Marco Ureña", goals : 0 },{name : "Joel Campbell", goals : 0 }]} )
Teams.push({ name: "Sweden", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.40, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Robin Olsen", goals : 0 }, {name : "Mikael Lustig", goals : 0 }, {name : "Victor Lindelöf", goals : 0 },{name : "Martin Olsson", goals : 0 },{name : "Andreas Granqvist", goals : 0 },{name : "Sebastian Larsson", goals : 0 },{name : "Albin Ekdal", goals : 0 },{name : "Emil Forsberg", goals : 0 },{name : "Gustav Svensson", goals : 0 },{name : "Marcus Berg", goals : 0 },{name : "Isaac Kiese Thelin", goals : 0 }]} )
Teams.push({ name: "Mexico", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.50, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Guillermo Ochoa", goals : 0 }, {name : "Héctor Moreno", goals : 0 }, {name : "Jesús Gallardo", goals : 0 },{name : "Néstor Araujo", goals : 0 },{name : "Luis Rodríguez", goals : 0 },{name : "Edson Álvarez", goals : 0 },{name : "Rodolfo Pizarro", goals : 0 },{name : "Orbelín Pineda", goals : 0 },{name : "Héctor Herrera", goals : 0 },{name : "Raúl Jiménez", goals : 0 },{name : "Jesús Manuel Corona", goals : 0 }]} )
Teams.push({ name: "South Korea", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.30, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Kim Seung-gyu", goals : 0 }, {name : "Kim Young-gwon", goals : 0 }, {name : "Kim Jin-su", goals : 0 },{name : "Park Joo-ho", goals : 0 },{name : "Kim Min-jae", goals : 0 },{name : "Kim Bo-kyung", goals : 0 },{name : "Ju Se-jong", goals : 0 },{name : "Son Heung-min", goals : 0 },{name : "Lee Jae-sung", goals : 0 },{name : "Kim Shin-wook", goals : 0 },{name : "Hwang Ui-jo", goals : 0 }]} )
Teams.push({ name: "Germany", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.80, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Manuel Neuer", goals : 0 }, {name : "Antonio Rüdiger", goals : 0 }, {name : "Niklas Süle", goals : 0 },{name : "Jonas Hector", goals : 0 },{name : "Matthias Ginter", goals : 0 },{name : "Toni Kroos", goals : 0 },{name : "Marco Reus", goals : 0 },{name : "Joshua Kimmich", goals : 0 },{name : "Emre Can", goals : 0 },{name : "Serge Gnabry", goals : 0 },{name : "Timo Werner", goals : 0 }]} )
Teams.push({ name: "Belgium", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.70, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Thibaut Courtois", goals : 0 }, {name : "Toby Alderweireld", goals : 0 }, {name : "Jan Vertonghen", goals : 0 },{name : "Thomas Meunier", goals : 0 },{name : "Thomas Vermaelen", goals : 0 },{name : "Axel Witsel", goals : 0 },{name : "Kevin De Bruyne", goals : 0 },{name : "Youri Tielemans", goals : 0 },{name : "Thorgan Hazard", goals : 0 },{name : "Eden Hazard", goals : 0 },{name : "Dries Mertens", goals : 0 }]} )
Teams.push({ name: "England", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.60, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Jordan Pickford", goals : 0 }, {name : "Eric Dier", goals : 0 }, {name : "Harry Maguire", goals : 0 },{name : "John Stones", goals : 0 },{name : "Kieran Trippier", goals : 0 },{name : "Alex Oxlade-Chamberlain", goals : 0 },{name : "Jordan Henderson", goals : 0 },{name : "Ross Barkley", goals : 0 },{name : "Harry Winks", goals : 0 },{name : "Harry Kane", goals : 0 },{name : "Raheem Sterling", goals : 0 }]} )
Teams.push({ name: "Tunisia", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.10, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Farouk Ben Mustapha", goals : 0 }, {name : "Ali Maâloul", goals : 0 }, {name : "Aymen Abdennour", goals : 0 },{name : "Yassine Meriah", goals : 0 },{name : "Oussama Haddadi", goals : 0 },{name : "Ferjani Sassi", goals : 0 },{name : "Naïm Sliti", goals : 0 },{name : "Ellyes Skhiri", goals : 0 },{name : "Anice Badri", goals : 0 },{name : "Youssef Msakni", goals : 0 },{name : "Wahbi Khazri", goals : 0 }]} )
Teams.push({ name: "Panama", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.10, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "José Calderón", goals : 0 }, {name : "Román Torres", goals : 0 }, {name : "Adolfo Machado", goals : 0 },{name : "Fidel Escobar", goals : 0 },{name : "Azmahar Ariano", goals : 0 },{name : "Armando Cooper", goals : 0 },{name : "Alberto Quintero", goals : 0 },{name : "Édgar Bárcenas", goals : 0 },{name : "José Luis Rodríguez", goals : 0 },{name : "Gabriel Torres", goals : 0 },{name : "Abdiel Arroyo", goals : 0 }]} )
Teams.push({ name: "Colombia", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.20, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "David Ospina", goals : 0 }, {name : "Santiago Arias", goals : 0 }, {name : "Jeison Murillo", goals : 0 },{name : "Davinson Sánchez", goals : 0 },{name : "Yerry Mina", goals : 0 },{name : "Juan Cuadrado", goals : 0 },{name : "James Rodríguez", goals : 0 },{name : "Wílmar Barrios", goals : 0 },{name : "Mateus Uribe", goals : 0 },{name : "Radamel Falcao", goals : 0 },{name : "Luis Muriel", goals : 0 }]} )
Teams.push({ name: "Japan", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.40, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Eiji Kawashima", goals : 0 }, {name : "Sei Muroya", goals : 0 }, {name : "Yuto Nagatomo", goals : 0 },{name : "Maya Yoshida", goals : 0 },{name : "Hiroki Sakai", goals : 0 },{name : "Genki Haraguchi", goals : 0 },{name : "Hotaru Yamaguchi", goals : 0 },{name : "Gaku Shibasaki", goals : 0 },{name : "Takumi Minamino", goals : 0 },{name : "Kensuke Nagai", goals : 0 },{name : "Musashi Suzuki", goals : 0 }]} )
Teams.push({ name: "Senegal", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.20, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Abdoulaye Diallo", goals : 0 }, {name : "Lamine Gassama", goals : 0 }, {name : "Kalidou Koulibaly", goals : 0 },{name : "Saliou Ciss", goals : 0 },{name : "Moussa Wagué", goals : 0 },{name : "Idrissa Gueye", goals : 0 },{name : "Cheikhou Kouyaté", goals : 0 },{name : "Badou Ndiaye", goals : 0 },{name : "Ismaïla Sarr", goals : 0 },{name : "Sadio Mané", goals : 0 },{name : "M'Baye Niang", goals : 0 }]} )
Teams.push({ name: "Poland", points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, matchesPlayed: 0, matchesWon: 0, matchesLost: 0, matchesDrawn: 0, bias: 0.40, firstPlace : 0, secondPlace: 0, thirdPlace: 0, players: [{name : "Łukasz Fabiański", goals : 0 }, {name : "Artur Jędrzejczyk", goals : 0 }, {name : "Maciej Rybus", goals : 0 },{name : "Kamil Glik", goals : 0 },{name : "Łukasz Piszczek", goals : 0 },{name : "Kamil Grosicki", goals : 0 },{name : "Piotr Zieliński", goals : 0 },{name : "Grzegorz Krychowiak", goals : 0 },{name : "Mateusz Klich", goals : 0 },{name : "Robert Lewandowski", goals : 0 },{name : "Arkadiusz Milik", goals : 0 }]} )

function topGoalscorers() {
     goalScorersTable = [] ;

     for (var i = 0 ; i < Teams.length ; i ++) {

     a = Teams[i] ;

          for (var j = 0 ; j < a.players.length ; j++) {

               p = a.players[j] ;


                goalScorersTable.push({team: a.name , player: p.name, goals: p.goals});

          }
                

     }

     function goalScorersTableOutput(){
          goalScorersTable1 = goalScorersTable.sort(function(a,b) {
              return b.goals - a.goals;
          })
          
          //console.table(goalScorersTable1, ["team" , "player" , "goals"]);
      }

      goalScorersTableOutput();

     

     

    //console.table(goalScorersTable1) ;



     topTenGoalscorers = [] ;
     for (var i = 0 ; i < 10 ; i ++) {

          topTenGoalscorers.push(goalScorersTable1[i]);
     }


     
     console.table(topTenGoalscorers)





     
}
function goalScorers( winner, loser , winScore, loserScore ) {

     

     let scorerTable = [] ;

     for (var i = 0 ; i < winScore ; i ++) {

          let time = Math.floor ( Math.random() * 90 ) ; 

          positionSelector = Math.random() ;
          if (positionSelector <= 0.6 ) {
               let selector = Math.floor ( 9 + (Math.random() * 2) ) ; 
               scorer = winner.players[selector];
               scorer.goals ++ ;
          }
          if (positionSelector > 0.6 && positionSelector <= 0.90 ) {
               let selector = Math.floor ( 4 + (Math.random() * 5) ) ; 
               scorer = winner.players[selector];
               scorer.goals ++ ;
          }
          if (positionSelector > 0.9 && positionSelector <= 0.995 ) {
               let selector = Math.floor ( 1 + (Math.random() * 5) ) ; 
               scorer = winner.players[selector];
               scorer.goals ++ ;
          }
          if (positionSelector > 0.995 && positionSelector <= 1 ) {
               let selector = 0
               scorer = winner.players[selector];
               scorer.goals ++ ;
          }


          
          


          scorerTable.push({team: winner.name ,player: scorer.name, min: time }) ;


          

     }

     for (var i = 0 ; i < loserScore ; i ++) {

          let time = Math.floor ( Math.random() * 90 ) ; 
          


          positionSelector = Math.random() ;
          if (positionSelector <= 0.6 ) {
               let selector = Math.floor ( 9 + (Math.random() * 2) ) ; 
               scorer = loser.players[selector];
               scorer.goals ++ ;
          }
          if (positionSelector > 0.6 && positionSelector <= 0.90 ) {
               let selector = Math.floor ( 4 + (Math.random() * 5) ) ; 
               scorer = loser.players[selector];
               scorer.goals ++ ;
          }
          if (positionSelector > 0.9 && positionSelector <= 0.995 ) {
               let selector = Math.floor ( 1 + (Math.random() * 5) ) ; 
               scorer = loser.players[selector];
               scorer.goals ++ ;
          }
          if (positionSelector > 0.995 && positionSelector <= 1 ) {
               let selector = 0
               scorer = loser.players[selector];
               scorer.goals ++ ;
          }


          scorerTable.push({team: loser.name ,player: scorer.name, min: time }) ;


          


     }

     if (winScore == 0 && loserScore == 0) {
          return;
     }


     

     function scorerTableOutput(){
          scorerTable = scorerTable.sort(function(a,b) {
              return a.min - b.min;
          })
          
          console.table(scorerTable, ["team" , "player" , "min"]);
      }

      scorerTableOutput();





}
function manOfTheMatch(winningTeam) {

     lower = Math.floor(Math.random() * 5) ;
     upper = Math.floor(4 + (Math.random() * 7 )) ;
     


     low = Math.random() ;
    
     if (low < 0.2 ){

          selector = lower ;

     } else if ( low >= 0.2 ){
          selector = upper ;
     }

     
     motm = winningTeam.players[selector] ; 
     name = motm.name ;
     return name ;

}



badVerb = ["devistated","destroyed","deflated","heartbroken","upset","crushed","crying","beating themselves up","in ruins","sad","outraged","fuming","raging","furious with themselves",] ;
concat = [" must be ", " have to be ", " are definatly ", " will be ", " are horrendously " , " are horrifically ", " have got to be "] ; 
brokeSyn = [" broke ", " shattered ", " destroyed ", " devistated ", " ravaged ", " toyed with ", " danced around ", " tore through "];
diditSyn = [" pulled it out of the bag tonight. ", " showed what they can do. ", " have outdone themselves. ", " showed off. ", " pulled together as a team ", " showed the opponent what they are made of. " ] ;
good = [" incredibly. ", " amazingly. ", " without fear. " , " the match as cool as a cucumber. ", " with such passion. ", " with a level head. ", " with fire in his eyes. "];
struggle = [" will struggle ", " will find it hard ", " will have a tough time ", " may have a problem " , " might struggle ", " might find it tough ", " wont find it easy ", " know it will be difficult "] ;
hope = [" hope", " motivation", " morale", " faith", " good vibes", " confidence", " spirit", " optimism", " team spirit", " their drive"] ; 
good2 = ["extatic", "elated", "overjoyed", "pumping their fists in the air", "partying", "going crazy", "over the moon", "speechless"] ;

function winMatchCommentary( winner , loser, winnerScore, loserScore ) {
     
     motm = manOfTheMatch(winner) ;

     badVerbSelector = Math.floor(Math.random() * badVerb.length) ;
     badVerbConcat = badVerb[badVerbSelector] ;
     concatSelector = Math.floor(Math.random() * concat.length) ;
     concatWord = concat[concatSelector] ;
     brokeSynSelector = Math.floor(Math.random() * brokeSyn.length) ;
     brokeSynWord = brokeSyn[brokeSynSelector] ;
     didItSynSelector = Math.floor(Math.random() * diditSyn.length) ;
     didItSynWord = diditSyn[didItSynSelector] ;
     goodSelector = Math.floor(Math.random() * good.length) ;
     goodWord = good[goodSelector] ;
     struggleSelector = Math.floor(Math.random() * struggle.length) ;
     struggleWord = struggle[struggleSelector] ;
     hopeSelector = Math.floor(Math.random() * hope.length) ;
     hopeWord = hope[hopeSelector] ;
     good2Selector = Math.floor(Math.random() * good2.length) ;
     goodWord2 = good2[good2Selector] ;
     
     winListLow = 
     [(winner.name + " Only just scraped a win from " + loser.name ),
     (winner.name + " just barely managed to grab the win, " + loser.name + concatWord + badVerbConcat)];

     winListMed =
     [(winner.name + brokeSynWord + loser.name + "'s" + " defecnce and held on to the victory "),
     (winner.name + " really" + didItSynWord + loser.name + concatWord + badVerbConcat  )];

     winListHigh =
     [(motm + " played" + goodWord + loser.name + struggleWord + "regaining" + hopeWord + " after tonight. " + winnerScore + " goals for " + winner.name + " will leave " + loser.name + " " + badVerbConcat ),
     ("An incredible " + winnerScore + " Goals for " + winner.name + ". They will be " + goodWord2 + " this evening. " + motm + " played" + goodWord )];

     difference = winnerScore - loserScore ;

     

     if (difference == 1) {
          
          let selectorLow = Math.floor(Math.random() * winListLow.length);
          print(winListLow[selectorLow]);
          print(`\n`);
          print("Man Of The Match: " + motm) ;
     }
     if (difference == 2) {
          
          let selectorMed = Math.floor(Math.random() * winListMed.length);
          print(winListMed[selectorMed]);
          print(`\n`);
          print("Man Of The Match: " + motm) ;
          }

     if (difference >= 3) {
          
          let selectorHigh = Math.floor(Math.random() * winListHigh.length );
          print(winListHigh[selectorHigh]);
          print(`\n`);
          print("Man Of The Match: " + motm) ;
     }


}
function drawMatchCommentary( drawer1, drawer2, drawScore ) {

     badVerbSelector = Math.floor(Math.random() * badVerb.length) ;
     badVerbConcat = badVerb[badVerbSelector] ;
     concatSelector = Math.floor(Math.random() * concat.length) ;
     concatWord = concat[concatSelector] ;
     brokeSynSelector = Math.floor(Math.random() * brokeSyn.length) ;
     brokeSynWord = brokeSyn[brokeSynSelector] ;
     didItSynSelector = Math.floor(Math.random() * diditSyn.length) ;
     didItSynWord = diditSyn[didItSynSelector] ;
     goodSelector = Math.floor(Math.random() * good.length) ;
     goodWord = good[goodSelector] ;
     struggleSelector = Math.floor(Math.random() * struggle.length) ;
     struggleWord = struggle[struggleSelector] ;
     hopeSelector = Math.floor(Math.random() * hope.length) ;
     hopeWord = hope[hopeSelector] ;
     good2Selector = Math.floor(Math.random() * good2.length) ;
     goodWord2 = good2[good2Selector] ;

     determineMotm = Math.random();
     if (determineMotm > 0.5 ) {
          winner = drawer1 ; 
     } else if ( determineMotm < 0.5 ){
          winner = drawer2 ;
     }
     motm = manOfTheMatch(winner) ;

     

     drawListLow = 
     [("Such a boring game between " + drawer1.name + " and " + drawer2.name ),
     ("I nearly fell asleep watching " + drawer1.name + " and " + drawer2.name),
     ("It's games like this where I wish I stayed at home and watched The Chase"),
     ("I am supprised they even chose " + motm + " as Man Of The Match considering NOTHING happened! "),
     (drawer1.name + " and " + drawer2.name + " both played great. But neither team could crack the other.")] ;

     drawListMed =
     [(drawer1.name + " and " + drawer2.name + " were both lacking in defence tonight. Hopefully " + motm + "'s performance can raise the" + hopeWord + " for everyone."),
     (drawer1.name + " and " + drawer2.name + " will both be " + badVerbConcat + " that neither of them could find the" + hopeWord + " and go for the win.")];

     drawListHigh =
     [("A very high scoreing match but " + drawer1.name + " and " + drawer2.name + " couldn't clench the win"),
     (drawer1.players[0].name + " and " + drawer2.players[0].name + " both had nightmares this evening. " + drawer1.name + " and " + drawer2.name + " all tied up for this match. ")];

     


     if (drawScore == 1 || drawScore == 0)  {
          
          let selectorLow = Math.floor(Math.random() * drawListLow.length);
          print(drawListLow[selectorLow]);
          print(`\n`);
          print("Man Of The Match: " + motm) ;
          
     }
     if (drawScore == 2) {
          
          let selectorMed = Math.floor(Math.random() * drawListMed.length);
          print(drawListMed[selectorMed]);
          print(`\n`);
          print("Man Of The Match: " + motm) ;
     }
     if (drawScore >= 3) {
          
          let selectorHigh = Math.floor(Math.random() * drawListHigh.length);
          print(drawListHigh[selectorHigh]);
          print(`\n`);
          print("Man Of The Match: " + motm) ;
     }



     


}
function result( team1, team2, match1Score1, match1Score2 ) {

     
     match1Result = team1.name + "  " + match1Score1 + " - " + match1Score2 + "  " + team2.name; 
     print(`\n`);
     print(match1Result);
     print(`\n`);
     
     team1.goalsFor += match1Score1;
     team2.goalsFor += match1Score2;
     team1.goalsAgainst += match1Score2;
     team2.goalsAgainst += match1Score1;
     team1.goalDifference += (match1Score1 - match1Score2);
     team2.goalDifference += (match1Score2 - match1Score1);
     team1.matchesPlayed ++;
     team2.matchesPlayed ++;
     
     if (match1Score1 > match1Score2) {
          team1.points += 3;
          team1.matchesWon ++;
          team2.matchesLost ++;
          winner = team1 ;
          loser = team2 ;
          drawer1 = null ;
          drawer2 = null ;

          goalScorers(team1,team2,match1Score1,match1Score2);
          print(`\n`);
          winMatchCommentary( winner, loser, match1Score1, match1Score2 ) ;
          print(`\n`);
          
          
      } else if (match1Score1 == match1Score2 ){
          team1.points += 1; 
          team2.points += 1;
          team1.matchesDrawn ++;
          team2.matchesDrawn ++;
          winner = null ;
          loser = null ;
          drawer1 = team1 ;
          drawer2 = team2 ;

          goalScorers(team1,team2,match1Score1,match1Score2);
          print(`\n`);
          drawMatchCommentary( drawer1, drawer2, match1Score1 ) ;
          print(`\n`);
          


      } else if (match1Score2 > match1Score1) {
          team2.points += 3;
          team2.matchesWon ++;
          team1.matchesLost ++;
          winner = team2 ;
          loser = team1 ;
          drawer1 = null ;
          drawer2 = null ;

          goalScorers(team2,team1,match1Score2,match1Score1);
          print(`\n`);
          winMatchCommentary( winner, loser, match1Score2, match1Score1 ) ;
          print(`\n`);
          
          
          
      }

      
}
function groupStage(team1, team2, team3, team4, groupLetter) {

     var group = []; 

     group.push(team1);
     group.push(team2);
     group.push(team3);
     group.push(team4);
     
     print(`\n`);
     print(`----------------`)
     print(`Group ` + groupLetter);
     print(`----------------`)
     print(`\n`);

     match1Score1 =  calculateGoalNumber(team1.bias);
     match1Score2 =  calculateGoalNumber(team2.bias);

     result(team1,team2,match1Score1,match1Score2);
     print("Group " + groupLetter + " Table:");
     print(`\n`);
     tableOutput();
     print(`\n`);
     print("--------------------------------------------------------------------------------------");
     wait(5000) ;
     match2Score1 = calculateGoalNumber(team3.bias);
     match2Score2 = calculateGoalNumber(team4.bias);

     result(team3,team4,match2Score1,match2Score2);
     print("Group " + groupLetter + " Table:");
     print(`\n`);
     tableOutput();
     print(`\n`);
     print("--------------------------------------------------------------------------------------");
     wait(5000) ;
     match3Score1 =  calculateGoalNumber(team1.bias);
     match3Score2 =  calculateGoalNumber(team3.bias);

     result(team1,team3,match3Score1,match3Score2);
     print("Group " + groupLetter + " Table:");
     print(`\n`);
     tableOutput();
     print(`\n`);
     print("--------------------------------------------------------------------------------------");
     wait(5000) ;

     match4Score1 = calculateGoalNumber(team2.bias);
     match4Score2 = calculateGoalNumber(team4.bias);

     result(team2,team4,match4Score1,match4Score2);
     print("Group " + groupLetter + " Table:");
     print(`\n`);
     tableOutput();
     print(`\n`);
     print("--------------------------------------------------------------------------------------");
     wait(5000) ;

     match5Score1 =  calculateGoalNumber(team1.bias);
     match5Score2 =  calculateGoalNumber(team4.bias);

     result(team1,team4,match5Score1,match5Score2);
     print("Group " + groupLetter + " Table:");
     print(`\n`);
     tableOutput();
     print(`\n`);
     print("--------------------------------------------------------------------------------------");
     wait(5000) ;

     match6Score1 = calculateGoalNumber(team2.bias);
     match6Score2 = calculateGoalNumber(team3.bias);

     result(team2,team3,match6Score1,match6Score2);
     print("Group " + groupLetter + " Table:");
     print(`\n`);
     
 
    // print(group);
     
     function tableOutput(){
          groupTable = group.sort(function(a,b) {
              return b.points - a.points;
          })
          
          console.table(groupTable, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput();
     print("--------------------------------------------------------------------------------------");
     wait(5000) ;

     groupWinner = groupTable.shift();
     groupRunnerUp = groupTable.shift();

}
function shuffle(array) {
     var currentIndex = array.length, temporaryValue, randomIndex;
   
     // While there remain elements to shuffle...
     while (0 !== currentIndex) {
   
       // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
   
       // And swap it with the current element.
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
     }
   
     return array;
}
function worldCup(years) {
for (var i = 0 ; i < years ; i ++) {



shuffle(Teams);

function announce() { 

print(`GROUP STAGE `);
print(`------------`);

print(`Group A`);
print(`------------`);

print(Teams[0].name);
print(Teams[1].name);
print(Teams[2].name);
print(Teams[3].name);
print(`\n`);
wait(5000) ;

print(`------------`);
print(`Group B`);
print(`------------`);

print(Teams[4].name);
print(Teams[5].name);
print(Teams[6].name);
print(Teams[7].name);
print(`\n`);
wait(5000) ;

print(`------------`);
print(`Group C`);
print(`------------`);

print(Teams[8].name);
print(Teams[9].name);
print(Teams[10].name);
print(Teams[11].name);
print(`\n`);
wait(5000) ;
print(`------------`);
print(`Group D`);
print(`------------`);

print(Teams[12].name);
print(Teams[13].name);
print(Teams[14].name);
print(Teams[15].name);
print(`\n`);
wait(5000) ;

print(`------------`);

print(`Group E`);
print(`------------`);

print(Teams[16].name);
print(Teams[17].name);
print(Teams[18].name);
print(Teams[19].name);
print(`\n`);
wait(5000) ;
print(`------------`);
print(`Group F`);
print(`------------`);

print(Teams[20].name);
print(Teams[21].name);
print(Teams[22].name);
print(Teams[23].name);
print(`\n`);
wait(5000) ;
print(`------------`);
print(`Group G`);
print(`------------`);

print(Teams[24].name);
print(Teams[25].name);
print(Teams[26].name);
print(Teams[27].name);
print(`\n`);
wait(5000) ;
print(`------------`);
print(`Group H`);
print(`------------`);

print(Teams[28].name);
print(Teams[29].name);
print(Teams[30].name);
print(Teams[31].name);
print(`\n`);
wait(5000) ;

}

announce();

groupStage(Teams[0],Teams[1],Teams[2],Teams[3], `A` );

groupAWinner = groupWinner;
groupARunnerUp = groupRunnerUp;

groupStage(Teams[4],Teams[5],Teams[6],Teams[7], `B` );

groupBWinner = groupWinner;
groupBRunnerUp = groupRunnerUp;

groupStage(Teams[8],Teams[9],Teams[10],Teams[11], `C` );

groupCWinner = groupWinner;
groupCRunnerUp = groupRunnerUp;

groupStage(Teams[12],Teams[13],Teams[14],Teams[15], `D` );

groupDWinner = groupWinner;
groupDRunnerUp = groupRunnerUp;

groupStage(Teams[16],Teams[17],Teams[18],Teams[19], `E` );

groupEWinner = groupWinner;
groupERunnerUp = groupRunnerUp;

groupStage(Teams[20],Teams[21],Teams[22],Teams[23], `F` );

groupFWinner = groupWinner;
groupFRunnerUp = groupRunnerUp;

groupStage(Teams[24],Teams[25],Teams[26],Teams[27], `G` );

groupGWinner = groupWinner;
groupGRunnerUp = groupRunnerUp;

groupStage(Teams[28],Teams[29],Teams[30],Teams[31], `H` );

groupHWinner = groupWinner;
groupHRunnerUp = groupRunnerUp;

function reset()  {
     for ( var i = 0 ; i < 32 ; i ++ ){
         Teams[i].points = 0 
        // Teams[i].matchesPlayed = 0 
        // Teams[i].matchesWon = 0 
        // Teams[i].matchesLost = 0 
        // Teams[i].matchesDrawn = 0 
        // Teams[i].goalsFor = 0 
       //  Teams[i].goalsAgainst = 0 
        // Teams[i].goalDifference = 0 
     }
 }

 reset();

function roundOf16(groupAWinner,groupARunnerUp,groupBWinner,groupBRunnerUp,groupCWinner,groupCRunnerUp,groupDWinner,groupDRunnerUp,groupEWinner,groupERunnerUp,groupFWinner,groupFRunnerUp,groupGWinner,groupGRunnerUp,groupHWinner,groupHRunnerUp){
     print(`\n`);
     print(`----------------`);
     print(`Round of 16`);
     print(`----------------`);
     print(`\n`);
     wait(5000) ;

     let game1 = []; 
     game1.push(groupAWinner);
     game1.push(groupBRunnerUp);

     match1Score1 =  calculateGoalNumber(groupAWinner.bias);
     match1Score2 =  calculateGoalNumber(groupBRunnerUp.bias);

     if (match1Score1 == match1Score2) {
          chance = Math.random();
         // print(chance);
          if (chance >= 0.5 ) {
               match1Score1 += 1 ;
          } else match1Score2 += 1 ;
     }

     a = result(groupAWinner,groupBRunnerUp,match1Score1,match1Score2);

     function tableOutput(){
          game1Table = game1.sort(function(a,b) {
              return b.points - a.points;
          })
          
          //console.table(game1, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput();
     wait(5000) ;

     roundOf16Winner1 = game1Table.shift();

//////////////////////////////////////////////////////////////////////

     let game2 = []; 
     game2.push(groupCWinner);
     game2.push(groupDRunnerUp);

     match2Score1 =  calculateGoalNumber(groupCWinner.bias);
     match2Score2 =  calculateGoalNumber(groupDRunnerUp.bias);

     if (match2Score1 == match2Score2) {
          chance2 = Math.random();
         // print(chance2);
          if (chance2 >= 0.5 ) {
               match2Score1 += 1 ;
          } else match2Score2 += 1 ;
     }

     b = result(groupCWinner,groupDRunnerUp,match2Score1,match2Score2);

     function tableOutput2(){
          game2Table = game2.sort(function(a,b) {
              return b.points - a.points;
          })
          
         // console.table(game2, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput2();
     wait(5000) ;

     roundOf16Winner2 = game2Table.shift();
     print(`\n`);

//////////////////////////////////////////////////////////////////////

     let game3 = []; 
     game3.push(groupEWinner);
     game3.push(groupFRunnerUp);

     match3Score1 =  calculateGoalNumber(groupEWinner.bias);
     match3Score2 =  calculateGoalNumber(groupFRunnerUp.bias);

     if (match3Score1 == match3Score2) {
          chance3 = Math.random();
          //print(chance3);
          if (chance3 >= 0.5 ) {
               match3Score1 += 1 ;
          } else match3Score2 += 1 ;
     }

     c = result(groupEWinner,groupFRunnerUp,match3Score1,match3Score2);

     function tableOutput3(){
          game3Table = game3.sort(function(a,b) {
              return b.points - a.points;
          })
          
          //console.table(game3, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput3();
     wait(5000) ;

     roundOf16Winner3 = game3Table.shift();

//////////////////////////////////////////////////////////////////////  

     let game4 = []; 
     game4.push(groupGWinner);
     game4.push(groupHRunnerUp);

     match4Score1 =  calculateGoalNumber(groupGWinner.bias);
     match4Score2 =  calculateGoalNumber(groupHRunnerUp.bias);

     if (match4Score1 == match4Score2) {
          chance4 = Math.random();
         // print(chance4);
          if (chance4 >= 0.5 ) {
               match4Score1 += 1 ;
          } else match4Score2 += 1 ;
     }

     d = result(groupGWinner,groupHRunnerUp,match4Score1,match4Score2);

     function tableOutput4(){
          game4Table = game4.sort(function(a,b) {
              return b.points - a.points;
          })
          
          //console.table(game4, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput4();
     wait(5000) ;

     roundOf16Winner4 = game4Table.shift();
     print(`\n`);

////////////////////////////////////////////////////////////////////// 



     let game5 = []; 
     game5.push(groupBWinner);
     game5.push(groupARunnerUp);

     match5Score1 =  calculateGoalNumber(groupBWinner.bias);
     match5Score2 =  calculateGoalNumber(groupARunnerUp.bias);

     if (match5Score1 == match5Score2) {
          chance5 = Math.random();
        //  print(chance5);
          if (chance5 >= 0.5 ) {
               match5Score1 += 1 ;
          } else match5Score2 += 1 ;
     }

     e = result(groupBWinner,groupARunnerUp,match5Score1,match5Score2);

     function tableOutput5(){
          game5Table = game5.sort(function(a,b) {
              return b.points - a.points;
          })
          
         // console.table(game5, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput5();
     wait(5000) ;

     roundOf16Winner5 = game5Table.shift();

//////////////////////////////////////////////////////////////////////

     let game6 = []; 
     game6.push(groupDWinner);
     game6.push(groupCRunnerUp);

     match6Score1 =  calculateGoalNumber(groupDWinner.bias);
     match6Score2 =  calculateGoalNumber(groupCRunnerUp.bias);

     if (match6Score1 == match6Score2) {
          chance6 = Math.random();
         // print(chance6);
          if (chance6 >= 0.5 ) {
               match6Score1 += 1 ;
          } else match6Score2 += 1 ;
     }

     f = result(groupDWinner,groupCRunnerUp,match6Score1,match6Score2);

     function tableOutput6(){
          game6Table = game6.sort(function(a,b) {
              return b.points - a.points;
          })
          
         // console.table(game6, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput6();
     wait(5000) ;

     roundOf16Winner6 = game6Table.shift();
     print(`\n`);

//////////////////////////////////////////////////////////////////////

     let game7 = []; 
     game7.push(groupFWinner);
     game7.push(groupERunnerUp);

     match7Score1 =  calculateGoalNumber(groupFWinner.bias);
     match7Score2 =  calculateGoalNumber(groupERunnerUp.bias);

     if (match7Score1 == match7Score2) {
          chance7 = Math.random();
         // print(chance7);
          if (chance7 >= 0.5 ) {
               match7Score1 += 1 ;
          } else match7Score2 += 1 ;
     }

     g = result(groupFWinner,groupERunnerUp,match7Score1,match7Score2);

     function tableOutput7(){
          game7Table = game7.sort(function(a,b) {
              return b.points - a.points;
          })
          
          //console.table(game7, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput7();
     wait(5000) ;

     roundOf16Winner7 = game7Table.shift();

//////////////////////////////////////////////////////////////////////  

     let game8 = []; 
     game8.push(groupHWinner);
     game8.push(groupGRunnerUp);

     match8Score1 =  calculateGoalNumber(groupHWinner.bias);
     match8Score2 =  calculateGoalNumber(groupGRunnerUp.bias);

     if (match8Score1 == match8Score2) {
          chance8 = Math.random();
          //print(chance8);
          if (chance8 >= 0.5 ) {
               match8Score1 += 1 ;
          } else match8Score2 += 1 ;
     }

     h = result(groupHWinner,groupGRunnerUp,match8Score1,match8Score2);

     function tableOutput8(){
          game8Table = game8.sort(function(a,b) {
              return b.points - a.points;
          })
          
          //console.table(game8, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput8();
     wait(5000) ;

     roundOf16Winner8 = game8Table.shift();
     print(`\n`);
     


}

roundOf16(groupAWinner,groupARunnerUp,groupBWinner,groupBRunnerUp,groupCWinner,groupCRunnerUp,groupDWinner,groupDRunnerUp,groupEWinner,groupERunnerUp,groupFWinner,groupFRunnerUp,groupGWinner,groupGRunnerUp,groupHWinner,groupHRunnerUp);


reset();

function quaterFinals(roundOf16Winner1,roundOf16Winner2,roundOf16Winner3,roundOf16Winner4,roundOf16Winner5,roundOf16Winner6,roundOf16Winner7,roundOf16Winner8) {
     print(`\n`);
     print(`----------------`);
     print(`Quater Finals`);
     print(`----------------`);
     print(`\n`);
     wait(5000) ;
     let game9 = []; 
     game9.push(roundOf16Winner1);
     game9.push(roundOf16Winner2);

     match9Score1 =  calculateGoalNumber(roundOf16Winner1.bias);
     match9Score2 =  calculateGoalNumber(roundOf16Winner2.bias);

     if (match9Score1 == match9Score2) {
          chance9 = Math.random();
          //print(chance9);
          if (chance9 >= 0.5 ) {
               match9Score1 += 1 ;
          } else match9Score2 += 1 ;
     }

     q1 = result(roundOf16Winner1,roundOf16Winner2,match9Score1,match9Score2);

     function tableOutput9(){
          game9Table = game9.sort(function(a,b) {
              return b.points - a.points;
          })
          
         // console.table(game9, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput9();
     wait(5000) ;

     quaterFinalWinner1 = game9Table.shift();

//////////////////////////////////////////////////////////////////////

let  game10 = []; 
     game10.push(roundOf16Winner3);
     game10.push(roundOf16Winner4);

     match10Score1 =  calculateGoalNumber(roundOf16Winner3.bias);
     match10Score2 =  calculateGoalNumber(roundOf16Winner4.bias);

     if (match10Score1 == match10Score2) {
          chance10 = Math.random();
         // print(chance10);
          if (chance10 >= 0.5 ) {
               match10Score1 += 1 ;
          } else match10Score2 += 1 ;
     }

     q2 = result(roundOf16Winner3,roundOf16Winner4,match10Score1,match10Score2);

     function tableOutput10(){
          game10Table = game10.sort(function(a,b) {
              return b.points - a.points;
          })
          
        //  console.table(game10, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput10();
     wait(5000) ;

     quaterFinalWinner2 = game10Table.shift();
     print(`\n`);

//////////////////////////////////////////////////////////////////////

let  game11 = []; 
     game11.push(roundOf16Winner5);
     game11.push(roundOf16Winner6);

     match11Score1 =  calculateGoalNumber(roundOf16Winner5.bias);
     match11Score2 =  calculateGoalNumber(roundOf16Winner6.bias);

     if (match11Score1 == match11Score2) {
          chance11 = Math.random();
        //  print(chance11);
          if (chance11 >= 0.5 ) {
               match11Score1 += 1 ;
          } else match11Score2 += 1 ;
     }

     q3 = result(roundOf16Winner5,roundOf16Winner6,match11Score1,match11Score2);

     function tableOutput11(){
          game11Table = game11.sort(function(a,b) {
              return b.points - a.points;
          })
          
         // console.table(game11, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput11();
     wait(5000) ;

     quaterFinalWinner3 = game11Table.shift();

//////////////////////////////////////////////////////////////////////

let  game12 = []; 
     game12.push(roundOf16Winner7);
     game12.push(roundOf16Winner8);

     match12Score1 =  calculateGoalNumber(roundOf16Winner7.bias);
     match12Score2 =  calculateGoalNumber(roundOf16Winner8.bias);

     if (match12Score1 == match12Score2) {
          chance12 = Math.random();
         // print(chance12);
          if (chance12 >= 0.5 ) {
               match12Score1 += 1 ;
          } else match12Score2 += 1 ;
     }

     q4 = result(roundOf16Winner7,roundOf16Winner8,match12Score1,match12Score2);

     function tableOutput12(){
          game12Table = game12.sort(function(a,b) {
              return b.points - a.points;
          })
          
         // console.table(game12, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput12();
     wait(5000) ;

     quaterFinalWinner4 = game12Table.shift();


}

quaterFinals(roundOf16Winner1,roundOf16Winner2,roundOf16Winner3,roundOf16Winner4,roundOf16Winner5,roundOf16Winner6,roundOf16Winner7,roundOf16Winner8);



reset();

function semiFinals(quaterFinalWinner1,quaterFinalWinner2,quaterFinalWinner3,quaterFinalWinner4){

     print(`\n`);
     print(`----------------`);
     print(`Semi Finals`);
     print(`----------------`);
     print(`\n`);
     wait(5000) ;

     let  game13 = []; 
     game13.push(quaterFinalWinner1);
     game13.push(quaterFinalWinner2);

     match13Score1 =  calculateGoalNumber(quaterFinalWinner1.bias);
     match13Score2 =  calculateGoalNumber(quaterFinalWinner2.bias);

     if (match13Score1 == match13Score2) {
          chance13 = Math.random();
        //  print(chance13);
          if (chance13 >= 0.5 ) {
               match13Score1 += 1 ;
          } else match13Score2 += 1 ;
     }

     s1 = result(quaterFinalWinner1,quaterFinalWinner2,match13Score1,match13Score2);

     function tableOutput13(){
          game13Table = game13.sort(function(a,b) {
              return b.points - a.points;
          })
          
          //console.table(game13, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput13();
     wait(5000) ;

     semiFinalWinner1 = game13Table.shift();
     semiFinalLoser1 = game13Table.pop();

     ///////////////////////////////////////////

     let  game14 = []; 
     game14.push(quaterFinalWinner3);
     game14.push(quaterFinalWinner4);

     match14Score1 =  calculateGoalNumber(quaterFinalWinner3.bias);
     match14Score2 =  calculateGoalNumber(quaterFinalWinner4.bias);

     if (match14Score1 == match14Score2) {
          chance14 = Math.random();
         // print(chance14);
          if (chance14 >= 0.5 ) {
               match14Score1 += 1 ;
          } else match14Score2 += 1 ;
     }

     s2 = result(quaterFinalWinner3,quaterFinalWinner4,match14Score1,match14Score2);

     function tableOutput14(){
          game14Table = game14.sort(function(a,b) {
              return b.points - a.points;
          })
          
          //console.table(game14, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput14();
     wait(5000) ;

     semiFinalWinner2 = game14Table.shift();
     semiFinalLoser2 = game14Table.shift();
     


}

semiFinals(quaterFinalWinner1,quaterFinalWinner2,quaterFinalWinner3,quaterFinalWinner4);


function thirdPlace(semiFinalLoser1,semiFinalLoser2) {
     print(`\n`);
     print(`----------------`);
     print(`Third Place Match`);
     print(`----------------`);
     print(`\n`);
     wait(5000) ;


     let  game15 = []; 
     game15.push(semiFinalLoser1);
     game15.push(semiFinalLoser2);

     match15Score1 =  calculateGoalNumber(semiFinalLoser1.bias);
     match15Score2 =  calculateGoalNumber(semiFinalLoser2.bias);

     if (match15Score1 == match15Score2) {
          chance15 = Math.random();
        //  print(chance15);
          if (chance15 >= 0.5 ) {
               match15Score1 += 1 ;
          } else match15Score2 += 1 ;
     }

     tp = result(semiFinalLoser1,semiFinalLoser2,match15Score1,match15Score2);

     function tableOutput15(){
          game15Table = game15.sort(function(a,b) {
              return b.points - a.points;
          })
          
         // console.table(game15, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput15();
     wait(5000) ;

     thirdPlaceTeam = game15Table.shift();
     thirdPlaceTeam.thirdPlace ++ ;
     

}

thirdPlace(semiFinalLoser1,semiFinalLoser2);



reset();

function final(semiFinalWinner1,semiFinalWinner2) {
     print(`\n`);
     print(`----------------`);
     print(`FINAL`);
     print(`----------------`);
     print(`\n`);
     wait(5000) ;


     let  game16 = []; 
     game16.push(semiFinalWinner1);
     game16.push(semiFinalWinner2);

     match16Score1 =  calculateGoalNumber(semiFinalWinner1.bias);
     match16Score2 =  calculateGoalNumber(semiFinalWinner2.bias);

     if (match16Score1 == match16Score2) {
          chance16 = Math.random();
         // print(chance16);
          if (chance16 >= 0.5 ) {
               match16Score1 += 1 ;
          } else match16Score2 += 1 ;
     }

     f = result(semiFinalWinner1,semiFinalWinner2,match16Score1,match16Score2);

     function tableOutput16(){
          game16Table = game16.sort(function(a,b) {
              return b.points - a.points;
          })
          
          //console.table(game16, ["name","points", "matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference","bias"]);
      }

     tableOutput16();
     wait(5000) ;

     firstPlaceTeam = game16Table.shift();
     secondPlaceTeam  = game16Table.shift();

     firstPlaceTeam.firstPlace ++ ;
     secondPlaceTeam.secondPlace ++ ;
     

}

final(semiFinalWinner1,semiFinalWinner2);


print(`\n`);


function tourneyTable(){
     tourneyTable = Teams.sort(function(a,b) {
         return b.matchesWon - a.matchesWon;
     })
     
     console.table(Teams, ["name","matchesPlayed", "matchesWon", "matchesDrawn","matchesLost","goalsFor","goalsAgainst","goalDifference"]);
 }

 tourneyTable();


print(`\n`);


function tableWCWins(){
     totalsTable = Teams.sort(function(a,b) {
         return b.firstPlace - a.firstPlace;
     })
     
     console.table(Teams, ["name","firstPlace", "secondPlace", "thirdPlace"]);
 }

tableWCWins();



}


}

worldCup(1);
topGoalscorers();

