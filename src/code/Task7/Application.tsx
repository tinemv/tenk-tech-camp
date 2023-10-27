export interface ApplicationProps {
  setCurrentTab: Function;
}

export const Application = (props: ApplicationProps) => {
  const { setCurrentTab } = props;
  setCurrentTab("new_tab");

  return (
    <>
      <div className="ApplicationTab">
        FILL OUT YOUR CODE HERE:
      </div>
    </>
  );
};
