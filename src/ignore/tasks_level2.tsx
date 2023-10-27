import { Anchor, FormStatus, P, Ul, Tooltip } from "@dnb/eufemia";

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
          Until now we haven't considered where the content in the online bank
          comes from. In this task you will work with the{" "}
          <Tooltip targetElement={<a className="tooltip">database</a>}>
            An organized collection of structured information, or data,
            typically stored electronically in a computer system.
          </Tooltip>{" "}
          as a source of data that is exposed on the web page.
          <br />
          <br />
          The
          <code className="dnb-code">data</code> folder holds several files that
          contain data for the online bank, and thus serves like the database in
          this system. There you can see, for example, the list of accounts and
          the associated transactions that are displayed in the table on the
          Customer page. Try to identify these three components in the code:
          <Ul>
            <li>
              The file
              <code className="dnb-code">Models.tsx</code> contains the data
              models. This is not data, but a definition of how the data we will
              have shhould be structured in the database.
            </li>
            <li>
              The file <code className="dnb-code">customer.tsx</code> under{" "}
              <code className="dnb-code">data</code> contains the actual data.
              You see that iy is structured according to the data models, where
              each customer has a name and a list of transactions for example.
            </li>
            <li>
              The <i>Accounts</i> table on the <i>Customer page</i>, found in{" "}
              <code className="dnb-code">AccountTable.tsx</code> in the{" "}
              <code className="dnb-code">Extra</code> folder, exposes some of
              the data in these files. You see that the list of accounts here is
              the same as in the data file.
            </li>
          </Ul>
          You will have to remember these three aspects of data storage and
          visualization to complete the parts of this task.
        </p>
        <br />
        <p className="dnb-p">
          <b>Where on the website?</b> <i>Customer page</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located? </b> Files listed above above
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
            Add another account for the customer in the bank. The new account
            should be on the same format as the others and should have at least
            two transactions related. The new account can for instance be BSU 2.
            <br />
            <br />
            Make sure the new account is displayed in the table when you are
            finished, and pay attention to the accounts' and transactions' ID's.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            After the closing tag for the ID 3 account named BSU, add a similar
            object with the same structure and new data. This account follows
            the Account model that is aldready defined. The new data will be
            listed in the table automatically because the current code lists all
            the customers accounts.
          </p>
        ),
      },
      {
        id: 11,
        name: "Part B",
        level: "HARD",
        description: (
          <p className="dnb-p">
            Oh no, the product owner in PM has a new requirement for the online
            bank. She wants to display the owner of each account on the web
            page, along with the account name, number and balance that is
            already there.
            <br />
            <br />
            At this point, the owner is not even included in the database model,
            so displaying it in the table is not possible. Therefore you have to
            make changes in all the three logical steps listed above. That
            means:
            <Ul>
              <li>Adding owner as a field in the data model for an account</li>
              <li>adding actual data in the database file</li>
              <li>
                adding code for displaying the data in the frontend table so the
                customer can see it
              </li>
            </Ul>
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
            data fields displayed in the table, like the account number, and
            implement similar logic for an account owner inn all three files.
          </p>
        ),
      },
      {
        id: 12,
        name: "Part C",
        level: "PROFESSIONAL",
        description: (
          <p className="dnb-p">
            Now the product owner wants to lanch a new feature; a coustumer
            should be able to see all the funds they own in the online bank. The
            funds should be listed in a new table under the accounts in a
            similar design (or another if you want).
            <br />
            <br />
            The data model is not defined yet and is up to you to design and
            implement. Think about what info about the fund that is interesting
            to see for the customer, like fund name and value addition for
            example.
            <br />
            <br />
            Create a new <code className="dnb-code">.tsx</code>
            -file (Typescript) file in the
            <code className="dnb-code">data</code> folder that will contain the
            list of the customer's funds, structured according to your data
            model.
            <br />
            <br />
            Complete the three steps and verify your changes in the
            frontend table you have created.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            First, create a model for Fund that holds the information you think
            is needed. Then add the data with the same structure in the new
            database file you created. Lastly, copy the{" "}
            <code className="dnb-code">Provider</code> element in the{" "}
            <code className="dnb-code">AccountTable</code> and change it
            according to your funds data structure.
          </p>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Task 6",
    description: (
      <>
        <p className="dnb-p">
          CaseX is a service for customer service employees to review status of
          cards that have been applied for and block cards that are not filling
          the requirements.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b>
          <i>Block cards</i> under <i>Employee page</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">CardOverview.tsx</code> in{" "}
          <code className="dnb-code">Task6</code>-folder
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
            In this part, we will start by coding the button, so the user later
            on can request for their data from DNB.{" "}
          </p>
        ),
        hint: (
          <p className="dnb-p">
            Buttons are created by coding:
            <br />
            <br />
            <br />
            The resoult should be looking somthing like this:
            <br />
            <br />
            Feel free to put your personal touch with the design of button.
          </p>
        ),
      },
      {
        id: 0,
        name: "Part B",
        level: "MEDIUM",
        description: <p className="dnb-p">FILL OUT</p>,
        hint: <p className="dnb-p">FILL OUT</p>,
      },
    ],
  },
  {
    id: 3,
    title: "Task 7",
    description: (
      <>
        <p className="dnb-p">
          Hopefully you have got an insight in how it is to be a software
          engineer now, and you would like to apply for a job as a developer in
          DNB!
          <br />
          To be able to apply for a job, you first need to create a new page and
          create an application form. To create the page you will use{" "}
          <Anchor href="https://eufemia.dnb.no/uilib/elements/" target="_blank">
            Eufemia elements
          </Anchor>{" "}
          and add functionality to them.
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> A new page you will create that's called{" "}
          <i>Apply for a job</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">App.tsx</code> in the{" "}
          <code className="dnb-code">code</code>-folder and the files in the
          <code className="dnb-code">Task7</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "EASY",
        description: (
          <P>
            First you need to create a new tab after the <i>Employee page</i>.
            Go to the file <code className="dnb-code">App.tsx</code> in the{" "}
            <code className="dnb-code">code</code>-folder. Then find the{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/tabs/"
              target="_blank"
            >
              Tabs
            </Anchor>
            -element on line 99. Under <code className="dnb-code">data</code> on
            line 107 you can see we have four different elements. Three of them
            are already exsisting pages. The fourth here is the one you need to
            add. To add it, you need to find{" "}
            <code className="dnb-code">Tabs.Content</code>, which is where we
            add content to the tabs. We check here against the keys created in
            the <code className="dnb-code">data</code> section mentioned above.
            Add a new check for the key for the new tab, and return the new
            page:
            <code className="dnb-code">
              &lt;Application setCurrentTab=&#123;setCurrentTab&#125;/&gt;{" "}
            </code>
            <br />
            <br />
            You can also change the name of the tab by changing the <i>
              title
            </i>{" "}
            in the <code className="dnb-code">data</code> section.
          </P>
        ),
        hint: (
          <P>
            You need to add a new <code className="dnb-code">else if</code>{" "}
            clause that checks for the key that the new tab has. Then you need
            to return a new page similar what has been done to the other pages
            right above.
          </P>
        ),
      },
      {
        id: 1,
        name: "Part B",
        level: "HARD",
        description: (
          <p className="dnb-p">
            Now that we have the tab where the application form will be, you
            will need to add the UI components that make up the form. The
            application form you will make can look like this:{" "}
            <Anchor href="/reference_image_application" target="_blank">
              Reference image for application form
            </Anchor>
            <br />
            To create this you will use numerous Eufemia components. Please feel
            free to try other components as well, do not feel restricted to use
            only the ones we suggest here:
            <br />
            To get correct styling:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/section/"
              target="_blank"
            >
              Section
            </Anchor>
            <br />
            Text elements:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/elements/heading/#heading-styles-in-react"
              target="_blank"
            >
              H1 and H2
            </Anchor>{" "}
            and {""}
            <Anchor
              href="https://eufemia.dnb.no/uilib/elements/paragraph/#paragraphs-in-react"
              target="_blank"
            >
              P
            </Anchor>
            <br />
            Card to split up content:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/card/"
              target="_blank"
            >
              Card
            </Anchor>
            <br />
            Heading inside cards:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/extended-features/Form/SubHeading/"
              target="_blank"
            >
              Form.Subheading
            </Anchor>{" "}
            <br />
            To create input fields inside cards{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/base-fields/String/"
              target="_blank"
            >
              Field.String
            </Anchor>{" "}
            and{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/upload/"
              target="_blank"
            >
              Upload
            </Anchor>
            <br />
            Button to send application:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/extended-features/Form/SubmitButton/"
              target="_blank"
            >
              Form.SubmitButton
            </Anchor>
          </p>
        ),
        hint: (
          <>
            This is a quite open task where you are supposed to use different UI
            components. Try to use the one listed in the assignment, and use the
            documentation actively to see the possibility in each component and
            what customization you can do.
            <br />
            For insance, the{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/base-fields/String/"
              target="_blank"
            >
              Field.String
            </Anchor>{" "}
            has many different <i>properties</i> you can use to make the text
            fields in the <b>"Personal details"</b> card different from the text
            field in the <b>"Why should we choose you?"</b> card.
          </>
        ),
      },
      {
        id: 2,
        name: "Part C",
        level: "PROFESSIONAL",
        description: (
          <p className="dnb-p">
            Now that we have the form, we need to store the user input
            somewhere. To do this we will use{" "}
            <Anchor
              href="https://www.w3schools.com/react/react_usestate.asp"
              target="_blank"
            >
              React's useState
            </Anchor>{" "}
            which enables us to store the values that the user fills into the
            form. Look at the documentation and create 3 states, one for each
            text field in the form:
            <Ul>
              <li>firstName</li>
              <li>lastName</li>
              <li>reasonLetter</li>
            </Ul>
            Then you need to assign the values from the fields to the different
            states. This is done by using{" "}
            <code className="dnb-code">onChange</code> and setting the value to
            the different states.
            <br />
            <br />
            For storing the files that is uploaded to{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/upload/"
              target="_blank"
            >
              Upload
            </Anchor>{" "}
            you need to use the{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/upload/demos/#useupload-react-hook"
              target="_blank"
            >
              Upload.useUpload
            </Anchor>
            .
          </p>
        ),
        hint: (
          <>
            Each <code className="dnb-code">Field.String</code> component that
            you added should include a{" "}
            <code className="dnb-code">onChange</code> where you inside set the
            value to the correct state.
            <br />
            <br />
            For storing the files you need to use the{" "}
            <code className="dnb-code">Upload.useUpload("id")</code>. Make sure
            the id you use here is the same as the id you use when creating the{" "}
            <code className="dnb-code">Upload</code> component.
          </>
        ),
      },
      {
        id: 3,
        name: "Part D",
        level: "PROFESSIONAL",
        description: (
          <>
            <p className="dnb-p">
              We want to be redirected to a new page when we click the{" "}
              <b>Check application</b> button at the bottom (see{" "}
              <Anchor href="/reference_image_application" target="_blank">
                Reference image for application form
              </Anchor>
              ).
              <br />
              To do this we need to add{" "}
              <code className="dnb-code">onClick</code> on the{" "}
              <b>Check Application</b> button where we set a state to{" "}
              <code className="dnb-code">true</code> that will then show a new
              page.
              <br />
              Add a new state{" "}
              <code className="dnb-code">submittedApplication</code> which you
              defaults as <code className="dnb-code">false</code>. Then you need
              to add the code you have written in an conditional clause like so:
            </p>
            <pre className="dnb-pre" style={{ width: "350px" }}>
              &#123;!submittedApplication && ( your_code_here )&#125;
              <br />
              &#123;submittedApplication && ( &lt;ApplicationResult /&gt;
              )&#125;
            </pre>{" "}
            <p className="dnb-p">
              where the code you have written so far is inside the first
              paranthesis, and the new page code (which is in{" "}
              <code className="dnb-code">ApplicationResult.tsx</code>) is shown
              if the user press the <b>Check application</b> button.
            </p>
          </>
        ),
        hint: (
          <>
            Do be able to redirect you need to add a new state by using{" "}
            <Anchor
              href="https://www.w3schools.com/react/react_usestate.asp"
              target="_blank"
            >
              React's useState
            </Anchor>{" "}
            as you did in part C. You need to set the default value to{" "}
            <code className="dnb-code">false</code>, and call the{" "}
            <code className="dnb-code">setSubmittedApplication</code> to{" "}
            <code className="dnb-code">true</code> inside of the{" "}
            <code className="dnb-code">onClick</code> in the{" "}
            <code className="dnb-code">Form.SubmitButton</code> component.
            <br />
            <br />
            When calling the <code className="dnb-code">
              ApplicationResult
            </code>{" "}
            you also need to call it with the parameters it requires, like{" "}
            <code className="dnb-code">firstName</code> and{" "}
            <code className="dnb-code">lastName</code>. Check out how this is
            done elsewhere (like in the{" "}
            <code className="dnb-code">App.tsx</code> when you call{" "}
            <code className="dnb-code">Application.tsx</code>)
          </>
        ),
      },
      {
        id: 4,
        name: "Part E",
        level: "HARD",
        description: (
          <p className="dnb-p">
            Now we need to create the{" "}
            <code className="dnb-code">ApplicationResult.tsx</code> page. This
            you can use as a reference picture:{" "}
            <Anchor href="/reference_image_application_result" target="_blank">
              Reference image for application summary
            </Anchor>
            .
            <br />
            To create this page we need some layout components:
            <br />
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/flex/container/"
              target="_blank"
            >
              FlexContainer
            </Anchor>{" "}
            and{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/flex/item/"
              target="_blank"
            >
              FlexItem
            </Anchor>
            <FormStatus
              top
              stretch={true}
              text="Note that FlexContainer is FlexContainer NOT Flex.Container, and FlexItem is FlexItem NOT Flex.Item. It is wrong in the documentation"
              state="warn"
            />
            Use the input values to fill the content of this page.
          </p>
        ),
        hint: (
          <>
            To create a layout similar to the{" "}
            <Anchor href="/reference_image_application_result" target="_blank">
              Reference image for application summary
            </Anchor>{" "}
            you can adjust the <code className="dnb-code">size</code> of the{" "}
            <code className="dnb-code">FlexItem</code>. One row on a page
            consist of 12 units, which means that if the size of one{" "}
            <code className="dnb-code">FlexItem</code> is 2 like so:{" "}
            <code className="dnb-code">
              &lt;FlexItem size=&#123;2&#125;&gt;
            </code>{" "}
            and another one is 12 like so:
            <code className="dnb-code">
              &lt;FlexItem size=&#123;12&#125;&gt;
            </code>{" "}
            they will make up one row on the page.
            <br />
            <br />
          </>
        ),
      },
      {
        id: 5,
        name: "Part F",
        level: "PROFESSIONAL",
        description: (
          <p className="dnb-p">
            Add the two buttons on the bottom of the page, see{" "}
            <Anchor href="/reference_image_application_result" target="_blank">
              Reference image for application summary
            </Anchor>
            .
            <br />
            Use the{" "}
            <Anchor href="primary" target="_blank">
              Button
            </Anchor>{" "}
            component and create one secondary button (<b>Back</b>) and one
            primary button (<b>Send application to DNB</b>).
            <br />
            The <b>Back</b> button should return to the previous page when
            pressed, and the <b>Send application to DNB</b> button should return
            to the previous page when pressed as well as reset all the input
            fields.
          </p>
        ),
        hint: (
          <>
            To be able to return back to the previous page (that is the
            application form page) you need to set the state{" "}
            <code className="dnb-code">submittedApplication</code> to{" "}
            <code className="dnb-code">false</code>.
            <br />
            <br />
            To reset all the input fields you need to set all the states you
            created in Part C to <code className="dnb-code">undefined</code> for
            the text fields and <code className="dnb-code">[]</code> for the
            file state.
          </>
        ),
      },
      {
        id: 5,
        name: "Part G",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            To make the application form more secure towards wrong usage, we
            need to check if the user has actually filled in all the text
            fields. To do this we can have a check before setting the{" "}
            <code className="dnb-code">submittedApplication</code> to{" "}
            <code className="dnb-code">true</code> where we check that all the
            states (<code className="dnb-code">firstName</code>,{" "}
            <code className="dnb-code">lastName</code> and{" "}
            <code className="dnb-code">reasonLetter</code>) has values in them.
            If not, give the user an error message (for this you can for
            instance use{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/form-status/#formstatus-displaying-error-status"
              target="_blank"
            >
              FormStatus
            </Anchor>
            ).
          </p>
        ),
        hint: (
          <>
            In <code className="dnb-code">onClick</code> in the submit button
            check first if all the user input is not{" "}
            <code className="dnb-code">undefined</code>. If they are, display an
            error message.
            <br />
            <br />
            It can be easier here to add a function{" "}
            <code className="dnb-code">isUserInputNull</code> that checks every
            state if it is <code className="dnb-code">undefined</code> or not,
            and then call this function inside of{" "}
            <code className="dnb-code">onClick</code>
          </>
        ),
      },
    ],
  },
];
