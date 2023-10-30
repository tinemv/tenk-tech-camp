import { Anchor, FormStatus, P, Ul } from "@dnb/eufemia";

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
          <code className="dnb-code">Models.tsx</code> describes the data
          models, deciding how the data is structured in our database.
          <br />
          <br />
          Try to edit the data by editing the name of one of the accounts in{" "}
          <code className="dnb-code">customer.tsx</code> and see what happens on
          the page.
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
            First, we want to add another account to the customer in the bank.
            The accounts are displayed in the Accounts table. On the same format
            as the other ones, add another account in the database (file). The
            new account can for instance be BSU 2.
            <br />
            <br />
            Pay attention to the format, all the signs and to the accounts' and
            transactions' ID's. You have to identify what is the variable names
            and what is the data. Make sure the new account is displayed in the
            table when you are finished.
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
            database in our online bank and should contain a list of a
            customer's funds. Create a new model in{" "}
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
  {
    id: 2,
    title: "Task 6",
    description: (
      <>
        <p className="dnb-p">CaseX is a service for customer service employees to review status of cards that have been applied for and block cards that are not filling the requirements.</p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b>  
          <i>Block cards</i> under{" "}
          <i>Employee page</i>
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
        description: <p className="dnb-p">In this part, we will start by coding the button, so the user later on can request for their data from DNB. </p>,
        hint: 
        <p className="dnb-p">
          Buttons are created by coding: 
          <br />
            
          <br />
          <br />The resoult should be looking somthing like this:<br />
          <br />Feel free to put your personal touch with the design of button.
        </p>,
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
          <br />
          To be able to apply for a job, you first need to create a new page and
          create an application form. To create the page you will use{" "}
          <Anchor href="https://eufemia.dnb.no/uilib/elements/" target="_blank">
            Eufemia elements
          </Anchor>{" "}
          and add functionality to them.
          <br />
          <br />
          This task is build up on two reference images, and you trying to
          create that. But feel free to create your own design and
          functionality.
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

        <FormStatus
          top
          stretch={true}
          text="If you want help we have a suggested solution in the folder FinishedFiles you can look at."
          state="info"
          variant="outlined"
        />
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
            line 107 you can see we have three different elements, each
            representing one tab.
            <br />
            You need to add a forth element here, where the title is{" "}
            <b>Apply for a job</b> and the key is{" "}
            <code className="dnb-code">new_tab</code>.
            <br />
            <br />
            To also add content to the tab you need to add a new{" "}
            <code className="dnb-code">else if</code> check in the{" "}
            <code className="dnb-code">Tabs.Content</code> section on line 143
            where you check against the key{" "}
            <code className="dnb-code">new_tab</code>. The page to return is{" "}
            <code className="dnb-code">&lt;Application setCurrentTab=&#123;setCurrentTab&#125;/&gt;</code>
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
              <li>motivationLetter</li>
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
          <p className="dnb-p">
            We want to be redirected to a new page when we click the{" "}
            <b>Check application</b> button at the bottom (see{" "}
            <Anchor href="/reference_image_application" target="_blank">
              Reference image for application form
            </Anchor>
            ).
            <br />
            To do this we need to add <code className="dnb-code">
              onClick
            </code>{" "}
            on the <b>Check Application</b> button where we set the state{" "}
            <code className="dnb-code">submittedApplication</code> to{" "}
            <code className="dnb-code">true</code> that will then show a new
            page (the <code className="dnb-code">ApplicationResult</code> page)
            where we get a summary of the application.
          </p>
        ),
        hint: (
          <>
            You need to call the{" "}
            <code className="dnb-code">setSubmittedApplication</code> to{" "}
            <code className="dnb-code">true</code> inside of the{" "}
            <code className="dnb-code">onClick</code> in the{" "}
            <code className="dnb-code">Form.SubmitButton</code> component.
            <br />
            <br />
            Also ensure that you switch out all the{" "}
            <code className="dnb-code">undefined</code> values when
            <code className="dnb-code">ApplicationResult</code> is called to the
            actual values.
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
            To create this page you can use some layout components to make it
            look similar to the reference image:
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
            Be sure to send with the values from the application form when you
            call <code className="dnb-code">ApplicationResult</code> in{" "}
            <code className="dnb-code">Application.tsx</code> so that you can
            use those values.
            <br />
            <br />
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
            <code className="dnb-code">motivationLetter</code>) has values in
            them. If not, give the user an error message (for this you can for
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
            <code className="dnb-code">onClick</code>.
            <br />
            <br />
            Remember that <code className="dnb-code">||</code> is <i>or</i>.
          </>
        ),
      },
    ],
  },
];
