import React from "react";
import { Tooltip } from "@dnb/eufemia";
import "./styles.css";

export var tasks = [
  {
    id: 0,
    title: "Intro",
    description: (
      <>
        <p className="dnb-p">
          I denne oppgaven skal vi teste hvordan oppgavene vil fungere. Vi skal{" "}
          <Tooltip targetElement={<a className="tooltip">navigere</a>}>
            Finn riktig fil ved å se på panelet til venstre og i mappa code
          </Tooltip>{" "}
          oss til riktig fil og endre på nettsiden fra denne filen.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Hvor på nettsiden?</b> <i>Velkommen</i>
        </p>
        <p className="dnb-p">
          <b>Hvilken fil er koden i?</b>{" "}
          <code className="dnb-code">Welcome.tsx</code> i{" "}
          <code className="dnb-code">Intro</code>-mappa
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
            på linje 17? Bytt ut <b>"Velkommen til workshop!"</b> til det du vil
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
            Her må vi endre på samme kodelinje som i oppgave A. Bytt ut ordet{" "}
            <code className="dnb-code">"black"</code> med for eksempel{" "}
            <code className="dnb-code">"pink"</code>, og se hva som skjer med
            overskriften.
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
            med{" "}
            <Tooltip targetElement={<a className="tooltip">elementet</a>}>
              Element er en digital byggekloss, som er laget med &lt;&gt;
            </Tooltip>{" "}
            <code className="dnb-code">&lt;H2&gt;</code>. Velg selv hva
            underoverskriften skal være, for eksempel navnet ditt.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her skal du skrive en kodelinje som ligner på{" "}
            <code className="dnb-code">&lt;H1&gt;</code> overskriften, men du
            skal bytte ut <code className="dnb-code">&lt;H1&gt;</code> med{" "}
            <code className="dnb-code">&lt;H2&gt;</code>.
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
          <b>Hvilken fil er koden i?</b>{" "}
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
            eller en kjendis. <br />
            Finn overskriften i koden, slik du kan bytte ut navnet med et du har
            valgt.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Linjen du skal endre ligner på den vi jobbet med i Intro oppgaven.
            Let etter{" "}
            <code className="dnb-code">
              &lt;H1&gt;Velkommen ukjent!&lt;/H1&gt;
            </code>{" "}
            på linje 33 og endre <b>"ukjent"</b> til et navn du velger selv.
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
            -mappa.
            <br />
            <br /> Velg det bildet du liker best. Deretter legger du inn dette
            bildet i koden ved å endre ordet{" "}
            <code className="dnb-code">ukjent</code> på linje 36 til navnet på
            bildet du har valgt. <br />
            <br />
            <i>
              Husk at du må skrive ordet helt likt som navnet på bildet (pass på
              små og store bokstaver).
            </i>
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På linje 36 bytter du ut{" "}
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
          Det er veldig mange{" "}
          <Tooltip targetElement={<a className="tooltip">transaksjoner</a>}>
            En transaksjon er en overføring/sending av penger
          </Tooltip>{" "}
          i banken og det er vanskelig å se gjennom alle for å oppdage
          kriminelle handlinger. Derfor har vi laget en oversikt over hvilke
          land penger sendes mellom så man enkelt kan se om noe virker
          mistenkelig. I denne oppgaven skal du gjøre ferdig denne oversikten.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Hvor på nettsiden?</b> <i>Dashboard</i> under{" "}
          <i>Logg inn som etterforsker</i>
        </p>
        <p className="dnb-p">
          <b>Hvilken fil er koden i?</b>{" "}
          <code className="dnb-code">Dashboard.tsx</code> i{" "}
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
            Finn linje 29 hvor det står{" "}
            <code className="dnb-code">
              &lt;H1 style=&#123;&#123; fontSize: "small"
              &#125;&#125;&gt;Dashboard&lt;/H1&gt;
            </code>{" "}
            og endre <i>style</i> til{" "}
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
            musepekeren over <i>søylediagrammet</i> til høyre, så får man opp
            spørsmålstegn der ordet <b>Antall</b> skulle vært. <br />
            <br />
            Endre koden slik at det også står <b>Antall</b> på søylediagrammet.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På linje 89 så finner du en
            <code className="dnb-code">label</code>
            for kakediagrammet, denne koden ser slik ut:{" "}
            <code className="dnb-code">label: "Antall"</code>. <br />
            Finner du det samme for søylediagrammet på linje 71?
          </p>
        ),
      },
      {
        id: 7,
        name: "Oppgave C",
        level: "VANSKELIG",
        description: (
          <p className="dnb-p">
            Vi ønsker å sjekke om det er noen transaksjoner som går til
            Russland. For å gjøre dette så må vi legge til en kolonne i
            søylediagrammet som viser Russland, som dermed vil vise antall
            transaksjoner på samme måte som de andre landene. <br />
            <br /> Finn ut hvor i koden landene er listet opp og legg til{" "}
            <b>Russland</b>. Her må du endre to steder i filen!
          </p>
        ),
        hint: (
          <p className="dnb-p">
            På samme måte som er gjort på linje 67 og 73-78 for alle de andre
            landene må vi legge til både en ny{" "}
            <code className="dnb-code">labels</code> og ny{" "}
            <code className="dnb-code">data</code>.
            <br />
            <br />
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
        <br />
        <p className="dnb-p">
          <b>Hvor på nettsiden?</b> <i>Transaksjoner</i> under{" "}
          <i>Logg inn som etterforsker</i>
        </p>
        <p className="dnb-p">
          <b>Hvilken fil er koden i?</b>{" "}
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
              at den skal være enklere å forstå. Vi bruker{" "}
              <Tooltip targetElement={<a className="tooltip">elementet</a>}>
                Element er en digital byggekloss, som er laget med &lt;&gt;
              </Tooltip>{" "}
              <code className="dnb-code">&lt;P&gt;</code> for å legge til et
              paragraf og fyller inn teksten vi vil ha. Teksten kan for eksempel
              være:
            </p>
            <br />
            <p className="dnb-p">
              <i>
                "Denne tabellen viser oversikt over alle transaksjonene i DNB.
                Den kan brukes til å finne mistenkelige transaksjoner og oppdage
                kriminalitet"
              </i>
            </p>
            <br />
            <p className="dnb-p">Legg inn paragrafen under overskriften.</p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi finne overskriften i koden først. Se om du finner
            overskriften på linje 33. Legg til en ny linje under med{" "}
            <Tooltip targetElement={<a className="tooltip">elementet</a>}>
              Element er en digital byggekloss, som er laget med &lt;&gt;
            </Tooltip>{" "}
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
              Fra og med denne oppgaven skal vi jobbe i filen{" "}
              <code className="dnb-code">TransactionTable.tsx</code>.
            </p>
            <br />
            <p className="dnb-p">
              Hver transaksjon sendes mellom to land. I tabellen vises det
              hvilket land pengene er sendt fra. Vi ønsker også å vite hvor
              pengene er sendt til.
            </p>
            <br />
            <p className="dnb-p">
              Finn koden for tabellen og legg til én nye kolonne som heter{" "}
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
            Slik har vi gjort det for <b>Avsenders land</b>: <br /> Overskrift
            er lagt til på linje 42 slik{" "}
            <code className="dnb-code">
              &lt;Th&gt;Avsenders land&lt;/Th&gt;
            </code>
            . <br />
            Innhold er lagt til på linje 53 slik
            <code className="dnb-code">
              &lt;Td&gt;&#123;transaction.from.country&#125;&lt;/Td&gt;
            </code>
            . <br />
            <br />
            For <b>Mottakers land</b> skal du gjøre tilsvarende, men bytte ut
            noen ord.
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
            Se på{" "}
            <Tooltip targetElement={<a className="tooltip">funksjonen</a>}>
              En funksjon er kode som skal gjøre en spesifikk oppgave
            </Tooltip>{" "}
            som heter <code className="dnb-code">detectRiskCountry</code> på
            linje 11 i filen{" "}
            <code className="dnb-code">TransactionTable.tsx</code>.<br></br>
            <b>Endre koden</b> i funksjonen slik at den sjekker om pengene er
            sendt til Russland, og isåfall returnerer du ordet <b>"HØY"</b>.
            Hvis ikke returnerer du <b>"LAV"</b>.
            <br /> <br />
            Sjekk at <i>Risiko</i> endres for alle transaksjonene i tabellen.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Du må først bytte ut <code className="dnb-code">land</code> med{" "}
            <code className="dnb-code">Russland</code>. Videre må du velge når
            du skal returnere <b>"HØY"</b> og <b>"LAV"</b> for at det skal bli
            riktig, slik at den ene er{" "}
            <code className="dnb-code">return "HØY";</code> og den andre er{" "}
            <code className="dnb-code">return "LAV"; </code> istedenfor{" "}
            <code className="dnb-code">return "Ukjent"; </code>
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
            du fargen <code className="dnb-code">red</code> Hvis den er lav
            returnerer du <code className="dnb-code">green</code>.
            <br />
            <br />
            Endrer risikoen farge når du gjør dette? Finner du noen
            transaksjoner som har <b>HØY</b> risiko?
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Her må vi bruke <b>hvis</b> som i forrige oppgave. Vi bytter ut{" "}
            <code className="dnb-code">country</code> med{" "}
            <code className="dnb-code">risk</code>, og returner{" "}
            <code className="dnb-code">red</code> og{" "}
            <code className="dnb-code">green</code> der det passer.
            <br />
            <br /> Husk at <b>hvis</b> i kode skrives{" "}
            <code className="dnb-code">if{}</code> og, <b>er lik</b> skrives{" "}
            <code className="dnb-code">===</code>.
          </p>
        ),
      },
      {
        id: 12,
        name: "Oppgave E",
        level: "ENKEL",
        description: (
          <>
            <p className="dnb-p">
              Bla gjennom alle transaksjonene hvis du ikke har gjort det, og
              finn den som har risiko <b>HØY</b> og blitt markert med rødt,
              fordi den er til Russland.
              <br />
              <br />
              Siden risikoen er høy for at dette er en ulovlig transaksjon, er
              vi som bank pliktig til å kontakte politet. For å gjøre dette så
              må du fylle inn navnet på personen som sendte disse pengene i
              feltet øverst på oppgave-siden.
            </p>
          </>
        ),
        hint: <></>,
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
        id: 13,
        name: "Oppgave A",
        level: "PROFESJONELL",
        description: (
          <>
            <p className="dnb-p">
              På siden <i>Transaksjoner</i> under{" "}
              <i>Logg inn som etterforsker</i> er det mulig å filtrere
              transaksjonene i tabellen. Nå er det mulig å filtrere på for
              eksempel <b>Avsenders navn</b>, slik at man bare ser de
              transaksjonene som er sendt fra en viss person.
              <br />
              <br />
              For å gjøre det lettere for etterforskere å se hvilke
              transaksjoner som er sendt til Russland, ønsker vi også å filtrere
              på <b>Mottakers land</b>, slik at bare de transaksjonene med høy
              risiko synes.
              <br />
              <br />
              Din oppgave blir å fikse dette så man kan filtrere på{" "}
              <b>Mottakers land</b> på samme måte som for eksempel{" "}
              <b>Avsenders land</b>.
              <br />
              <br />
              Se i filen <code className="dnb-code">
                Transactions.tsx
              </code> i <code className="dnb-code">Oppgave3</code>-mappa og let
              etter hvor det er definert hva som er i rullegardinmenyen (
              <code className="dnb-code">Dropdown</code> på engelsk), og filtrer
              på <b>Mottakers land</b>.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Funksjonalitet for selve filtreringen er allerede lagt inn men
            rullegardinmenyen mangler et valg for <b>Mottakers land</b>. Her må
            vi finne komponenten som heter{" "}
            <code className="dnb-code">Dropdown</code> og legge til data i
            denne. Se på <code className="dnb-code">Parameter</code> på linje 39
            til 43 og se om du finner den som mangler i rullegardinen så du kan
            legge til denne.
          </p>
        ),
      },
      {
        id: 14,
        name: "Oppgave B",
        level: "PROFESJONELL",
        description: (
          <>
            <p className="dnb-p">
              På siden <i>Logg inn som kunde</i> har vi en liste over alle
              kontoene til denne kunden. Hvis man trykker på et kontonavn, vil
              man se alle transaksjoner knyttet til denne kontoen.
              <br />
              <br />
              Vi ønsker å også kunne trykke på kontonummeret og komme til samme
              side som viser oversikt over alle transaksjonene.
              <br />
              <br />
              For å gjøre dette må vi endre{" "}
              <Tooltip targetElement={<a className="tooltip">elementet</a>}>
                Element er en digital byggekloss, som er laget med &lt;&gt;
              </Tooltip>{" "}
              som inneholder kontonummeret fra et
              <code className="dnb-code">NumberElement</code>
              til en knapp. Ta en titt i{" "}
              <code className="dnb-code">AccountTable.tsx</code> i{" "}
              <code className="dnb-code">Ekstra</code>-mappa. Her finner du
              funksjonen <code className="dnb-code">getTransactionLink</code>
              som gjør nettopp dette.
              <br />
              <br />
              Funksjonen <code className="dnb-code">getTransactionLink</code>
              trenger en <code className="dnb-code">accountIdentifier</code>.
              Dette kan enten være kontonavn eller kontonummer.
              <br />
              <br />
              Prøv å bruke <code className="dnb-code">
                getTransactionLink
              </code>{" "}
              funksjonen slik at man kan trykke på kontonummeret og komme inn på
              listen over alle transaksjoner. For inspirasjon, se hvordan
              funksjonen er brukt med kontonavn.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Bruk <code className="dnb-code">account.number</code>
            som <code className="dnb-code">accountIdentifier</code> i funksjonen
            på følgende vis:{" "}
            <code className="dnb-code">
              getTransactionsLink(account.number)
            </code>
            . <br /> Husk å fjerne{" "}
            <code className="dnb-code">NumberFormat</code>
            elementet og å legg til{" "}
            <code className="dnb-code">&#123;&#125;</code> rundt alt.
          </p>
        ),
      },
    ],
  },
];
