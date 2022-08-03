import React from "react";
import Box from "./Box";


function click(id) {

    //Creating 2d Matrix
    var mat = new Array(9);
    for (let i = 0; i < 9; i++) {
        mat[i] = new Array(9);
    }

    // Assigning Input Data
    for (let i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            mat[i][j] = document.getElementById(i * 9 + j).value;
        }
    }

    // DSA Algo Here

    //Assigning 0's
    for (let i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (mat[i][j] == "") mat[i][j] = 0;
        }
    }


    // Checking Input is correct or not.
    var issafe = 1;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (mat[i][j] != 0) {
                // console.log("calling" + i + " " + j);
                if (!safe(i, j, mat[i][j], mat)) { i = 10; issafe = 0; break; }
            }
        }
    }

    if (issafe) {
        if (!SolveSudoku(mat)) {
            document.getElementById("sta").innerHTML = "No Solution";
        }
    }
    else {
        document.getElementById("sta").innerHTML = "Wrong Input";
    }


    // DSA Algo Is Safe
    function safe(x, y, k, mat) {
        //console.log("safe called");
        for (let p = 0; p < 9; p++) {

            if (p != y && mat[x][p] == k) return false;
            if (mat[p][y] == k && p != x) return false;
        }
        let m = 3;
        let p = x - x % m;
        let q = y - y % m;
        let b = q + 3;
        for (let a = 0; a < 9; a++) {
            if (p != x && q != y && mat[p][q] == k) return false;

            q++;
            if (q == b) { q -= m; p++; }
        }
        // cout<<"true"<<"\n";
        return true;
    }

    //DSA Main Algo

    function SolveSudoku() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (mat[row][col] == 0) {
                    for (let k = 1; k <= 9; k++) {
                        mat[row][col] = k;
                        
                        if (safe(row, col, k, mat) == true) {
                            //console.log("safe" + row + " " + col);
                            if (SolveSudoku() == true) return true;
                        }
                        // else console.log("unsafe" + row + " " + col);

                    }
                    mat[row][col] = 0;
                    return false;
                }
            }
        }
        return true;
    }

    // Matrix to Sudoku
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(i * 9 + j).value = mat[i][j];
            // console.log(mat[i][j]);
        }
    }

}

// App func

function App() {

    var arr = [];

    for (let i = 100; i < 109; i++) {
        arr.push(i);
    }

    function func(i) {
        return <Box key = {i} id={i} />
    }

    return <div>

        <center><h1>Sudoku</h1></center>  <br></br>

        <div className="one">
            {arr.map(func)}
        </div>

        <center><h1><p id="sta">Enter Number in Sudoku</p></h1></center>
        <center><button onClick={click}>Solve</button></center>

    </div>
}

export default App;