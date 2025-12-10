const reg = /<!--[\<\>\w\/]+-->/gm;
const str = `<h1>hello</h1>
    <!--<p>hi</p>-->
    <p>good</p>`;

function check() {
    return str.replaceAll(reg, "");
}

const res = check();
console.log(res);
