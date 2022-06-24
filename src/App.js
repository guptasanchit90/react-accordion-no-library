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
              summary:
                "In officia et reprehenderit exercitation id nisi ex reprehenderit.",
              details: `Laboris sint consequat nisi in sint elit nulla cillum enim laboris adipisicing veniam. Tempor sunt consequat deserunt aute dolore dolore laborum sint. Pariatur ut veniam ipsum enim proident dolore labore culpa officia qui ipsum consequat. In ullamco voluptate culpa excepteur velit voluptate ad non pariatur. Ipsum sunt ad tempor irure sunt enim ea dolore. Ut exercitation cillum labore aliqua quis enim reprehenderit irure nisi labore occaecat ullamco.

Adipisicing aute non voluptate anim ipsum culpa ullamco adipisicing laborum exercitation adipisicing ut. Esse consectetur ad aliquip voluptate mollit labore cillum ullamco esse incididunt adipisicing non voluptate. Magna est aliquip consectetur sunt incididunt commodo veniam eiusmod laboris esse eiusmod voluptate eu. Eu fugiat duis amet pariatur reprehenderit. Adipisicing sint magna proident amet minim aliquip. Voluptate non laborum adipisicing id nulla ullamco aliquip dolor consectetur aliqua.

Reprehenderit incididunt cupidatat proident in sit incididunt veniam aute. Tempor reprehenderit laborum ipsum est aliqua enim mollit mollit do. Non excepteur sint commodo tempor magna ullamco ex cillum. Amet aliqua eiusmod aute quis minim in id aute elit deserunt sunt.`,
            },
            {
              id: 3,
              summary:
                "Id elit ut aliquip dolor non commodo ex est elit amet ad pariatur amet.",
              details: `Adipisicing do sit ea cupidatat exercitation laborum. Reprehenderit ad exercitation ullamco consectetur cupidatat. Cupidatat magna ipsum commodo ea quis consequat laborum duis sint est cupidatat quis. Tempor occaecat amet velit esse sint ad voluptate tempor pariatur magna sit.

Labore voluptate officia occaecat et ullamco nostrud consectetur voluptate non ea laboris aliquip do in. Cillum non dolor dolor proident non labore voluptate aliquip labore ullamco nulla incididunt. Tempor Lorem adipisicing cupidatat deserunt consequat incididunt magna non laboris do est. Et do tempor amet ut aute consequat veniam nisi dolore esse commodo reprehenderit consequat. Voluptate culpa ipsum nisi magna tempor Lorem eiusmod deserunt.`,
            },
            {
              id: 4,
              summary:
                "Esse dolore minim id esse proident proident.",
              details: `Velit dolore magna ea magna. Tempor aute irure ex laboris elit do ipsum exercitation dolor ut eu et consectetur et. Aute occaecat fugiat in occaecat amet eu cupidatat et.

Dolor non pariatur anim amet officia aliquip laborum aliquip dolor nulla cupidatat tempor. Velit amet ut eu fugiat ipsum est reprehenderit deserunt exercitation deserunt. Nulla nulla commodo cillum ullamco dolore qui labore et aliqua occaecat ad labore. Veniam ullamco do quis cupidatat nostrud Lorem proident cupidatat magna aute pariatur anim occaecat magna. Nisi pariatur est esse eiusmod nulla do enim incididunt labore ullamco voluptate aliqua. Id ex sint fugiat sit cillum Lorem aute aliquip esse nulla reprehenderit.

Nostrud et exercitation do consectetur do ut qui enim voluptate esse consectetur non. Fugiat eu do dolor irure nisi sint incididunt eiusmod minim ea sit incididunt laborum enim. Anim et nostrud dolore qui proident. Pariatur velit anim veniam ad labore mollit exercitation dolore ullamco laborum. Eu labore mollit fugiat reprehenderit reprehenderit.

Elit eiusmod dolore ex eu. Laborum tempor laboris id sint. Eu do deserunt pariatur in aliquip nostrud deserunt id eiusmod velit occaecat laboris aliquip. Deserunt consectetur aute nisi sunt adipisicing culpa duis quis pariatur dolor deserunt sunt. Ea adipisicing ex ullamco commodo cupidatat occaecat id ex voluptate duis. Veniam magna ipsum officia eiusmod elit reprehenderit nisi consectetur elit est velit exercitation deserunt. Non mollit sunt deserunt deserunt sint consectetur nulla ex.

Laborum Lorem officia esse aliqua dolor officia sint non tempor nostrud. Lorem elit nostrud ex veniam mollit nisi adipisicing ex mollit voluptate labore et velit. Duis dolor qui cupidatat sit do fugiat cillum. Id amet pariatur elit culpa labore anim in non deserunt elit aliqua pariatur. Ipsum reprehenderit proident labore Lorem incididunt consequat. Magna aliquip est non minim ad ipsum cillum mollit pariatur.`,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
