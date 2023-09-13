enum steps {
    North= "North", 
    West= "West", 
    South= "South", 
    East= "East"
}

// input dataset 01
const input1: steps[] = [
    steps.North, 
    steps.West, 
    steps.West, 
    steps.North, 
    steps.East, 
    steps.East, 
    steps.South, 
    steps.East, 
    steps.South, 
    steps.South, 
    steps.South, 
    steps.North, 
    steps.North, 
    steps.North
]
// input data set 02
const input2: steps[] = [
    steps.North, 
    steps.West, 
    steps.West, 
    steps.North, 
    steps.East, 
    steps.North, 
    steps.East, 
    steps.South, 
    steps.East, 
    steps.East, 
    steps.South, 
    steps.South, 
    steps.South, 
    steps.East, 
    steps.North, 
    steps.East
]

const trackPath = (inputs: steps[]) => {
    let coordinateX: number = 0
    let coordinateY: number = 0
    const visitedEdge: Set<string> = new Set<string>()
    for (const input of inputs) {
        visitedEdge.add(`(${coordinateX}, ${coordinateY})`)

        // updating positing in 2d grid
        if(input === steps.North ) coordinateY++;
        else if(input === steps.South ) coordinateY--;
        else if(input === steps.East ) coordinateX++;
        else if(input === steps.West ) coordinateX--;

        // checking if already visited
        const isVisited: boolean = visitedEdge.has(`(${coordinateX}, ${coordinateY})`)
        if(isVisited) console.log(`Intersection at coordinates ${coordinateX}, ${coordinateY}`)
    }
}

console.log("Data set 01")
trackPath(input1)

console.log("\n\nDataSet 02")
trackPath(input2)