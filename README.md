# JSON-HTML-Table-Generator
Generate an html table with sorting functionality from given JSON array of objects. Each headings will be Generated and values tabulated correspondingly

You could add *****json-table-generator.js***** from ***js*** folder to your HTML file.

Then create a table in your html page:

          <!-- This table is used to display data -->
          <table id='your table id'>
              <tr id="header-row"></tr>
          </table>
          
then call function *****generateTable('your table id' , JSON-object-array);*****

This will generate the table.

An example File is included here. You could use //model.data// or //model.data1// for checking.

Unit tested file also included(Test done with Jasmine JS, thanks to them).
