import { BehaviorSubject } from "rxjs";
import { Component } from "../types";
import { ref } from "vue";


// const lists = new BehaviorSubject();
const list = ref<Component[]>([]);


export function init(tree: Component[]){
  // post processing
  list.value = tree;
  console.log(tree);

}


export function getList() {return list};
