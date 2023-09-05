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
        In this assignment we will test how the assignments will work. 
        We will {" "}
          <Tooltip targetElement={<a className="tooltip">navigate</a>}>
            Find the right file by looking at the panel to the left in the folder code.
          </Tooltip>{" "}
          to the correct file and change the website from this file. 
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> <i>Welcome</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">Welcome.tsx</code> in{" "}
          <code className="dnb-code">Intro</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Let´s change the title of the front page. Find the place in the code where the title is made by looking for the text{" "}
            <b>"Welcome to the workshop!"</b>. Once you find it, you may change it to something you like. 
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
        name: "Part B",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Change the colour of the title to a colour of your choice, for instance pink or blue. Exchange{" "}
            <code className="dnb-code">color: "black"</code> to a colour of your choice. 
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
        name: "Part C",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            Create a new line under the title and add a subtitle of your choice with the {" "}
            <Tooltip targetElement={<a className="tooltip">element</a>}>
              An element is a digital building block, which is made like this: &lt;&gt;
            </Tooltip>{" "}
            <code className="dnb-code">&lt;H2&gt;</code>. 
            The subtitle could for instance be your name. 
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
    title: "Task 1",
    description: (
      <>
        <p className="dnb-p">
        To get to know the website and the code better, 
        we will begin by creating a profile in the online bank.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> <i>Logg inn som kunde</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located? </b>{" "}
          <code className="dnb-code">CustomerPage.tsx</code> in{" "}
          <code className="dnb-code">Assignment1</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 3,
        name: "Part A",
        level: "EASY",
        description: (
          <p className="dnb-p">
            The first thing we want to do is to change the name of the title from {" "}
            <b>"unknown"</b> to a real name. Your are free to choose a name, for instance your own or a celeberty name.
            <br />
            Find the title in the code and change the name to one of your choosing. 
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
        name: "Part B",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            Time to change the profile picture. The pictures you can choose from reside in the<code className="dnb-code">Profilepictures</code>
            -folder.
            <br />
            <br /> Find a picture you like, afterwards, put this image in the code by changing the word{" "}
            <code className="dnb-code">unknown</code> on line 36 to the name of the picture you chose. <br />
            <br />
            <i>
            Remember to spell it exactly like the name of the picture 
            (pay attention to lower and uppercase letters).
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
    title: "Task 2",
    description: (
      <>
        <p className="dnb-p">
        To help us find anything suspicious we have made an overview of transactions that are made in the bank. In this assignment you will work on completing this overview. 
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> <i>Dashboard</i> under{" "}
          <i>Logg inn som etterforsker</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">Dashboard.tsx</code> in{" "}
          <code className="dnb-code">Assignment2</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 5,
        name: "Part A",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            The title of the page, which says  <b>Dashboard</b>, is very small. 
            Change this title to be a more suitable size by changing the <code className="dnb-code">fontSize</code> 
            to for instance <code className="dnb-code">"xxx-large"</code> instead of {" "}
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
        name: "Part B",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            If you hover over the {" "}
            <i>pie chart </i> on the left with your computer mouse, you can see that is shows {" "}
            <b>Amount</b> of domestic and foreign transactions. If you do the same to the 
             <i>column chart </i> on the right, you instead get question marks. 
            <br />
            Change the code so that it says <b>Amount</b> on the column chart.
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
        name: "Part C",
        level: "VANSKELIG",
        description: (
          <p className="dnb-p">
            We want to check if there are any transactions going to Russia. To do this we need to add another column to the column chart.  <br />
            <br /> Find where in the code the countries are listen and add {" "}
            <b>Russia</b> to the list. You will have to make adjustments at two different places in the file!
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
    title: "Task 3",
    description: (
      <>
        <p className="dnb-p">
        Someone has transferred money to Russia! In this assignment we will try to figure out who transferred money to Russia.
        </p>
        <br />
        <p className="dnb-p">
          <b>Where on the website?</b> <i>Transaksjoner</i> under{" "}
          <i>Logg inn som etterforsker</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">Transactions.tsx</code> (Part A) and{" "}
          <code className="dnb-code">TransactionTable.tsx</code> (the rest of the parts) in the <code className="dnb-code">Assignment3</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 8,
        name: "Part A",
        level: "EASY",
        description: (
          <>
            <p className="dnb-p">
            We will start by adding a description to the table. We will use the {" "}
            <Tooltip targetElement={<a className="tooltip">element</a>}>
              An element is a digital building block, which is made like this: &lt;&gt;
            </Tooltip>{" "}
              <code className="dnb-code">&lt;P&gt;</code> to insert a paragraph with our chosen text. Some inspiration for the paragraph:
            </p>
            <br />
            <p className="dnb-p">
              <i>
                "This table shows the overview of all transactions in DNB. The table can be used to find suspicious transactions and discover financial crimes."
              </i>
            </p>
            <br />
            <p className="dnb-p">Insert the paragraph underneath the title.</p>
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
        name: "Part B",
        level: "MEDIUM",
        description: (
          <>
            <p className="dnb-p">
            From this part and onwards, we will be working in the file {" "}
              <code className="dnb-code">TransactionTable.tsx</code>.
            </p>
            <br />
            <p className="dnb-p">
            Every transaction is sent between two countries. Our table currently only shows which country the money was sent from. We would like to know where the money is being sent.
            </p>
            <br />
            <p className="dnb-p">
            Find the code for the table and add a new column named {" "}
              <b>Recipients country</b>, in the same way as for {" "}
              <b>Senders country</b>.
            </p>
            <br />
            <p className="dnb-p">
            Changes need to be made two different places in the code, as you want both the title and the content of the table to change. Double check to see that the correct content can be found under the correct tittle. 
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
        name: "Part C",
        level: "HARD",
        description: (
          <p className="dnb-p">
            As you can see from the table, the risk for each transaction is unknown. We would like the risk to be either <b>LOW</b> or{" "}
            <b>HIGH</b> depending on whether the money has been sent to Russia or not. 
            <br /> <br />
            Look at the{" "}
            <Tooltip targetElement={<a className="tooltip">function</a>}>
              A function is a code that are going to do a specific task.
            </Tooltip>{" "} named <code className="dnb-code">detectRiskCountry</code> on line 11 in the file{" "}
            <code className="dnb-code">TransactionTable.tsx</code>.<br></br>
            <b>Change the code</b> so the function returns the word <b>"HIGH"</b>.
            if the money was sent to Russia, and <b>"LOW"</b> if it was sent elsewhere.
            <br /> <br />
            Double check that the <i>Risik</i> changes for each transaction in the table.
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
        name: "Part D",
        level: "HARD",
        description: (
          <p className="dnb-p">
            To make the transactions with a high risk more visible, we will differentiate their colour from the rest. 
            <br />
            <br />
            Have a look at the function named {" "}
            <code className="dnb-code">setColorForHighRisk</code> and complete it using the same method as you used in Part C. 
            <br />
            <br />
            If the <code className="dnb-code">risk</code> is <b>HIGH</b> return the colour 
            <code className="dnb-code">red</code> . If it is <b>LOW</b>,
            return the colour <code className="dnb-code">green</code>.
            <br />
            <br />
            Does the risk change colour when you do this? ?
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
        name: "Part E",
        level: "EASY",
        description: (
          <>
            <p className="dnb-p">
              Scroll through the transaction and find the one with the <b>HIGH</b> risk marked with a red colour. 
              Double check that the recipients country is in fact Russia. 
              <br />
              <br />
              With the risk being high, it is classed as an illegal transaction, and we have to report the sender to the police. Enter the name of the sender in the reporting feature at the top of the assignments. 
            </p>
          </>
        ),
        hint: <></>,
      },
    ],
  },
  {
    id: 4,
    title: "Extra",
    description: (
      <p className="dnb-p">
        In this section you will find some extra assignments that are a bit more challenging.       </p>
    ),
    subtask: [
      {
        id: 13,
        name: "Part A",
        level: "PROFESSIONAL",
        description: (
          <>
            <p className="dnb-p">
              På siden <i>Transactions</i> under{" "}
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
        name: "Part B",
        level: "PROFESSIONAL",
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
