import React from "react";



export var tasks = [
  {
    id: 0,
    title: "Intro",
    description: (
      <>
        <p className="dnb-p">
          I denne oppgaven skal vi teste hvordan oppgavene vil fungere. Vi skal
          navigere oss til riktig fil og endre på nettsiden fra denne fila.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Hvor på nettsiden?</b> <i>Velkommen</i>
        </p>
        <p className="dnb-p">
          <b>Hvor i koden?</b> <code className="dnb-code">Welcome.tsx</code>
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Oppgave A",
        level: "ENKEL",
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
        level: "ENKEL",
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
            <br />
            <br />I <i>style</i> kan du velge farge slik du ønsker, som fra
            oppgave B.
          </p>
        ),
      },
    ],
  },
  {
    id: 1,
    title: "Oppgave 1",
    description: (
      <>
        <p className="dnb-p">
          For å bli litt bedre kjent med nettsiden og koden skal vi begynne med
          å lage en profil i nettbanken.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Hvor på nettsiden?</b> <i>Logg inn som kunde</i>
        </p>
        <p className="dnb-p">
          <b>Hvor i koden?</b>{" "}
          <code className="dnb-code">CustomerPage.tsx</code> i{" "}
          <code className="dnb-code">Oppgave1</code>-mappa
        </p>
      </>
    ),
    subtask: [
      {
        id: 3,
        name: "Oppgave A",
        level: "ENKEL",
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
        id: 4,
        name: "Oppgave B",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            Det neste vi skal gjøre er å endre profilbildet. Bildene du kan
            velge mellom ligger i<code className="dnb-code">Profilbilder</code>
            -mappa. Velg det bildet du liker best. Deretter legger du inn dette
            bildet i koden ved å endre ordet{" "}
            <code className="dnb-code">ukjent</code> på linje X til navnet på
            bildet du har valgt. <br />
            <i>
              Husk at du må skrive ordet helt likt som navnet på bildet (pass på
              små og store bokstaver).
            </i>
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På linje X må du bytte ut{" "}
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
      <>
        <p className="dnb-p">
          Det er veldig mange transaksjoner i banken og vanskelig å se gjennom
          alle for å finne kriminalitet. Derfor har vi laget en oversikt over
          hvilke land penger sendes mellom så man enkelt kan se om noe virker
          mistenkelig. I denne oppgaven skal du gjøre ferdig denne oversikten.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Hvor på nettsiden?</b> <i>Dashboard</i> under{" "}
          <i>Logg inn som etterforsker</i>
        </p>
        <p className="dnb-p">
          <b>Hvor i koden?</b> <code className="dnb-code">Dashboard.tsx</code> i{" "}
          <code className="dnb-code">Oppgave2</code>-mappa
        </p>
      </>
    ),
    subtask: [
      {
        id: 5,
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
        id: 6,
        name: "Oppgave B",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            En feil har oppstått! Hvis du holder musepekeren over{" "}
            <i>kakediagrammet</i> til venstre så ser du at den viser{" "}
            <b>Antall</b> innenlands og utenlands transaksjoner. Hvis du holder
            musepekeren over <i>søylediagrammet</i> til høyre, så får man heller
            opp spørsmålstegn der ordet <b>Antall</b> skulle vært. <br />
            Endre koden slik at det også står
            <b>Antall</b> på søylediagrammet.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På linje X så finner du en
            <code className="dnb-code">label</code>
            for kakediagrammet, denne koden ser slik ut:{" "}
            <code className="dnb-code">label: "Antall"</code>. Finner du det
            samme for søylediagrammet på linje X? <br />
            Her kan du bytte ut:{" "}
            <code className="dnb-code">label: "?????"</code> med{" "}
            <code className="dnb-code">label: "Antall"</code>
          </p>
        ),
      },
      {
        id: 7,
        name: "Oppgave C",
        level: "VANSKELIG",
        description: (
          <p className="dnb-p">
            For å se om det er noen transaksjoner til Russland uten å bla
            gjennom alle må vi legge til Russland i søylediagrammet. Dette vil
            vise antall transaksjoner på samme måte som de andre landene. <br />
            <br /> Finn ut hvor i koden landene er listet opp og legg til{" "}
            <b>Russland</b>. Her må du endre to steder i filen!
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På samme måte som er gjort på linje X og X-Y for alle de andre
            landene må vi legge til både en ny{" "}
            <code className="dnb-code">labels</code> og ny
            <code className="dnb-code">data</code>.
            <br /> På linje X må du legge til{" "}
            <code className="dnb-code">"Russland"</code>, og på linje X må du
            legge til{" "}
            <code className="dnb-code">countTargetCountries("Russland")</code> .
            Husk å ha komma på riktig steder!
          </p>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Oppgave 3",
    description: (
      <>
        <p className="dnb-p">
          Noen har overført penger til Russland! I denne oppgaven skal vi prøve
          å finne ut hvem som har overført pengene.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Hvor på nettsiden?</b> <i>Logg inn som etterforsker</i>
        </p>
        <p className="dnb-p">
          <b>Hvor i koden?</b>{" "}
          <code className="dnb-code">Transactions.tsx</code> (Oppgave A) og{" "}
          <code className="dnb-code">TransactionTable.tsx</code> (Resten av
          oppgavene) i <code className="dnb-code">Oppgave 3</code>-mappa
        </p>
      </>
    ),
    subtask: [
      {
        id: 8,
        name: "Oppgave A",
        level: "ENKEL",
        description: (
          <>
            <p className="dnb-p">
              Det første vi skal gjøre er å lage en beskrivelse av tabellen for
              at den skal være enklere å forstå. Vi bruker elementet{" "}
              <code className="dnb-code">&lt;P&gt;</code> for å legge til et
              paragraf og fyller inn teksten vi vil ha. Teksten kan for eksempel
              være:
            </p>
            <p className="dnb-p">
              <i>
                Denne tabellen viser oversikt over alle transaksjonene i DNB.
                Den kan brukes til å finne mistenkelige transaksjoner og oppdage
                kriminalitet.
              </i>
            </p>
            <p className="dnb-p">
              eller du kan finne på din egen tekst. Legg inn paragrafet under
              overskriften.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi finne overskriften i koden først. Se om du finner
            overskriften på linje X. Legg til en ny linje under med elementet{" "}
            <code className="dnb-code">&lt;P&gt; din tekst &lt;/P&gt;</code> og
            fyll inn teksten din mellom
            <code className="dnb-code">&lt;P&gt;</code>'ene.
          </p>
        ),
      },
      {
        id: 9,
        name: "Oppgave B",
        level: "MEDIUM",
        description: (
          <>
            <p className="dnb-p">
              Hver transaksjon sendes mellom to land. I tabellen så vises
              hvilket land pendene er sendt fra. Vi ønsker også å vite hvor
              penge er sendt til.
            </p>
            <br />
            <p className="dnb-p">
              Finn koden for tabellen og legg inn én nye kolonne som heter{" "}
              <b>Mottakers land</b>, på samme måte som er gjort for{" "}
              <b>Avsenders land</b>.
            </p>
            <br />
            <p className="dnb-p">
              Her må du huske å endre to steder i koden, både legge til
              overskrift og innhold i tabellen. Dobbeltsjekk at riktig innhold
              kommer under riktig overskrift.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Her må du legge til én ny overskrift på linje X, ved å bruke{" "}
            <code className="dnb-code">&lt;Th&gt;</code> og innhold på linje X,
            ved å bruke <code className="dnb-code">&lt;Td&gt;</code>.
            <br />I koden ser du også hint på hva du skal skrive på linjene.
          </p>
        ),
      },
      {
        id: 10,
        name: "Oppgave C",
        level: "VANSKELIG",
        description: (
          <p className="dnb-p">
            Som du ser i tabellen så er det ukjent hvilken risiko hver
            transaksjon har. Vi ønsker her å vise enten <b>LAV</b> eller{" "}
            <b>HØY</b> avhengig av om pengene er sendt til Russland.
            <br /> <br />
            Se på funksjonen som heter{" "}
            <code className="dnb-code">detectRiskCountry</code> på linje X i
            filen <code className="dnb-code">TransactionTable.tsx</code>.
            <br></br>
            Endre koden i funksjonen slik at den sjekker om pengene er sendt til
            Russland, og isåfall returnerer du ordet <b>"HØY"</b>. Hvis ikke
            returnerer du <b>"LAV"</b>.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Du må først fjerne to linjer i{" "}
            <code className="dnb-code">detectRiskCountry</code>, og deretter
            bytte ut <code className="dnb-code">land</code> med{" "}
            <code className="dnb-code">"Russland"</code>. Videre må du velge når
            du skal returnere <b>"HØY"</b> og <b>"LAV"</b> for at det skal bli
            riktig.
            <br />
            <br />
            Bemerk at <b>hvis</b> i kode skrives{" "}
            <code className="dnb-code">if{}</code> og, <b>er lik</b> skrives{" "}
            <code className="dnb-code">===</code>.
          </p>
        ),
      },
      {
        id: 11,
        name: "Oppgave D",
        level: "VANSKELIG",
        description: (
          <p className="dnb-p">
            For å gjøre transaksjonene med høy risiko mer synlig ønsker vi at de
            skal ha en annen farge enn de andre.
            <br />
            <br />
            Se på funksjonen som heter{" "}
            <code className="dnb-code">setColorForHighRisk</code> og fullfør
            denne på samme måte som i forrige oppgave. Her skal du gjøre det
            samme som i forrige oppgave, men med litt andre ord.
            <br />
            <br />
            Hvis <code className="dnb-code">risk</code> er <b>HØY</b> returnerer
            du fargen <code className="dnb-code">red</code>, mens hvis den er
            lav returnerer du <code className="dnb-code">green</code>.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi bruke <b>hvis</b> som i forrige oppgave. Husk at{" "}
            <b>hvis</b> i kode skrives <code className="dnb-code">if</code> og{" "}
            <b>er lik</b> skrives <code className="dnb-code">===</code>.
            <br />
            <br />
            Ellers kan du herme etter den forrige oppgaven, men bytte ut{" "}
            <code className="dnb-code">country === "Russland"</code> med{" "}
            <code className="dnb-code">risk === "HØY"</code> (Husk store
            bokstaver), og returnere først{" "}
            <code className="dnb-code">"red"</code> og deretter{" "}
            <code className="dnb-code">"green"</code>.
          </p>
        ),
      },
      {
        id: 11,
        name: "Oppgave E",
        level: "ENKEL",
        description: (
          <>
            <p className="dnb-p">
              Forhåpentligvis har du nå klart å lage kode for å finne ut hvem
              som har overført penger til Russland. Bla gjennom alle
              transaksjonene hvis du ikke har gjort det, og finn den som har
              blitt markert rødt og er til Russland. Navnet på personen som
              sendte disse pengene fyller du inn i feltet øverst på siden og
              sender inn til politiet.
            </p>
          </>
        ),
        hint: <p className="dnb-p">Her trenger du vel ikke noe hint!</p>,
      },
    ],
  },
  {
    id: 4,
    title: "Ekstra",
    description: (
      <p className="dnb-p">
        Her har du noen ekstra oppgaver å bryne deg på som er litt vanskeligere.
      </p>
    ),
    subtask: [
      {
        id: 12,
        name: "Oppgave A",
        level: "ENKEL",
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
              <br />
              <br />
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
      {
        id: 13,
        name: "Oppgave B",
        level: "VANSKELIG",
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
            <p className="dnb-p">
              For å gjøre dette må vi endre HTML elementet som inneholder
              kontonummeret fra et
              <code className="dnb-code">NumberElement</code>
              til en link. Ta en titt i{" "}
              <code className="dnb-code">AccountTable.tsx</code>. Her er en
              funksjon, <code className="dnb-code">getTransactionLink</code>
              som gjør nettopp dette.{" "}
            </p>
            <p className="dnb-p">
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
