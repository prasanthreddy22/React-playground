import Button from "./components/button";
function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        ClickMe
      </Button>
    </div>
  );
}
export default App;
