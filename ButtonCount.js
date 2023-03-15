class ButtonCount extends HTMLElement{
    constructor()
    {
        super();
        //shadow DOM
        this.attachShadow({mode: 'open'});
        
        //create button functionality
        const btn = document.createElement('button');
        let count = 0;
        btn.innerHTML = `Times Clicked: ${count}`;
        btn.addEventListener('click', function(){
            count++;
            btn.innerHTML = `Times Clicked: ${count}`;
        });
        this.shadowRoot.append(btn);
    }
}

window.customElements.define('button-count', ButtonCount);
