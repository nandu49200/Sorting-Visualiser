import React from 'react';
import {getMergeSortAnimations} from '../S/mergesort.js';
import {getQuickSortAnimations} from '../S/quicksort.js';
import {getBubbleSortAnimations} from '../S/bubblesort.js';
import {getInsertionSortAnimations} from '../S/insertionsort.js';
import {getSelectionSortAnimations} from '../S/selectionsort.js';

import './SortingVisualizer.css';


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 60;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 30;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'pink';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 800));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const [animations,sortArray] = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length - 1; i++) {
        const isColorChange = (i % 6 === 0) || (i % 6 === 1);
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [barOneIndex, barTwoIndex] = animations[i];
            if(barOneIndex === -1) {
                continue;
            }
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * ANIMATION_SPEED_MS);
        }
        else {
            const [barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * ANIMATION_SPEED_MS);  
        }
    }
  }

  bubbleSort()  {
    const [animations,sortArray] = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (i % 4 === 0) || (i % 4 === 1);
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);  
            }
        }
  }

  insertionSort() {

    const [animations,sortArray] = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [temp, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * ANIMATION_SPEED_MS);
        }
        else {
            const [temp, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * ANIMATION_SPEED_MS);  
        }
    }
    // this.setState({array: sortArray})
    const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
    setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME); 
}

selectionSort() {

  const [animations,sortArray] = getSelectionSortAnimations(this.state.array);
  for (let i = 0; i < animations.length; i++) {
      const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
      const arrayBars = document.getElementsByClassName('array-bar');
      if(isColorChange === true) {
          const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
          const [temp, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          },i * ANIMATION_SPEED_MS);
      }
      else {
          const [temp, barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          },i * ANIMATION_SPEED_MS);  
      }
  }
  // this.setState({array: sortArray})
  const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
  setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME); 
}
  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              
              height: `${value}px`,
              text:value
            }}></div>
        ))}
    
     
          
        <div className="btn">

        <button title="Generates a new random array" style={{fontSize:`${19}px`}} onClick={() => this.resetArray()}>Generate New Array</button>
        <button title="O(NlogN) Time Complexity"  style={{fontSize:`${19}px`}}  onClick={() => this.mergeSort()}>Merge Sort</button>
        <button title="O(N^2) Time Complexity"  style={{fontSize:`${19}px`}} onClick={() => this.quickSort()}>Quick Sort</button>
        <button title="O(N^2) Time Complexity" style={{fontSize:`${19}px`}} onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button title="O(N^2) Time Complexity" style={{fontSize:`${19}px`}} onClick={() => this.selectionSort()}>Selection Sort</button>
        <button title="O(N^2) Time Complexity"  style={{fontSize:`${19}px`}} onClick={() => this.bubbleSort()}>Bubble Sort</button>
      
        </div>
      </div>
    );
  }
}


// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}