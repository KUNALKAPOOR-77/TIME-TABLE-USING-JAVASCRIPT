let table = document.createElement("table")





let tr1 = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")
let th5 = document.createElement("th")
let th6 = document.createElement("th")
let th7 = document.createElement("th")
let th8 = document.createElement("th")
let th9 = document.createElement("th")

let tr2 = document.createElement("tr")
let th10 = document.createElement("th")
let td1= document.createElement("td")
let td2= document.createElement("td")
let td3= document.createElement("td")
let th17 = document.createElement("th")
let td4= document.createElement("td")
let td5= document.createElement("td")

let tr3 = document.createElement("tr")
let th11 = document.createElement("th")
let td6= document.createElement("td")
let td7= document.createElement("td")
let td8= document.createElement("td")
let td9= document.createElement("td")
let td10= document.createElement("td")

let tr4 = document.createElement("tr")
let th13 = document.createElement("th")
let td11= document.createElement("td")
let td12= document.createElement("td")
let td13= document.createElement("td")
let td14= document.createElement("td")
let td15= document.createElement("td")

let tr5 = document.createElement("tr")
let th14 = document.createElement("th")
let td16= document.createElement("td")
let td17= document.createElement("td")
let td18= document.createElement("td")
let td19= document.createElement("td")
let td20= document.createElement("td")

let tr6 = document.createElement("tr")
let th15 = document.createElement("th")
let td21= document.createElement("td")
let td22= document.createElement("td")
let td23= document.createElement("td")
let td24= document.createElement("td")
let td25= document.createElement("td")


let tr7 = document.createElement("tr")
let th16 = document.createElement("th")
let td26= document.createElement("td")
let td27= document.createElement("td")
let td28= document.createElement("td")
let td29= document.createElement("td")
let td30= document.createElement("td")

th1.innerText="Day/ Period"
th2.innerText="9:30-10:30"
th3.innerText="9:30-10:30"
th4.innerText="9:30-10:30"
th5.innerText="9:30-10:30"
th6.innerText="9:30-10:30"
th7.innerText="9:30-10:30"
th8.innerText="9:30-10:30"
th9.innerText="9:30-10:30"


th10.innerText="Monday"
td1.innerText="ENG"
td2.innerText="MAT"
td3.innerText="CHE"
th17.innerText="LUNCH"
td4.innerText="LAB"
td5.innerText="PLAY"

th17.rowSpan="6"
td4.colSpan="3"

 
th11.innerText="Tuesday"
td6.innerText="LAB"
td7.innerText="ENG"
td8.innerText="CHE"
td9.innerText="MATH"
td10.innerText="SPORTS"

td6.colSpan="3"

th13.innerText="wednesday"
td11.innerText="MATH"
td12.innerText="PHY"
td13.innerText="CHEM"
td14.innerText="ENGLISH"
td15.innerText="LIBRARY"

td15.colSpan="3"


th14.innerText="Thursday"
td16.innerText="PHY"
td17.innerText="ENG"
td18.innerText="CHE"
td19.innerText="LAB"
td20.innerText="MATH"

td19.colSpan="3"


th15.innerText="Friday"
td21.innerText="LAB"
td22.innerText="MATH"
td23.innerText="CHEM"
td24.innerText="ENG"
td25.innerText="PHY"

td21.colSpan="3"


th16.innerText="Saturday"
td26.innerText="ENG"
td27.innerText="CHE"
td28.innerText="MATH"
td29.innerText="SEMINAR"
td30.innerText="SPORTS"

td29.colSpan="3"



table.appendChild(tr1)
tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
tr1.appendChild(th4)
tr1.appendChild(th5)
tr1.appendChild(th6)
tr1.appendChild(th7)
tr1.appendChild(th8)
tr1.appendChild(th9)

table.appendChild(tr2)
tr2.appendChild(th10)
tr2.appendChild(td1)
tr2.appendChild(td2)
tr2.appendChild(td3)
tr2.appendChild(th17)
tr2.appendChild(td4)
tr2.appendChild(td5)

table.appendChild(tr3)
tr3.appendChild(th11)
tr3.appendChild(td6)
tr3.appendChild(td7)
tr3.appendChild(td8)
tr3.appendChild(td9)
tr3.appendChild(td10)

table.appendChild(tr4)
tr4.appendChild(th13)
tr4.appendChild(td11)
tr4.appendChild(td12)
tr4.appendChild(td13)
tr4.appendChild(td14)
tr4.appendChild(td15)

table.appendChild(tr5)
tr5.appendChild(th14)
tr5.appendChild(td16)
tr5.appendChild(td17)
tr5.appendChild(td18)
tr5.appendChild(td19)
tr5.appendChild(td20)

table.appendChild(tr6)
tr6.appendChild(th15)
tr6.appendChild(td21)
tr6.appendChild(td22)
tr6.appendChild(td23)
tr6.appendChild(td24)
tr6.appendChild(td25)


table.appendChild(tr7)
tr7.appendChild(th16)
tr7.appendChild(td26)
tr7.appendChild(td27)
tr7.appendChild(td28)
tr7.appendChild(td29)
tr7.appendChild(td30)

document.body.append(table)


table.border="2"
table.cellPadding="20"
table.cellSpacing="0"