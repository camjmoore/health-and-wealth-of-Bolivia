import {csvFormat, csvParse} from "d3-dsv";
import {FileAttachment} from "observablehq:stdlib";

const incomes = FileAttachment("../daily-mean-income-per-capita.csv").text()

const incomeHistory = csvParse(incomes)

process.stdout.write(csvFormat(incomeHistory));
