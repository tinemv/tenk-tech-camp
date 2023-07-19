import React from "react";

export var tasks = [
  {
    id: 0,
    title: "Intro oppgave",
    description: (
      <p className="dnb-p">
        I denne oppgaven skal vi teste hvordan oppgavene vil fungere. Vi skal
        navigere oss til riktig fil og endre på nettsiden fra denne fila. Fila
        vi skal jobbe i heter <code className="dnb-code">Welcome.tsx</code> og
        ligger i mappa som heter 'code'.
      </p>
    ),
    subtask: [
      {
        id: 0,
        name: "Oppgave A",
        level: "EASY",
        description: (
          <p className="dnb-p">
            I denne oppgaven skal vi teste hvordan oppgavene vil fungere. Vi
            skal navigere oss til riktig fil og endre på nettsiden fra denne
            fila. Fila vi skal jobbe i heter{" "}
            <code className="dnb-code">Welcome.tsx</code> og ligger i mappa som
            heter code
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Se linje X . Prøv å endre på teksten på linja og se hva som skjer på
            nettsiden.
          </p>
        ),
      },
      {
        id: 1,
        name: "Oppgave B",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Endre farge på overskriften til en farge du ønsker, for eksempel
            rosa (pink) eller blå (blue).
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi endre på overskriftens Style og legge til{" "}
            <code className="dnb-code">color:pink</code> eller{" "}
            <code className="dnb-code">color:blue</code>
          </p>
        ),
      },
      {
        id: 2,
        name: "Oppgave C",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Lag en ny linje under overskriften og legg til en underoverskrift
            med elementet <code className="dnb-code">H2</code>. Velg selv hva
            underoverskriften skal være, for eksempel navnet ditt.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her skal du skrive en nesten lik linje som på overskriften, bare at
            du skal bytte ut <code className="dnb-code">&lt;H1&gt;</code> med{" "}
            <code className="dnb-code">&lt;H2&gt;</code>. I <i>style</i> kan du
            velge farge og plassering slik du ønsker.
          </p>
        ),
      },
    ],
  },
  {
    id: 1,
    title: "Oppgave X",
    description: (
      <p className="dnb-p">
        I denne oppgaven skal du lage funksjonalitet på nettsiden som hjelper
        DNB med å oppdage økonomisk kriminalitet. Oppgavene hører til siden som
        heter <i>Logg inn som etterforsker</i> og i tabellen under siden
        <i>Transaksjoner</i> ser du en oversikt over alle transaksjonene i
        banken. Koden for denne siden ligger under{" "}
        <code className="dnb-code">Transactions</code> i mappa{" "}
        <code className="dnb-code">code</code> og består av flere filer.
      </p>
    ),
    subtask: [
      {
        id: 3,
        name: "Oppgave A",
        level: "EASY",
        description: (
          <>
            <p className="dnb-p">
              Det første vi skal gjøre er å lage en beskrivelse av tabellen for
              at den skal være enklere for etterforskere å forstå. Det gjøres i
              fila
              <code className="dnb-code">Transactions.tsx</code>. Vi bruker
              elementet <code className="dnb-code">&lt;P&gt;</code> for å legge
              til et paragraf og fyller inn teksten vi vil ha. Teksten kan for
              eksempel være:
            </p>
            <p>
              <i>
                Denne tabellen viser oversikt over alle transaksjonene i DNB.
                Den kan brukes til å finne mistengelige transaksjoner og oppdage
                kriminalitet
              </i>
            </p>
            <p>
              eller du kan finne på din egen. Legg inn paragrafet under
              overskriften, og hvis du vil kan du legge til farge, endre
              størrelse eller liknende ved å legge til{" "}
              <code className="dnb-code">style</code> som tidligere.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi finne overskriften i koden først. Se om du finner
            overskriften og legg til en ny linje under. Her legger du til
            elementet{" "}
            <code className="dnb-code">&lt;P&gt; din tekst &lt;/P&gt;</code> og
            fyller inn teksten din i mellom P'ene.
          </p>
        ),
      },
      {
        id: 4,
        name: "Oppgave B",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Videre skal vi prøve å legge inn litt mer informasjon i tabellen enn
            det som er der nå. Hvis du går inn i filen som heter{" "}
            <code className="dnb-code">transactions.tsx</code> under mappen{" "}
            <code className="dnb-code">data</code> så ser du hvor dataen du ser
            blir hentet fra. Legg merke til at hver transaksjon innholder to
            felt som ikke vises i tabellen på siden: Landet pengene er sendt fra
            og landet pengene er sendt til. Finn koden for tabellen og legg in
            to nye kolonner som heter <b>Avsenders land</b> og{" "}
            <b>Mottakers land</b> som viser frem denne dataen.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Koden for denne oppgaven ligger i fila{" "}
            <code className="dnb-code">TransactionTable.tsx</code> under{" "}
            <code className="dnb-code">code</code>. Her må du legge til to nye
            overskrifter et sted mellom linje X og X og to nye linjer for å
            hente data mellom linje X og X. Pass på at riktig data kommer under
            riktig overskift.
          </p>
        ),
      },
      {
        id: 5,
        name: "Oppgave C",
        level: "HARD",
        description: (
          <p className="dnb-p">
            Som du ser viser tabellen hvilken risiko det er for at landet
            pengene sendes mellom driver med kriminalitet, men det er foreløpig
            ukjent hvilken risiko som er på hver transaksjon. Se på funksjonen
            som heter <code className="dnb-code">detectRiskCountry</code> i
            filen <code className="dnb-code">TransactionTable</code>. Denne
            funksjonen skal sjekke om landet som pengene sendes fra eller til
            kan virke mistenkelige for økonomisk kriminalitet. Funksjonen er
            ikke implementert (laget ferdig) enda, så dette blir din oppgave.
            Legg inn kode i funskjonen som sjekker om et av landene gir høy
            risiko og isåfall returnerer ordet <b>HØY</b>. Hvis ikke kan du
            returnere <b>LAV</b>. Du trenger kun endre koden inne i
            <code className="dnb-code">detectRiskCountry</code> i denne
            oppgaven.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi bruke en <code className="dnb-code">if</code>-setning for
            å skrive at hvis landet det er sendt fra eller til er lik ditt
            valgte land så returnerer du <b>HØY</b>. <i>Hvis</i> i kode skrives{" "}
            <code className="dnb-code">if{}</code> og, <i>er lik</i> skrives{" "}
            <code className="dnb-code">===</code> og <i>eller</i> skrives{" "}
            <code className="dnb-code">||</code>.
          </p>
        ),
      },
      {
        id: 6,
        name: "Oppgave D",
        level: "EASY",
        description: (
          <p className="dnb-p">
            For å gjøre transaksjonene med høy risiko for kriminalitet mer
            synlig ønsker vi at de skal ha en annen farge enn de transaksjonene
            med lav risiko. Se på funksjonen som heter{" "}
            <code className="dnb-code">setColorForHighRisk</code> og implementer
            denne på samme måte som i forrige oppgave. Hvis risikoen er høy kan
            du returnere fargen rød for eksempel, mens hvis den er lav kan du
            returnere svart eller grønn.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi på samme måte som i forrige oppgave bruke en{" "}
            <code className="dnb-code">if</code>-setning. Husk at <b>Hvis</b> i
            kode skrives <code className="dnb-code">if&#123;&#125;</code> og,
            <b>er lik</b> skrives <code className="dnb-code">===</code> og{" "}
            <b>eller</b> skrives <code className="dnb-code">||</code>. Ellers
            kan du herme etter den forrige <code className="dnb-code">if</code>
            -setningen du laget men endre betingelsene så de heller sjekker om
            <code className="dnb-code">risk</code> er lik <b>HØY</b> eller ikke.
          </p>
        ),
      },
      {
        id: 7,
        name: "Oppgave E",
        level: "EASY",
        description: (
          <>
            <p className="dnb-p">
              Til slutt ønsker DNB å gjøre det enda lettere for etterforskerene
              å se hvilke transaksjoner som har høy risiko for kriminalitet.
              Selv om vi allerede har markert de som har høy risiko i en annen
              farge ønsker vi å kunne filtrere vekk de som ikke har høy risiko.
              Som du ser over tabellen kan vi allerede filtrere på for eksempel{" "}
              <b>Avsenders navn</b>. Test ut dette for å gjøre deg kjent med
              funksjonaliteten.
            </p>
            <p className="dnb-p">
              Som du også ser finnes det ikke noen filtrering for <b>Risiko</b>.
              Din oppgave blir å fikse dette så den fungerer likt som de andre
              parameterene. Se i fila{" "}
              <code className="dnb-code">Transactions.tsx</code>
              og let etter hvor det er definert hva som er i rullgardinmenyen
              (drop down) på engelsk.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Funskjonalitet for selve filtreringen er allerede lagt inn men
            rullgardinmenyen mangler et valg for risiko. Her må vi finne
            komponenten som heter <code className="dnb-code">DropDown</code> og
            legge til data i denne. Se på{" "}
            <code className="dnb-code">Parameter</code> på linje X og se om du
            finner den som mangler i rullgardinen så du kan legge til denne.
          </p>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Oppgave Y",
    description: (
      <p className="dnb-p">
        For å bli litt bedre kjent med kodebasen som tilhører kundeprofilen,
        skal vi begynne med å gjøre små forbedringer slik at kundene våre blir
        mer fornøyd
      </p>
    ),
    subtask: [
      {
        id: 8,
        name: "Oppgave A",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Vi skal begynne med å gjøre noen enkle forbedringer på profilsiden
            vår. For øyeblikket er det et generisk profilbilde (kalt{" "}
            <code className="dnb-code">default.png</code>) for brukeren vår. For
            å gjøre siden mer personlig kan vi endre profilbilde. Dette kan du
            gjøre ved å navigere til{" "}
            <code className="dnb-code">Customer/Profile/CustomerPage.tsx</code>.
            Se på bildene i mappa{" "}
            <code className="dnb-code">profile_pictures</code> og velg et du
            liker.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Se på listen over importer i{" "}
            <code className="dnb-code">CustomerPage.tsx</code>.{" "}
            <code className="dnb-code">default.png</code> er navnet på
            bildefilen til profilbildet. Endre dette til navnet på et av bildene
            i <code className="dnb-code">profile_pictures</code> mappen (for
            eksempel <code className="dnb-code">Kjerstin_Braathen.png</code>).
          </p>
        ),
      },
      {
        id: 9,
        name: "Oppgave B",
        level: "EASY",
        description: (
          <>
            <p className="dnb-p">
              Dersom du klikker på et kontonavn vil vi navigeres inn på en liste
              over transaksjoner fra denne kontoen. Siden kontonummeret også
              fungerer som en id til kontoen, gir det mening at vi kan forvente
              det samme til å skje når vi klikker her. Vi ønsker derfor å legge
              til en link fra brukerens hovedside til kontotransaksjoner via
              kontonummeret, lignende slik det er gjort med kontonavn.
            </p>
            <p>
              For å gjøre dette må vi endre HTML elementet som inneholder
              kontonummeret fra et
              <code className="dnb-code">NumberElement</code>
              til en link. Ta en titt i{" "}
              <code className="dnb-code">AccountTable.tsx</code>. Her er en
              funksjon, <code className="dnb-code">getTransactionLink</code>
              som gjør nettopp dette.{" "}
            </p>
            <p>
              {" "}
              Funksjonen tar et argument som heter attribute som er den kolonnen
              vi ønsker å gjøre til et link element. Prøv å bruke{" "}
              <code className="dnb-code">getTransactionLink</code> funksjonen
              til å lage kontonummer kolonnen linket til kontotransaksjonsiden.
              For inspirasjon, se hvordan funksjonen er brukt med kontonavn.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Bruk <code className="dnb-code">account.accountNumber</code>
            som et attributt i funksjonen på følgende vis:{" "}
            <code className="dnb-code">
              getTransactionsLink(account.accountNumber)
            </code>
            . Husk å fjerne numberFormat elementet og å legge til &#123;&#125;
            rundt alt.
          </p>
        ),
      },
      {
        id: 10,
        name: "Oppgave C",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Økonomisk kriminalitet hvor noen har overtatt kontrollen på en konto
            de ikke har eierskap til, er kjennetegnet av en mengde mindre
            transaksjoner tatt over en kort periode. Gå gjennom de forskjellige
            kontoene og se om du kan finne noe som kan være økonomisk
            kriminalitet, noter deg navn, kontonummer og land transaksjonen går
            til.
          </p>
        ),
        hint: (
          <p className="dnb-p">Se ekstra nøye på transaksjonene i ......</p>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Oppgave Z",
    description: (
      <>
        <p className="dnb-p">
          Det er veldig mange transaksjoner i banken og vanskelig å se gjennom
          alle for å finne kriminalitet. Derfor har vi laget en oversikt over
          hvilke land penger sendes mellom så man enkelt kan se om noe virker
          mistengelig. I denne oppgaven skal du gjøre ferdig oversikten den er
          til hjelp i etterforskningen.
        </p>
        <p className="dnb-p">
          Oppgavene her skal løses i fila{" "}
          <code className="dnb-code">Dashboard.tsx</code> i mappen{" "}
          <code className="dnb-code">Transactions</code> og du ser endringene i
          Dashboard når du er logget inn som etterforsker.
        </p>
      </>
    ),
    subtask: [
      {
        id: 11,
        name: "Oppgave A",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Overskriften på siden, der det står <b>Dashboard</b>, er veldig
            liten. Endre overskriften til å være en mer passende størrelse.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi endre stilen (style) på{" "}
            <code className="dnb-code">H1</code> på X i fila. Man kan enten
            skrive inn noe annet enn small, eller man kan bare fjerne det helt
            så den går tilbake til orginal størrelse for H1.
          </p>
        ),
      },
      {
        id: 12,
        name: "Oppgave B",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Først må vi sørge for at figurene viser riktig data. Hvis du holder
            musa over kakediagrammet ser du at den viser antall innenlands og
            utenlands transaksjoner. Hvis du holder musa over søylediagrammet
            får man heller opp spørsmålstegn. Endre koden slik at det også står
            <b> Antall</b> på søylediagrammet.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Se på linje X så finner du label for kakediagrammet (pie chart på
            engelsk). Finner du det samme for søylediagrammet på linje X?
          </p>
        ),
      },
      {
        id: 13,
        name: "Oppgave C",
        level: "EASY",
        description: (
          <p className="dnb-p">
            For å se om det er noen transaksjoner til russland blant alle uten å
            bla gjennom ønsker vi å ha Russland som et av landene i
            søylediagrammet. Legg til en ny søyle som viser antall transaksjoner
            til Russland slik som vises for de andre landene.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På samme måte som er gjort på linje X og X for alle de andre landene
            må vi legge til både en ny label og ny data. Vi må bruke metoden
            <code className="dnb-code">countTargetCountries()</code> og bruke
            Russland som input og legge til en ny linje under Italia på både
            linje X og linje X og skriv{" "}
            <code className="dnb-code">countTargetCountries('Russland')</code>
            og <b>Russland</b>.
          </p>
        ),
      },
    ],
  },
];
