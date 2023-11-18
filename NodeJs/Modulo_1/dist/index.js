"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const matematica = require("./Matematica");
/*
import * as matematica from "./Matematica";
let nome: string = "Everson";
let idade: number = 24;
const num1: number = 1;
const num2: number = 2;
console.log(`Sum: ${matematica.sum(num1, num2)}`);
console.log(`Sub: ${matematica.sub(num1, num2)}`);
console.log(`Div: ${matematica.div(num1, num2)}`);
console.log(`Mult: ${matematica.mult(num1, num2)} `);
console.log(`Nome: ${nome}, Idade: ${idade}`);
*/
const validator_1 = __importDefault(require("validator"));
console.log(validator_1.default.isIP("0.0.34.20"));
