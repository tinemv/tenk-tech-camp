import { Anchor } from "@dnb/eufemia";

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
    title: "Task 7",
    description: (
      <>
        <p className="dnb-p">
          In this task you will create an new page where we will investigate
          women in the stock markets. <br />
          To create the page you will use{" "}
          <Anchor href="https://eufemia.dnb.no/uilib/elements/" target="_blank">
            Eufemia elements
          </Anchor>
        </p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> A new page you will create
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">NewTab</code> in{" "}
          <code className="dnb-code">Task7</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "MEDIUM",
        description: (
          <>
            <p className="dnb-p">
              First you need to create a new tab after the <i>Employee page</i>.
              Go to the file <code className="dnb-code">App.tsx</code> in the{" "}
              <code className="dnb-code">Ignore</code>-folder. Then find the{" "}
              <Anchor
                href="https://eufemia.dnb.no/uilib/components/tabs/"
                target="_blank"
              >
                Tabs
              </Anchor>
              -element on line 93. Under <code className="dnb-code">data</code>{" "}
              you can see we have four different elements. Three of them are
              already exsisting pages. The fourth here is the one you need to
              add. To add it, you need to find{" "}
              <code className="dnb-code">Tabs.Content</code>, which is where we
              add content to the tabs. We check here against the keys created in
              the <code className="dnb-code">data</code> section mentioned
              above. Add a new check for the key for the new tab, and return the
              new page:
              <code className="dnb-code">
                &lt;NewTab setCurrentTab=&#123;setCurrentTab&#125;/&gt;{" "}
              </code>
              <br />
              <br />
              You can also change the name of the tab by changing the{" "}
              <i>title</i> in the <code className="dnb-code">data</code>{" "}
              section.
            </p>
          </>
        ),
        hint: <></>,
      },
      {
        id: 1,
        name: "Part B",
        level: "MEDIUM",
        description: (
          <>
            <p className="dnb-p">
              Now you will fill the page you created with content. You will over
              the next few parts create this page:{" "}
            </p>
          </>
        ),
        hint: <></>,
      },
    ],
  },
];
