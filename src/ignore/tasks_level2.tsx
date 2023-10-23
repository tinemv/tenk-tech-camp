export var tasks_level2 = [
  {
    id: 0,
    title: "Task 4",
    description: (
      <>
        <p className="dnb-p">FILL OUT</p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> <i>FILL OUT</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">FILL OUT</code> in{" "}
          <code className="dnb-code">FILL OUT</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "MEDIUM",
        description: <p className="dnb-p">FILL OUT</p>,
        hint: <p className="dnb-p">FILL OUT</p>,
      },
    ],
  },
  {
    id: 1,
    title: "Task 5",
    description: (
      <>
        <p className="dnb-p">
          Until now we have not cared about the existance or the content of the
          database. In this tasks you will have to work with the database as a
          source of content that is exposed on the page.
          <br />
          <br />
          The file <code className="dnb-code">customer.tsx</code> under the
          <code className="dnb-code">data</code> folder (instead of the{" "}
          <code className="dnb-code">code</code> folder) holds parts of the data
          for the online bank and thus serves like a database in this system.
          There you can see the list of accounts and the associated transactions
          that are displayed in the Accounts-table on the Customer page. The
          file
          <code className="dnb-code">Models.tsx</code> describes the database
          models that the data follows.
          <br />
          <br />
          Try to edit the data by editing the name of one of the accounts in the
          file and see what happens on the page.
        </p>
        <br />
        <p className="dnb-p">
          <b>Where on the website?</b> <i>Customer page</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located? </b>{" "}
          <code className="dnb-code">CustomerPage.tsx</code> in{" "}
          <code className="dnb-code">Task1</code>-folder and other files that
          are linked to in the file, like{" "}
          <code className="dnb-code">AccountTable.tsx</code>.
        </p>
      </>
    ),
    subtask: [
      {
        id: 10,
        name: "Part A",
        level: "EASY",
        description: (
          <p className="dnb-p">
            First we want to add another account to the customer displayed in
            the bank. On the same format as the other ones, add another account
            in the file. The new account can for instance be BSU2.
            <br />
            <br />
            Pay attention to the format, all the signs and to the accounts' and
            transaction' ID's. You have to identify what is the variable names
            and what is the conten. Make sure the new account is displayed in
            the table when you are finished.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            After the closing tag for the ID 3 account named BSU, add an object
            with the same structure and change the content.
          </p>
        ),
      },
      {
        id: 11,
        name: "Part B",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            Oh no, the product owner in PM has a new requirement for the online
            bank. She wants to display the owner of each account in the table
            along with the account name, number and balance.
            <br />
            <br />
            At this point, the field is not even included in the database model,
            so displaying it in the table is not possible. Therefore you have to
            complete three logical steps in order to make the request come true:
            Adding owner as a field in the data model for an account, adding
            actual data in the database and displaying the data in the table so
            the customer can see it.
            <br />
            <br />
            Complete the three steps and choose yourself who is the owner of
            each account - the customer themself or a partner or parent for
            instance.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Code needs to be added in three different files;{" "}
            <code className="dnb-code">AccountTable.tsx</code>,{" "}
            <code className="dnb-code">Models.tsx</code> and{" "}
            <code className="dnb-code">customer.tsx</code>. Look at the other
            data fields displayed in the table, like account number, and
            implement similar logic for an account owner.
          </p>
        ),
      },
      {
        id: 12,
        name: "Part C",
        level: "HARD",
        description: (
          <p className="dnb-p">
            Now the product owner wants to lanch a new feature; the possibility
            for the customer to see all the funds they own on the same page as
            the accounts. The funds data should be listed in a table under the
            accounts in a similar design to the accounts. The data structure,
            meaning how the model and data looks in the code, is not decided and
            is up to you. Think about what info about the fund that is
            interesting to see for the customer.
            <br />
            <br />
            Create a new <code className="dnb-code">.tsx</code>
            -file (Typescript) file in the same folder as
            <code className="dnb-code">customer.tsx</code> called{" "}
            <code className="dnb-code">funds.tsx</code>. The file is a new
            database in our online bank and should contain a list of a customers
            funds. Create a new model in{" "}
            <code className="dnb-code">Models.tsx</code> and choose how to
            structure it. Create a new table under the account table that
            displays the new content in some way . Easiest way to start is to
            copy and paste in under the{" "}
            <code className="dnb-code">Provider</code> element and everything
            inside and change the fields from there.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            First, create a model for Fund that holds the information you think
            is needed. Then add the data with the same structure in the new file
            you created. Lastly, copy the{" "}
            <code className="dnb-code">Provider</code> element in the{" "}
            <code className="dnb-code">AccountTable</code> and implement it
            according to your funds data structure.
          </p>
        ),
      },
    ],
  },
];
