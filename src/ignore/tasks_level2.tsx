import { Anchor, FormStatus, Li, Ol, P, Tooltip, Ul } from "@dnb/eufemia";

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
        id: 1,
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
        id: 2,
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
        id: 3,
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
            Complete the three steps and verify your changes in the frontend
            table you have created.
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
      <p className="dnb-p">
        Customer service in DNB work long hours to help our customers the best
        they can. One thing our customer call us for is when they see suspicous
        transactions on their accounts. They call DNB in the hope to find out
        what has happened. One thing that is important when this happenes is to
        block the cards linked to account. To be able to do this, customer
        service has to see all the cards of a customer.
        <br /> In this assignment, you will be creating such a page where the
        customer service in DNB can see all the cards of a customer, and block
        the ones linked to the account where suspicous transactions was found.
        <br />
        <br />
        <b>Where on the website?</b> <i>Customer's Cards</i> under{" "}
        <i>Employee page</i>
        <br />
        <b>Where is the code located?</b>{" "}
        <code className="dnb-code">CardOverview.tsx</code> in{" "}
        <code className="dnb-code">Task6</code>-folder
      </p>
    ),
    subtask: [
      {
        id: 4,
        name: "Part A",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            A webpage in our fictional bank consists of multiple{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/"
              target="_blank"
            >
              Eufemia components
            </Anchor>
            . One component can for instance be the title page (
            <Anchor
              href="https://eufemia.dnb.no/uilib/elements/heading/#the-most-basic-use-of-headings"
              target="_blank"
            >
              H1
            </Anchor>
            ) and another can be a paragraph (
            <Anchor
              href="https://eufemia.dnb.no/uilib/elements/paragraph/"
              target="_blank"
            >
              P
            </Anchor>
            ). <br />
            In the file <code className="dnb-code">CardOverview.tsx</code> you
            can see we use three different components:
            <Ul>
              <Li>
                <Anchor
                  href="https://eufemia.dnb.no/uilib/components/section/"
                  target="_blank"
                >
                  Section
                </Anchor>
                , which is used to get correct styling
              </Li>
              <Li>
                <Anchor
                  href="https://eufemia.dnb.no/uilib/elements/heading/#the-most-basic-use-of-headings"
                  target="_blank"
                >
                  H1
                </Anchor>
                , which is used to create the title
              </Li>
              <Li>
                <Anchor
                  href="https://eufemia.dnb.no/uilib/elements/paragraph/"
                  target="_blank"
                >
                  P
                </Anchor>
                , which is used to create a paragraph with explanatory text.
              </Li>
            </Ul>
            As you see, the page do not have any cards yet. You can start of by
            adding one card to the page. <br />
            Add the Eufemia component{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/payment-card/"
              target="_blank"
            >
              PaymentCard
            </Anchor>{" "}
            below the <code className="dnb-code">&lt;P&gt;</code> component, but
            still inside the <code className="dnb-code">&lt;Section&gt;</code>{" "}
            component.
            <FormStatus top state="info" variant="outlined" stretch={true}>
              Remember when you create a component like so{" "}
              <code className="dnb-code">&lt;P&gt;</code> you also need to{" "}
              <i>close</i> that component with{" "}
              <code className="dnb-code">&lt;/P&gt;</code>
              <br />
              You can also write it on the shortform like so:{" "}
              <code className="dnb-code">&lt;P /&gt;</code>
            </FormStatus>
          </p>
        ),
        hint: (
          <p className="dnb-p">
            When you create the component{" "}
            <code className="dnb-code">&lt;PaymentCard&gt;</code> you need to
            send properties to it like so: <br />
            <code className="dnb-code">
              &lt;PaymentCard dummy_property="dummy_value"&gt;
            </code>
            <br />
            Properties are values that the component needs, that you send with
            it when you create it. PaymentCard has two requires properties{" "}
            <code className="dnb-code">product_code</code> and{" "}
            <code className="dnb-code">card_number</code> that you need to send
            to it when you create it. It also has a numerous optional properties
            you <i>can</i> send to it. See the full list of available properties
            here:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/payment-card/properties/"
              target="_blank"
            >
              PaymentCard's Properties
            </Anchor>
            <FormStatus top state="warn" variant="outlined" stretch={true}>
              The documentation of the various properties that the PaymentCard
              has is wrong (
              <Anchor
                href="https://eufemia.dnb.no/uilib/extensions/payment-card/properties/"
                target="_blank"
              >
                PaymentCard's Properties
              </Anchor>
              ). It says that only{" "}
              <code className="dnb-code">product_code</code> is required. But{" "}
              <code className="dnb-code">card_number</code> is also required.
            </FormStatus>
            <br />
            <br />
            You can adjust the spacing by using{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/space/demos/"
              target="_blank"
            >
              Space
            </Anchor>
          </p>
        ),
      },
      {
        id: 5,
        name: "Part B",
        level: "EASY",
        description: (
          <p className="dnb-p">
            Add two more <code className="dnb-code">PaymentCard</code>'s, and
            play around with the different card types available:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/payment-card/products/"
              target="_blank"
            >
              Different card products
            </Anchor>
            .
            <br />
            <br />
            Add spacing between the cards by adding a{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/space/demos/"
              target="_blank"
            >
              &lt;Space top bottom/&gt;
            </Anchor>{" "}
            between them.
            <br />
            <br />
            Play around with the different{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/payment-card/properties/"
              target="_blank"
            >
              PaymentCard's Properties
            </Anchor>{" "}
            to customize the cards the way you want.
            <br />
            <br />
            You can try to make the page look similar to this:{" "}
            <Anchor href="/reference_image_card_overview" target="_blank">
              Reference image for <i>Customer's Cards</i> page
            </Anchor>
          </p>
        ),
      },
      {
        id: 5,
        name: "Part C",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            Now that you have the different cards, you want to add a button so
            that you can block the cards that are linked to the account with
            suspicous transactions.
            <br />
            <br />
            Add a{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/switch/"
              target="_blank"
            >
              Switch
            </Anchor>{" "}
            with <code className="dnb-code">label="Block card"</code> to the
            right side of each card you have added.
            <br />
            <br />
            To be able to place the button on the right side of the card you
            need to wrap the <code className="dnb-code">
              PaymentCard
            </code> and <code className="dnb-code">Switch</code> inside a{" "}
            <code className="dnb-code">&lt;FlexContainer &gt;</code> (
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/flex/container/demos/#horizontal-fieldstring"
              target="_blank"
            >
              FlexContainer
            </Anchor>
            )
            <FormStatus
              top
              stretch={true}
              text="Note that FlexContainer is FlexContainer NOT Flex.Container. It is wrong in the documentation"
              state="warn"
            />
          </p>
        ),
        hint: (
          <p className="dnb-p">
            You can play around with the different{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/flex/container/properties/"
              target="_blank"
            >
              properites of FlexContainer
            </Anchor>{" "}
            to place the components where you want.
          </p>
        ),
      },
      {
        id: 5,
        name: "Part D",
        level: "HARD",
        description: (
          <p className="dnb-p">
            As you may have noticed, the button doesn't actually change
            anything. For this we need to implement some logic to the button, so
            that when the button is pressed it will change the
            <code className="dnb-code">card_status</code> of the card to{" "}
            <i>blocked</i>.
            <br />
            <br />
            Let's start with the card at the top, and implement logic to the
            button next to it. <br />
            You need to to two things for this to work:
            <Ol>
              <Li>
                Use a state in{" "}
                <code className="dnb-code">&lt;PaymentCard&gt;</code>
              </Li>
              <Li>
                Change the state in{" "}
                <code className="dnb-code">&lt;Switch&gt;</code>
              </Li>
            </Ol>
            In order for one component to be able to change something in another
            component we need to use a state that both of them can use and
            change. A state is created by calling{" "}
            <Anchor
              href="https://www.w3schools.com/react/react_usestate.asp"
              target="_blank"
            >
              React's useState
            </Anchor>{" "}
            which you can see we have done three time on line 19, 20 and 21 in{" "}
            <code className="dnb-code">CardOverview.tsx</code>.
            <br />
            <br />
            First we need to use the state (ref. nr. 1 above). This is done
            setting the property <code className="dnb-code">
              card_status
            </code>{" "}
            in <code className="dnb-code">PaymentCard</code> to the state. Let's
            use the first state for the first card. <br />
            <br /> Second (ref. nr. 2 above), we need to change this state when
            the button is pressed. This is done by using the{" "}
            <code className="dnb-code">on_change</code> property in{" "}
            <code className="dnb-code">Switch</code>, and use the function to
            set the state to a new value, which is our case would be{" "}
            <code className="dnb-code">"blocked"</code>. See the documentation
            for how to do this:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/switch/demos/#checked-switch"
              target="_blank"
            >
              example of on_change in Switch
            </Anchor>
            <br />
            <br />
            Remember to also change back the state to{" "}
            <code className="dnb-code">"active"</code> when the user press the
            button again.
            <br />
            <br />
            Add functionality for the other cards as well.
          </p>
        ),
        hint: (
          <p className="dnb-p">
            In order to make the button switch the card status between{" "}
            <code className="dnb-code">"active"</code> and{" "}
            <code className="dnb-code">"blocked"</code> you need to write and{" "}
            <code className="dnb-code">if</code> statement in the{" "}
            <code className="dnb-code">on_change</code> and check if the card is{" "}
            <code className="dnb-code">checked</code> or not. If it is checked,
            set the card status to <code className="dnb-code">"blocked"</code>,
            else set it to <code className="dnb-code">"active"</code>.
          </p>
        ),
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
          <Anchor
            href="https://eufemia.dnb.no/uilib/components/"
            target="_blank"
          >
            Eufemia components
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

        <FormStatus top state="info" variant="outlined" stretch={true}>
          If you want help we have a suggested solution in the
          <code className="dnb-code">Task7/SuggestedSolution</code>-folder you
          can look at.
        </FormStatus>
      </>
    ),
    subtask: [
      {
        id: 6,
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
            <code className="dnb-code">Tabs.Content</code> section (on approx.
            line 143) where you check against the key{" "}
            <code className="dnb-code">new_tab</code>. The page to return is{" "}
            <code className="dnb-code">
              &lt;Application setCurrentTab=&#123;setCurrentTab&#125;/&gt;
            </code>
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
        id: 7,
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
            .
            <br />
            <br />
            Go to the file <code className="dnb-code">Application.tsx</code> in
            the <code className="dnb-code">Task7</code>-folder. This file has
            some skelton code now to get you started. You will fill this file
            with code to create the application form. To do this you will use
            numerous Eufemia components. Please feel free to try other
            components as well, do not feel restricted to use only the ones we
            suggest here:
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
        id: 8,
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
            <code className="dnb-code">onChange</code> in the{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/base-fields/String/"
              target="_blank"
            >
              Field.String
            </Anchor>{" "}
            and setting the value to the different states.
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
        id: 9,
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
        id: 10,
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
        id: 11,
        name: "Part F",
        level: "PROFESSIONAL",
        description: (
          <p className="dnb-p">
            Add the two buttons on the bottom of the application summary page,
            see{" "}
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
            The <b>Back</b> button should return to the previous page (the
            application form page) when pressed, and the{" "}
            <b>Send application to DNB</b> button should aslo return to the
            previous page when pressed as well as reset all the input fields.
          </p>
        ),
        hint: (
          <>
            To be able to return back to the previous page (the application form
            page) you need to set the state{" "}
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
        id: 12,
        name: "Part G",
        level: "MEDIUM",
        description: (
          <p className="dnb-p">
            To make the application form more secure towards wrong usage, we
            need to check if the user has actually filled in all the text
            fields. To do this we can have a check before setting the{" "}
            <code className="dnb-code">submittedApplication</code> in{" "}
            <code className="dnb-code">Application.tsx</code> to{" "}
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
