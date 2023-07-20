import React from "react";

export var tasks = [
  {
    id: 0,
    title: "Intro",
    description: (
      <p className="dnb-p">
        I denne oppgaven skal vi teste hvordan oppgavene vil fungere. Vi skal
        navigere oss til riktig fil og endre på nettsiden fra denne fila.
        Oppgavene hører til siden som heter <i>Velkommen</i>.
        Filen vi skal jobbe i heter <code className="dnb-code">Welcome.tsx</code> og
        ligger i mappa som heter <code className="dnb-code">code</code>.
      </p>
    ),
    subtask: [
      {
        id: 0,
        name: "Oppgave A",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Nå skal vi endre overskriften til forsiden. Finn stedet i koden hvor
            vi har laget overskriften, ved å se etter teksten{" "}
            <b>"Velkommen til workshop!"</b>. Når du finner det, kan du endre
            til overskriften du liker.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Ser du denne teksten:{" "}
            <code className="dnb-code">
              &lt;H1 style=&#123;&#123; margin: 20, color: "black"
              &#125;&#125;&gt;Velkommen til workshop!&lt;/H1&gt;
            </code>{" "}
            på linje X? Skift ut <b>"Velkommen til workshop!"</b> til det du vil
            ha som overskrift.
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
            rosa (pink) eller blå (blue), ved å bytte ut{" "}
            <code className="dnb-code">color: "black"</code> til en annen farge.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi endre på samme linje X som i oppgave A. Bytt ut ordet{" "}
            <b>"black"</b> med for eksempel <b>"pink"</b>, og se hva som skjer
            med overskriften.
          </p>
        ),
      },
      {
        id: 2,
        name: "Oppgave C",
        level: "MEDIUM",
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
            <code className="dnb-code">&lt;H2&gt;</code> slik:{" "}
            <code className="dnb-code">
              &lt;H2 style=&#123;&#123; margin: 20, color: "black"
              &#125;&#125;&gt;Din tekst&lt;/H2&gt;
            </code>
            I <i>style</i> kan du velge farge slik du ønsker, som fra oppgave B.
          </p>
        ),
      },
    ],
  },
  {
    id: 1,
    title: "Oppgave 1",
    description: (
      <p className="dnb-p">
        For å bli litt bedre kjent med nettsiden og koden skal vi begynne med å
        lage en profil i nettbanken. Oppgavene hører til siden som heter <i>Logg inn som kunde</i>.
        Først kan du finne filen vi skal kode i som
        heter <code className="dnb-code">CustomerPage.tsx</code> som ligger i
        mappa <code className="dnb-code">Oppgave1</code> (husk at alle filene vi
        skal jobbe med i dag ligger i mappa{" "}
        <code className="dnb-code">code</code>).
      </p>
    ),
    subtask: [
      {
        id: 80,
        name: "Oppgave A",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Det første vi ønsker er å endre navnet på overskriften fra{" "}
            <b>"ukjent"</b> til et ekte navn. Velg et navn, enten ditt eget
            eller en kjendis. Finn overskriften i koden, så du kan bytte navnet
            med et du har valgt.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Linjen du skal endre ligner på den vi jobbet med i forrige oppgave.
            Let etter{" "}
            <code className="dnb-code">
              &lt;H1&gt;Velkommen ukjent!&lt;/H1&gt;
            </code>{" "}
            på linje X og endre <b>"ukjent"</b> til et navn du velger.
          </p>
        ),
      },

      {
        id: 8,
        name: "Oppgave B",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            Det neste vi skal gjøre er å endre profilbildet. Bildene du kan
            velge mellom ligger i<code className="dnb-code">Profilbilder</code>
            -mappa. Velg det bildet du liker best. Deretter legger du inn dette
            bildet i koden ved å endre ordet{" "}
            <code className="dnb-code">ukjent</code> på linje X til navnet på
            bildet du har valgt.{" "}
            <i>
              Husk at du må skrive ordet helt likt som navnet på bildet (pass på
              små og store bokstaver).
            </i>
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På linje X må du bytte ut
            <code className="dnb-code">src=&#123;ukjent&#125;</code> med for
            eksempel{" "}
            <code className="dnb-code">src=&#123;TaylorSwift&#125;</code>
          </p>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Oppgave 2",
    description: (
      <p className="dnb-p">
        Det er veldig mange transaksjoner i banken og vanskelig å se gjennom
        alle for å finne kriminalitet. Derfor har vi laget en oversikt over
        hvilke land penger sendes mellom så man enkelt kan se om noe virker
        mistenkelig. I denne oppgaven skal du gjøre ferdig denne oversikten.
        Oppgavene hører til siden som heter <i>Logg inn som etterforsker</i>
        og deretter <i>Dashboard</i>, og skal løses i fila: {" "}
        <code className="dnb-code">Dashboard.tsx</code> i mappen{" "}
        <code className="dnb-code">Oppgave2</code>.
      </p>
    ),
    subtask: [
      {
        id: 11,
        name: "Oppgave A",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            Overskriften på siden, der det står <b>Dashboard</b>, er veldig
            liten. Endre overskriften til å være en mer passende størrelse. Da
            må du endre <code className="dnb-code">fontSize</code> til for
            eksempel <code className="dnb-code">"xxx-large"</code> istedenfor{" "}
            <code className="dnb-code">"small"</code>.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Finn linje X hvor det står{" "}
            <code className="dnb-code">
              &lt;H1 style=&#123;&#123; fontSize: "small" &#125;&#125;
              top="x-small"&gt;
            </code>{" "}
            og skift ut <i>style</i> til
            <code className="dnb-code">
              style=&#123;&#123; fontSize: "xxx-large" &#125;&#125;
            </code>
            .
          </p>
        ),
      },
      {
        id: 12,
        name: "Oppgave B",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            En feil har oppstått! Hvis du holder musepekeren over <i>kakediagrammet</i> til venstre
            så ser du at den viser <b>Antall</b> innenlands og
            utenlands transaksjoner. Hvis du holder musepekeren over <i>søylediagrammet</i> til høyre, så
            får man heller opp spørsmålstegn der ordet <b>Antall</b> skulle vært.
            Endre koden slik at det også står
            <b>Antall</b> på søylediagrammet.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På linje X så finner du en
            <code className="dnb-code">
             label
            </code>
            for kakediagrammet,
            denne koden ser slik ut:{" "}
            <code className="dnb-code">
              label: "Antall"
            </code>.{" "}
            Finner du det samme for søylediagrammet på linje X? Her kan du bytte ut:{" "}
            <code className="dnb-code">
             label: "?????"
            </code> med{" "}
            <code className="dnb-code">
             label: "Antall"
            </code>
          </p>
        ),
      },
      {
        id: 13,
        name: "Oppgave C",
        level: "HARD",
        description: (
          <p className="dnb-p">
            For å se om det er noen transaksjoner til Russland uten å bla igjennom
            alle må vi legge til Russland i søylediagrammet. Dette vil vise
            antall transaksjoner på samme måte som de andre landene.

            Finn ut hvor i koden landene er listet opp og legg til <b>Russland</b>.
            Her må du endre to steder i filen!
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På samme måte som er gjort på linje X og X-Y for alle de andre landene
            må vi legge til både en ny <code className="dnb-code">labels</code> og ny
            <code className="dnb-code">data</code>.
            På linje X må du legge til <code className="dnb-code">"Russland"</code> etter komma.

            På linje X må du legge til:
            <code className="dnb-code">countTargetCountries('Russland')</code> etter komma.
          </p>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Oppgave 3",
    description: (
      <p className="dnb-p">
        Noen har overført penger til Russland!
        I denne oppgaven skal vi prøve å finne ut hvem som har overført pengene.
        Oppgavene hører til siden som
        heter <i>Logg inn som etterforsker</i>. I tabellen under siden
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
              filen
              <code className="dnb-code">Transactions.tsx</code>. Vi bruker
              elementet <code className="dnb-code">&lt;P&gt;</code> for å legge
              til et paragraf og fyller inn teksten vi vil ha. Teksten kan for
              eksempel være:
            </p>
            <p>
              <i>
                Denne tabellen viser oversikt over alle transaksjonene i DNB.
                Den kan brukes til å finne mistenkelige transaksjoner og oppdage
                kriminalitet.
              </i>
            </p>
            <p>
              eller du kan finne på din egen tekst. Legg inn paragrafet under
              overskriften.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi finne overskriften i koden først. Se om du finner
            overskriften på linje X. Legg til en ny linje under med
            elementet{" "}
            <code className="dnb-code">&lt;P&gt; din tekst &lt;/P&gt;</code> og
            fyll inn teksten din i mellom
            <code className="dnb-code">&lt;P&gt;</code>'ene.
          </p>
        ),
      },
      {
        id: 4,
        name: "Oppgave B",
        level: "HARD",
        description: (
          <p className="dnb-p">
            Videre skal vi prøve å legge inn litt mer informasjon i tabellen enn
            det som er der nå. Hvis du går inn i filen som heter{" "}
            <code className="dnb-code">transactions.tsx</code> under mappen{" "}
            <code className="dnb-code">data</code> så ser du hvor dataen du ser
            blir hentet fra.
            <br></br><br></br>
            Legg merke til at hver transaksjon innholder to
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
            pengene sendes mellom driver med kriminalitet, men det er
            ukjent hvilken risiko som er på hver transaksjon. Se på funksjonen
            som heter <code className="dnb-code">detectRiskCountry</code> i
            filen <code className="dnb-code">TransactionTable.tsx</code>. Denne
            funksjonen skal sjekke om landet som pengene sendes fra eller til
            kan virke mistenkelige for økonomisk kriminalitet.
            <br></br><br></br>
            Funksjonen er ikke kodet (laget ferdig) enda, så dette blir din oppgave.
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
              funksjonaliteten.<br></br><br></br>
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
    id: 4,
    title: "Ekstra oppgaver",
    description: (
      <p className="dnb-p">
        Her har du noen ekstra oppgaver å bryne deg på som er litt vanskeligere.
      </p>
    ),
    subtask: [
      {
        id: 9,
        name: "Oppgave A",
        level: "HARD",
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
    ],
  },
];
