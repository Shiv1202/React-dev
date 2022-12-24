const heading1 = React.createElement('h1', { style: { color: '#10b193'}}, "Hello World! React From CDN")

const question1 = React.createElement('h3', {style: { color: '#005648', textDecoration: 'underline'}}, "What is Emmet?")
let ans1 = React.createElement('p', {style: { color: '#000', fontSize: '14px', fontWeight: 'lighter', display: 'block', textDecoration: 'none', }}, "It is a set of plug-ins form text editors that allow for high-speed coding and editing in HTML,XML etc.")

const question2 = React.createElement('h3', {style: { color: '#005648', textDecoration: 'underline'}}, "What is CROSSORIGIN in script tag?")
let ans2 = React.createElement('p', {style: { color: '#000', fontSize: '14px', fontWeight: 'lighter', display: 'block', textDecoration: 'none', }}, "The crossorigin attribute on the script tag provides supports for CORS (Cross Origin Resource sharing) define how the elements handles cross-origin requests.")

const question3 = React.createElement('h3', {style: { color: '#005648', textDecoration: 'underline'}}, "What is async and defer?")
let ans3 = React.createElement('p', {style: { color: '#000', fontSize: '14px', fontWeight: 'lighter', display: 'block', textDecoration: 'none', }}, "async => The Script will be fetched in parallel to HTML parsing and executed as soon as it is available. defer => The script is fetched in parallel to HTML parsing and executed when the page has finished parshing of the HTML. Each defer script is executed in order they were encounted in the document.")

const individualQnADiv1 = React.createElement('div', {style: { textAlign: 'start', padding: '20px', border: '1px solid blue', fontWeight: 'bold', fontSize: '20px', margin: '10px 10px 50px'}}, ['Question 1', question1, ans1])

const individualQnADiv2 = React.createElement('div', {style: { textAlign: 'start', padding: '20px', border: '1px solid blue', fontWeight: 'bold', fontSize: '20px', margin: '10px 10px 50px'}}, ['Question 2', question2, ans2])

const individualQnADiv3 = React.createElement('div', {style: { textAlign: 'start', padding: '20px', border: '1px solid blue', fontWeight: 'bold', fontSize: '20px', margin: '10px 10px 50px'}}, ['Question 3', question3, ans3])

const container = React.createElement("div",{
    id: "container",
    style: {
        background: '#dbe6dc',
        padding: '20px'
    }
},[heading1, individualQnADiv1, individualQnADiv2, individualQnADiv3])

const mainRoot =  ReactDOM.createRoot(document.getElementById('root'));
mainRoot.render(container)