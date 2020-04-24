function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if (typeof padding === "string") {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${padding}'`);
}

padLeft("Hello world", 1);

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

pet.swim();

type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

type NetworkState =
    | NetworkFailedState
    | NetworkLoadingState
    | NetworkSuccessState;

function networkStatus(state: NetworkState): string {

    // 类型“NetworkState”上不存在属性“code”。
    // 类型“NetworkLoadingState”上不存在属性“code”。
    state.code;

    switch (state.state) {
        case "loading":
            return "Downloading...";
        case "failed":
            return `Error ${state.code} downloading`;
        case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
}

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.artists);
};

class Person {
    constructor(public name: string){}
}

interface Loggable {
    log(name: string): void;
}

class ConsoleLogger implements Loggable {
    log(name: string) {
        console.log(`Hello, I'm ${name}.`);
    }
}

function extend<First extends {}, Second extends {}>(
    first: First,
    second: Second
): First & Second {
    const result: Partial<First & Second> = {};
    for (const prop in first) {
        if (first.hadOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hadOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
        }
    }
    return result as First & Second;
}

const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);