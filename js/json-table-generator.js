/*Contains data used to generate table*/
var model = {
  data : [ { "company_name":"Medline Industries, Inc.", "product":"Benzalkonium Chloride", "price":"481.63" }, { "company_name":"PD-Rx Pharmaceuticals, Inc.", "product":"Alprazolam", "price":"167.62", "fda_date_approved":"02/12/2015" }, { "company_name":"West-ward Pharmaceutical Corp.", "product":"Flumazenil", "fda_date_approved":"23/04/2015" }, { "company_name":"HyVee Inc", "product":"Aspirin", "price":"218.32", "fda_date_approved":"26/07/2015" }, { "company_name":"Aurobindo Pharma Limited", "product":"carisoprodol", "price":"375.58", "fda_date_approved":"28/11/2014" }, { "company_name":"Apotex Corp", "product":"Risperidone", "price":"213.49", "fda_date_approved":"06/11/2015" }, { "company_name":"Unit Dose Services", "product":"Lovastatin", "price":"169.14", "fda_date_approved":"14/09/2015" }, { "company_name":"Jubilant HollisterStier LLC", "product":"Dog Hair Canis spp.", "fda_date_approved":"31/12/2014" }, { "company_name":"AAA Pharmaceutical, Inc.", "product":"ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE", "price":"183.33", "fda_date_approved":"13/12/2015" }, { "company_name":"AKG Innovations LLC", "product":"AVOBENZONE, OCTINOXATE, OCTISALATE", "fda_date_approved":"22/01/2015" }, { "company_name":"hikma Farmaceutica", "product":"Oxytocin" }, { "company_name":"prime Packaging, Inc.", "product":"Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone", "price":"208.17" }, { "company_name":"Davion, Inc", "product":"Triclosan", "price":"80.30", "fda_date_approved":"13/12/2014" }, { "company_name":"CARDINAL HEALTH", "product":"CARBOXYMETHYLCELLULOSE SODIUM, GLYCERIN", "price":"330.22", "fda_date_approved":"11/08/2015" }, { "company_name":"Amgen Inc", "product":"darbepoetin alfa", "price":"332.28", "fda_date_approved":"01/07/2015" }, { "company_name":"Autumn Harp, Inc.", "product":"Salicylic Acid", "price":"34.43", "fda_date_approved":"25/03/2015" }, { "company_name":"American Regent, Inc.", "product":"sodium phosphate, monobasic, monohydrate and sodium phosphate, dibasic anhydrous", "price":"11.60" }, { "company_name":"J. A. Cosmetics U.S. INC", "product":"TITANIUM DIOXIDE", "price":"130.90", "fda_date_approved":"01/12/2015" }, { "company_name":"NATURE REPUBLIC CO., LTD.", "product":"Titanium Dioxide, OCTINOXATE, Zinc Oxide", "price":"124.48" }, { "company_name":"L. Perrigo Company", "product":"Dextromethorphan Hydrobromide, Guaifenesin", "price":"73.09", "fda_date_approved":"03/02/2016" } ],
  data1 : [{ "first_name": "Billy", "last_name": "Campbell", "phone": "62-(500)527-5325" }, { "first_name": "Jonathan", "last_name": "Black", "country": "Russia", "phone": "7-(729)811-4597" }, { "first_name": "cheryl", "last_name": "Harvey", "country": "Indonesia", "phone": "62-(825)454-3810" }, { "first_name": "Cynthia", "last_name": "Cooper" }, { "first_name": "Thomas", "last_name": "Stevens", "phone": "86-(527)535-8464" }, { "first_name": "Jane", "last_name": "Chavez", "country": "Netherlands" }, { "first_name": "bobby", "last_name": "Price", "country": "China", "phone": "86-(898)723-6749" }, { "first_name": "Steve", "last_name": "Hansen", "phone": "93-(362)494-5552" }, { "first_name": "Alan", "last_name": "Cruz", "country": "Philippines", "phone": "63-(617)248-8832" }, { "first_name": "Dennis", "last_name": "Baker", "country": "Iran", "phone": "98-(436)329-3723" }, { "first_name": "Ernest", "last_name": "Bishop", "phone": "86-(566)429-1138" }, { "first_name": "Russell", "last_name": "Meyer", "phone": "62-(687)827-4302" }, { "first_name": "Ryan", "last_name": "Mendoza", "country": "Poland", "phone": "48-(537)109-0373" }, { "first_name": "Maria", "last_name": "Greene", "phone": "92-(831)367-8049" }, { "first_name": "Elizabeth", "last_name": "Moore", "country": "Philippines", "phone": "63-(694)844-9255" }, { "first_name": "Ronald", "last_name": "kim", "phone": "46-(339)931-9221" }, { "first_name": "Samuel", "last_name": "Jacobs", "country": "Russia", "phone": "7-(936)156-5229" }, { "first_name": "Fred", "last_name": "Ross", "phone": "55-(594)481-7354" }, { "first_name": "Andrew", "last_name": "Burns", "country": "Portugal", "phone": "351-(174)443-8706" }, { "first_name": "Robert", "last_name": "Frazier", "country": "Somalia" }]
}

/*Controls view*/
var view = {
  /*Initialise table, variables, data*/
  init: function(selector, data) {
    this.data = data;    //table datas stored to this variable
    this.table = document.querySelector(selector);
    this.headers = view.generateHeadersList(this.data); //headers of table extracted from data and stored in this array
    this.renderNewTable(this.data);
  },

  /*Render the viewing table according to updated data*/
  renderNewTable: function(data) {
    this.table.innerHTML = '';
    this.headerRow = document.createElement('tr');
    this.headerRow.id = 'header-row';
    this.table.append(this.headerRow);
    this.renderHeaders(this.headers);
    this.generateRows(data);
    services.makeSortable(document.querySelectorAll('th'));
  },

  /*Sort by ascending(1) or descending(-1) order, default is asc*/
  order: {},

  /*Generate the list of headers from given array of objects*/
  generateHeadersList: function(data) {
    var resultArray = []
    data.forEach((entry) => {
      for (key in entry) {
        if (!~resultArray.indexOf(key)) {
          this.order[key] = 1;
          resultArray.push(key);
        }
      }
    });
    return resultArray;
  },

  /*Render the generated headers list to the table*/
  renderHeaders: function(headers) {
    headers.forEach((header) => {
      const newHead = document.createElement('th');
      newHead.id = header;
      newHead.innerText = header;
      newHead.setAttribute('data-order', this.order[header]);
      this.headerRow.appendChild(newHead);
    });
  },

  /*Generate each rows from content and according to its header*/
  generateRows: function(data) {
    this.tbody = document.createElement('tbody');
    this.table.appendChild(this.tbody);
    data.forEach((entry) => {
      const newRow = document.createElement('tr');
      this.headers.forEach((header) => {
        this.renderRows(entry, header, newRow);
      })
    });
  },
  
  /*Render the rows to the table*/
  renderRows: function(entry, header, newRow) {
    const td = document.createElement('td');
    td.innerText = entry[header] != undefined ? entry[header] : '--';
    newRow.appendChild(td);
    this.tbody.appendChild(newRow);
  }
}

/*Services for table elements*/
var services = {
  /*add click listener to each header to add sort function*/
  makeSortable: function(tHeads) {
    tHeads.forEach((head) => {
      head.addEventListener('click', (e) => {
        const order = head.getAttribute('data-order');
        this.changeOrder.call(view, head.id, order);
        sortServices.sortColumn.call(view, head.id, order);
      });
    });
  },
  
  /*Change order of heading if it is sorted*/
  changeOrder: function(key){
    Object.keys(this.order).forEach((title) => {
      if(title == key){
        this.order[title] = (this.order[title] == '1') ? -1 : 1;
      } else {
        this.order[title] = 1;
      }
    });
  }
  
}

/*Service methods related to sorting of table and datas*/
var sortServices = {
  
  /*sort the corresponding column according to clicked on header*/
  sortColumn: function(key, order) {
    this.data.sort(sortServices.sortBy(key, order));
    this.renderNewTable(this.data);
  },

  /*Sorting the datas in array , either in ascending or descending order*/
  sortBy: function(property, order) {
    return function(a, b) {
      let result = 0;
      const one = a[property] ? a[property].toString() : '--',
            two = b[property] ? b[property].toString() : '--';

      const dateRegex = new RegExp(/\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/),
            numRegex = new RegExp(/\d+\.*\d+/);

      if (dateRegex.test(one) && dateRegex.test(two)) {
        result = sortServices.sortDates(one, two);
      } else if (numRegex.test(one) && numRegex.test(two)) {
        var n1 = parseFloat(one),
            n2 = parseFloat(two);
        result = (n1 < n2) ? -1 : (n1 > n2) ? 1 : 0;
      } else {
        const str1 = one.toLowerCase(),
          str2 = two.toLowerCase()
        result = (str1 < str2) ? -1 : (str1 > str2) ? 1 : 0;
      }
      return result * order;
    }
  },

  /*Compare function for sorting dates*/
  sortDates: function(d1, d2) {
    let dateComponent = d1.split('/');
    var d1 = Number(dateComponent[2] + dateComponent[1] + dateComponent[0]);
    dateComponent = d2.split('/');
    var d2 = Number(dateComponent[2] + dateComponent[1] + dateComponent[0]);
    return (d1 > d2) ? 1 : (d1 < d2) ? -1 : 0;
  }
}

var generateTable = function(selector, data){
  /*Data is passed to tabulate*/
  view.init(selector, data);
}

/*table selector and data to tabulate passed through this method*/
generateTable('#data-table' , model.data);
