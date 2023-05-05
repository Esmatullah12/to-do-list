/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

class ToDoList{
  constructor(toDo){
    this.toDoDiv = document.querySelector(".to-do-container")
    this.toDo = [{ description: "wash dishes", completed: false, index: 1},{ description: "complete to-do project", completed: false, index: 2}, { description: "Focus", completed: false, index: 2}]
    this.render()
  }
  render(){
    this.toDoDiv.innerHTML = '';
    this.toDo.forEach((todo) => {
      const ToDoElement = this.createToDo(todo);
      this.toDoDiv.appendChild(ToDoElement)
    })
    
  }
  createToDo(toDo){
    const toDoApp = document.createElement("div");
    toDoApp.classList.add("to-do-element")
    toDoApp.innerHTML = `
    <div>
      <div>
        <input class="checkbox" type="checkbox"></input>
        <p>${toDo.description}</p>
      </div>
      <button class="remove-btn"><i class="fa-regular fa-trash-can fa-2x"></i></button>
    </div>
    <hr>
   `
    return toDoApp
  }
}

const toDo = new ToDoList()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTmtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBdUQsR0FBRyxrRUFBa0UsSUFBSSxpREFBaUQ7QUFDcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcInN0eWxlLmNzc1wiXG5jbGFzcyBUb0RvTGlzdHtcbiAgY29uc3RydWN0b3IodG9Ebyl7XG4gICAgdGhpcy50b0RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1jb250YWluZXJcIilcbiAgICB0aGlzLnRvRG8gPSBbeyBkZXNjcmlwdGlvbjogXCJ3YXNoIGRpc2hlc1wiLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleDogMX0seyBkZXNjcmlwdGlvbjogXCJjb21wbGV0ZSB0by1kbyBwcm9qZWN0XCIsIGNvbXBsZXRlZDogZmFsc2UsIGluZGV4OiAyfSwgeyBkZXNjcmlwdGlvbjogXCJGb2N1c1wiLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleDogMn1dXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHRoaXMudG9Eb0Rpdi5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnRvRG8uZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgVG9Eb0VsZW1lbnQgPSB0aGlzLmNyZWF0ZVRvRG8odG9kbyk7XG4gICAgICB0aGlzLnRvRG9EaXYuYXBwZW5kQ2hpbGQoVG9Eb0VsZW1lbnQpXG4gICAgfSlcbiAgICBcbiAgfVxuICBjcmVhdGVUb0RvKHRvRG8pe1xuICAgIGNvbnN0IHRvRG9BcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9BcHAuY2xhc3NMaXN0LmFkZChcInRvLWRvLWVsZW1lbnRcIilcbiAgICB0b0RvQXBwLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIj48L2lucHV0PlxuICAgICAgICA8cD4ke3RvRG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlLWJ0blwiPjxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS10cmFzaC1jYW4gZmEtMnhcIj48L2k+PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGhyPlxuICAgYFxuICAgIHJldHVybiB0b0RvQXBwXG4gIH1cbn1cblxuY29uc3QgdG9EbyA9IG5ldyBUb0RvTGlzdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9