describe("Testing Table-Generator", function() {
	
    it("Check if Headers List contain duplicates", function() {
        expect(hasDuplicates(view.headers)).toEqual(false);
    });

    it("Sort Products Order", function() {
        sortServices.sortColumn.call(view , 'product',1);
        expect(view.data[0].product).toEqual("ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE");
    });

    it("Sort Price Order", function() {
        sortServices.sortColumn.call(view , 'price',-1);
        expect(view.data[0].price).toEqual("481.63");
    });

    it("Sort Company Name Order", function() {
        sortServices.sortColumn.call(view , 'company_name',-1);
        expect(view.data[0].company_name).toEqual("West-ward Pharmaceutical Corp.");
    });

});