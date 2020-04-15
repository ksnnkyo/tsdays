type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing == "ease-in") {
            //
        } else if (easing == "ease-out") {

        } else if (easing == "ease-in-out") {

        } else {

        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy");

function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// more and more onverloads;
function createElement(tagName: string): Element {

}

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 5)) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 })
