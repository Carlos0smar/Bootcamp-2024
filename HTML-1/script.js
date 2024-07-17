class EmployeeCredentia extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                #container {
                    background-color: white;
                    border: 5px solid black;
                    display: flex;
                    flex-direction:column;
                    width: 300px;
                    height: 500px;
                }
                #continerCompany{
                    flex: 1;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    background-color:white;
                }

                #companyName{
                    color: Black;
                    font-size: 50px;
                    font-family: 'Roboto', sans-serif;
                    margin: 4px;
                }
                #imgContainer {
                    flex: 7;
                    background-color: #1C1C1C;
                    display: flex;
                    width: 100%;
                    flex-flow: column wrap;
                    justify-content: space-around;
                    align-content: center;
                }

                #userName{
                    align-self: center;
                    color: white;
                    font-size: 40px;
                    font-family: sans-serif;
                    margin: 1px;
                }
                #image{
                    width: 250px;
                    height: 200px;
                    border-radius: 60px;
                }
                #officeContainer{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    background-color: #D21F3C;
                }
                
                #officeName{
                    color: white;
                    font-size: 30px;
                    font-family: 'Roboto', sans-serif;
                    margin: 4px;
                }

            </style>
            <div id="container">
                <div id="continerCompany">
                    <h1 id="companyName"></h1>
                </div>
                <div id="imgContainer">
                    <img id="image" src=""/>
                    <p id="userName"></p>
                </div>
                <div id="officeContainer">
                    <p id="officeName"></p>
                </div>
            </div>
        `;

        this.container = this.shadowRoot.getElementById('container');
        this.continerCompany = this.shadowRoot.getElementById('companyName');
        this.companyName = this.shadowRoot.getElementById('companyName');
        this.userName = this.shadowRoot.getElementById('userName');
        this.image = this.shadowRoot.getElementById('image');
        this.officeName = this.shadowRoot.getElementById('officeName');
   
    }

    connectedCallback() {
        this.companyName.textContent = this.getAttribute('company') || 'JalaSoft';
        this.officeName.textContent = this.getAttribute('office') || 'Developer';
        this.image.src = this.getAttribute('image-src') || 'image/default-image.png';
        this.userName.textContent = this.getAttribute('employee-name') || 'Hirotaka Nifuji';
    }


    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'company') {
            this.companyName.textContent = newValue;
        } 

        if(name === 'office'){
            this.officeName.textContent = newValue;
        }
        if(name === 'image-src'){
            this.image.src = newValue;
        }
        if(name === 'employee-name'){
            this.userName.textContent = newValue;
        }
    }

}

customElements.define('employee-credential', EmployeeCredentia);
