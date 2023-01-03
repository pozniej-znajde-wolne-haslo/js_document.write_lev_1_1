
/*  Schreibe mithilfe des Befehls document.write() folgendes in dein HTML-Dokument:

h1 - Hello World!
p - Have a nice day!
Deklariere die Variable myText und fülle sie mit “Hello again”. Schreibe die Variable anschließend in dein Dokument.
Deklariere Variablen: vorname, nachname und fülle sie mit deinem Namen. Schreibe sie anschließend in dein Dokument.
 */

document.write("<h1>Hello World!</h1> <p>Have a nice day!</p>")

let myText = "Hello again. <br><br>"
document.write(myText)


/* === ODER ===

        let myText = "Hello again."
        document.write(myText + "<br><br>")
 */

let vorname = "ania"
let nachname = "rafeld"
document.write("Name: " + vorname + "<br>" + "Nachname: " + nachname)


/*  ===== SEITEN mit INFOS =====

https://developer.mozilla.org/en-US/docs/Web/API/Document/write

https://www.w3schools.com/jsref/met_doc_write.asp

*/


