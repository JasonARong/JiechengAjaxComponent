export function postRequest()
{
    document.getElementById('date').value = new Date();

    let id = document.getElementById('id').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = document.getElementById('date').value;
    

    let pReq = new XMLHttpRequest();
    pReq.onreadystatechange = function()
    {
        if (this.readyState === XMLHttpRequest.DONE) 
        {
            if (this.status === 200) {
                document.getElementById("json").textContent = this.responseText;
                // how do you want me to present the info
            }
            else {
                console.log('Error:', this.statusText);
            }
        }  
    };
    pReq.open("POST", "https://httpbin.org/post");
    pReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    pReq.send(`id=${id}&article_name=${name}&article_body=${body}&date=${date}`);
}

export function getRequest()
{
    document.getElementById('date').value = new Date();
    let id = document.getElementById('id').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = document.getElementById('date').value;

    let pReq = new XMLHttpRequest();
    pReq.onreadystatechange = function()
    {
        if (this.readyState === XMLHttpRequest.DONE) 
        {
            if (this.status === 200) {
                document.getElementById("json").textContent = this.responseText;
            }
            else {
                console.log('Error:', this.statusText);
            }
        }
    };
    pReq.open("GET", `https://httpbin.org/get?id=${id}&article_name=${name}&article_body=${body}&date=${date}`);
    //pReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    pReq.send();
}

export function putRequest()
{
    document.getElementById('date').value = new Date();
    let id = document.getElementById('id').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = document.getElementById('date').value;

    let pReq = new XMLHttpRequest();
    pReq.onreadystatechange = function()
    {
        if (this.readyState === XMLHttpRequest.DONE) 
        {
            if (this.status === 200) {
                document.getElementById("json").textContent = this.responseText;
            }
            else {
                console.log('Error:', this.statusText);
            }
        }
    };
    pReq.open("PUT", "https://httpbin.org/put");
    pReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    pReq.send(`id=${id}&article_name=${name}&article_body=${body}&date=${date}`); //payload
}

export function deleteRequest()
{
    document.getElementById('date').value = new Date();
    let id = document.getElementById('id').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = document.getElementById('date').value;

    let pReq = new XMLHttpRequest();
    pReq.onreadystatechange = function()
    {
        if (this.readyState === XMLHttpRequest.DONE) 
        {
            if (this.status === 200) {
                document.getElementById("json").textContent = this.responseText;
            }
            else {
                console.log('Error:' + this.statusText);
            }
        }
    };
    pReq.open("DELETE", "https://httpbin.org/delete");
    pReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    pReq.send(`id=${id}&article_name=${name}&article_body=${body}&date=${date}`); //payload
}