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
            Do you see this code:{" "}
            <code className="dnb-code">
              &lt;H1 style=&#123;&#123; margin: 20, color: "black"
              &#125;&#125;&gt;Welcome to workshop!&lt;/H1&gt;
            </code>{" "}
            on line 17? Switch out <b>"Welcome to workshop!"</b> to whatever you would like to have as a header.
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
            Here we have to change the same line of code as in assignment A. Switch out the word {" "}
            <code className="dnb-code">"black"</code> with, for instance, {" "}
            <code className="dnb-code">"pink"</code>, and see what happens to the header.
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
            Here you have to write a line of code that looks like the {" "}
            <code className="dnb-code">&lt;H1&gt;</code> header, but switch out 
            <code className="dnb-code">&lt;H1&gt;</code> with {" "}
            <code className="dnb-code">&lt;H2&gt;</code>.
            <br />
            <br />In <i>style</i> you can choose colour as you want, like in part B.
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
            The line of code you have to edit looks like the one we worked on in the intro assignment. Look for{" "}
            <code className="dnb-code">
              &lt;H1&gt;Welcome unknown user!&lt;/H1&gt;
            </code>{" "}
            in line 33 and change <b>"unknown"</b> with a name you choose yourself.
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
            On code line 36 you have to switch out {" "}
            <code className="dnb-code">src=&#123;unknown&#125;</code> with for instance{" "}
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
            Find code line 29 that says {" "}
            <code className="dnb-code">
              &lt;H1 style=&#123;&#123; fontSize: "small"
              &#125;&#125;&gt;Dashboard&lt;/H1&gt;
            </code>{" "}
            and change <i>style</i> to{" "}
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
            On code line 89 you will find a 
            <code className="dnb-code">label</code>
            for the pie chart that looks like this:{" "}
            <code className="dnb-code">label: "Amount"</code>. <br />
            Do you find the same for the column diagram on line 71? 
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
            The same way that is done on code line 67 and 73-78 for all the other countries, we have to add both a new {" "}
            <code className="dnb-code">labels</code> and new {" "}
            <code className="dnb-code">data</code>.
            <br />
            <br />
            Remember to put the comma in the right spot both places!
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
            Here you first have to find the header in the code. See if you can can find the header on line 33. Add a new line under the element
            <code className="dnb-code">&lt;P&gt; your text &lt;/P&gt;</code> og
            and fill inn the text between the  
            <code className="dnb-code">&lt;P&gt;</code>'s.
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
            Show it is done for <b>Senders country</b>: <br /> Header added on code line 42 like this: {" "}
            <code className="dnb-code">
              &lt;Th&gt;Senders country&lt;/Th&gt;
            </code>
            . <br />
            Content added on code line 53 like this:
            <code className="dnb-code">
              &lt;Td&gt;&#123;transaction.from.country&#125;&lt;/Td&gt;
            </code>
            . <br />
            <br />
            Do the same thing for <b>Recipients country</b>, but swich out the words to be correct for this case.
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
            You first have to switch out <code className="dnb-code">country</code> with{" "}
            <code className="dnb-code">Russia</code>. Further you have to decide when to return <b>"HIGH"</b>;
            and when to return <b>"LOW"</b> for it to be logically correct.
            It should be {" "}
            <code className="dnb-code">return "HIGH";</code>; for one and {" "}
            <code className="dnb-code">return "LOW"; </code>; for the other instead of {" "}
            <code className="dnb-code">return "Unknown"; </code>
            <br />
            <br />
            Mark that conditions in code is written like {" "}
            <code className="dnb-code">if{}</code> and, <b>equals</b> like{" "}
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
            Here we have to use <b>if</b> like in assignment C. We switch out {" "}
            <code className="dnb-code">country</code> with{" "}
            <code className="dnb-code">risk</code>, and returns{" "}
            <code className="dnb-code">red</code> and{" "}
            <code className="dnb-code">green</code> instead.
            <br />
            <br /> Remember that conditions in code is written like {" "}
            <code className="dnb-code">if{}</code> and, <b>equals</b> like{" "}
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
              The <i>Transactions</i> table, under the {" "}
              <i>Employee page</i>, can currently be filtered on for instance <b>Senders name</b>. 
              To make it easier to see what transactions are sent to Russia, we would like to be able to filter on the  <b>Recipients country</b>. 
              <br />
              <br />
              Your task is to implement a way to filter on the <b>Recipients country</b>, 
              in the same way as is done for <b>Senders country</b>.
              <br />
              <br />
              Have a look in the file <code className="dnb-code">
                Transactions.tsx
              </code> in the <code className="dnb-code">Assignment3</code>-folder, find the
              <code className="dnb-code">Dropdown</code> menu and filter on <b>Recipients country</b>.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            The functionality for the actual filtering is already implemented, but the drop-down menu is still missing a choice for the
             <b>Recipients country</b>. Find the {" "}
            <code className="dnb-code">Dropdown</code> component and add data to it. Have a look at <code className="dnb-code">Parameter</code> 
            on line 39-43 and see if you can find the missing one and add it to the drop-down menu.
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
              On the <i>Customer page </i> we have a list over all accounts belonging to this customer. If you click on one of the account names, you will see an overview of all the transactions connected to this account. 
              <br />
              <br />
              Vi ønsker å også kunne trykke på kontonummeret og komme til samme
              side som viser oversikt over alle transaksjonene.
              <br />
              <br />
              We would also like to be able to click on the account number and be directed to this same overview. To be able to do this we would have to change the element that contains the account number from 
              <code className="dnb-code">NumberElement</code>
              to a button. Have a look in the {" "}
              <code className="dnb-code">AccountTable.tsx</code> i{" "}
              <code className="dnb-code">Extra</code>-folder. Inside here you will find the <code className="dnb-code">getTransactionLink</code>
              function that does this. 
              <br />
              <br />
              The <code className="dnb-code">getTransactionLink</code>
              function needs an  <code className="dnb-code">accountIdentifier</code>.
              This could be account name or account number.
              <br />
              <br />
              Try to use the  <code className="dnb-code">
                getTransactionLink
              </code>{" "}
              function so that you can click on the account number and get to the list over all transactions for that account. For inspiration, have a look at how the function is used with account name.
            </p>
          </>
        ),
        hint: (
          <p className="dnb-p">
            Use <code className="dnb-code">account.number</code>
            as <code className="dnb-code">accountIdentifier</code> in the function like this:{" "}
            <code className="dnb-code">
              getTransactionsLink(account.number)
            </code>
            . <br /> Remember to remove the{" "}
            <code className="dnb-code">NumberFormat</code>
            elementet and add{" "}
            <code className="dnb-code">&#123;&#125;</code> around everything.
          </p>
        ),
      },
    ],
  },
];
