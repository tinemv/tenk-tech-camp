export var tasks = [
  {
    id: "0",
    title: "Intro oppgave",
    description:
      "I denne oppgaven skal vi teste hvordan oppgavene vil fungere. Vi skal navigere oss til riktig fil og endre på nettsiden fra denne fila. Fila vi skal jobbe i heter 'Welcome.tsx' og ligger i mappa som heter 'code'.",
    subtask: [
      {
        id: 0,
        name: "A",
        level: "EASY",
        description: "I denne oppgaven skal vi teste hvordan oppgavene vil fungere. Vi skal navigere oss til riktig fil og endre på nettsiden fra denne fila. Fila vi skal jobbe i heter Welcome.tsx og ligger i mappa som heter code",
        hint: "Se linje X . Prøv å endre på teksten på linja og se hva som skjer på nettsiden.",
      },
      {
        id: 1,
        name: "B",
        level: "EASY",
        description:
          "Endre farge på overskriften til en farge du ønsker, for eksempel rosa (pink) eller blå (blue).",
        hint: "Her må vi endre på overskriftens Style og legge til <code class=“dnb-code”>color:'pink'</code> eller color:'blue'. ",
      },
      {
        id: 2,
        name: "C",
        level: "EASY",
        description:
          "Lag en ny linje under overskriften og legg til en underoverskrift med elementet 'H2'. Velg selv hva underoverskriften skal være, for eksempel navnet ditt.",
        hint: "Her skal du skrive en nesten lik linje som på overskriften, bare at du skal bytte ut <H1> med <H2>. I 'style' kan du velge farge og plassering slik du ønsker.",
      },
    ],
  },
  {
    id: "x",
    title: "Oppgave x",
    description:
      "I denne oppgaven skal du lage funksjonalitet på nettsiden som hjelper DNB med å oppdage økonomisk kriminalitet. Oppgavene hører til siden som heter 'Logg inn som etterforsker' og i tabellen under siden 'Transaksjoner' ser du en oversikt over alle transaksjonene i banken. Koden for denne siden ligger under 'Transactions' i mappa 'code' og består av flere filer.",
    subtask: [
      {
        id: 3,
        name: "A",
        level: "EASY",
        description: "Det første vi skal gjøre er å lage en beskrivelse av tabellen for at den skal være enklere for etterforskere å forstå. Det gjøres i fila 'Transactions.tsx'. Vi bruker elementet <P> for å legge til et paragraf og fyller inn teksten vi vil ha. Teksten kan for eksempel være 'Denne tabellen viser oversikt over alle transaksjonene i DNB. Den kan brukes til å finne mistengelige transaksjoner og oppdage kriminalitet', eller du kan finne på din egen. Legg inn paragrafet under overskriften, og hvis du vil kan du legge til farge, endre størrelse eller liknende ved å legge til 'style' som tidligere.",
        hint: "Her må vi finne overskriften i koden først. Se om du finner overskriften og legg til en ny linje under. Her legger du til elementet <P> </P> og fyller inn teksten din i mellom P'ene.",
      },
      {
        id: 4,
        name: "B",
        level: "EASY",
        description:
          "Videre skal vi prøve å legge inn litt mer informasjon i tabellen enn det som er der nå. Hvis du går inn i filen som heter 'transactions.tsx' under mappen 'data' så ser du hvor dataen du ser blir hentet fra. Legg merke til at hver transaksjon innholder to felt som ikke vises i tabellen på siden: Landet pengene er sendt fra og landet pengene er sendt til. Finn koden for tabellen og legg in to nye kolonner som heter 'Avsenders land' og 'Mottakers land' som viser frem denne dataen.",
        hint: "Koden for denne oppgaven ligger i fila 'TransactionTable.tsx' under 'code'. Her må du legge til to nye overskrifter et sted mellom linje X og X og to nye linjer for å hente data mellom linje X og X. Pass på at riktig data kommer under riktig overskift.",
      },
      {
        id: 5,
        name: "C",
        level: "HARD",
        description:
          "Som du ser viser tabellen hvilken risiko det er for at landet pengene sendes mellom driver med kriminalitet, men det er foreløpig ukjent hvilken risiko som er på hver transaksjon. Se på funksjonen som heter 'detectRiskCountry' i filen 'TransactionTable'. Denne funksjonen skal sjekke om landet som pengene sendes fra eller til kan virke mistenkelige for økonomisk kriminalitet. Funksjonen er ikke implementert (laget ferdig) enda, så dette blir din oppgave. Legg inn kode i funskjonen som sjekker om et av landene gir høy risiko og isåfall returnerer ordet 'HØY'. Hvis ikke kan du returnere 'LAV'. Du trenger kun endre koden inne i 'detectRiskCountry' i denne oppgaven. ",
        hint: "Her må vi bruke en if-setning for å skrive at hvis landet det er sendt fra eller til er lik ditt valgte land så returnerer du 'HØY'. 'Hvis' i kode skrives 'if{}' og, 'er lik' skrives '===' og 'eller' skrives '||'.",
      },
      {
        id: 6,
        name: "D",
        level: "EASY",
        description:
          "For å gjøre transaksjonene med høy risiko for kriminalitet mer synlig ønsker vi at de skal ha en annen farge enn de med lav. Se på funksjonen som heter 'setColorForHighRisk' og implementer denne på samme måte som i forrige oppgave. Hvis risikoen er høy kan du returnere fargen rød for eksempel, mens hvis den er lav kan du returnere svart eller grønn. ",
        hint: "Her må vi på samme måte som i forrige oppgave bruke en if-setning. Husk at 'Hvis' i kode skrives 'if{}' og, 'er lik' skrives '===' og 'eller' skrives '||'. Ellers kan du herme etter den forrige if-setningen du laget men endre betingelsene så de heller sjekker om 'risk' er lik 'HØY' eller ikke.",
      },
      {
        id: 7,
        name: "E",
        level: "EASY",
        description:
          "Til slutt ønsker DNB å gjøre det enda lettere for etterforskerene å se hvilke transaksjoner som har høy risiko for kriminalitet. Selv om vi allerede har markert de som har høy risiko i en annen farge ønsker vi å kunne filtrere vekk de som ikke har høy risiko. Som du ser over tabellen kan vi allerede filtrere på for eksempel 'Avsenders navn'. Test ut dette for å gjøre deg kjent med funksjonaliteten. Som du også ser finnes det ikke noen filtrering for 'Risiko'. Din oppgave blir å fikse dette så den fungerer likt som de andre parameterene. Se i fila 'Transactions.tsx' og let etter hvor det er definert hva som er i rullgardinmenyen (drop down på engelsk.",
        hint: "Funskjonalitet for selve filtreringen er allerede lagt inn men rullgardinmenyen mangler et valg for risiko. Her må vi finne komponenten som heter 'DropDown' og legge til data i denne. Se på 'Parameter' linje X og se om du finner den som mangler i rullgardinen så du kan legge til denne.",
      },
    ],
  },
  {
    id: "y",
    title: "Oppgave Y",
    description:
        "For å bli litt bedre kjent med kodebasen som tilhører kundeprofilen, skal vi begynne med å gjøre små forbedringer slik at kundene våre blir mer fornøyd",
    subtask: [
        {
          id: 8,
          name: "A",
          level: "MEDIUM",
          description:
          "Vi skal begynne med å gjøre noen enkle forbedringer på profilsiden vår. For øyeblikket er det et generisk profilbilde(kalt default.png) for brukeren vår. For å gjøre siden mer personlig kan vi endre profilbilde. \nDette kan du gjøre ved å navigere til Customer/Profile/CustomerPage.tsx. Se på bildene i profile_pictures og velg et du liker.",
          hint: "Se på listen over importer i CustomerPage.tsx. \"default.png\" er navnet på bildefilen til profilbildet. Endre dette til navnet på et av bildene i profile_pictures mappen (for eksempel Kjerstin_Braathen.png).",
         },
        {
          id: 9,
          name: "B",
          level: "HARD",
          description:
              "Dersom du klikker på et kontonavn vil vi navigeres inn på en liste over transaksjoner fra denne kontoen. Siden kontonummeret også fungerer som et id til kontoen, gir det mening at vi kan forvente det samme til å skje når vi klikker her. Vi ønsker derfor å legge til en link fra brukerens hovedside til kontotransaksjoner via kontonummeret, lignende slik det er gjort med kontonavn. For å gjøre dette må vi endre HTML elementet som inneholder kontonummeret fra et NumberElement til en link. Ta en titt i AccountTable.tsx. Her er en funksjon, getTransactionLink som gjør nettopp dette. Funksjonen tar et argument som heter attribute som er den kolonnen vi ønsker å gjøre til et link element. Prøv å bruke getTransactionLink funksjonen til å lage kontonummer kolonnen linket til kontotransaksjonsiden. For inspirasjon, se hvordan funksjonen er brukt med kontonavn.",
          hint: "Bruk account.accountNumber som et attributt i funksjonen på følgende vis: getTransactionsLink(account.accountNumber). Husk å fjerne numberFormat elementet og å legge til {} rundt alt.",
        },
        {
          id: 10,
          name: "B",
          level: "EASY",
          description:
              "Økonomisk kriminalitet hvor noen har overtatt kontrollen på en konto de ikke har eierskap til , er kjennetegnet av en mengde mindre transaksjoner tatt over en kort periode. Gå gjennom de forskjellige kontoene og se om du kan finne noe som kan være økonomisk kriminalitet, noter deg navn, kontonummer og land transaksjonen går til.",
          hint: "Se ekstra nøye på transaksjonene i ......",
        },
      ],
    },
  ];