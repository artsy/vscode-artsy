
import * as types from "./vscode_marketplace_types"

import { readFileSync, writeFileSync } from "fs"
import * as cheerio from "cheerio"
import fetch from "node-fetch"

const packageJSON =JSON.parse( readFileSync("package.json").toString() )
const depIDs = packageJSON.extensionDependencies
const oneDepID = [depIDs[0]]

const deps: Array<types.RootObject> = oneDepID.map(async (dep) => {
  // Pull out a JSON representation from the HTML 
  const url = `https://marketplace.visualstudio.com/items?itemName=${dep}`
  const response = await fetch(url, {})
  const data = await response.text()
  const dom = await cheerio.load(data)
  // It exists inside this DIV
  const jsonRepresentationInHTML = await dom("div.vss-item-data")

  // The interesting bits are in here
  const x = JSON.parse(jsonRepresentationInHTML.text())
  console.log(jsonRepresentationInHTML.text())
  return x
});


console.log(deps[0])

// const readme = readFileSync("README.md").toString()
// const above = readme.split("<!-- Extensions Start -->")[0]
// const below = readme.split("<!-- Extensions End -->")[1]

// const middle = "OK"
// writeFileSync("README.md", above + "\n<!-- Extensions Start -->\n" + middle + "\n<!-- Extensions End -->\n" + below)
