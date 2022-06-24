import "./App.css";
import AccordionList from "./components/accordion/AccordionList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 18</h1>
        <h3>Accordion View - No Dependency</h3>
        <a
          className="App-link"
          href="https://github.com/guptasanchit90/react-accordion-no-library"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </header>

      <div className="component-container">
        <AccordionList
          options={{ allowMultiple: false }}
          items={[
            {
              id: 1,
              summary: "Et id consectetur veniam dolore.",
              details: `Aliqua cillum anim ullamco adipisicing anim minim elit ea officia duis esse laboris commodo fugiat. Proident sunt ex aute nisi dolor aliqua veniam voluptate nulla consequat deserunt enim. Nostrud cupidatat aute consectetur esse cillum culpa. Qui laborum non pariatur minim.

Ex enim commodo esse fugiat duis sunt ex laboris quis eiusmod esse velit eu laborum. Officia labore laborum incididunt aute labore voluptate consequat proident voluptate eiusmod. Ex ut irure nisi tempor Lorem sit excepteur ipsum voluptate ea sunt non. Exercitation tempor excepteur sunt Lorem Lorem. Occaecat exercitation ex aliqua proident consectetur voluptate cillum mollit ipsum officia.

Nostrud ex duis tempor voluptate nostrud ut adipisicing nisi mollit amet. Velit anim laboris laboris deserunt deserunt reprehenderit cupidatat eiusmod ex cillum aute ea. Elit exercitation cupidatat esse aliqua aliqua ullamco duis velit incididunt voluptate voluptate amet.`,
            },
            {
              id: 2,
              summary: "Esse dolore minim id esse proident proident.",
              details: (
                <>
                  <img
                    style={{ height: "200px" }}
                    src={
                      "https://cdn.pixabay.com/photo/2019/11/25/12/31/french-bulldog-4651905_1280.png"
                    }
                  />
                </>
              ),
            },
            {
              id: 3,
              summary:
                "Ut ullamco do fugiat Lorem quis labore reprehenderit deserunt ex veniam irure dolore.",
              details: (
                <>
                  <iframe
                    src="https://giphy.com/embed/gishiA5celsz6ASgOO"
                    width="480"
                    height="270"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                  ></iframe>
                  <p>
                    <a href="https://giphy.com/gifs/PeninsulaHumaneSocietySPCA-working-hard-hardly-phsspca-gishiA5celsz6ASgOO">
                      via GIPHY
                    </a>
                  </p>
                </>
              ),
            },
            {
              id: 4,
              summary: "Dolor labore voluptate in exercitation.",
              details: (
                <>
                  <form>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" />
                    <br />
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" />
                    <br />
                    <input type="submit" value="Submit" />
                  </form>
                </>
              ),
            },
            {
              id: 5,
              summary: "Ea amet dolor incididunt cupidatat.",
              details: (
                <>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>Country</th>
                    </tr>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                    </tr>
                    <tr>
                      <td>Centro comercial Moctezuma</td>
                      <td>Francisco Chang</td>
                      <td>Mexico</td>
                    </tr>
                  </table>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
